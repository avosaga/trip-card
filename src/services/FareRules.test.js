import { expect } from 'chai';

import FareRules from './FareRules';

describe('FareRules', () => {

    it('should return true if station is anywhere in zone one', () => {
        expect(FareRules.isAnywhereInZoneOne({zones: [1]}, { zones: [1]})).to.be.true;
    });

    it('should return false if no station is anywhere in zone one', () => {
        expect(FareRules.isAnywhereInZoneOne({zones: [2]}, { zones: [3]})).to.be.false;
    });

    it('should return true if at least one station is outside zone one', () => {
        expect(FareRules.isAnyOneZoneOutsideZoneOne({zones: [1]}, { zones: [2]})).to.be.true;
    });

    it('should return false if no station is outside zone one', () => {
        expect(FareRules.isAnyOneZoneOutsideZoneOne({zones: [1]}, { zones: [1]})).to.be.false;
    });

    it('should return true if at least one station is including zone one', () => {
        expect(FareRules.isAnyTwoZonesIncludingZoneOne({zones: [1]}, { zones: [2]})).to.be.true;
    });

    it('should return false if no station is including zone one', () => {
        expect(FareRules.isAnyTwoZonesIncludingZoneOne({zones: [3]}, { zones: [3]})).to.be.false;
    });

    it('should return true if station is excluding zone one', () => {
        expect(FareRules.isAnyTwoZonesExcludingZoneOne({zones: [2]}, { zones: [2]})).to.be.true;
    });

    it('should return false if no station is excluding zone one', () => {
        expect(FareRules.isAnyTwoZonesExcludingZoneOne({zones: [1]}, { zones: [2]})).to.be.false;
    });

    it('should return true if at least one station is from zone three', () => {
        expect(FareRules.isAnyThreeZones({zones: [1]}, { zones: [3]})).to.be.true;
    });

    it('should return false if no station is from zone three', () => {
        expect(FareRules.isAnyThreeZones({zones: [1]}, { zones: [2]})).to.be.false;
    });
});