import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  TeamsIcon,
  UserFriendsIcon,
  RaiseHandIcon,
  ParticipantAddIcon,
} from "@fluentui/react-icons-northstar";
import { Flex } from "@fluentui/react-northstar";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import ContactMenuItem from "./ContactMenuItem";
import { CONTACT_MENU_ITEMS } from "../../../_actions/types";
import { selectContactMenuItem } from "../../../_actions/contactMenuActions";

function Contacts(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const { selectedContactMenuItemCode } = useSelector(
    (store) => store.contactMenu
  );
  const { sentRequests, receivedRequests } = useSelector(
    (store) => store.contact
  );
  const classes = useStyles(isSmall)(props);
  const dispatch = useDispatch();

  return (
    <div className={classes.contactLists}>
      <Flex column>
        <ContactMenuItem
          color="#00eeff"
          Icon={UserFriendsIcon}
          content="Bạn bè"
          isSelect={selectedContactMenuItemCode === CONTACT_MENU_ITEMS.FRIENDS}
          onClick={() =>
            dispatch(selectContactMenuItem(CONTACT_MENU_ITEMS.FRIENDS))
          }
        />
        <ContactMenuItem
          color="#00aaff"
          Icon={TeamsIcon}
          content="Nhóm đã tham gia"
          isSelect={selectedContactMenuItemCode === CONTACT_MENU_ITEMS.GROUPS}
          onClick={() =>
            dispatch(selectContactMenuItem(CONTACT_MENU_ITEMS.GROUPS))
          }
        />
        {receivedRequests.length > 0 && (
          <ContactMenuItem
            color="#00ffaa"
            Icon={ParticipantAddIcon}
            content="Yêu cầu kết bạn"
            isSelect={
              selectedContactMenuItemCode ===
              CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_RECEIVED
            }
            onClick={() =>
              dispatch(
                selectContactMenuItem(
                  CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_RECEIVED
                )
              )
            }
          />
        )}
        {sentRequests.length > 0 && (
          <ContactMenuItem
            color="#ffee00"
            Icon={RaiseHandIcon}
            content="Yêu cầu kết bạn đã gửi"
            isSelect={
              selectedContactMenuItemCode ===
              CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_SENT
            }
            onClick={() =>
              dispatch(
                selectContactMenuItem(
                  CONTACT_MENU_ITEMS.ADD_CONTACT_REQUEST_SENT
                )
              )
            }
          />
        )}
      </Flex>
    </div>
  );
}

export default Contacts;
