import { AppDataSource } from '@src/db/db';
import { User } from '@src/user/domain/entities/user.entity';
import { Session } from '@src/session/domain/entities/session.entities';
import { createSession } from '@src/common/handlerQuery';
import { bonus } from '@src/session/infrastructure/repository/session.repository';

export class AuthRepository {
  async login(dni: string): Promise<{ message: string }> {
    if (!dni) {
      throw new Error('DNI es requerido');
    }

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ dni });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const sessionRepository = AppDataSource.getRepository(Session);

    const lastSession = await sessionRepository
      .createQueryBuilder('session')
      .leftJoinAndSelect('session.user', 'user')
      .where('session.userId = :userId', { userId: user.id })
      .andWhere('session.end_session IS NULL')
      .orderBy('session.start_session', 'DESC')
      .getOne();
    console.log(lastSession);

    if (lastSession) {
      throw new Error('El usuario ya está logueado');
    }

    createSession(user.id, 'open');

    return { message: 'Login exitoso' };
  }

  async logout(dni: string): Promise<{ message: string }> {
    if (!dni) {
      throw new Error('DNI es requerido');
    }

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ dni });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    createSession(user.id, 'close');

    bonus(user);

    return { message: 'Logout exitoso' };
  }
}
