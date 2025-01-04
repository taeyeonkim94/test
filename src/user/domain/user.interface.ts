import { UserProperties } from '../type/user.types';

export interface IUser {
  validatePassword(password: string): Promise<boolean>;
  update(data: Partial<UserProperties>): void;
  get(): Omit<UserProperties, 'password'>;
}
