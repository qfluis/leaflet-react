import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import { useEffect } from 'react';
import './Mapita.css';

export const Mapita = () => {

    var map;
    
    
    useEffect(()=>{
        
        //map = L.map("mapita").setView([51.505, -0.09],13);
        
        /*
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
        */
       console.log("Holiwi");

    },[]);
    
    // TODO: https://react-leaflet.js.org/docs/start-introduction/
    // TODO: https://react-leaflet.js.org/docs/api-map/#mapcontainer
    
    

    return (
        <>
        <h1>Mapita</h1>
        <MapContainer center={[41.40259959831558, 2.1945373890103843]} zoom={16}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[41.40259959831558, 2.1945373890103843]}>
                <Popup>
                    oLA K ASE!
                </Popup>
            </Marker>



        </MapContainer>
        </>
    ) 
        
}