import path from 'path';

interface DatabaseConfig {
  env: (key: string, defaultValue?: string) => string;
}

export default ({ env }: DatabaseConfig) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', '3306'),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env('DATABASE_SSL', 'false') === 'true',
      },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', '5432'),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env('DATABASE_SSL', 'false') === 'true',
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 0 },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client as keyof typeof connections],
      acquireConnectionTimeout: 60000,
    },
  };
};
