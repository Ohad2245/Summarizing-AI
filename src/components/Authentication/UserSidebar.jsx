import { Box, Divider, Button, Drawer, Avatar } from "@mui/material";
import * as React from "react";

export default function UserSidebar({ user }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor} >
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            src={user.photoURL}
            alt={user.displayName || user.email}
            style={{
              height: "38px",
              w: "38px",
              cursor: "pointer",
              background: "#EEBC1D",
            }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
                      {list(anchor)}

            <div className="w-[350] p-[25] h-full flex flex-col ">
              <div className="">
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span className="w-full font-[25] ">
                {user.displayName || user.email}
                </span>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
