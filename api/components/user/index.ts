import { store } from "../../../store/dummy";
import { UsersController } from "./controller";

export const usersControllerStore = new UsersController(store);
