const {Command, cli} = require('clipanion');

export class HelloCommand extends Command {
  static usage = Command.Usage({
    description: 'Say hello',
    examples: [
      ['Say hello to the world', 'hello'],
      ['Say hello to a specific name', 'hello John'],
    ],
  });

  @Command.String({required: false})
  name!: string;

  async execute() {
    console.log(`Hello, ${this.name ?? 'world'}!`);
  }
}