import { Request, Response } from 'express';
import { AuthRepository } from '@src/auth/infrastructure/repository/auth.repository';

const authRepository = new AuthRepository();

export const login = async (req: Request, res: Response): Promise<void> => {
  const { dni } = req.body;

  try {
    const result = await authRepository.login(dni);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  const { dni } = req.body;

  try {
    const result = await authRepository.logout(dni);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
