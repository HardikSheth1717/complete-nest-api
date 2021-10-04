import {
  Min,
  Length,
  IsEmail,
  IsBoolean,
  IsInt,
  IsDefined,
  IsOptional,
  IsPositive,
  IsDateString,
} from 'class-validator';

export class UserDto {
  @IsDefined()
  @IsInt()
  @Min(0)
  userId: number;

  @IsDefined()
  @Length(3, 100)
  firstName: string;

  @IsDefined()
  @Length(3, 100)
  lastName: string;

  @IsDefined()
  @Length(10, 10)
  mobile: string;

  @IsDefined()
  @IsEmail(
    {},
    {
      message: 'Email is not valid.',
    },
  )
  @Length(5, 200)
  email: string;

  @IsDefined()
  @Length(8, 20)
  password: string;

  @IsDefined()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  profileImage: string;

  @IsDefined()
  @IsBoolean()
  isSystem: boolean;

  @IsDefined()
  @IsInt()
  @IsPositive()
  createdBy: number;

  @IsDefined()
  @IsDateString()
  createdDate: Date;

  @IsOptional()
  @IsInt()
  @IsPositive()
  modifiedBy: number;

  @IsOptional()
  @IsDateString()
  modifiedDate: Date;

  @IsDefined()
  @IsInt()
  @IsPositive()
  companyId: number;
}
