const db: Record<string, any> = {
  user: [
    { id: "1", name: "Carlos" },
    { id: "2", name: "Juan" },
  ],
};

export interface Store {
  list(table: string): Promise<any[]>;
  get(table: string, id: string): any | null;
  upsert(table: string, data: Record<string, any>): void;
  remove(table: string, id: string): void;
}

async function list(table: string): Promise<any[]> {
  return db[table];
}
function get(table: string, id: string) {
  return db[table].find((item: Record<string, any>) => item.id === id) || null;
}
function upsert(table: string, data: Record<string, any>) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
}
function remove(table: string, id: string) {
  db[table] = db[table].filter((item: Record<string, any>) => item.id !== id);
}

export const store: Store = {
  list,
  get,
  upsert,
  remove,
};
