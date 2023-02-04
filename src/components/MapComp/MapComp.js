import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComp = () => {

    const Locations = [
        {
          name: "Location 1",
          location: { 
            lat: 33.645694,
            lng: 73.001640
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 33.689697,
            lng: 72.990654
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 33.719401,
            lng: 73.018463
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 33.710263,
            lng: 73.081978
          },
        },
        {
          name: "Blue Area",
          location: { 
            lat: 33.719794,
            lng: 73.068193
          },
        }
      ];

    return (
        <div class="flex items-center justify-center h-80 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <LoadScript
                googleMapsApiKey='AIzaSyD30ExheQG7cZC9HRgRd0X4Y47pyapW53U'>
                <GoogleMap
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    zoom={13}
                    center={{ lat: 41.3851, lng: 2.1734 }}
                    {
                        ...Locations.map(item => {
                          return (
                          <Marker key={item.name} position={item.location}/>
                          )
                        })
                     }
                />
            </LoadScript>
        </div>
    )
}

export default MapComp
