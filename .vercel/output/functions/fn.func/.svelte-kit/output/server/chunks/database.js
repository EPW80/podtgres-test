import postgres from "postgres";
const PGCONNECT = "postgres://postgres:root@localhost:5432/containers?sslmode=require";
const sql = postgres(PGCONNECT, {});
export {
  sql as s
};
