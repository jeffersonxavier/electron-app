import { MusicType } from '../enums';

export class MusicLetter {
  hymnalId: String;
  musicNumber: Number;
  verse: Array<String>;
  chorus: String;
  type: MusicType;
}
