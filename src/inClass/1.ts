export {};
const readline = require('readline');

class Main {
  main(array: Array<number>): number {
    return array[0] > array[1] ? array[2] : array[3]
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
    this.rl.question('Enter your arr(1, 2, 3, 4): ', (input: string) => {
      const loadout: Array<number> = input.split(',').map((item) => parseInt(item.trim()))
      const result: number = this.main.main(loadout);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()