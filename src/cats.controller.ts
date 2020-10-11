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
import { CatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() catDto: CatDto) {
    return `This method creates a new cat with name ${catDto.name}`;
  }

  @Get()
  findAll(@Query() query) {
    return `This method lists all cats (limit: ${query.limit})`;
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
