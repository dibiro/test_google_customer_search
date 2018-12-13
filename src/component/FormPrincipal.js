import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class FormPrincipal extends React.Component {
  state = {
    firt_name: '',
    second_name: '',
    last_name: '',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

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
        <Button variant="contained" color="primary" className={classes.button}>
          Consultar
        </Button>
      </form>
    );
  }
}

FormPrincipal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormPrincipal);