import get from 'lodash/get';

export const entitiesSelector = (annotation) => get(annotation, 'entities');
export const placesSelector = (annotation, salience = 80) => get(entitiesSelector(annotation), 'places', []).filter(place => place.type === 'LOCATION' && place.salience >= salience);
export const placeNamesSelector = (annotation, salience = 80) => placesSelector(annotation, salience = 80).map(place => place.name);