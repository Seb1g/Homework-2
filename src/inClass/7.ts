export {};
const readline = require('readline');

class Main {
  main(array: Array<number>) {
    
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
    this.rl.question('Enter your arr(123, 1): ', (input: string) => {
      const loadout = input.split(',').map((item) => parseInt(item.trim()))
      const result = this.main.main(loadout);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()