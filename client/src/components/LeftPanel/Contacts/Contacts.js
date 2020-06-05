import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { TeamsIcon } from "@fluentui/react-icons-northstar";
import { Flex, Text } from "@fluentui/react-northstar";
import { useSelector } from "react-redux";

import useStyles from "./styles";

function Contacts(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const { selectedMenuItemCode } = useSelector((store) => store.leftMenu);

  const classes = useStyles(!useMediaQuery("(min-width:740px)"))(props);
  return (
    <div className={classes.contactLists}>
      <div className={classes.leftMenuCard}>
        <Flex vAlign="center">
          <Flex column>
            <span
              style={{
                backgroundColor: "#00aaff",
                color: "white",
                borderRadius: "100%",
                padding: 5,
                marginRight: 5,
              }}
            >
              <TeamsIcon size="largest" circular />
            </span>
          </Flex>
          <Text size="large" weight="bold" content="Nhóm đã tham gia" />
        </Flex>
      </div>
    </div>
  );
}

export default Contacts;
