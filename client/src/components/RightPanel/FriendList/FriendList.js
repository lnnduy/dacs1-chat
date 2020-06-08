import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Button, ParticipantAddIcon, Flex } from "@fluentui/react-northstar";

import AddFriendDialog from "./AddFriendDialog";

import useStyles from "./styles";
import FriendCard from "./FriendCard";

function FriendList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const { contacts } = useSelector((store) => store.contact);
  const [openAddContactDialog, setOpenAddContactDialog] = useState(false);

  return (
    <div className={classes.container}>
      <Button
        className={classes.btnAddFriend}
        styles={{ color: "teal", borderColor: "teal" }}
        icon={<ParticipantAddIcon />}
        content="Thêm bạn"
        onClick={() => setOpenAddContactDialog(true)}
      />
      <div style={{ marginTop: 15 }}>
        <Flex gap="gap.medium" wrap>
          {contacts.map((f, i) => (
            <FriendCard key={i} friend={f} />
          ))}
        </Flex>
      </div>
      <AddFriendDialog
        open={openAddContactDialog}
        onClose={() => setOpenAddContactDialog(false)}
      />
    </div>
  );
}

export default FriendList;
