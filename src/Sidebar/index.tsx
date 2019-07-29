import React from 'react';
import './index.css';

import { Link as RouterLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      padding: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: {
      ...theme.mixins.toolbar,
      height: '90px'
    }
  })
);

interface Pages {
  title: string,
  path: string
}

const RouterList: React.FC = () => {
  const pages: Array<Pages> = [{
    title: 'Home',
    path: '/'
  }, {
    title: 'Table 1',
    path: '/table-one'
  }, {
    title: 'Table 2',
    path: '/table-two'
  }];

  const classes = useStyles();

  return (
    <List component="nav">
      <div className={classes.toolbar} />
      <h2>Sidebar</h2>
      <ul>
        {pages.map(({ title, path }, idx) => (
          <li key={idx}>
            <ListItem button component={RouterLink} to={path}>
              <ListItemText primary={title}/>
            </ListItem>
          </li>
        ))}
      </ul>
    </List>
  )
};

const Sidebar: React.FC = () => {

  const classes = useStyles();

  return (
    <aside className="Sidebar">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <RouterList/>
      </Drawer>

    </aside>
  )
};

export default Sidebar;
