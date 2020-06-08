import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Flex } from "@fluentui/react-northstar";

import useStyles from "./styles";
import SentRequestCard from "./SentRequestCard";

function AddContactRequestSent(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { sentRequests } = useSelector((store) => store.contact);

  return (
    <div className={classes.container}>
      <Flex gap="gap.small">
        {sentRequests.map((r, i) => (
          <SentRequestCard key={i} request={r} />
        ))}
      </Flex>
    </div>
  );
}

export default AddContactRequestSent;
