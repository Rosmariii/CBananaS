import { AppDataSource } from '@src/db/db';
import { Session } from '@src/session/domain/entities/session.entities';
import { User } from '@src/user/domain/entities/user.entity';

export const createSession = async (
  userId: string,
  status: string,
): Promise<Session> => {
  const sessionRepository = AppDataSource.getRepository(Session);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  if (status === 'open') {
    const session = new Session();
    session.start_session = new Date();
    session.user = user as User;
    return sessionRepository.save(session);
  } else {
    const endSession = await sessionRepository
      .createQueryBuilder('session')
      .leftJoinAndSelect('session.user', 'user')
      .where('session.userId = :userId', { userId: user.id })
      .andWhere('session.end_session IS NULL')
      .orderBy('session.start_session', 'DESC')
      .getOne();
    const result = await sessionRepository.update(
      { id: endSession!.id },
      { end_session: new Date() },
    );
    return result.raw;
  }
};
