export {};
const readline = require('readline');

class Main {
  main(array: Array<string>): Array<string> {
    let result: Array<string> = [];
    for (let i = 0; i < parseInt(array[2]); i++) {
      if (i % 2 === 0) {
        result.push(array[0]);
      } else {
        result.push(array[1]);
      }
    }
    return result;
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
    this.rl.question('Enter your arr(oneWord, twoWord, 4): ', (input: string) => {
      const loadout: Array<string> = input.split(',').map((item) => item.trim())
      const result: Array<string> = this.main.main(loadout);
      console.log(result.join(' '));
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()