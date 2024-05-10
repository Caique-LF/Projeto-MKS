import { Injectable, NotFoundException } from '@nestjs/common';
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

    return newMovie;


  }

  findAll() {
    return this.movies
  }

  findOne(id: number) {
    const movieId = this.movies.find(user => user.id === id);
     
      if (!movieId) {
        throw new NotFoundException('Filme não encontrado');
      };
      
      return movieId;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.findOne(id);

     movie.name = updateMovieDto.name;
     movie.category = updateMovieDto.category;
     movie.description = updateMovieDto.description;
     movie.reviews = updateMovieDto.reviews;
     movie.releaseYear = updateMovieDto.releaseYear;
     
    return ;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
