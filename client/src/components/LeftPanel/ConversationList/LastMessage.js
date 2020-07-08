import React from "react";
import { Text, Flex } from "@fluentui/react-northstar";
import { useSelector } from "react-redux";

function LastMessage(props) {
  const { message } = props;
  const { user } = useSelector((store) => store.user);

  return (
    (message && (
      <Flex styles={{ marginTop: 3 }}>
        <Text
          styles={{ whiteSpace: "pre" }}
          weight="semibold"
          size="small"
          content={
            user?._id === message.sender._id
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
    )) || (
      <Flex styles={{ marginTop: 3 }}>
        <Text
          truncated
          size="small"
          weight="semilight"
          content="Hãy bắt đàu cuộc trò chuyện"
        />
      </Flex>
    )
  );
}

export default LastMessage;
