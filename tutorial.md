---
title: Jogo da Pinha
description: Tutorial de jogo dos reflexos para micro:bit
author: Br.ino
---

# Jogo da Pinha

## {Passo 1}

Para começar vamos criar nossas ``||variables:Variáveis||`` que é o que será modificado ou controlado durante nosso Jogo.
Na categoria ``||variables:Variáveis||``.
Clique em ``||variables:Fazer uma Variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Sabrina||``.

## {Passo 2}

Na categoria ``||variables:Variáveis||``.
Clique em ``||variables:Fazer uma Variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Pinha||``.

## {Passo 3}

Agora vamos posicionar ``||variables:Sabrina||`` no nosso @boardname.
Pegue um bloco ``||basic:no iniciar||`` em ``||basic:Básico||``.
Ainda na categoria ``||variables:Variáveis||``.
Arraste o bloco que começa com ``||variables:definir||`` para dentro do nosso bloco ``||basic:no iniciar||``.
Em seguida dentro de ``||variables:definir||`` mude a ``||variables:Variável||`` para ``||variables:Sabrina||``.
```blocks
let Sabrina = 0
```

## {Passo 4}

Abaixo de todas as categorias temos um botão escrito ``||advanced:Avançado||`` e ao apertar podemos encontrar a categoria ``||game:Jogo||``.
Na categoria ``||game:Jogo||``.
Arraste o bloco ``||game:criar sprite em: x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``.
Mude o y para 4.
```blocks
let Sabrina = game.createSprite(2, 4)
```
## {Passo 5}

Olhe o simulador @boardname@ na tela. Já podemos ver um dos LEDS acesos ao centro na parte de baixo, esse led é o que iremos controlar no jogo.

## {Passo 6}

Faremos os mesmos passos para a criação da ``||variables:Pinha||``.
Na categoria ``||variables:Variáveis||`` use o bloco que começa com ``||variables:definir||`` para dentro do nosso bloco ``||basic:no iniciar||``.
Em seguida dentro de ``||variables:definir||`` mude a ``||variables:Variável||`` para ``||variables:Pinha||``.
```blocks
let Sabrina = game.createSprite(2, 4)
let Pinha = 0
```

## {Passo 7}

Na categoria ``||game:Jogo||``.
Arraste o bloco ``||game:criar sprite em: x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``.
Mude o y para 0.
```blocks
let Pinha = game.createSprite(2, 0)
let Sabrina = game.createSprite(2, 4)
```

## {Passo 8}

Na categoria ``||math:Matemática||``.
Mude o y para 0.
Arraste o bloco ``||math:escolher aleatório||`` para dentro do x do nosso bloco ``||game:criar sprite em||``.
E no bloco ``||math:escolher aleatório||`` mude o segundo número para 4.
```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
let Sabrina = game.createSprite(2, 4)
```

## {Passo 9}

Olhe o simulador @boardname@ na tela. Já podemos ver dois dos LEDS acesos, o de cima será a ``||variables:Pinha||`` e o de baixo a ``||variables:Sabrina||``.

## {Passo 10}

Agora vamos fazer o código para movimentação.
Para isso, adicione o bloco ``||input:no botão pressionado||`` e coloque o botão B.
E dentro dele adicione o bloco que termina em ``||game:sprite mover por 1||``.
E mude sprite para ``||variables:Sabrina||``.
Assim já conseguimos nos movimentar para o lado esquerdo.

```blocks
let Sabrina = game.createSprite(2, 4)
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
```

## {Passo 11}

Para fazer a movimentação para o lado direito adicione o bloco ``||input:no botão pressionado||`` e coloque o botão A.
E dentro dele adicione o bloco que termina em ``||game:sprite mover por 1||``. 
Troque o 1 por -1.
E mude sprite para ``||variables:Sabrina||``.

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
Logo abaixo adicione o bloco que termina em ``||game:sprite alterar x por 1||``.
Mude sprite para ``||variables:Pinha||``.
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
Para isso dentro do bloco ``||basic:sempre||`` logo abaixo do bloco de ``||game:alterar||`` devemos adicionar da aba ``||logic:Lógica||`` o bloco ``||logic:se <verdadeiro> então||``.
E dentro desse bloco iremos colocar da aba ``||game:Jogo||`` o bloco ``||game:fim do jogo||``.

```blocks
basic.forever(function () {
    if (true) {
        game.gameOver()
    }
})
```

## {Passo 14}

A condição que precisa ser verdadeira para que o jogo termine é: se ``||variables:Sabrina||`` encostar na ``||variables:Pinha||``.
Para isso vamos pegar da aba ``||game:Jogo||`` o bloco ``||game:is sprite touching||`` e colocar dentro do Verdadeiro do bloco ``||logic:se||``.
Agora basta trocar sprite por ``||game:Sabrina||`` e o bloco vazio vamos colocar a ``||variables:Pinha||`` que podemos pegar dentro do bloco ``||variables:Variáveis||``  

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
let Sabrina = game.createSprite(2, 4)
basic.forever(function () {
    if (Sabrina.isTouching(Pinha)) {
        game.gameOver()
    }
})
```

## {Passo 15}

Para finalizar, devemos fazer com que a ``||variables:Pinha||`` ao chegar na última linha, volte para cima novamente.
Vamos colocar dentro do bloco ``||basic:sempre||`` e abaixo do bloco ``||logic:se||`` outro bloco ``||logic:se||``.
Mas dessa vez a condição verdadeira será um bloco de comparação de igualdade, que podemos achar em ``||logic:Lógica||``
```blocks
basic.forever(function () {
    if (0 == 0) {
        
    }
})
```

## {Passo 16}

Devemos trocar o primeiro número 0 pelo bloco de ``||game:Jogo||`` ``||game:sprite x||``.
Agora podemos trocar "sprite" para nossa variável ``||variables:Pinha||`` e x devemos mudar para y.
E o segundo 0 trocamos por 4.
Assim o Jogo estará sempre verificando o y que diz qual fileira nossa ``||variables:Pinha||`` está, caso esteja na fileira 4, ou seja na última, devemos fazer com que ela volte para cima.
```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        
    }
})
```

## {Passo 17}

Dentro do nosso último bloco ``||logic:se||`` vamos adicionar um bloco ``||basic:Básico||`` ``||basic:Pausa||``.
E dois bloco de ``||game:Jogo||`` ``||game:sprite definir x para 0||`` e mudar sprite para ``||variables:Pinha||``.
```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        Pinha.set(LedSpriteProperty.X, 0)
        Pinha.set(LedSpriteProperty.X, 0)
    }
})
```

## {Passo 18}

Agora vamos mudar o x do primeiro bloco ``||game:definir||`` para y.
No segundo bloco ``||game:definir||`` devemos mudar o 0 para um bloco de ``||math:Matemática||`` o ``||math:escolher aleatório||`` e igual fizemos na criação da ``||variables:Pinha||`` trocar o último número por 4
```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        Pinha.set(LedSpriteProperty.X, 0)
        Pinha.set(LedSpriteProperty.Y, 4)
    }
})
```

## {Passo 19}

Com o Jogo finalizado, agora conecte seu @boardname e clique em Baixar, e divirta-se

```template
basic.forever(function() {})
```