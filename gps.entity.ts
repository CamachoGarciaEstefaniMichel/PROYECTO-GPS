import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ubicaciones {

    @PrimaryGeneratedColumn()
    id_ubicacion: number;

    @Column({
        type: "text",
        nullable: false
    })
    lat: string;

    @Column({
        type: "text",
        nullable: false
    })
    lng: string;


    @Column({
        type: "timestamp",
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    })
    fecha_hora: Date; // Use Date type for timestamp
}