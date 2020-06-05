import React, { useState } from "react";
import {
  Card,
  Flex,
  Text,
  Avatar,
  Popup,
  Button,
} from "@fluentui/react-northstar";
import {
  MoreIcon,
  LeaveIcon,
  ParticipantAddIcon,
  TrashCanIcon,
} from "@fluentui/react-icons-northstar";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

const ROLES = {
  ADMIN: "Admin",
  MODERATOR: "Moderator",
  MEMBER: "Member",
};

function GroupCard(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { group } = props;
  const [onMouseOver, setOnMouseOver] = useState(false);

  return (
    <div
      className={classes.groupCardContainer}
      onMouseOver={() => setOnMouseOver(true)}
      onMouseLeave={() => setOnMouseOver(false)}
    >
      <Card className={classes.groupCard}>
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
                {group.role === ROLES.MEMBER && (
                  <Button
                    text
                    content="Rời nhóm"
                    secondary
                    icon={<LeaveIcon />}
                  />
                )}
                {(group.role === ROLES.MODERATOR ||
                  group.role === ROLES.ADMIN) && (
                  <Button
                    text
                    content="Thêm thành viên"
                    secondary
                    icon={<ParticipantAddIcon />}
                  />
                )}
                {group.role === ROLES.ADMIN && (
                  <Button
                    text
                    content="Xoá nhóm"
                    secondary
                    icon={<TrashCanIcon />}
                  />
                )}
              </Flex>
            }
          />
        )}
        <Card.Body fitted>
          <Flex gap="gap.small">
            <Flex column gap="gap.small">
              <Avatar
                className={
                  classes.avatar +
                  " " +
                  (group.role === ROLES.ADMIN
                    ? classes.roleAdmin
                    : group.role === ROLES.MODERATOR
                    ? classes.roleModerator
                    : "")
                }
                image={group.avatar}
                name={group.name}
              />
            </Flex>
            <Flex column gap="gap.small" styles={{ overflow: "hidden" }}>
              <Text
                content={group.name}
                size="small"
                weight="bold"
                truncated
                title={group.name}
              />
              <Text
                content={`${group.memberCount} thành viên`}
                size="small"
                weight="light"
              />
            </Flex>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GroupCard;
