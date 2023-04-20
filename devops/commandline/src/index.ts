// import { Cli } from 'clipanion';

// import { CheckPackageCommitCommand } from './commands/CheckPackageCommitCommand';
// import { HelloCommand } from './commands/HelloCommand';

// const [, , ...args] = process.argv;

// const cli = new Cli({
//   binaryLabel: `depromeet 5th team`,
//   binaryName: 'depromeet',
// });

// cli.register(CheckPackageCommitCommand);
// cli.runExit(args, Cli.defaultContext);

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

cli.register(HelloCommand);