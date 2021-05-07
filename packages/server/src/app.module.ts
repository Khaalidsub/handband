import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LocationsModule } from './locations/locations.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
  MongooseModule.forRoot('mongodb://mongodb:27017/handband'),
    AuthModule, UsersModule, LocationsModule],
})
export class AppModule {}
