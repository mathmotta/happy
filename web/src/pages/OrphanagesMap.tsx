import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapLogo from '../images/map_logo.svg'

import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapLogo} alt="Happy" />

                    <h2>Choose an orphanage from the map</h2>
                    <p>Lots of kids are waiting for your visit!</p>
                </header>
                <footer>
                    <strong>Oeiras</strong>
                    <span>Lisboa</span>
                </footer>
            </aside>

            <Map
                center={[38.7436883, -9.1952226]}
                zoom={13}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {orphanages.map(orphanage => {
                    return (
                        <Marker icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} key={orphanage.id}>
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;