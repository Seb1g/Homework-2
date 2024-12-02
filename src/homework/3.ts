export {};
const readline = require('readline');

class Main {
  repeat(input: string): string {
    const loadString = `-${input.toLowerCase()}`
    return `${input.toUpperCase()}${loadString.repeat(14)}`;
  }
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
    this.rl.question('Enter your char: ', (input: string) => {
      const result: string = this.main.repeat(input);
      console.log(result)
      
      this.rl.close();
    })
  };
}

const app = new App();
app.run();