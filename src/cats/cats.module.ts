import { Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';

@Module({ imports:[], providers: [CatsService], controllers: [CatsController] })
export class CatsModule {}
