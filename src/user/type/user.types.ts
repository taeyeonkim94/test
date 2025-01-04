export interface UserProperties {
  id?: string;
  role: 'DREAMER' | 'MAKER';
  nickName: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}
