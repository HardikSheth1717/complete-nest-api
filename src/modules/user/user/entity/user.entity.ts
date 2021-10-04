import { BeforeInsert, Column, Entity } from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';

@Entity()
export class User {
  @Column({
    name: 'UserId',
    type: 'int',
    comment: 'PK of the table.',
    generated: 'increment',
    primary: true,
    nullable: false,
    unique: true,
  })
  userId: number;

  @Column({
    name: 'FirstName',
    type: 'varchar',
    length: 100,
    comment: 'First name of the user.',
    nullable: false,
  })
  firstName: string;

  @Column({
    name: 'LastName',
    type: 'varchar',
    length: 100,
    comment: 'Last name of the user.',
    nullable: false,
  })
  lastName: string;

  @Column({
    name: 'Mobile',
    type: 'varchar',
    length: 10,
    comment: 'Unique Mobile to login into the system.',
    nullable: false,
    unique: true,
  })
  mobile: string;

  @Column({
    name: 'Email',
    type: 'varchar',
    length: 200,
    comment: 'Unique email address to login into the system.',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'Password',
    type: 'varbinary',
    length: 128,
    comment: 'Password.',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'IsActive',
    type: 'bit',
    comment: 'User is active or not.',
    nullable: false,
  })
  isActive: boolean;

  @Column({
    name: 'ProfileImage',
    type: 'varchar',
    length: 500,
    comment: 'Profile image path.',
    nullable: true,
  })
  profileImage: string;

  @Column({
    name: 'IsSystem',
    type: 'bit',
    comment: 'User is system generated or not.',
    nullable: false,
  })
  isSystem: boolean;

  @Column({
    name: 'CreatedBy',
    type: 'int',
    comment: 'User id of a user who created the record.',
    nullable: false,
  })
  createdBy: number;

  @Column({
    name: 'CreatedDate',
    type: 'datetime',
    comment: 'Date and time when the record is created.',
    nullable: false,
  })
  createdDate: Date;

  @Column({
    name: 'ModifiedBy',
    type: 'int',
    comment: 'User id of a user who modified the record.',
    nullable: true,
  })
  modifiedBy: number;

  @Column({
    name: 'ModifiedDate',
    type: 'datetime',
    comment: 'Date and time when the record is modified.',
    nullable: true,
  })
  modifiedDate: Date;

  @Column({
    name: 'CompanyId',
    type: 'int',
    comment: 'Company id from which the record belongs to.',
    nullable: false,
  })
  companyId: number;

  @BeforeInsert()
  async hashPassword() {
    this.password = hashSync(this.password, genSaltSync(10));
  }
}
