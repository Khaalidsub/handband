
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {Document} from 'mongoose'
import * as mongoose from "mongoose"

export type UserDocument = Document & User
@Schema({timestamps:true})
export class User {
    id:string;
    @Prop()
    name: string


}

export const UserSchema = SchemaFactory.createForClass(User)