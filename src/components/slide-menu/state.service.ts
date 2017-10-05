export class State {
  constructor(
    public name: string,
    public state = 'void'
  ) {}

  toggleState() {
    this.state = this.state === 'void' ? 'in' : 'void';
  }
}
