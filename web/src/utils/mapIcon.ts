import Leaflet from 'leaflet'

import mapLogo from '../images/map_logo.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapLogo,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default mapIcon;