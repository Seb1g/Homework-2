export {};
const readline = require('readline');

class ConcatString {
  concat(a: Array<string>, b: string): string {
    return `${a[0]} "${b}"${a[1]}`;
  }
}

class App {
  private concatString: ConcatString;
  private rl: any;
  constructor() {
    this.concatString = new ConcatString();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  };
  run(): void {
    this.rl.question('Enter your phrase: ', (input: string): any => {
      const startString = ["Все говорят", ", а ты купи слона!"];
      const result = this.concatString.concat(startString, input);
      console.log(result);
      this.rl.close();
    })
  }
}

const app = new App();
app.run();