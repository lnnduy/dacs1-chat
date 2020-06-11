import React from "react";
import { Text, Flex } from "@fluentui/react-northstar";
import { useSelector } from "react-redux";

function LastMessage(props) {
  const { message } = props;
  const { user } = useSelector((store) => store.user);

  return (
    <Flex styles={{ marginTop: 3 }}>
      <Text
        styles={{ whiteSpace: "pre" }}
        weight="semibold"
        size="small"
        content={
          user._id === message.sender._id
            ? "Bạn: "
            : `${message.sender.name || "[NoName]"}: `
        }
      />
      {message.type === "Text" && (
        <Text
          truncated
          size="small"
          weight="semilight"
          content={message.content}
        />
      )}
      {message.type === "Image" && (
        <Text
          truncated
          size="small"
          weight="semilight"
          content="Gửi một hình ảnh"
        />
      )}
    </Flex>
  );
}

export default LastMessage;
