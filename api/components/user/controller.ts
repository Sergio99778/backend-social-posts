import { Store } from "../../../store/interfaces/Store";

const TABLE = "user";

class UsersController {
  private store: Store;

  constructor(injectedStore: Store) {
    this.store = injectedStore || require("../../../store/dummy");
  }

  list() {
    return this.store.list(TABLE);
  }

  get(id: string) {
    return this.store.get(TABLE, id);
  }

  upsert(data: any) {
    const user = {
      name: data.name,
      id: data.id,
    };

    if (data.id) {
      user.id = data.id;
    }

    return this.store.upsert(TABLE, user);
  }

  remove(id: string) {
    return this.store.remove(TABLE, id);
  }
}

export { UsersController };
