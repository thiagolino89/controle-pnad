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

import {
  Link,
  useLocation,
} from "react-router-dom";

const drawerWidth = 250;

const menu = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Municípios",
    icon: <LocationCityIcon />,
    path: "/municipios",
  },
  {
    text: "UPAs",
    icon: <MapIcon />,
    path: "/upas",
  },
  {
    text: "Setores",
    icon: <GridViewIcon />,
    path: "/setores",
  },
  {
    text: "Domicílios",
    icon: <HomeIcon />,
    path: "/domicilios",
  },
  {
    text: "Agenda",
    icon: <EventIcon />,
    path: "/agenda",
  },
  {
    text: "Importação",
    icon: <UploadFileIcon />,
    path: "/importacao",
  },
  {
    text: "Relatórios",
    icon: <AssessmentIcon />,
    path: "/relatorios",
  },
  {
    text: "Configurações",
    icon: <SettingsIcon />,
    path: "/configuracoes",
  },
];

export default function Sidebar() {
  const location = useLocation();

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
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}