import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { Flex } from "@fluentui/react-northstar";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import ReceivedRequestCard from "./ReceivedRequestCard";

function AddContactRequestReceived(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { user } = useSelector((store) => store.user);
  const requests = user?.addContactRequestsReceived || [];

  return (
    <div className={classes.container}>
      <Flex gap="gap.small">
        {requests.map((r, i) => (
          <ReceivedRequestCard key={i} request={r} />
        ))}
      </Flex>
    </div>
  );
}

export default AddContactRequestReceived;
