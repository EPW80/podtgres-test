import { s as sql } from "../../../chunks/database.js";
async function load() {
  const rows = sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;
  console.log({ rows });
  return { containers: rows };
}
export {
  load
};
