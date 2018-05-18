import React, { Component } from 'react';

import './App.css';
import Journey from './components/Journey/Journey';

const INIT_BALANCE = 30;

class App extends Component {
    state ={
        balances: [],
        totalBalance: INIT_BALANCE
    };

    handlerAddJourney = () => {
        const balances = [...this.state.balances];

        balances.push({
            fare: 0
        });

        this.setState({ balances });
    };

    handlerOnChangeFare = () => {
        let totalBalance = INIT_BALANCE;
        this.state.balances.forEach(journeyBalance => totalBalance -= journeyBalance.fare);

        totalBalance = parseFloat(parseFloat(totalBalance).toFixed(2));
        this.setState({ totalBalance });
    };

    render() {
        const disableButton = parseFloat(this.state.totalBalance) < 0;

        return (
            <div className="container">
                <h1>Trip Card App</h1>
                <div>
                    <h3>Balance ${this.state.totalBalance}</h3>
                    <button id="balance" className="btn btn-primary" onClick={this.handlerAddJourney} disabled={disableButton}>Add Journey</button>
                </div>
                <div>
                    {this.state.balances.map((balance, index) =>
                        <Journey key={index}
                                 balance={balance}
                                 onChangeFare={this.handlerOnChangeFare}/>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
