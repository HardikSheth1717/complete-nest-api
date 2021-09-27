import { 
    Min,
    Length,
    IsEmail,
    IsBoolean,
    IsInt,
    IsDefined,
    IsOptional,
    IsPositive,
    IsDateString
} from 'class-validator';

export class UserDto {
    @IsDefined()
    @IsInt()
    @Min(0)
    UserId: number;

    @IsDefined()
    @Length(3, 100)
    FirstName: string;
    
    @IsDefined()
    @Length(3, 100)
    LastName: string;
    
    @IsDefined()
    @Length(10, 10)
    Mobile: string;
    
    @IsDefined()
    @IsEmail({}, {
        message: "Email is not valid."
    })
    @Length(5, 200)
    Email: string;
    
    @IsDefined()
    @Length(8, 20)
    Password: string;

    @IsDefined()
    @IsBoolean()
    IsActive: boolean;
    
    @IsOptional()
    ProfileImage: string;
    
    @IsDefined()
    @IsBoolean()
    IsSystem: boolean;
    
    @IsDefined()
    @IsInt()
    @IsPositive()
    CreatedBy: number;
    
    @IsDefined()
    @IsDateString()
    CreatedDate: Date;
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    ModifiedBy: number;
    
    @IsOptional()
    @IsDateString()
    ModifiedDate: Date;
    
    @IsDefined()
    @IsInt()
    @IsPositive()
    CompanyId: number;
}