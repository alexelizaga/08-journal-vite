import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

interface NavbarProps {
    drawerWidth?: number;
}

export const Navbar = ({ drawerWidth = 240 }: NavbarProps) => {
  return (
    <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${ drawerWidth }px` }
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' }}}
            >
                <MenuOutlined />
            </IconButton>

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h6" noWrap component="div">
                    JournalApp
                </Typography>
                <IconButton color="error">
                    <LoginOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
