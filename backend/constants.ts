interface Constants {
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  USER_ROLE: string[];
  JWT_SECRET: string;
}
const CONSTANTS: Constants = {
  DB_HOST: "localhost",
  DB_PORT: 27017,
  DB_NAME: "messenger",
  USER_ROLE: ["customer", "admin"],
  JWT_SECRET:'aB3dE5fG7hJ9kL1mN3oP5qR7sT9uV1wX3yZ5aB7cD9eF1gH3iJ7kL9mN1oP3'
};
export default CONSTANTS;
