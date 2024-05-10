import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private readonly movies : Movie[] = [];
  private id = 1;

  create(createMovieDto: CreateMovieDto) {
    const newMovie = {
      id: this.id,
      name : createMovieDto.name,
      category: createMovieDto.category,
      description: createMovieDto.description,
      reviews: createMovieDto.reviews,
      releaseYear: createMovieDto.releaseYear

    }
    this.id = this.id +1;

    this.movies.push(newMovie);

    return newMovie


  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
