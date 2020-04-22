import React from "react";
import { useMenuItemStyles } from "./styles";

function MenuItem(props) {
  const { isSelect, Icon, title, onClick } = props;
  const classes = useMenuItemStyles(props);
  return (
    <div
      className={isSelect ? classes.selectedMenuItem : classes.menuItem}
      onClick={() => onClick()}
      title={title}
    >
      <Icon />
    </div>
  );
}

export default MenuItem;
