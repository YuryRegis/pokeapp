
# Consumindo API Pokémon: React + Styled-Components

<p align="center">
  <img src="https://media.giphy.com/media/rSNOd8ItQMtYQaWAnW/giphy.gif">
</p>

Este projeto-desafio teve como finalidade aplicar os estudos adquiridos durante a trilha de React da Compasso UOL. \

## Desafio proposto:
- Consumir a API pública da PokeAPI com uma aplicação em `React Native Cli` ou `Expo Bare Workflow`;
- Obrigatório leitura do endpoint de listagem de todos Pokémons;
- Os pokémons devem ser exibidos em lista e paginados;
- Ao clicar em um pokémon, exibir em uma nova tela as suas respectivas informações;

## Recursos utilizados no projeto

### Axios
Para requisições para API do Pokémon ([PokeAPI](https://pokeapi.co/)).
Saiba mais em [axios](https://www.npmjs.com/package/axios).

### Material-UI Framework
Para criação do `Stepper` e da `Barra de Progresso` foi utilizado recursos do [Framework Material-UI](https://www.npmjs.com/package/@material-ui/core).

<p align="center">
  <img src="https://media.giphy.com/media/qcnyrWCihNlO4pMfa0/giphy.gif">
</p>

### React-Router-Dom
Para construção e gerenciamento de rotas foi utilizado o [React Router](https://reactrouter.com/web/guides/quick-start). \
Rotas:
- `\` Raiz;
- `\:offset` id(offset) de paginação;
- `\Card\:id` exibe card do pokémon (informações individuais do pokémon através do seu respectivo ID);

### Lottie (Lottie )
Para as animações de `loading` da página foi utilizado o [Lottie](https://airbnb.io/lottie/#/). \
Lottie é uma biblioteca desenvolida pela Airbnb capaz de converter animações em arquivos JSON com `Bodymovin` que pode ser renderizado nativamente na Web ou no mobile. \
Saiba mais em [Lottie com react-lottie](https://www.npmjs.com/package/react-lottie);

<p align="center">
  <img src="https://media.giphy.com/media/CbF0iM6MEBhWn9AB6t/giphy.gif">
</p>

#### Créditos de arte
- Pikachu: [Ben Kuhlmann](https://lottiefiles.com/user/309694);
- Loading text: [Jian Zhang](https://lottiefiles.com/user/124972)

### Styled-Components
Para componentizar estilos CSS com React JS.
Saiba mais em [styled-components site](https://styled-components.com/).

# Projeto criado e gerenciado com YARN e CRA

Este projeto foi inicializado com [Create React App (CRA)](https://github.com/facebook/create-react-app). 

## Scripts

No diretório raiz do projeto, use:

### `npm install yarn`
Para instalar o Yarn. 

### `yarn start`

Inicializa a aplicação no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la em seu navegador.

A página será recarregada após cada modificação salva.\
Você também verá quaisquer erros de linter no console.

### `yarn test`

Inicia a aplicação em modo interativo.\
Saiba mais em [executando tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

TA compilação é reduzida e os nomes dos arquivos incluem os hashes. \
Seu aplicativo está pronto para ser implantado!

Saiba mais em [desenvolvimento](https://facebook.github.io/create-react-app/docs/deployment).

### `yarn eject`

**Note: esta é uma operação unilateral. Depois de 'ejetar', você não pode mais voltar!**

Se não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode usar `eject` a qualquer momento. Este comando removerá a dependência de compilação única de seu projeto.

Você não precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para ela.

