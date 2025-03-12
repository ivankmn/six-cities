import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts/map-markers';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedPoint?: Offer;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function getPoints(city: string, offers: Offer[]) {
  return offers.filter((item) => city === item.city.name);
}

function Map(props: MapProps): JSX.Element {
  const { city, offers, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const points = getPoints(city.name, offers);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined && point.id === selectedPoint.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
