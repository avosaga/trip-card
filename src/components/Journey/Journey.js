import React, { Component } from 'react';

import './Journey.css';
import Stations from './Stations/Stations';
import FareService from '../../services/FareService';

class Journey extends Component {
    state = {
        fare: 0,
        fromStation: null,
        toStation: null
    };

    handlerOnSelectStation = (station, isFromStation) => {
        let { fromStation, toStation } = this.state;

        if(isFromStation) {
            fromStation = station;
        } else {
            toStation = station;
        }

        const fare = FareService.calculateFare(fromStation, toStation);

        this.setState({
            fromStation,
            toStation,
            fare
        });

        this.props.balance.fare = fare;
        this.props.onChangeFare();
    };

    render() {
        return (
            <div className="row Journey">
                <div className="col-4">
                    <Stations onSelectStation={fromStation => this.handlerOnSelectStation(fromStation, true)} />
                </div>
                <div className="col-4">
                    <Stations onSelectStation={toStation => this.handlerOnSelectStation(toStation, false)} />
                </div>
                <div className="col-2">
                    {this.state.fare}
                </div>
            </div>
        );
    }
}

export default Journey;