const readline = require('readline');

const personagens = {
  mario: {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0,
  },
  peach: {
    Nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0,
  },
  yoshi: {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0,
  },
  bowser: {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0,
  },
  luigi: {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0,
  },
  donkeykong: {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0,
  }
};

function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => resolve(resposta.toLowerCase()));
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log('=====================================================');
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}\n`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "Reta") {
      totalTestSkill1 = diceResult1 + character1.Velocidade;
      totalTestSkill2 = diceResult2 + character2.Velocidade;

      await logRollResult(
        character1.Nome,
        "velocidade",
        diceResult1,
        character1.Velocidade
      );

      await logRollResult(
        character2.Nome,
        "velocidade",
        diceResult2,
        character2.Velocidade
      );

    } else if (block === "Curva") {
      totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
      totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

      await logRollResult(
        character1.Nome,
        "manobrabilidade",
        diceResult1,
        character1.Manobrabilidade
      );

      await logRollResult(
        character2.Nome,
        "manobrabilidade",
        diceResult2,
        character2.Manobrabilidade
      );

    } else if (block === "Confronto") {
      let powerResult1 = diceResult1 + character1.Poder;
      let powerResult2 = diceResult2 + character2.Poder;

      console.log(`${character1.Nome} confrontou com ${character2.Nome}! 🥊`);

      await logRollResult(
        character1.Nome,
        "poder",
        diceResult1,
        character1.Poder
      );

      await logRollResult(
        character2.Nome,
        "poder",
        diceResult2,
        character2.Poder
      );

      if (powerResult1 > powerResult2 && character2.Pontos > 0) {
        console.log(
          `${character1.Nome} venceu o confronto! ${character2.Nome} perdeu 1 ponto 🐢`
        );
        character2.Pontos--;
      } else if (powerResult2 > powerResult1 && character1.Pontos > 0) {
        console.log(
          `${character2.Nome} venceu o confronto! ${character1.Nome} perdeu 1 ponto 🐢`
        );
        character1.Pontos--;
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.Nome} marcou um ponto!`);
      character1.Pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.Nome} marcou um ponto!`);
      character2.Pontos++;
    }
  }
}

async function declareWinner(character1, character2) {

  console.log(`🏁 Resultado Final:`);
  console.log(`${character1.Nome} - Pontos: ${character1.Pontos}`);
  console.log(`${character2.Nome} - Pontos: ${character2.Pontos}`);

  if (character1.Pontos > character2.Pontos) {
    console.log(`${character1.Nome} venceu a corrida! Parabéns! 🏆`);
  } else if (character2.Pontos > character1.Pontos) {
    console.log(`${character2.Nome} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate! 🤝");
  }

}

async function main() {
console.clear();

console.log("===============================================");
console.log("🎮         DESAFIO: MARIO KART JS             ");
console.log("===============================================");

console.log("🏁 Bem-vindo ao circuito de corridas do Mario Kart!\n");
console.log("🕹️  Regras:");
console.log(" - 2 personagens vão competir em 5 rodadas aleatórias;");
console.log(" - Cada rodada será uma reta, curva ou confronto;");
console.log(" - Quem acumular mais pontos vence!\n");

console.log("===============================================");
console.log("🚗 Escolha seus personagens abaixo:");
console.log("===============================================\n");

const nome1 = await perguntar("👤 Nome do Player 1 (ex: mario): ");
const nome2 = await perguntar("👤 Nome do Player 2 (ex: peach): ");

console.log("\n===============================================");
console.log(`🏎️  Corrida entre ${nome1.toUpperCase()} e ${nome2.toUpperCase()} vai começar!`);
console.log("===============================================\n");


  const character1 = personagens[nome1];
  const character2 = personagens[nome2];

  if (!character1 || !character2) {
    console.log("Um ou ambos os personagens não são válidos. Tente novamente.");
    rl.close();
    return;
  }

  await playRaceEngine(character1, character2);
  console.log('=====================================================');
  await declareWinner(character1, character2)
  console.log('=====================================================');

  rl.close();
}

main();
