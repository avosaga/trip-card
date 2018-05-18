import React from 'react';

import { shallow } from 'enzyme'
import { expect } from 'chai';

import App from './App';

describe('App', () => {

    it('should render component', () => {
        const component = shallow(<App />);

        expect(component.state('balances')).to.have.length(0);
        expect(component.state('totalBalance')).to.equal(30);
    });

    it('should add new balance with fare of $0', () => {
        const component = shallow(<App />);

        component.instance().handlerAddJourney();

        expect(component.state('balances')).to.have.length(1);
        expect(component.state('balances')[0].fare).to.equal(0)
    });

    it('should calculate total balance when a fare has changed', () => {
        const component = shallow(<App />).setState({
            balances: [{ fare: 1 }, { fare: 2 }]
        });
        expect(component.state('totalBalance')).to.equal(30);

        component.instance().handlerOnChangeFare();

        expect(component.state('totalBalance')).to.equal(27)
    });
});
