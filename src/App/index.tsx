import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import DevGrid from '../Grid';
import Sidebar from '../Sidebar';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Home: React.FC = () => {
  return (
    <h1>Home page</h1>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      minHeight: '64px',
      height: '90px',
      backgroundColor: '#282c34',
      color: '#fff',
      fontSize: '1rem',
      zIndex: theme.zIndex.drawer + 1
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    toolbar: {
      ...theme.mixins.toolbar,
      height: '90px'
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <header className={classes.header}>
          <h1>DevExtreme example</h1>
        </header>
        <Sidebar/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/" component={Home}/>
          <Route path="/table-one" component={DevGrid}/>
          <Route path="/table-two" component={DevGrid}/>
        </main>
      </div>
    </Router>
  );
};

export default App;
