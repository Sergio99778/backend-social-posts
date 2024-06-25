const db: Record<string, any> = {
  user: [
    { id: "1", name: "Carlos" },
    { id: "2", name: "Juan" },
  ],
};

export function list(table: string): any[] {
  return db[table];
}
export function get(table: string, id: string) {
  return db[table].find((item: Record<string, any>) => item.id === id) || null;
}
export function upsert(table: string, data: Record<string, any>) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
}
export function remove(table: string, id: string) {
  db[table] = db[table].filter((item: Record<string, any>) => item.id !== id);
}
