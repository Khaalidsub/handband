import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {Document} from 'mongoose'
import * as mongoose from "mongoose"

export type LocationDocument = Document & Location
@Schema({timestamps:true})
export class Location {
    id:string;
    @Prop()
    longitude: number
    @Prop()
    latitude: number
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: string


    createdAt: Date
    updatedAt: Date
}


export const LocationSchema =  SchemaFactory.createForClass(Location)