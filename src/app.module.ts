import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: 
  [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '1234',
      database: process.env.DB_NAME || 'demo',
      autoLoadEntities: true,
      synchronize: true,  // Use only in development
    }),
    LoginModule, 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
