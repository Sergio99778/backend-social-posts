import { store } from "../../../store/dummy";
import { usersController } from "./controller";

export const usersControllerStore = usersController(store);
