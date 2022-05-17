import { Request, Response, NextFunction } from 'express';
import { User } from '../../interfaces/user.interfaces';

function validateUsername(username: string) {
  if (!username) {
    return ({ status: 400, message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return ({ status: 422, message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return ({ status: 422, message: '"username" length must be at least 3 characters long' });
  }
}

function validateClasse(classe: string) {
  if (!classe) {
    return ({ status: 400, message: '"classe" is required' });
  }
  if (typeof classe !== 'string') {
    return ({ status: 422, message: '"classe" must be a string' });
  }
  if (classe.length < 3) {
    return ({ status: 422, message: '"classe" length must be at least 3 characters long' });
  }
}

function validateLevel(level: number) {
  if (level === undefined) {
    return ({ status: 400, message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return ({ status: 422, message: '"level" must be a number' });
  }
  if (level <= 0) {
    return ({ status: 422, message: '"level" must be greater than or equal to 1' });
  }
}

function validatePassword(password: string) {
  if (!password) {
    return ({ status: 400, message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return ({ status: 422, message: '"password" must be a string' });
  }
  if (password.length <= 8) {
    return ({ status: 422, message: '"password" length must be at least 8 characters long' });
  }
}

function validateBody(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body as User;
  let error = validateUsername(username);
  if (error) return res.status(error.status).json({ message: error.message });

  error = validateClasse(classe);
  if (error) return res.status(error.status).json({ message: error.message });

  error = validateLevel(level);
  if (error) return res.status(error.status).json({ message: error.message });

  error = validatePassword(password);
  if (error) return res.status(error.status).json({ message: error.message });

  next();
}

export default validateBody;