import { AppDataSource } from '@src/db/db';
import { User } from '@src/user/domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
  async create(
    name: string,
    dni: number,
  ): Promise<{ message: string; savedUser: User | number }> {
    const userRepository = AppDataSource.getRepository(User);
    const userExists = await userRepository.findOne({ where: { dni: dni } });

    if (userExists) {
      return { message: 'Usuario ya existe', savedUser: userExists.dni };
    }

    const user = new User();
    user.id = uuidv4();
    user.dni = dni;
    user.name = name;
    user.hasActiveScooter = false;

    const savedUser = await AppDataSource.manager.save(user);

    return { message: 'Usuario guardado', savedUser };
  }
}
