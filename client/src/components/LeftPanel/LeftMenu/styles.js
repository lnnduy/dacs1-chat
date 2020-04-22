import { makeStyles } from "@material-ui/core";

const LEFT_MENU_WIDTH = 67;

export const useMenuItemStyles = makeStyles((theme) => ({
  menuItem: {
    width: LEFT_MENU_WIDTH,
    height: LEFT_MENU_WIDTH,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0002",
    },
  },
  selectedMenuItem: {
    width: LEFT_MENU_WIDTH,
    height: LEFT_MENU_WIDTH,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0004",
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const largeScreenStyles = {
  leftMenu: {
    gridArea: "left-menu",
    background: "linear-gradient(180deg, #0cb3ff, #0068ff)",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "calc(100vh - 84px)",
  },
  top: {},
  bottom: {},
  userAvatar: {
    width: LEFT_MENU_WIDTH,
    height: LEFT_MENU_WIDTH,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },
  square: {
    width: "100%",
    height: LEFT_MENU_WIDTH,
    background: "green",
    border: "1px solid red",
    alignSelf: "start",
  },
  circle: {
    width: LEFT_MENU_WIDTH,
    height: LEFT_MENU_WIDTH,
    background: "yellow",
    border: "1px solid orange",
    borderRadius: "100%",
  },
};

const smallScreenStyles = {
  leftMenu: {
    display: "none",
  },
};

const useStyles = (isSmall) =>
  isSmall
    ? makeStyles((theme) => smallScreenStyles)
    : makeStyles((theme) => largeScreenStyles);

export default useStyles;
