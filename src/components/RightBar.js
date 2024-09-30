
import {Container, makeStyles, Typography, } from '@material-ui/core';
import { Home, } from '@mui/icons-material';

const useStyles = makeStyles ((theme) => {
    

  });

function RightBar() {
  return (
    
    <>
    <Container>
      <div className={classes.Items}>
        <Home className={classes.IconHome} />
        <Typography className={classes.NameIcon}>خانه</Typography>
      </div>
    </Container>
    </>
  );
}

export default RightBar;
