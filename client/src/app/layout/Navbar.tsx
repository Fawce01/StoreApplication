import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean
    toggleNavBar: () => void
}

export default function Navbar({darkMode, toggleNavBar}: Props) {
    return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">Store</Typography>
            <IconButton onClick={toggleNavBar}>{darkMode ? <DarkMode></DarkMode> : <LightMode sx={{color:'yellow'}}></LightMode>}</IconButton>
        </Toolbar>
    </AppBar>
  )
}