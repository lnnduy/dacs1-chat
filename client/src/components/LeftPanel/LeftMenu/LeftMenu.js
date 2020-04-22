import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ExitToApp, Chat, Contacts } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import MenuItem from "./MenuItem";
import { logoutUser } from "../../../_actions/user_actions";
import { selectMenuItem } from "../../../_actions/left_menu_actions";

import { MENU_ITEMS } from "../../../_actions/types";

function LeftMenu(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userData } = useSelector((store) => store.user);

  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    <div className={classes.leftMenu}>
      <div className={classes.userAvatar}>
        <Avatar
          src={userData?.image}
          style={{
            borderRadius: "100%",
            border: "2px white solid",
          }}
        />
      </div>
      <div className={classes.navContainer}>
        <div className={classes.top}>
          <MenuItem
            isSelect={selectedMenuItemCode === MENU_ITEMS.CHAT}
            Icon={Chat}
            title="Trò chuyện"
            onClick={() => dispatch(selectMenuItem(MENU_ITEMS.CHAT))}
          />
          <MenuItem
            isSelect={selectedMenuItemCode === MENU_ITEMS.CONTACTS}
            Icon={Contacts}
            title="Danh bạ"
            onClick={() => dispatch(selectMenuItem(MENU_ITEMS.CONTACTS))}
          />
        </div>
        <div className={classes.bottom}>
          <MenuItem
            Icon={ExitToApp}
            title="Đăng xuất"
            onClick={() => {
              dispatch(logoutUser()).then(() => history.push("/login"));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
