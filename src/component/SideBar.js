import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux'
import { toggleModalOpenDrawer } from '../redux/actions/controlerActions'
import { jutSetQuery } from '../redux/actions/queryActions'
import TextField from '@material-ui/core/TextField';
import { isBlank } from '../lib/Utils'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    backgroundColor: 'grey',
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class  SideBar extends React.Component {
  state = {
    buscar: '',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleClickList = query => event => {
    this.props.jutSetQuery(query)
    this.props.toggleModalOpenDrawer()
    this.setState({
      buscar: ''
    });
  };

  render (){
    let { classes, theme, openDrawer, toggleModalOpenDrawer, querys } = this.props;
    let { buscar } = this.state;
    if (!isBlank(buscar)){
      querys = querys.filter(function(query) {

        return query.fullName.toUpperCase().indexOf(buscar.toUpperCase()) > -1
      })
    }
    return (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleModalOpenDrawer}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <div className={classes.drawerHeader}>
            Clientes Consultados
          </div>
          <div className={classes.drawerHeader}>
            <TextField
              id="outlined-name"
              label="Buscar"
              className={classes.textField}
              value={this.state.buscar}
              onChange={this.handleChange('buscar')}
              margin="normal"
              variant="outlined"
            />
          </div>
          <Divider />
          <List>
            {querys && querys.map && querys.map((text, index) => (
                <ListItem button key={text.id} onClick={this.handleClickList(text)}>
                    <ListItemText primary={text.fullName} />
                </ListItem>
            ))}
          </List>
        </Drawer>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect((state) => ({
    openDrawer: state.controler.openDrawer,
    querys: state.query.querys,
    translate: state.translate.translate,
  }), {toggleModalOpenDrawer, jutSetQuery})(withStyles(styles, { withTheme: true })(SideBar));
