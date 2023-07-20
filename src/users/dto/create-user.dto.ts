import { TipoUsuario } from "src/utlis/enums/usuarios.enum";
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {


telefono:number;
premium:boolean;
tipoUsuario:TipoUsuario;

@ApiProperty({
    example: 'Alejandro',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({
    example: 'Martel',
  })
  @IsNotEmpty()
  @IsString()
  apellido: string;

 

}
