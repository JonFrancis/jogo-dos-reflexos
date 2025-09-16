# Jogo da Pinha

## {Criando Variáveis}

Para começar vamos criar nossas ``||variables:Variáveis||``, que são os valores que serão modificados ou controlados durante o nosso jogo.  
Na categoria ``||variables:Variáveis||``, clique em ``||variables:Fazer uma variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Sabrina||``.

## {Criando Variáveis}

Na categoria ``||variables:Variáveis||``, clique em ``||variables:Fazer uma variável||`` e nomeie a ``||variables:Variável||`` como ``||variables:Pinha||``.

## {Criando Variáveis}

Agora vamos posicionar ``||variables:Sabrina||`` no nosso @boardname@.  
Pegue um bloco ``||basic:no iniciar||`` em ``||basic:Básico||``.  
Ainda na categoria ``||variables:Variáveis||``, arraste o bloco que começa com ``||variables:definir||`` para dentro do nosso bloco ``||basic:no iniciar||``.  
Em seguida, dentro de ``||variables:definir||``, mude a ``||variables:Variável||`` para ``||variables:Sabrina||``.

```blocks
let Sabrina = 0
```

## {Criando Variáveis}

Abaixo de todas as categorias temos o botão ``||advanced:Avançado||`` e, ao clicar, encontramos a categoria ``||game:Jogo||``.  
Na categoria ``||game:Jogo||``, arraste o bloco ``||game:criar sprite em x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``.  
Mude o **y** para **4**.

```blocks
let Sabrina = game.createSprite(2, 4)
```

## {Criando Variáveis}

Faremos os mesmos passos para a criação da ``||variables:Pinha||``.  
Na categoria ``||variables:Variáveis||``, use o bloco que começa com ``||variables:definir||`` dentro do nosso bloco ``||basic:no iniciar||``.  
Em seguida, em ``||variables:definir||``, mude a ``||variables:Variável||`` para ``||variables:Pinha||``.

```blocks
let Sabrina = game.createSprite(2, 4)
let Pinha = 0
```

## {Criando Variáveis}

Na categoria ``||game:Jogo||``, arraste o bloco ``||game:criar sprite em x:2 y:2||`` para dentro do nosso bloco ``||variables:definir||``.  
Mude o **y** para **0**.

```blocks
let Pinha = game.createSprite(2, 0)
let Sabrina = game.createSprite(2, 4)
```

## {Criando Variáveis}

Na categoria ``||math:Matemática||``, arraste o bloco ``||math:escolher aleatório||`` para o **x** do nosso bloco ``||game:criar sprite em||``.  
No bloco ``||math:escolher aleatório||``, mude o segundo número para **4**.  
Assim a ``||variables:Pinha||`` pode nascer em qualquer coluna de **0** a **4**.

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
let Sabrina = game.createSprite(2, 4)
```

## {Movimentação}

Agora vamos fazer o código para movimentação da ``||variables:Sabrina||``.  
Adicione o bloco ``||input:no botão pressionado||`` e escolha o botão **B**.  
Dentro dele, adicione o bloco ``||game:sprite mover por 1||``.  
Mude **sprite** para ``||variables:Sabrina||``.  
Assim, com **B**, conseguimos nos movimentar para a **direita**.

```blocks
let Sabrina = game.createSprite(2, 4)
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
```

## {Movimentação}

Para se movimentar para a **esquerda**, adicione outro bloco ``||input:no botão pressionado||`` e escolha o botão **A**.  
Dentro dele, adicione o bloco ``||game:sprite mover por 1||`` e troque o **1** por **-1**.  
Mude **sprite** para ``||variables:Sabrina||``.

```blocks
let Sabrina = game.createSprite(2, 4)
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
input.onButtonPressed(Button.A, function () {
    Sabrina.move(-1)
})
```

## {Movimentação}

Para fazer a ``||variables:Pinha||`` descer, na categoria ``||basic:Básico||`` adicione o bloco ``||basic:sempre||``.  
Dentro dele, adicione o bloco ``||basic:pausa (ms)||`` e mude o número para **500**.  
Logo abaixo, adicione o bloco ``||game:sprite alterar x por 1||``, mude **sprite** para ``||variables:Pinha||`` e troque **x** por **y**.

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    Pinha.change(LedSpriteProperty.Y, 1)
})
```

