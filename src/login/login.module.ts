import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Login } from './login.entity';
import { UserModule } from 'src/user/user.module';
import { Users } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login, Users]), UserModule],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService], // If you need to use LoginService in other modules
})
export class LoginModule {}