import React, { useState } from "react";
import { Dialog, Text, Input } from "@fluentui/react-northstar";
import { useDispatch, useSelector } from "react-redux";

import { sendAddContactRequest } from "../../../functions/contact";
import { sendAddContactRequestSuccess } from "../../../_actions/contactActions";
import { socketEmit } from "../../../socket";

function AddFriendDialog(props) {
  const { open, onClose } = props;
  const [receiverEmail, setReceiverEmail] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const handleComfirm = () => {
    sendAddContactRequest(receiverEmail)
      .then((res) => {
        const request = res.data;

        if (res.success === true && request !== undefined) {
          dispatch(sendAddContactRequestSuccess(request));
          socketEmit("sendAddContactRequest", {
            senderId: user._id,
            receiverEmail,
          });
        }

        onClose();
      })
      .catch((err) => {
        console.log(err);
        onClose();
      });
  };

  return (
    <Dialog
      open={open}
      backdrop
      content={
        <>
          <Text weight="bold" content="Email muốn kết bạn" />
          <Input
            fluid
            placeholder="Nhập email của người bạn muốn kết bạn..."
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
          />
        </>
      }
      cancelButton="Huỷ"
      confirmButton="Gửi"
      onCancel={onClose}
      onConfirm={handleComfirm}
    />
  );
}

export default AddFriendDialog;
