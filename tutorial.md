---
title: Jogo dos Reflexos
description: Tutorial de jogo dos reflexos para micro:bit
author: João Francisco - Br.ino
---

# Jogo dos Reflexos

## {Passo 1}

Na categoria ``||variables:Variáveis||`` na Caixa de Ferramentas.
Clique em ``||variables:Fazer uma Variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Sabrina||``

## {Passo 2}

Na categoria ``||variables:Variáveis||`` na Caixa de Ferramentas.
Clique em ``||variables:Fazer uma Variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Pinha||``

## {Passo 3}

Na categoria ``||variables:Variáveis||`` na Caixa de Ferramentas.
Arraste o bloco que começa com ``||variables:definir||`` para dentro do nosso bloco ``||basic:no iniciar||``
Em seguida dentro de ``||variables:definir||`` mude a ``||variables:Variável||`` para ``||variables:Sabrina||``
```blocks
let Sabrina = 0
```

## {Passo 4}

Na categoria ``||game:Jogo||`` na Caixa de Ferramentas.
Arraste o bloco ``||game:criar sprite em: x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``
Mude o y para 4
```blocks
let Jogador = game.createSprite(2, 4)
```
## {Passo 5}

Olhe o simulador @boardname@ na tela. Já podemos ver um dos LEDS acesos, esse led é o que iremos controlar no jogo.

## {Passo 6}

Na categoria ``||variables:Variáveis||`` na Caixa de Ferramentas.
Arraste mais um bloco que começa com ``||variables:definir||`` para dentro do nosso bloco ``||basic:no iniciar||``
Em seguida dentro de ``||variables:definir||`` mude a ``||variables:Variável||`` para ``||variables:Pinha||``
```blocks
let Sabrina = game.createSprite(2, 4)
let Pinha = 0
```

## {Passo 7}

Na categoria ``||game:Jogo||`` na Caixa de Ferramentas.
Arraste o bloco ``||game:criar sprite em: x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``
Mude o y para 0
```blocks
let Objeto = game.createSprite(2, 0)
let Jogador = game.createSprite(2, 4)
```

## {Passo 8}

Na categoria ``||math:Matemática||`` na Caixa de Ferramentas.
Arraste o bloco ``||math:escolher aleatório||`` para dentro do x do nosso bloco ``||game:criar sprite em||``
Mude o y para 0
```blocks
let Objeto = game.createSprite(randint(0, 4), 0)
let Jogador = game.createSprite(2, 4)
```

## {Passo 9}

Olhe o simulador @boardname@ na tela. Já podemos ver dois dos LEDS acesos, o de cima será o ``||variables:Objeto||`` e o de baixo o ``||variables:Jogador||``

## {Passo 10}

Agora vamos fazer o código para movimentação do ``||variables:Sabrina||``
Para isso, adicione o bloco ``||input:no botão pressionado||`` e coloque o botão B
E dentro dele adicione o bloco que termina em ``||game:mover por 1||``
E mude a ``||variables:Variável||`` dele para ``||variables:Sabrina||``
Assim já conseguimos nos movimentar para o lado esquerdo

```blocks
let Sabrina = game.createSprite(2, 4)
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
```

## {Passo 11}

Para fazer a movimentação para o lado direito adicione o bloco ``||input:no botão pressionado||`` e coloque o botão A
E dentro dele adicione o bloco que termina em ``||game:mover por 1||`` troque o 1 por -1
E mude a ``||variables:Variável||`` dele para ``||variables:Sabrina||``

```blocks
let Sabrina = game.createSprite(2, 4)
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
input.onButtonPressed(Button.A, function () {
    Sabrina.move(-1)
})
```

## {Passo 12}

Para fazer a movimentação do objeto na categoria ``||basci:Básico||`` adicione o bloco ``||basic:sempre||``.
Dentro dele adicione o bloco ``||basic:pausa(ms)||`` e mude o número para 500.
Logo abaixo adicione o bloco que termina em ``||game:alterar x por 1||``.
Mude a ``||variables:Variável||`` dele para ``||variables:Pinha||``.
E mude o x para y.

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    Pinha.change(LedSpriteProperty.Y, 1)
})
```

## {Passo 13}

Agora que já temos as movimentações, podemos ir para colisão.
``||variables:Sabrina||`` precisa desviar das ``||variables:Pinhas||``.
Para isso dentro do bloco ``||basic:sempre||`` devemos adicionar da aba ``||logic:Lógica||`` o bloco ``||logic:se <verdadeiro> então||``


```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    Pinha.change(LedSpriteProperty.Y, 1)
})
```
## {Step 4}

Vá além — tente adicionar mais blocos ``||basic:mostrar string||`` para criar uma história!.

```template
let jogador = game.createSprite(2, 2)
basic.forever(function() {})
```