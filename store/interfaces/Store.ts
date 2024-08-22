export interface Store {
  list(table: string): Promise<any[]>;
  get(table: string, id: string): any | null;
  upsert(table: string, data: Record<string, any>): void;
  remove(table: string, id: string): void;
}
