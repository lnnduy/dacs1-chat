import React from "react";
import { useMediaQuery, Avatar } from "@material-ui/core";
import {
  Flex,
  Card,
  Text,
  Button,
  AcceptIcon,
  CloseIcon,
} from "@fluentui/react-northstar";
import { useDispatch } from "react-redux";

import {
  declineAddContactRequestsSent,
  acceptAddContactRequestsSent,
} from "../../../functions/contact";
import {
  declineAddContactRequestSuccess,
  acceptAddContactRequestSuccess,
} from "../../../_actions/contactActions";

import useStyles from "./styles";

function ReceivedRequestCard(props) {
  const { request } = props;
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const dispatch = useDispatch();

  const acceptRequest = () => {
    acceptAddContactRequestsSent(request._id)
      .then((res) => {
        if (res.success === true)
          dispatch(acceptAddContactRequestSuccess(request));
      })
      .catch((err) => console.log(err));
  };
  const declineRequest = () => {
    declineAddContactRequestsSent(request._id)
      .then((res) => {
        if (res.success === true)
          dispatch(declineAddContactRequestSuccess(request));
      })
      .catch((err) => console.log(err));
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
              className={classes.btnAccept}
              fluid
              text
              content="Đồng ý"
              icon={<AcceptIcon />}
              onClick={(e) => {
                e.stopPropagation();
                acceptRequest();
              }}
            />
            <Button
              className={classes.btnDecline}
              fluid
              text
              content="Từ chối"
              icon={<CloseIcon />}
              onClick={(e) => {
                e.stopPropagation();
                declineRequest();
              }}
            />
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  );
}

export default ReceivedRequestCard;
