import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { Flex } from "@fluentui/react-northstar";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import ReceivedRequestCard from "./ReceivedRequestCard";

function AddContactRequestReceived(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { receivedRequests } = useSelector((store) => store.contact);

  return (
    <div className={classes.container}>
      <Flex gap="gap.small">
        {receivedRequests.map((r, i) => (
          <ReceivedRequestCard key={i} request={r} />
        ))}
      </Flex>
    </div>
  );
}

export default AddContactRequestReceived;
