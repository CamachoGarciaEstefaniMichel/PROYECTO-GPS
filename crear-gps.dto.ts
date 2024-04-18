import { IsString } from 'class-validator';

export class CrearUbicaciones {

    @IsString()
    lat: string;

    @IsString()
    lng: string;

    @IsString()
    fecha: string;

    @IsString()
    hora: string;

    constructor(lat: string, lng: string) {
        this.lat = lat;
        this.lng = lng;
        this.fecha = new Date().toISOString().substring(0, 10);
        this.hora = new Date().toISOString().substring(11, 19);
    }
}
