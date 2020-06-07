import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  TeamsIcon,
  UserFriendsIcon,
  RaiseHandIcon,
  ParticipantAddIcon,
} from "@fluentui/react-icons-northstar";

import useStyles from "./styles";
import ContactTitleItem from "./ContactTitleItem";

import { CONTACT_MENU_ITEMS } from "../../../_actions/types";

function ContactsTitle(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { selectedContactMenuItemCode } = useSelector(
    (store) => store.contactMenu
  );

  return (
    <div className={classes.title}>
      {selectedContactMenuItemCode === CONTACT_MENU_ITEMS.GROUPS && (
        <ContactTitleItem
          color="#00aaff"
          Icon={TeamsIcon}
          content="Nhóm đã tham gia"
        />
      )}
      {selectedContactMenuItemCode === CONTACT_MENU_ITEMS.FRIENDS && (
        <ContactTitleItem
          color="#00eeff"
          Icon={UserFriendsIcon}
          content="Bạn bè"
        />
      )}
      {selectedContactMenuItemCode ===
        CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_RECEIVED && (
        <ContactTitleItem
          color="#00ffaa"
          Icon={ParticipantAddIcon}
          content="Yêu cầu kết bạn"
        />
      )}
      {selectedContactMenuItemCode ===
        CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_SENT && (
        <ContactTitleItem
          color="#ffee00"
          Icon={RaiseHandIcon}
          content="Yêu cầu kết bạn đã gửi"
        />
      )}
    </div>
  );
}

export default ContactsTitle;
