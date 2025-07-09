import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_SIZE, ICON_ANCHOR } from '../../consts/map-markers';

type MapProps = {
  city: City;
  offers: Offer[];
  isMain: boolean;
  selectedOffer?: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

function PlacesMap(props: MapProps): JSX.Element {
  const { city, offers, isMain = true, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedOffer && offer.id === selectedOffer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <section className={isMain ? 'cities__map map' : 'property__map map'} ref={mapRef}></section>;
}

export default PlacesMap;
