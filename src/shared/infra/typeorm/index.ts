import Nft from '@modules/asset/infra/typeorm/entities/Nft';
import { DataSource } from 'typeorm';

import Assets from '../../../modules/asset/infra/typeorm/entities/Assets';

export const AppDataSource = new DataSource({
  synchronize: true, // Note: using sync only to make easy to run app on guest PCs.
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  entities: [Assets, Nft],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => console.log(error));
