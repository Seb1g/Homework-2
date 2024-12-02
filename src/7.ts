export {};
const readline = require('readline');

class Main {
  main(a: number, b: number): number {
    return b / a;
  };
};

class App {
  private main: Main;
  private rl: any;
  constructor() {
    this.main = new Main();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  };
  run(): void {
    this.rl.question('Please enter a and b(a, b): ', (answer: string) => {
      const payload: Array<number> = answer.split(',').map((item) => parseInt(item.trim()));
      const result: number = this.main.main(payload[0], payload[1]);
      console.log(result);

      this.rl.close();
    });
  }
};

const app = new App();
app.run();