import { Cards } from './mocks/cards';

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer',
    Error = '*'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
  }

export const GOODS: string[] = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/*
export const RATING_TITLES = [
  'Terribly',
  'Badly',
  'Not bad',
  'Good',
  'Perfect'
] as const;
*/

export const RATING_NUMBERS = [
  '5',
  '4',
  '3',
  '2',
  '1'
];

export const ACTIVE_CITY = CITIES[3];

const MAX_RATING = 5;

export const RATING_STARLINE = (rating: number) => `${rating * (100 / MAX_RATING)}%`;

export const FAVORITES_CLASS_NAME = 'favorites';

export const OFFER_CLASS_NAME = 'offer';

export const getMockFavoriteCards = Cards.filter((card) => card.isFavorite === true);

export const getAttributeDate = (rawDate: string) => rawDate.split('T')[0];

export const getMarkupDate = (rawDate: string) => {
  const date = new Date(rawDate);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const getStarsText = (count: number) => `${count} ${count > 1 ? 'stars' : 'star'}`;

export const MIN_CHARACTERS = 50;

export const MAX_CHARACTERS = 500;
