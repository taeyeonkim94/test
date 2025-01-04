import { DreamerProfileProperties, MakerProfileProperties } from '../type/profile.types';

export interface IDreamerProfile {
  update(data: Partial<DreamerProfileProperties>): void;
  get(): Partial<DreamerProfileProperties>;
}

export interface IMakerProfile {
  update(data: Partial<MakerProfileProperties>): void;
  get(): Partial<MakerProfileProperties>;
}
