import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_SIZE, ICON_ANCHOR } from '../../consts/map-markers';
import { useAppSelector } from '../../hooks';

type MapProps = {
  city: City;
  offers: Offer[];
  isMain: boolean;
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

function getOffers(city: string, offers: Offer[]) {
  return offers.filter((item) => city === item.city.name);
}

function PlacesMap(props: MapProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const { city, offers, isMain = true, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  let mapOffers = offers;
  if (isMain === true) {
    mapOffers = getOffers(currentCity, offers);
  }

  useEffect(() => {
    if (map) {
      mapOffers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined && point.id === selectedPoint.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, mapOffers, selectedPoint, currentCity]);

  return <section className={isMain ? 'cities__map map' : 'property__map map'} ref={mapRef}></section>;
}

export default PlacesMap;
