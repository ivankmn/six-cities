import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [cityMap, setCityMap] = useState<Map | null>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (cityMap) {
      cityMap.panTo({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });
    }
  }, [city, cityMap]);

  useEffect(() => {
    if (mapRef.current !== null && !isRendered.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      });

      instance.addLayer(layer);

      setCityMap(instance);
      isRendered.current = true;
    }
  }, [mapRef, city]);

  return cityMap;
}

export default useMap;
