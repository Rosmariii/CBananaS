import { AppDataSource } from '@src/db/db';
import { Session } from '@src/session/domain/entities/session.entities';
import { User } from '@src/user/domain/entities/user.entity';
import { MoreThanOrEqual } from 'node_modules/typeorm/index';

export const bonus = async (user) => {
  const sessionRepository = AppDataSource.getRepository(Session);
  const userRepository = AppDataSource.getRepository(User);
  let bonusTime = 0;
  await userRepository
    .createQueryBuilder()
    .update(User)
    .set({ bonus_minutes: bonusTime })
    .where('id = :id', { id: user.id })
    .execute();

  const now = new Date();
  const seventDayAgo = new Date();
  seventDayAgo.setDate(now.getDate() - 7);
  const lastSessions = await sessionRepository.find({
    where: {
      user: { dni: user.dni },
      start_session: MoreThanOrEqual(seventDayAgo),
    },
    order: {
      start_session: 'DESC',
    },
  });

  groupTwo(lastSessions).forEach((element: Array<Session>) => {
    if (element.length === 2) {
      const [session1, session2] = element;
      const calculateSession1 = isGreaterThanTwoHours(
        session1.start_session,
        session1.end_session,
      );
      const calculateSession2 = isGreaterThanTwoHours(
        session2.start_session,
        session2.end_session,
      );
      if (calculateSession1 == false && calculateSession2 == false) {
        bonusTime += 30;
      } else {
        if (calculateSession1 == true) {
          bonusTime -= 30;
        }
        if (calculateSession2 == true) {
          bonusTime -= 30;
        }
      }
    }
  });

  await userRepository
    .createQueryBuilder()
    .update(User)
    .set({ bonus_minutes: bonusTime })
    .where('id = :id', { id: user.id })
    .execute();
};

function groupTwo(arr) {
  return arr.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      acc.push([item]);
    } else {
      acc[acc.length - 1].push(item);
    }
    return acc;
  }, []);
}

function isGreaterThanTwoHours(date1, date2) {
  const millisecondsInTwoHours = 2 * 60 * 60 * 1000;
  const difference = Math.abs(date1.getTime() - date2.getTime());
  return difference > millisecondsInTwoHours;
}
