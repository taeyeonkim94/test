import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ExampleModule from './example/example.module';
import UserModule from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './guard/login.guard';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ExampleModule, UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    }
  ]
})
export default class AppModule {}
