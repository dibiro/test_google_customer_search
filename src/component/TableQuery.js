import { connect } from 'react-redux'
import { getQuery } from '../redux/actions/queryActions'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    marginLeft: '5%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hiden',
  },
});


function TableQuery(props) {
  const { classes, query } = props;
  const rows = query && query.query && query.query.items ? query.query.items : []
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <h1>{query.fullText}</h1>
          <TableRow>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map && rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <a href={row.link} target='_blank'>
                    {row.title}
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect((state) => ({
  query: state.query.query,
  openDrawer: state.controler.openDrawer,
  translate: state.translate.translate,
}), {getQuery})(withStyles(styles, { withTheme: true })(TableQuery));