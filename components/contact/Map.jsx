import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

export function ChangeView({ coords }) {
    const map = useMap()
    map.setView(coords, 12)
    return null
}

export default function Map() {
    const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 })

    const center = [geoData.lat, geoData.lng]

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 400, width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
