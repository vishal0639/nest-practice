import {
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsDateString,
  IsMilitaryTime,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly artists: string[];

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate: Date;
}
