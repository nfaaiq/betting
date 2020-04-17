import React from 'react';
import Grid from '@material-ui/core/Grid';
import Selection from './Selection';

class Market extends React.Component {

    render() {
        if(!this.props.markets) {
            return null;
        }

        return(
            <div>
                {this.props.markets.map(function(row) {
                    return <MarketRow row={row} key={row.id} />
                })}
            </div>
        )
    }
}

const MarketRow = (props) => {
    const {selections, name} = props.row;

    const length = selections.length;
    

    return (
        <div className="text">
            <div className="title">
                {name}
            </div>
            <Grid container spacing={3} alignContent="center">
            {selections.map(function(selectionRow) {
                return (<Selection selectionRow={selectionRow} length={length} key={selectionRow.id} />)
            })}
            </Grid>
        </div>
    )
}





export default Market;