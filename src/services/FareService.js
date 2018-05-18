import FareRules from './FareRules';

class FareService {

    static calculateFare(fromStation, toStation) {
        if(!fromStation || !toStation || fromStation === null || toStation === null) {
            return 3.20;
        }

        if(FareRules.isAnywhereInZoneOne(fromStation, toStation)) {
            return 2.5;
        }

        if(FareRules.isAnyTwoZonesExcludingZoneOne(fromStation, toStation)) {
            return 2.25;
        }

        if(FareRules.isAnyThreeZones(fromStation, toStation)) {
            return 3.20;
        }

        if(FareRules.isAnyTwoZonesIncludingZoneOne(fromStation, toStation)) {
            return 3.0;
        }

        if(FareRules.isAnyOneZoneOutsideZoneOne(fromStation, toStation)) {
            return 2.0;
        }
    }
}

export default FareService;