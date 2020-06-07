import React from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function ContactMenuItem(props) {
  const { content, Icon, color, isSelect, onClick } = props;
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);

  return (
    <div
      className={isSelect ? classes.selectedLeftMenuCard : classes.leftMenuCard}
      onClick={onClick}
    >
      <Flex vAlign="center">
        <Flex column>
          <span
            style={{
              backgroundColor: color,
              color: "white",
              borderRadius: "100%",
              padding: 5,
              marginRight: 5,
            }}
          >
            <Icon size="largest" circular />
          </span>
        </Flex>
        <Text size="large" weight="bold" content={content} />
      </Flex>
    </div>
  );
}

export default ContactMenuItem;
