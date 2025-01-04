import User from '../domain/user.domain';
import { DreamerProfileProperties, MakerProfileProperties } from '../type/profile.types';
import { UserProperties } from '../type/user.types';

export interface IUserService {
  createUser(data): Promise<null>;
  login(email: string, password: string): Promise<Omit<UserProperties, 'password'>>;
  getUser(userId: string): Promise<Omit<UserProperties, 'password'>>;
  getProfile(role: string, userId: string): Promise<DreamerProfileProperties | MakerProfileProperties>;
  createToken(userId: string, type?: string): string;
  getPayload(refreshToken: string): string;
  updateUser(userId: string, data: Partial<UserProperties>): Promise<Omit<UserProperties, 'password'>>;
  updateDreamerProfile(userId: string, data: Partial<DreamerProfileProperties>): Promise<DreamerProfileProperties>;
  updateMakerProfile(userId: string, data: Partial<MakerProfileProperties>): Promise<MakerProfileProperties>;
}
