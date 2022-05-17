// Agradecimento Lenny - turma 16A.

import { sign, Secret } from 'jsonwebtoken';

const jwtConfig = { expiresIn: '7d' };
const secretToken = 'senhaunica123';

const generateToken = (payload = {}): Secret => (
  sign({ data: payload }, secretToken, jwtConfig)
);

export default generateToken;