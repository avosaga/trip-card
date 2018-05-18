import { expect } from 'chai';

import FareService from './FareService';

describe('FareService', () => {

    it('should return 3.20 if any station is null or undefined', () => {
        expect(FareService.calculateFare(null, {})).to.equal(3.20);
    });

    it('should return 2.5 if both stations are from zone one', () => {
        expect(FareService.calculateFare({zones: [1]}, {zones: [1]})).to.equal(2.5);
    });

    it('should return 2.25 if any station is excluding zone one', () => {
        expect(FareService.calculateFare({zones: [2]}, {zones: [3]})).to.equal(2.25);
    });

    it('should return 3 if any station is including zone one', () => {
        expect(FareService.calculateFare({zones: [2]}, {zones: [1]})).to.equal(3);
    });

    it('should return 3.20 if any station is from zone three', () => {
        expect(FareService.calculateFare({zones: [3]}, {zones: [1]})).to.equal(3.2);
    });

    //TODO: is this similar to "exclude" rule?
    xit('should return 2.0 if any station is outside zone one', () => {
        expect(FareService.calculateFare({zones: [2]}, {zones: [1]})).to.equal(2);
    });
});