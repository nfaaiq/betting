import React, {Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions'
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import Market from './Market';
import '../index.css';

class Events extends Component {

    componentDidMount(){
        this.props.fetchEvents();
    }

    render() {
        const {events} = this.props;
        
        const eventList = events.map(function(row) {
            if(row.markets.length ===  0) {
                return null;
            }

            return (
                <Card key={row.id}>
                    <div className="text">
                        <h3>{row.name}</h3>
                    </div>
                    <Market markets={row.markets} />
                </Card>
            )
        })
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>{eventList}</Paper>
                    </Grid>
                </Grid>
                </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {events: state.eventData.events}
}
export default  connect(mapStateToProps,{fetchEvents})(Events);