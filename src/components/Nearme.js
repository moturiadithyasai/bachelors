import React, { useState, useRef, useEffect } from 'react';

const GoogleMap = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}';
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            const google = window.google;
            const mapNode = mapRef.current;
            const newMap = new google.maps.Map(mapNode, {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 12,
            });

            setMap(newMap);

            google.maps.event.addListener(newMap, 'click', (event) => {
                if (marker) {
                    marker.setMap(null);
                }

                const newMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: newMap,
                });

                setMarker(newMarker);
            });
        });
    }, []);

    return (
        <div
            ref={mapRef}
            style={{ height: '500px', width: '100%' }}
        />
    );
};

export default GoogleMap;