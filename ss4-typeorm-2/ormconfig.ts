import { Profile } from 'src/modules/profile/database/profile.entity';
import { User } from 'src/modules/user/database/user.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
require('dotenv').config();

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost1',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root1',
  password: process.env.DB_PASSWORD || 'password1',
  database: process.env.DB_NAME || 'nestjs-typeorm1',
  entities: [User, Profile],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
