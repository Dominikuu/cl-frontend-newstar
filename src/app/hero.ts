export class Hero {
  id: number;
  name: string;
  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }
}
