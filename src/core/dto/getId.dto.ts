import { IsDefined, IsInt, IsNumber } from "class-validator";

export class GetIdDto {
    @IsNumber()
    @IsDefined()
    @IsInt()
    id: number;
}