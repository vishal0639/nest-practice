import { CreateSongDto } from './dto/create-song-dto';
export declare class SongsService {
    private readonly songs;
    create(CreateSongDto: CreateSongDto): CreateSongDto[];
    findAll(): CreateSongDto[];
}
