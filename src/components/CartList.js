import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {delBetting} from '../actions';


class CartItem extends React.Component {

    delBet = () => {
        
        this.props.delBetting(this.props.row.id);
    }
    render() {
        const { row } = this.props;
        return (
            <Grid item xs={12}  className="center">
                <Paper>
                    <h2>{row.name}</h2>
                    <h3>{row.price}</h3>
                    <Button variant="contained" color="primary" onClick={this.delBet}>Delete</Button>
                </Paper>
            </Grid>
        )
    }
}

class CartList extends React.Component {

    render() {
        
        const list = _.map(this.props.bettings,function(row,key) {
            return (
                <CartItem row={row} key={key} delBetting={this.props.delBetting} />
            )
        }.bind(this))

        
        return (
            <Grid container spacing={3}>
                {list}
            </Grid>
        )
    }
}

const mapStatetoProps = (state) => {
    return {bettings: state.bettingData}
}

export default connect(mapStatetoProps,{delBetting})(CartList);