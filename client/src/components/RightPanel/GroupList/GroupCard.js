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
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import AddMemberDialog from "./AddMemberDialog";
import { addMemberSuccess, removeGroup } from "../../../_actions/groupActions";
import { leaveGroups, deleteGroups } from "../../../functions/group";
import { socketEmit } from "../../../socket";
import { startConversation } from "../../../_actions/conversationActions";

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
  const [openAddMemberDialog, setOpenAddMemberDialog] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const handleLeaveGroup = () => {
    leaveGroups(group._id)
      .then((data) => {
        if (data.success) {
          dispatch(removeGroup(group._id));
          socketEmit("leaveGroup", { userId: user._id, groupId: group._id });
        }
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteGroup = () => {
    socketEmit("deleteGroup", { userId: user._id, groupId: group._id });
    deleteGroups(group._id)
      .then((data) => {
        if (data.success) {
          dispatch(removeGroup(group._id));
        }
      })
      .catch((err) => console.log(err));
  };

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
                    fluid
                    text
                    content="Rời nhóm"
                    secondary
                    icon={<LeaveIcon />}
                    onClick={handleLeaveGroup}
                  />
                )}
                {(group.role === ROLES.MODERATOR ||
                  group.role === ROLES.ADMIN) && (
                  <Button
                    fluid
                    text
                    content="Thêm thành viên"
                    secondary
                    icon={<ParticipantAddIcon />}
                    onClick={() => setOpenAddMemberDialog(true)}
                  />
                )}
                {group.role === ROLES.ADMIN && (
                  <Button
                    fluid
                    text
                    content="Xoá nhóm"
                    secondary
                    icon={<TrashCanIcon />}
                    onClick={handleDeleteGroup}
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
            onClick={() => dispatch(startConversation({ groupId: group._id }))}
          />
        </Card.Body>
      </Card>

      <AddMemberDialog
        open={openAddMemberDialog}
        groupId={group._id}
        onClose={() => setOpenAddMemberDialog(false)}
        onAddMemberSuccess={() => dispatch(addMemberSuccess(group._id))}
      />
    </div>
  );
}

export default GroupCard;
