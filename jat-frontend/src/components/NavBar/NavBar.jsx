import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InventoryIcon from "@mui/icons-material/Inventory";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
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
      <List>
        <Typography variant="h6" align="center" style={{ color: "#8bb4e2" }}>
          Menu
        </Typography>
        <Divider color="#1976b2" sx={{ mb: 2 }} />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LibraryAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#8bb4e2" }}>Add Job</Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InventoryIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ color: "#8bb4e2" }}>
                  Archived Jobs
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            color="primary"
            aria-label="Menu"
            onClick={toggleDrawer(anchor, true)}
            sx={{ ml: 5 }}
          >
            <MenuIcon />
            {anchor}
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ sx: { backgroundColor: "#122c49" } }}
            sx={{ bgcolor: "rgba(13, 13, 13, 0.75)" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
