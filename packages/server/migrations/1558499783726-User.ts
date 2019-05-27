import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1558499783726 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}

/*
 * マイグレーション機能:
 * SQLを書くことなくTypeScriptでDB内にテーブルを作成する
 * Data-MapperがTypeScriptをSQLに変換するため
 * 変換元となるTypeScriptで書かれた命令文を、マイグレーションファイルに記載する
 * https://typeorm.io/#/active-record-data-mapper
 */
