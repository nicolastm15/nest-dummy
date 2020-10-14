import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from 'src/cats/service/cats.service';
import { CatDto } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor (private catsService:CatsService){};
  @Post()
  create(@Body() catDto: CatDto) {
this.catsService.create(catDto)  }

  @Get()
  findAll(@Query() query) {
this.catsService.findALL();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this method returns the #${id} cat`;
  }

  @Put(':id')
  update(@Body() catDto: CatDto, @Param('id') id: string) {
    return `This method updates the cat #${id} with the name ${catDto.name}, breed ${catDto.breed} and ${catDto.age} `;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This method deletes the cat #${id}`;
  }
}
