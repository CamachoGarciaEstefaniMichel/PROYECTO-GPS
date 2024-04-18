import { Module } from '@nestjs/common';
import { UbicacionController } from './gps.controller';
import { UbicacionService } from './gps.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubicaciones } from './entities/gps.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Ubicaciones,
    ])],
    controllers: [UbicacionController],
    providers: [UbicacionService]
})
export class UbicacionModule {}
