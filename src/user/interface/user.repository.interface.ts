import { DreamerProfile, MakerProfile } from '../domain/profile.domain';
import User from '../domain/user.domain';
import { DreamerProfileProperties, MakerProfileProperties } from '../type/profile.types';
import { UserProperties } from '../type/user.types';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  findByNickName(nickName: string): Promise<User>;
  findById(id: string): Promise<User>;
  create(user: Partial<UserProperties>): Promise<UserProperties>;
  update(id: string, data: Partial<UserProperties>): Promise<null>;
  createDreamer(user: Partial<DreamerProfileProperties>): Promise<DreamerProfileProperties>;
  createMaker(user: Partial<MakerProfileProperties>): Promise<MakerProfileProperties>;
  findDreamerProfile(userId: string): Promise<DreamerProfile>;
  findMakerProfile(userId: string): Promise<MakerProfile>;
  updateDreamerProfile(userId: string, data: Partial<DreamerProfileProperties>): Promise<null>;
  updateMakerProfile(userId: string, data: Partial<MakerProfileProperties>): Promise<null>;
}
