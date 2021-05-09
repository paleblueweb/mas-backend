import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTables1620430515366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [{
                    name:"id",
                    type:"varchar",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, {
                    name:"name",
                    type:"varchar"
                }, {
                    name:"email",
                    type:"varchar"
                }, {
                    name:"password",
                    type:"varchar"
                }, {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                }
                ]
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }


}
