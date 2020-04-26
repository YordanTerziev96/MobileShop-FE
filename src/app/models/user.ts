import { Vehicle } from './vehicle';


export class User {
    id: number;
    username: string;
    password: string;
    mobilePhone: string;
    email: string;
    vehicles: Array<Vehicle>;

}
