import React, { useState } from "react";
import { Dialog, Text, Input } from "@fluentui/react-northstar";
import { CloseIcon } from "@fluentui/react-icons-northstar";
import axios from "axios";
import moment from "moment";

function AddGroupDialog(props) {
  const { open, onClose, onCreateSuccess } = props;
  const [groupName, setGroupName] = useState("");

  const handleComfirm = () => {
    axios
      .post("api/groups", {
        name: groupName,
        avatar: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          const group = data.data;
          onCreateSuccess({
            _id: group._id,
            name: group.name,
            avatar: group.avatar,
            memberCount: 1,
            role: "Admin",
          });
        }
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
      header="Thêm nhóm mới"
      headerAction={{
        icon: <CloseIcon />,
        title: "Đóng",
        onClick: () => onClose(),
      }}
      content={
        <>
          <Text content="Tên nhóm" size="medium" />
          <Input
            fluid
            placeholder="Nhập tên nhóm..."
            required
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </>
      }
      cancelButton="Huỷ"
      confirmButton="Tạo nhóm"
      onCancel={onClose}
      onConfirm={handleComfirm}
    ></Dialog>
  );
}

export default AddGroupDialog;
