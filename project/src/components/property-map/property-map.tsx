import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_SIZE, ICON_ANCHOR } from '../../consts/map-markers';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedPoint?: Offer;
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

function getPoints(city: string, offers: Offer[]) {
  return offers.filter((item) => city === item.city.name);
}

function PropertyMap(props: MapProps): JSX.Element {
  const { city, offers, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const points = getPoints(city.name, offers);

  useEffect(() => {
    if (map) {
      for (let i = 0; i < 3; i++) {
        const point = points[i];
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined && point.id === selectedPoint.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      }
    }
  }, [map, points, selectedPoint]);

  return <section className="property__map map" ref={mapRef}></section>;
}

export default PropertyMap;
