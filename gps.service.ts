import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearUbicaciones } from './dto/crear-gps.dto';
import { Ubicaciones } from './entities/gps.entity';

@Injectable()
export class UbicacionService {

    constructor(
        @InjectRepository( Ubicaciones )
        private usuarioRepository: Repository<Ubicaciones>
    ){}

    async create( createUser: CrearUbicaciones ){
        const new_user = this.usuarioRepository.create( createUser );
        return await this.usuarioRepository.save( new_user ); 
    }


    async findAll(){
        return await this.usuarioRepository.find();
    }

    async findOne( id_ubicacion: number ){
        return await this.usuarioRepository.findBy({id_ubicacion});
    }

    async delete( id_ubicacion: number ){
        return await this.usuarioRepository.delete( id_ubicacion );
    }

}
