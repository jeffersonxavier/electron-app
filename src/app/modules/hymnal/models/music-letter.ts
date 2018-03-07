import { MusicType } from '../enums';
import { Strophe } from './strophe';

export class MusicLetter {
  hymnalId: String;
  title: String;
  author: String;
  musicNumber: Number;
  strophes: Array<Strophe>;
  chorus: Strophe;
  type: MusicType = MusicType.chorusRepeat;
}
