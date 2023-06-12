import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

function NavBar () { 
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: 'white' }}>
           <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant= "h6" color= "black" component= "div" sx={{ fontFamily: 'monospace', fontWeight: 500}}>
                <Box
                  variant="h6" color="black" component="div" sx={{ flexGrow: 1, textAlign: 'start', fontFamily: 'monospace',fontWeight: 500 }}>
                  Gary Park
                </Box>
             </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                <Button sx = {{ color: "black" }}> Home </Button>
                <Button sx = {{ color: "black" }}> About Me </Button> 
                <Button sx = {{ color: "black" }}> Portfolio </Button>
              </Box>
              <Box>
                <Button sx = {{ color: "black", borderRadius: "9999px", border: "2px solid black", padding: "8px 16 px", }}> Message Me </Button>
              </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
