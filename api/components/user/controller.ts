const TABLE = "user";

export const usersController = function (injectedStore: any) {
  const store = injectedStore || require("../../../store/dummy");

  const list = function () {
    return store.list(TABLE);
  };

  const get = function (id: string) {
    return store.get(TABLE, id);
  };

  const upsert = function (data: any) {
    const user = {
      name: data.name,
      id: data.id,
    };

    if (data.id) {
      user.id = data.id;
    }

    return store.upsert(TABLE, user);
  };

  const remove = function (id: string) {
    return store.remove(TABLE, id);
  };

  return {
    list,
    get,
    upsert,
    remove,
  };
};
