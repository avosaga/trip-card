import React from 'react';

import { shallow } from 'enzyme'
import { expect } from 'chai';
import sinon from 'sinon';

import Stations from './Stations';

describe('Stations', () => {

    it('should render component', () => {
        const component = shallow(<Stations />);

        expect(component.find('option')).to.have.length(5);
    });

    it('should call onSelectStation when a station is selected', () => {
        const propsSpy = { onSelectStation() {} };
        const onSelectStationSpy = sinon.spy(propsSpy, 'onSelectStation');

        const component = shallow(<Stations onSelectStation={propsSpy.onSelectStation}/>);

        component.find('select').simulate('change', { target: { value: 'text' }});

        expect(onSelectStationSpy.called).to.be.true;
    });
});