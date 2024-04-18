import { Ubicaciones } from './entities/gps.entity';
import { 
    Controller,
    Post,
    Body,
    ValidationPipe,
    Put,
    Delete,
    Get,
    Param
} from '@nestjs/common';
import { UbicacionService } from './gps.service';
import { CrearUbicaciones } from './dto/crear-gps.dto';

@Controller('ubicacion')
export class UbicacionController {

    constructor( private ubicacionService: UbicacionService ){}

    @Post()
    async create( @Body( new ValidationPipe() ) createUser: CrearUbicaciones ){
        return await this.ubicacionService.create( createUser);
    }


  

    @Get()
    async findAll(){
        return await this.ubicacionService.findAll();
    }

    @Get(':id_ubicacion')
    async findOne( @Param('id_ubicacion') id_ubicacion: number ){
        return await this.ubicacionService.findOne( id_ubicacion );
    }

    @Delete(':id_ubicacion')
    async delete( @Param('id_ubicacion') id_ubicacion: number ){
        return await this.ubicacionService.delete( id_ubicacion );
    }

}
