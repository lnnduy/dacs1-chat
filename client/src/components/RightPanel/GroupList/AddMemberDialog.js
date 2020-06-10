import React, { useState } from "react";
import { Dialog, Text, Input } from "@fluentui/react-northstar";
import { CloseIcon } from "@fluentui/react-icons-northstar";
import axios from "axios";

import { socketEmit } from "../../../socket";

function AddMemberDialog(props) {
  const { open, onClose, onAddMemberSuccess, groupId } = props;
  const [memberEmail, setMemberEmail] = useState("");

  const handleComfirm = () => {
    axios
      .post("api/groups/members", {
        groupId,
        memberEmail,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.success) onAddMemberSuccess();
        socketEmit("addMember", { groupId, memberEmail });
        onClose();
      })
      .catch((e) => {
        console.log(e);
        onClose();
      });
  };

  return (
    <Dialog
      backdrop
      open={open}
      header="Thêm thành viên"
      headerAction={{
        icon: <CloseIcon />,
        title: "Đóng",
        onClick: () => onClose(),
      }}
      content={
        <>
          <Text content="Email người muốn thêm vào" size="medium" />
          <Input
            fluid
            placeholder="Nhập email người muốn thêm vào nhóm.."
            required
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
        </>
      }
      cancelButton="Huỷ"
      confirmButton="Thêm thành viên"
      onCancel={onClose}
      onConfirm={handleComfirm}
    ></Dialog>
  );
}

export default AddMemberDialog;
