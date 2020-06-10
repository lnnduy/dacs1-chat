import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import {
  loadAddContactRequestsReceived,
  loadAddContactRequestsSent,
  loadContacts,
} from "../../../functions/contact";
import { loadGroups } from "../../../functions/group";
import {
  updateAddContactRequestsReceived,
  updateAddContactRequestsSent,
  updateContacts,
} from "../../../_actions/contactActions";
import { updateGroups } from "../../../_actions/groupActions";

import LeftPanel from "../../LeftPanel/LeftPanel";
import RightPanel from "../../RightPanel/RightPanel";

function MainPage(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);
  const classes = useStyles(isSmall, selectedMenuItemCode)(props);
  const dispatch = useDispatch();

  useEffect(() => {
    loadAddContactRequestsReceived().then((data) => {
      if (data.success) {
        const requests = data.data;
        dispatch(updateAddContactRequestsReceived(requests));
      }
    });
    loadAddContactRequestsSent().then((data) => {
      if (data.success) {
        const requests = data.data;
        dispatch(updateAddContactRequestsSent(requests));
      }
    });
    loadContacts().then((data) => {
      if (data.success) {
        const contacts = data.data;
        dispatch(updateContacts(contacts));
      }
    });
    loadGroups().then((data) => {
      if (data.success) {
        const groups = data.data;
        dispatch(updateGroups(groups));
      }
    });
  }, []);

  return (
    <div className={classes.chatContainer}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default MainPage;
