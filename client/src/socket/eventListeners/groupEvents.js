import store from "../../store";
import { addGroup } from "../../_actions/groupActions";

export const handleAddGroup = (group) => {
  store.dispatch(addGroup(group));
};
