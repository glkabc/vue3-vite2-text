import { createStore } from "vuex";
import { StoreDataType, User } from "./type";

const user: User = {
  timeOut: 1000,
  token: "",
  name: "小明",
  id: "123456765432",
};

const store = createStore<StoreDataType>({
  state() {
    return {
      user,
      count: 0,
    };
  },
});

export default store;
