import React, { useState } from "react";
import {
  Card,
  Popup,
  MoreIcon,
  Flex,
  Button,
  Text,
  ParticipantRemoveIcon,
  BanIcon,
} from "@fluentui/react-northstar";
import { Avatar, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";
import { startConversation } from "../../../_actions/conversationActions";
import { useDispatch } from "react-redux";

function FriendCard(props) {
  const { friend } = props;
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const [onMouseOver, setOnMouseOver] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className={classes.friendCardContainer}
      onMouseOver={() => setOnMouseOver(true)}
      onMouseLeave={() => setOnMouseOver(false)}
    >
      <Card className={classes.friendCard}>
        {onMouseOver && (
          <Popup
            trigger={
              <MoreIcon
                rotate="90"
                circular
                className={classes.btnMore}
                size="small"
              />
            }
            position="below"
            align="end"
            content={
              <Flex column hAlign="start">
                <Button
                  fluid
                  text
                  content="Chặn"
                  secondary
                  icon={<BanIcon />}
                />
                <Button
                  fluid
                  text
                  content="Huỷ kết bạn"
                  secondary
                  icon={<ParticipantRemoveIcon />}
                />
              </Flex>
            }
          />
        )}
        <Card.Body fitted>
          <Flex gap="gap.small">
            <Flex column gap="gap.small">
              <Avatar src={friend.avatar} />
            </Flex>
            <Flex
              vAlign="center"
              column
              gap="gap.small"
              styles={{ overflow: "hidden" }}
            >
              <Text
                content={friend.name || friend.email}
                size="small"
                weight="bold"
                truncated
                title={friend.name || friend.email}
              />
            </Flex>
          </Flex>
          <Button
            style={{ marginTop: 10 }}
            styles={{
              borderColor: "#00aaff",
              color: "#00aaff",
              "&:hover": {
                borderColor: "#00aaff",
                color: "#00aaff",
                backgroundColor: "#00aaff12",
              },
            }}
            content="Nhắn tin"
            onClick={() =>
              dispatch(startConversation({ participantId: friend._id }))
            }
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default FriendCard;
