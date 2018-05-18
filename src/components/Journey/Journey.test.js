import React from 'react';

import { shallow } from 'enzyme'
import { expect } from 'chai';
import sinon from 'sinon';

import Journey from './Journey';

describe('Journey', () => {

    it('should render component', () => {
        const component = shallow(<Journey />);

        expect(component.state('fare')).to.equal(0);
        expect(component.state('fromStation')).to.equal(null);
        expect(component.state('toStation')).to.equal(null);
    });

    it('should calculate fare when From Station has been selected', () => {
        assertFareCalculationForStation(true);
    });

    it('should calculate fare when To Station has been selected', () => {
        assertFareCalculationForStation(false);
    });

    function assertFareCalculationForStation(isFromStation) {
        const propsSpy = { onChangeFare() {} };
        const onChangeFareSpy = sinon.spy(propsSpy, 'onChangeFare');
        const balance = { fare: 0 };
        const station = {
            zone: [1]
        };
        const component = shallow(<Journey balance={balance} onChangeFare={propsSpy.onChangeFare}/>);

        component.instance().handlerOnSelectStation(station, isFromStation);

        expect(balance.fare).to.not.equal(0);
        expect(onChangeFareSpy.called).to.be.true;
    }
});