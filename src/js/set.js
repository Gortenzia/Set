export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Объект уже существует');
    } else {
      this.members.add(char);
    }
  }

  addAll(...newChar) {
    newChar.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    this.arr = Array.from(this.members);
  }
}
