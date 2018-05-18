import React from 'react';

const stations = [
    createStation('Holborn', 1),
    createStation("Earl's Court", 1, 2),
    createStation('Wimbledon', 3),
    createStation('Hammersmith', 2)
];

const Stations = props => {
    return (
        <select className="form-control"
                onChange={event => props.onSelectStation(stations.find(
                    station => station.name === event.target.value)
                )}>

            <option value="">Select Station</option>

            {stations.map((station, index) =>
                <option key={index}>{station.name}</option>
            )}

        </select>
    );
};

function createStation(name, ...zones) {
    return {
        name,
        zones
    }
}

export default Stations;