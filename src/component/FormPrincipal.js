import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { getQuery } from '../redux/actions/queryActions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    marginTop: '70px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    marginBottom: '9px',
    marginTop: '16px',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginBottom: '9px',
    marginTop: '16px',
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});


class FormPrincipal extends React.Component {
  state = {
    firt_name: '',
    second_name: '',
    last_name: '',
    tag:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  getQuery = event => {
    const { firt_name, second_name, last_name, tag } = this.state
    this.props.getQuery(`${firt_name} ${second_name} ${last_name} ${tag}`)
  };

  render() {
    const { classes, query, success, fail, loading } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Primer Nombre"
          className={classes.textField}
          value={this.state.firt_name}
          onChange={this.handleChange('firt_name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Segundo Nombre"
          className={classes.textField}
          value={this.state.second_name}
          onChange={this.handleChange('second_name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Apellidos"
          className={classes.textField}
          value={this.state.last_name}
          onChange={this.handleChange('last_name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Etiqueta"
          className={classes.textField}
          value={this.state.tag}
          onChange={this.handleChange('tag')}
          margin="normal"
          variant="outlined"
        />
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.getQuery}
          >
            Consultar
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
    );
  }
}

FormPrincipal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state) => ({
  query: state.query.query,
  success: state.query.success,
  fail: state.query.fail,
  loading: state.query.loading,
  openDrawer: state.controler.openDrawer,
  translate: state.translate.translate,
}), {getQuery})(withStyles(styles, { withTheme: true })(FormPrincipal));