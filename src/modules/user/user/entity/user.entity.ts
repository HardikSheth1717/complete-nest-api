import { BeforeInsert, Column, Entity } from "typeorm";
import { hashSync, genSaltSync } from 'bcrypt';

@Entity()
export class User {
    @Column({
        type: 'int',
        comment: 'PK of the table.',
        generated: 'increment',
        primary: true,
        nullable: false,
        unique: true
    })
    UserId: number;

    @Column({
        type: 'varchar',
        length: 100,
        comment: 'First name of the user.',
        nullable: false
    })
    FirstName: string;

    @Column({
        type: 'varchar',
        length: 100,
        comment: 'Last name of the user.',
        nullable: false
    })
    LastName: string;

    @Column({
        type: 'varchar',
        length: 10,
        comment: 'Unique Mobile to login into the system.',
        nullable: false,
        unique: true
    })
    Mobile: string;

    @Column({
        type: 'varchar',
        length: 200,
        comment: 'Unique email address to login into the system.',
        nullable: false,
        unique: true
    })
    Email: string;

    @Column({
        type: 'varbinary',
        length: 128,
        comment: 'Password.',
        nullable: false
    })
    Password: string;

    @Column({
        type: 'bit',
        comment: 'User is active or not.',
        nullable: false
    })
    IsActive: boolean;

    @Column({
        type: 'varchar',
        length: 500,
        comment: 'Profile image path.',
        nullable: true
    })
    ProfileImage: string;

    @Column({
        type: 'bit',
        comment: 'User is system generated or not.',
        nullable: false
    })
    IsSystem: boolean;

    @Column({
        type: 'int',
        comment: 'User id of a user who created the record.',
        nullable: false
    })
    CreatedBy: number;
    
    @Column({
        type: 'datetime',
        comment: 'Date and time when the record is created.',
        nullable: false
    })
    CreatedDate: Date;
    
    @Column({
        type: 'int',
        comment: 'User id of a user who modified the record.',
        nullable: true
    })
    ModifiedBy: number;
    
    @Column({
        type: 'datetime',
        comment: 'Date and time when the record is modified.',
        nullable: true
    })
    ModifiedDate: Date;
    
    @Column({
        type: 'int',
        comment: 'Company id from which the record belongs to.',
        nullable: false
    })
    CompanyId: number;

    @BeforeInsert()
    async hashPassword() {
        this.Password = hashSync(this.Password, genSaltSync(10));
    }
}