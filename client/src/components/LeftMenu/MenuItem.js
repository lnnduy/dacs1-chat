import React from "react";
import { useMenuItemStyles } from "./styles";

function MenuItem(props) {
  const { isSelect, Icon, onClick } = props;
  const classes = useMenuItemStyles(props);
  return (
    <div
      className={isSelect ? classes.selectedMenuItem : classes.menuItem}
      onClick={() => onClick()}
    >
      <Icon />
    </div>
  );
}

export default MenuItem;
