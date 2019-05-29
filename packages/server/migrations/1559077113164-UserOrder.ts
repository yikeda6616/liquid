import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserOrder1559077113164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user_order',
        columns: [
          {
            name: 'uid',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'oid',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'price',
            type: 'int',
          },
          {
            name: 'userOrderStatus',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'datetime',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user_order');
  }
}
