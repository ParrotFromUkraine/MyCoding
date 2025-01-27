console.log('GameCore 2.1v')
class Player {
  constructor(name, activeHand) {
      this.name = name;
      this.activeHand = activeHand;
      this.actions = ['hit', 'miss'];
  }

  serve() {
      console.log(`${this.name} починає гру`);
  }

  hit() {
      console.log(`${this.name} відбиває м'яч!`);
  }

  miss() {
      console.log(`${this.name} пропускає м'яч!`);
  }

  getRandomAction() {
      return this.actions[Math.floor(Math.random() * this.actions.length)];
  }
}

class Scoreboard {
  constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.scores = { [player1.name]: 0, [player2.name]: 0 };
  }

  addPoint(player) {
      this.scores[player.name]++;
  }

  displayScore() {
      console.log(`Рахунок: ${this.player1.name} ${this.scores[this.player1.name]} - ${this.player2.name} ${this.scores[this.player2.name]}`);
  }

  hasWinner() {
      return this.scores[this.player1.name] >= 21 || this.scores[this.player2.name] >= 21;
  }

  getWinner() {
      if (this.scores[this.player1.name] >= 21) return this.player1.name;
      if (this.scores[this.player2.name] >= 21) return this.player2.name;
      return null;
  }
}

class GameEngine {
  constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.scoreboard = new Scoreboard(player1, player2);
  }

  play() {
      let currentPlayer = this.player1;
      let opponent = this.player2;

      currentPlayer.serve();

      while (!this.scoreboard.hasWinner()) {
          const action = currentPlayer.getRandomAction();

          if (action === 'hit') {
              currentPlayer.hit();
              this.scoreboard.addPoint(opponent);
          } else {
              currentPlayer.miss();
              this.scoreboard.addPoint(currentPlayer);
          }

          this.scoreboard.displayScore();

          [currentPlayer, opponent] = [opponent, currentPlayer];
      }

      console.log(`Переможець: ${this.scoreboard.getWinner()}!`);
  }
}

const player1 = new Player('Максим', 'ліва');
const player2 = new Player('Ігорь', 'права');
const game = new GameEngine(player1, player2);

game.play();