import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ParseUUIDPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { MongoExceptionFilter } from './filters/pokemonFilter';
import { ParseMondoIdPipe } from '../common/pipes/parse-mondo-id.pipe';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  // @UseFilters( MongoExceptionFilter )
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update( term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id',  ParseMondoIdPipe) term: string) {
    return this.pokemonService.remove(term);
  }
}
