import { Image } from './image';
import { User } from './user';

export class Vehicle {
    id: number;
    price: number;
    year: number;
    horsePower: number;
    kmDriven: number;
    brand: string;
    model: string;
    engineType: string;
    gearboxType: string;
    categoryType: string;
    type: string;
    region: string;
    extras: Array<string>;
    images: Array<Image>;
    description: string;
    user: User;
}
