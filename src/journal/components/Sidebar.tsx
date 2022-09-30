import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

interface SidebarProps {
    drawerWidth?: number;
}

export const Sidebar = ({  drawerWidth = 240 }: SidebarProps) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0} }}
    >
        <Drawer
            variant="permanent" // temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Alex Elízaga
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['January', 'February', 'March', 'April'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Ullamco ipsum veniam consequat.' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
