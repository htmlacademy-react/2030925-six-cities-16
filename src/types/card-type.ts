import { CityType } from './city-type';
import { LocationType } from './location-type';
import { UserType } from './user-type';

export type CardType = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    city: CityType;
    location: LocationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    images: string[];
    goods: string[];
    reviewsCount: number;
    maxAdults: number;
    maxBedrooms: number;
    host: UserType;
}
