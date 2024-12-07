export {};
const readline = require('readline');

class Main {
  main(string: string): string {
    return string === 'данный' ? 'зачеркнуть' : 'оставить';
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
    })
  }
  run(): void {
    this.rl.question('Enter your word: ', (input: string) => {
      const loadout: string = input
      const result = this.main.main(loadout);
      console.log(result);
    
      this.rl.close();
    })
  }
}

const app = new App();
app.run()