## {Movimentação}

Agora que já temos as movimentações, vamos verificar a **colisão**.  
A ``||variables:Sabrina||`` precisa **desviar** das ``||variables:Pinhas||``.  
Para isso, dentro do bloco ``||basic:sempre||``, logo abaixo do bloco de ``||game:alterar||``, adicione da aba ``||logic:Lógica||`` o bloco ``||logic:se <verdadeiro> então||``.  
E dentro desse bloco vamos colocar da aba ``||game:Jogo||`` o bloco ``||game:fim do jogo||``.

```blocks
basic.forever(function () {
    if (true) {
        game.gameOver()
    }
})
```

## {Colisão}

A condição para o jogo terminar é: se ``||variables:Sabrina||`` encostar na ``||variables:Pinha||``.  
Pegue da aba ``||game:Jogo||`` o bloco ``||game:is sprite touching||`` e coloque dentro do **verdadeiro** do bloco ``||logic:se||``.  
Troque **sprite** por ``||variables:Sabrina||`` e, no espaço ao lado, coloque a variável ``||variables:Pinha||`` que está em ``||variables:Variáveis||``.

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
let Sabrina = game.createSprite(2, 4)
basic.forever(function () {
    if (Sabrina.isTouching(Pinha)) {
        game.gameOver()
    }
})
```

## {Resetar a Pinha}

Para finalizar, precisamos fazer com que a ``||variables:Pinha||``, ao chegar na última linha, **volte para cima** novamente.  
Dentro do mesmo ``||basic:sempre||``, abaixo do primeiro ``||logic:se||``, adicione **outro** ``||logic:se||``.  
Desta vez, a condição verdadeira será um **bloco de comparação de igualdade** (``==``) que está em ``||logic:Lógica||``.

```blocks
basic.forever(function () {
    if (0 == 0) {
        
    }
})
```

## {Resetar a Pinha}

Troque o primeiro **0** por ``||game:sprite x||`` da aba ``||game:Jogo||``.  
Mude **sprite** para ``||variables:Pinha||`` e troque **x** por **y**.  
Troque o segundo **0** por **4**.  
Assim o jogo verifica se o **y** da ``||variables:Pinha||`` está na linha **4** (a última).  

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        
    }
})
```

## {Resetar a Pinha}

Dentro desse segundo ``||logic:se||``, adicione um ``||basic:pausa (ms)||`` para dar um tempinho.  
Depois, vamos **resetar** a posição da ``||variables:Pinha||``: ela deve voltar para **cima** e nascer em uma **coluna aleatória**.  
Para isso, use dois blocos ``||game:sprite definir … para …||`` da aba ``||game:Jogo||``.

- No primeiro, mude para **definir y para 0**.  
- No segundo, mude para **definir x** e coloque um ``||math:escolher aleatório 0 a 4||``.  

```blocks
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        Pinha.set(LedSpriteProperty.Y, 0)
        Pinha.set(LedSpriteProperty.X, randint(0, 4))
    }
})
```

## {Resetar a Pinha}

Pronto.  
Agora a ``||variables:Pinha||`` desce, e quando chega na última linha volta para cima em outra coluna.  
Tente ajustar o tempo da ``||basic:pausa (ms)||`` para deixar o jogo mais fácil ou mais difícil.

## {Finalizado}

Com o jogo finalizado, conecte seu @boardname@ e clique em ``|Baixar|``.  
Divirta-se!

```template
basic.forever(function () { })
```
