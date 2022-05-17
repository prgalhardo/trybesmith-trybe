export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface Payload {
  password: string;
}