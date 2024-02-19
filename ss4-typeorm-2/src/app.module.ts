import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './modules/profile/profile.module';
import  config  from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
