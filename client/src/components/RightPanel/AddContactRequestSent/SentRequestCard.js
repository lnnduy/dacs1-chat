import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import { Flex, Card, Text, Button, CloseIcon } from "@fluentui/react-northstar";

import useStyles from "./styles";

function SentRequestCard(props) {
  const { request } = props;
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  const cancelRequest = () => {
    console.log(`Cancel request to ${request.email} - id: ${request._id}`);
  };

  return (
    <Card className={classes.requestCard}>
      <Card.Body>
        <Flex column>
          <Flex vAlign="center" className={classes.info}>
            <Avatar
              src={request.avatar}
              sizes="50 50"
              style={{ marginRight: 5 }}
            />
            <Text
              truncated
              size="small"
              weight="bold"
              content={request.name || request.email}
            />
          </Flex>
          <Flex className={classes.controls}>
            <Button
              className={classes.btnCancel}
              fluid
              text
              content="Huỷ lời mời"
              icon={<CloseIcon />}
              onClick={(e) => {
                e.stopPropagation();
                cancelRequest();
              }}
            />
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  );
}

export default SentRequestCard;
