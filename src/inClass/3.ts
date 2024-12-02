export {};
const readline = require('readline');

class Main {
  main(number: number): number {
    return Number.isInteger(number / 5) ? 5 : 3
  };
}

class App {
  private main: Main;
  private rl: any;

  constructor() {
    this.main = new Main();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }
  run(): void {
    this.rl.question('Enter your number: ', (input: string) => {
      const loadout = parseInt(input);
      const result = this.main.main(loadout);

      console.log(result)
      this.rl.close();
    })
  }
}

const app = new App();
app.run();