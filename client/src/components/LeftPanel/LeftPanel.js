import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";

import LeftMenu from "./LeftMenu/LeftMenu";
import ConversationList from "./ConversationList/ConversationList";
import Contacts from "./Contacts/Contacts";
import SearchContainer from "./SearchContainer/SearchContainer";
import { MENU_ITEMS } from "../../_actions/types";

function LeftPanel(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  return (
    <>
      {!isSmall && <LeftMenu />}
      <SearchContainer />
      {(selectedMenuItemCode === MENU_ITEMS.CHAT && <ConversationList />) ||
        (selectedMenuItemCode === MENU_ITEMS.CONTACTS && <Contacts />) || (
          <ConversationList />
        )}
    </>
  );
}

export default LeftPanel;
