import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  // local db

  private readonly songs: CreateSongDto[] = [];

  create(CreateSongDto: CreateSongDto) {
    this.songs.push(CreateSongDto);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
