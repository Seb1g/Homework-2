export {};
const readline = require('readline');

class Main {
  main(a: number, b: number) {
    return
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
    this.rl.question('', (answer: string) => {
      
      this.rl.close();
    });
  }
};

const app = new App();
app.run();