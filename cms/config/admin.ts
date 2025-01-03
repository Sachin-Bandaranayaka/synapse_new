interface AdminConfig {
  env: (key: string) => string;
}

export default ({ env }: AdminConfig) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
});
