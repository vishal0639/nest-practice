import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(CreateSongDto: CreateSongDto): CreateSongDto[];
    findAll(): CreateSongDto[];
    findOne(): string;
    update(): string;
    delete(): string;
    modify(): string;
}
