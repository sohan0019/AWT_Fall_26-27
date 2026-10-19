import { IsIn, IsInt, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string="";

  @IsString()
  @IsNotEmpty()
  category: string="";

  @IsNumber()
  @IsNotEmpty()
  price: number=0;

  @IsInt()
  @IsNotEmpty()
  quantity: number=0;
}

export class UpdateProductDto {
  @IsNotEmpty()
  name: string="";

  @IsNotEmpty()
  category: string="";

  @IsOptional()
  @IsNumber()
  price: number=0;

  @IsOptional()
  @IsInt()
  quantity: number=0;
}