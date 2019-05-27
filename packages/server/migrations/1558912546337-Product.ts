import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class Product1558912546337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'int',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'productStatusId',
            type: 'int',
          },
          {
            name: 'stock',
            type: 'int',
          },
          {
            name: 'createdAt',
            type: 'date',
          },
          {
            name: 'updatedAt',
            type: 'date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('product');
  }
}
