import { Column } from "typeorm";

export class CommonEntity {
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
}