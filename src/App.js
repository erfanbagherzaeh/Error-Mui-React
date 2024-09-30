import {  makeStyles } from '@material-ui/core';
import PrimarySearchAppBar from './components/SearchAppBar';
// import RightBar from './components/RightBar';
import './App.css';

const useStyles = makeStyles ((theme) => {

});

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />

      {/* <Grid container>
        <Grid item sm={3}>
          <RightBar/>
        </Grid>
      </Grid> */}
      
    </div>
  );
}

export default App;
