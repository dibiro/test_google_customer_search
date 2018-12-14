import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { getQuery } from '../redux/actions/queryActions'


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
    etiqueta:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  getQuery = event => {
    const { firt_name, second_name, last_name, etiqueta } = this.state
    console.log(firt_name, second_name, last_name, etiqueta)
    this.props.getQuery(`${firt_name} ${second_name} ${last_name} ${etiqueta}`)
  };

  render() {
    const { classes, query } = this.props;

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
        <Button variant="contained" color="primary" className={classes.button} onClick={this.getQuery}>
          Consultar
        </Button>
        {JSON.stringify(query)}
      </form>
    );
  }
}

FormPrincipal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state) => ({
  query: state.query.query,
  openDrawer: state.controler.openDrawer,
  translate: state.translate.translate,
}), {getQuery})(withStyles(styles, { withTheme: true })(FormPrincipal));