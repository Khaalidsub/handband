import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './entities/location.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Location.name,schema:LocationSchema}

    ])
  ],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
