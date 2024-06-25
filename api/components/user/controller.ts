import { list, get, upsert, remove } from "../../../store/dummy";

const TABLE = "user";

export function listUsers() {
  return list(TABLE);
}
