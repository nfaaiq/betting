import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import '../index.css';
import {connect} from 'react-redux';
import {addToBetting} from '../actions';

class Selection extends React.Component {

    addToBet = () => {
        this.props.addToBetting(this.props.selectionRow);
    }

    render() {
        
        const {id, name, price} = this.props.selectionRow;
        
        var className = (this.props.bettings[id]) ? 'boxactive' : 'box';
        var sm = 6;
        if(this.props.length > 2) {
            sm = 4;
        }
        return (
            <Grid item xs={12} sm={sm} >
                <Box className={className} onClick={this.addToBet.bind(this)}>
                    {name}<br/>
                    {price}
                </Box>
            </Grid>
        )
    }
}

const mapStatetoProps = (state) => {
    return {bettings: state.bettingData}
}

export default connect(mapStatetoProps,{addToBetting})(Selection);