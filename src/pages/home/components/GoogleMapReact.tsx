
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function GoogleMapReact() {
   

    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    
    return (

        <section className='gMap'>

            <LoadScript googleMapsApiKey="AIzaSyDG2gSqPYc43g1Dzeya_L2L2xk_85veA2I">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </section>
    )
}
