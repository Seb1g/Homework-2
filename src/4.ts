export {};
const readline = require('readline');

class Main {
  dataLength(words: string): Array<number> {
    const a = this.stringToArr(words);
    const b = a[0].length + a[1].length + 2;
    return [a[0].length, a[1].length, b];
  };
  stringToArr(a: string): Array<string> {
    return a.split(',').map((item) => item.trim());
  };
};

class App {
  private main: Main;
  private rl: any;
  constructor() {
    this.main = new Main();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  };
  run(): void {
    this.rl.question('Enter your words(one, two): ', (words: string) => {
      const result: Array<number> = this.main.dataLength(words);
      console.log(`${result[0]}\n${result[1]}\n${result[2]}`);
      this.rl.close();
    })
  };
};

const app = new App();
app.run();