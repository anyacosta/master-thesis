import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
          Anays Guilarte Acosta
        </Typography>
        <Avatar alt="Anays Guilarte" src="../../assets/anays.png" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
