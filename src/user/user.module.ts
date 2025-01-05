import { Module } from '@nestjs/common';
import PrismaModule from 'prisma/prisma.module';
import UserController from './user.controller';
import UserService from './user.service';
import UserRepository from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET
    })
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtStrategy],
  exports: []
})
export default class UserModule {}
