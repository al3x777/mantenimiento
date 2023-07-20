import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TipoUsuario } from 'src/utlis/enums/usuarios.enum';



@Schema()
export class User {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop()
  telefono: number;

  @Prop()
  premium: boolean;

  @Prop()
  tipoUsuario: TipoUsuario;

  @Prop({type:'object'})
  _id: Object;

}

export type UsersDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);