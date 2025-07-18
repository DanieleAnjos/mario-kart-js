# 🏁 Mario Kart.JS – Desafio de Projeto do Felipão

Este projeto simula uma corrida entre personagens inspirada no universo do Mario Kart, utilizando JavaScript puro no terminal. Desenvolvido como desafio proposto por Felipão, o objetivo é aplicar conceitos como objetos, estruturas condicionais, aleatoriedade e manipulação de dados de forma lúdica.

---

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>


## 🎮 Regras & Mecânicas

- Dois personagens são escolhidos para competir, cada um com os atributos:
  - **Velocidade**
  - **Manobrabilidade**
  - **Poder**
  - **Pontos** (inicia com 0)

- A corrida é composta por **5 rodadas**, e a cada rodada um **bloco da pista** é sorteado:
  - **Reta**: soma-se o valor do dado + Velocidade
  - **Curva**: soma-se o valor do dado + Manobrabilidade
  - **Confronto**: soma-se o valor do dado + Poder (quem perde, perde 1 ponto, sem valor negativo)

- Quem tiver **mais pontos ao final das 5 rodadas**, vence a corrida.

---

## 🚀 Como Executar

1. **Clone o projeto:**

   ```bash
   git clone https://github.com/DanieleAnjos/mario-kart-js.git
   cd mario-kart-js
   ```

2. **Execute o jogo:**

   ```bash
   node src/index.js
   ```

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6)
- readline (para entrada no terminal)

---


## 📋 Passo a Passo da Execução

1. Criei um objeto com os personagens, incluindo seus atributos.
2. Solicitei que o usuário escolhesse dois personagens via terminal.
3. Programei o sorteio de 5 blocos aleatórios da pista.
4. Para cada rodada:
   - Sorteio do tipo de bloco (reta, curva ou confronto)
   - Geração aleatória de dados (1 a 6) para cada jogador
   - Soma dos atributos com o dado
   - Cálculo de pontos
   - Prevenção de pontuação negativa
5. Exibi o vencedor com base nos pontos totais.
6. Refatorei o código para torná-lo mais modular e legível.

---

## 🏆 Exemplo de Saída no Terminal

```
============ MARIO KART ==============

Escolha o personagem:
Player1 (ex: mario): mario
Player2 (ex: peach): yoshi

Rodada 1: CURVA
Mario tirou 3 + Manobrabilidade(3) = 6
Yoshi tirou 4 + Manobrabilidade(4) = 8
-> Yoshi venceu esta rodada!

...

🏁 Vencedor: Yoshi com 4 pontos!
```

---

## 👨‍💻 Autor

Projeto desenvolvido por felipeAguiarCode e aprimorado por DanieleAnjos.
