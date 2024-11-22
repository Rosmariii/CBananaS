import { UserRepository } from '@src/user/infrastructure/repository/user.repository';
import { Request, Response } from 'express';

const userRepository = new UserRepository();

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, dni } = req.body;

  if (!name || !dni) {
    res.status(400).json({ message: 'El nombre y el DNI son obligatorios' });
    return;
  }

  try {
    await userRepository.create(name, dni);

    res.status(201).json({ message: 'Usuario creado' });
  } catch (error) {
    console.error('Error al crear el usuario:', error);

    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};
