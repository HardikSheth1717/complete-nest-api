import {MigrationInterface, QueryRunner} from "typeorm";

export class first1632992854441 implements MigrationInterface {
    name = 'first1632992854441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`semaphoresecurity\`.\`user\` (\`UserId\` int NOT NULL AUTO_INCREMENT COMMENT 'PK of the table.', \`FirstName\` varchar(100) NOT NULL COMMENT 'First name of the user.', \`LastName\` varchar(100) NOT NULL COMMENT 'Last name of the user.', \`Mobile\` varchar(10) NOT NULL COMMENT 'Unique Mobile to login into the system.', \`Email\` varchar(200) NOT NULL COMMENT 'Unique email address to login into the system.', \`Password\` varbinary(128) NOT NULL COMMENT 'Password.', \`IsActive\` bit NOT NULL COMMENT 'User is active or not.', \`ProfileImage\` varchar(500) NULL COMMENT 'Profile image path.', \`IsSystem\` bit NOT NULL COMMENT 'User is system generated or not.', \`CreatedBy\` int NOT NULL COMMENT 'User id of a user who created the record.', \`CreatedDate\` datetime NOT NULL COMMENT 'Date and time when the record is created.', \`ModifiedBy\` int NULL COMMENT 'User id of a user who modified the record.', \`ModifiedDate\` datetime NULL COMMENT 'Date and time when the record is modified.', \`CompanyId\` int NOT NULL COMMENT 'Company id from which the record belongs to.', UNIQUE INDEX \`IDX_825656fb054dbb121350ba0d9d\` (\`UserId\`), UNIQUE INDEX \`IDX_88e3ee018dc1e08c8534d6562f\` (\`Mobile\`), UNIQUE INDEX \`IDX_b7eee57d84fb7ed872e660197f\` (\`Email\`), PRIMARY KEY (\`UserId\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b7eee57d84fb7ed872e660197f\` ON \`semaphoresecurity\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_88e3ee018dc1e08c8534d6562f\` ON \`semaphoresecurity\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_825656fb054dbb121350ba0d9d\` ON \`semaphoresecurity\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`semaphoresecurity\`.\`user\``);
    }

}
