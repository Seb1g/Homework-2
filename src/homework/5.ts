export {};
const readline = require('readline');

class Main {
  main(number: number): Array<string> {
    const a: number = number + 1;
    const b: number = number - 1;
    const c: Array<string> = [`The next number for the number ${number} is ${a}.`, 
      `The previous number for the number ${number} is ${b}.`];
    return c;
  }
}

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
    this.rl.question('Please enter a number: ', (answer: string) => {
      const number: number = parseInt(answer);
      const result: Array<string> = this.main.main(number);
      result.map((item: string) => console.log(item));

      this.rl.close();
    });
  }
};

const app = new App();
app.run();