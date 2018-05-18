
const ZONE_ONE = 1;
const ZONE_THREE = 3;

class FareRules {
    static isAnywhereInZoneOne(fromStation, toStation) {
        return this.isStationFromZone(fromStation, ZONE_ONE) && this.isStationFromZone(toStation, ZONE_ONE);
    }

    static isAnyOneZoneOutsideZoneOne(fromStation, toStation) {
        return !this.isStationFromZone(fromStation, ZONE_ONE) || !this.isStationFromZone(toStation, ZONE_ONE);
    }

    static isAnyTwoZonesIncludingZoneOne(fromStation, toStation) {
        return this.isStationFromZone(fromStation, ZONE_ONE) || this.isStationFromZone(toStation, ZONE_ONE);
    }

    static isAnyTwoZonesExcludingZoneOne(fromStation, toStation) {
        return !this.isStationFromZone(fromStation, ZONE_ONE) && !this.isStationFromZone(toStation, ZONE_ONE);
    }

    static isAnyThreeZones(fromStation, toStation) {
        return this.isStationFromZone(fromStation, ZONE_THREE) || this.isStationFromZone(toStation, ZONE_THREE);
    }

    static isStationFromZone(station, zone) {
        return station.zones.includes(zone);
    }
}

export default FareRules;