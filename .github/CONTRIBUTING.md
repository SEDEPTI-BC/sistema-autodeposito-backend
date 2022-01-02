<h1> Contribuindo para o projeto 💡 </h1>

Primeiramente, obrigado por estar pensando em contribuir para o projeto, seja muito bem-vindo(a)!🎉

#### Tabela de conteúdo

- [Código de conduta](#código-de-conduta)
- [Não desejo ler, quero apenas contribuir](#não-desejo-ler-quero-apenas-contribuir)
- [Requisitos para contribuir com o projeto](#requisitos-para-contribuir-com-o-projeto)
- [Como posso contribuir?](#como-posso-contribuir)
- [Convenções e padrões utilizados](#convenções-e-padrões-utilizados)
  - [Geral](#geral)
  - [Javascript](#javascript)
- [Observações](#observacoes)

## Código de conduta

O presente projeto e todos os que nele contribuem ou contribuíram estão sob observação da Secretaria de Desenvolvimento de Produtos Tecnológicos e Informacionais - SEDEPTI da Biblioteca Central da Universidade Federal do Pará. Para participar, se é esperado da pessoa a familiaridade com código, educação e ética com o desenvolvimento, com a organização e com as pessoas envolvidas.

Para reportar qualquer tipo de comportamento inapropriado ou inaceitável, encaminhe o fato para o e-mail: **suporte.sedepti@gmail.com**. Ou entre em contato com o número de telefone: **3201-7209/7787/7600**.

## Não desejo ler, quero apenas contribuir

Primeiramente, entre em contato com os administradores da SEDEPTI para identificar os principais *bugs* ou *features* que estão em aberto no projeto, e em seguida, de acordo com os padrões utilizados no projeto, enviar as contribuições em forma de *Pull requests*.

## Requisitos para contribuir com o projeto

* Ter conhecimentos de desenvolvimento web back-end com Javascript, Express, testes unitários em Jest, MySQL e Sequelize
* Ter conhecimentos com as tecnologias NodeJS e NPM

## Como posso contribuir?

* Realizando a revisão da documentação produzida e auxiliando em atualizações
* Reportando *bugs* ou adicionando novas *features*
* Auxiliando na revisão de código e no controle de versão e *releases*

## Convenções e padrões utilizados

### Geral

* Utilize a língua inglesa como padrão de comunicação no código e comentários
* Mantenha as mesmas configurações (se possível) utilizados pelo autor do projeto. Nesse caso, sistemas Linux baseados em Debian 10^ ou sistemas Unix
* Para sistemas Windows deve-se reportar incompatibilidades ou inconsistências com os administradores do projeto antes de realizar *commits* ou *pull requests*

### Linter

O *linter* utilizado para a codificação no projeto é o *Prettier*, para melhor entendimento das regras de padronização, ver as configurações no [.prettierrc](../../sistema-autodeposito-backend/.prettierrc)

### Javascript

* Utilize o padrão *Pascal Case* para nomes de classes e models
* Utilize o padrão *UPPER CASE* para nomes de constantes
* Utilize o padrão *snake_case* para chaves de objeto JSON enviados em requisições, labels de bancos de dados (colunas, campos, etc) e mesclado com o *UPPER CASE* em nomes de constantes
* Para qualquer outra situação que não se encaixe nas três convenções acima mencionadas, utilize o padrão *camel Case*
* Utilize ```_``` (underscore) para parâmetros de funções que não serão utilizados no lugar de ```()```
> Não confundir com o identificador ```_ = require('lodash')```, este também deve ser respeitado, mas como chamada do ḿódulo *lodash*

# Observações

Qualquer dúvida deve ser encaminhada para os administradores
