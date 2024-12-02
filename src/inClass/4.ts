export {};
const readline = require('readline');

class Main {
  main(array: Array<number>): Array<number> {
    return array[0] < array[1] ? array : [array[1], array[0]]
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
    this.rl.question('Enter your arr(1, 2): ', (input: string) => {
      const loadout = input.split(',').map((item) => parseInt(item.trim()))
      const preResult = this.main.main(loadout);
      const result = preResult.join(' ')
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()