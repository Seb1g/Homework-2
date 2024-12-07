export {};
const readline = require('readline');

class Main {
  main(y: number): number {
    for (let a = 10; a < 100; a++) {
      let b = y - a; // b - последняя цифра трёхзначного числа
      if (b >= 0 && b < 10) { // b должна быть цифрой (от 0 до 9)
        return a * 10 + b; // Вернем трёхзначное число
      }
    }
    return -1;
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
      const loadout: number = parseInt(answer)
      const result: number = this.main.main(loadout)

      console.log(result);
      this.rl.close();
    });
  }
};

const app = new App();
app.run();