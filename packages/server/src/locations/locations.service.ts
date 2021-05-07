import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import {Location,LocationDocument} from './entities/location.entity'

@Injectable()
export class LocationsService {
  constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>) {}
  create(createLocationDto: CreateLocationDto) {
    return new this.locationModel(createLocationDto).save()
  }

  findAll() {
    return this.locationModel.find({}).populate('user')
  }

  findOne(id: string) {
    return this.locationModel.findById(id).populate('user')
  }




}
