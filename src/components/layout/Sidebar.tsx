import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 250;

const menu = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Municípios", icon: <LocationCityIcon /> },
  { text: "UPAs", icon: <MapIcon /> },
  { text: "Setores", icon: <GridViewIcon /> },
  { text: "Domicílios", icon: <HomeIcon /> },
  { text: "Agenda", icon: <EventIcon /> },
  { text: "Importação", icon: <UploadFileIcon /> },
  { text: "Relatórios", icon: <AssessmentIcon /> },
  { text: "Configurações", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          mt: "64px",
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={index === 0}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}