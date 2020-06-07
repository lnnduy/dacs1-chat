import React from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

function ContactTitleItem(props) {
  const { content, Icon, color } = props;
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);

  return (
    <div className={classes.contactTitle}>
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

export default ContactTitleItem;
