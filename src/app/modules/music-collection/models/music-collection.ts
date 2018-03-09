export class MusicCollection {
  _id: String;
  name: String;
  informations: String;

  constructor(name: String, informations: String) {
    this.name = name;
    this.informations = informations;
  }
}
