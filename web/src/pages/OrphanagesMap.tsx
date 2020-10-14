import React from 'react';
import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'



import mapLogo from '../images/map_logo.svg'

import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapLogo} alt="Happy"/>

                    <h2>Choose an orphanage from the map</h2>
                    <p>Lot's of kids are waiting for your visit!</p>
                </header>
                <footer>
                    <strong>Oeiras</strong>
                    <span>Lisboa</span>
                </footer>
            </aside>

            <Map 
                center={[38.7436883,-9.1952226]}
                zoom={13}
                style={{width: '100%', height:'100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                <Marker icon={mapIcon} position={[38.7436883,-9.1952226]}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff"  />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;