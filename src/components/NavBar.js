import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

function NavBar () { 
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ justifyContent: 'space-between'}}>
            <Typography 
              variant="h6" color="black" component="div" sx={{ flexGrow: 1, textAlign: 'start', fontFamily: 'monospace',fontWeight: 500 }}>
            Gary Park
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Button sx = {{ color: "black"}}> Home </Button>
              <Button sx = {{ color: "black"}}> About Me </Button> 
              <Button sx = {{ color: "black"}}> Portfolio </Button>
              <Button sx = {{ color: "black"}}> Message Me </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
