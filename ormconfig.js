const path = require('path');

const extensionFiles = process.env.NODE_ENV === 'production' ? '/*.js' : '/*.ts';

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: [`${path.join(__dirname, '**/database/migrations', extensionFiles)}`],
  entities: [`${path.join(__dirname, '**/database/entities', extensionFiles)}`],
  cli: {
    migrationsDir: [
      'src/database/migration',
    ],
    entitiesDir: 'src/database/entities',
  },
};
