-======================================================-
            TREASURE HUNT - READ-ME
-======================================================-

---------------------------------------------------------
DOCUMENTATION / BOARD / REPOSITORY
----------------------------------------------------------
Documentation:
https://skyshi.atlassian.net/l/cp/H1ece5UN

Jira Board:
https://skyshi.atlassian.net/jira/software/projects/ES/boards/6

Repository:
https://bitbucket.org/rodrigocoeio/treasurehunt/src/main/


----------------------------------------------------------
INSTRUCTIONS
----------------------------------------------------------
# RUN DEVELOPMENT MODE
npm run dev

# CHANGE HTTP HOST / PORT
edit config in this file: vite.config.js


---------------------------------------------------------
USED LIBRARIES
---------------------------------------------------------
Vue.js
https://vuejs.org/
used vue.js for frontend purpose

Vue.js API
https://vuejs.org/api/

Vue.js Mastery
https://www.vuemastery.com/

Vite
https://vitejs.dev/
used for dev tooling

Pinia
https://pinia.vuejs.org/
used Pinia for data storage purpose

Phaser
https://phaser.io/
used Phaser for gaming displaying purpose
[Phaser - A fast, fun and free open source HTML5 game framework]

Phaser 3 Examples
https://codeload.github.com/photonstorm/phaser3-examples/zip/refs/heads/master

Bootstrap 5
https://getbootstrap.com/docs/5.2/getting-started/introduction/
https://getbootstrap.com/docs/5.2/examples/

---------------------------------------------------------
OTHER TOOLS / DOCUMENTATIONS
----------------------------------------------------------
Texture Packer Documentation
https://www.codeandweb.com/texturepacker/documentation

Sprite Sheets Phaser 3 Tutorial
https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?utm_source=ad&utm_medium=banner&utm_campaign=phaser-2018-10-16

Tools for Game Developers
https://www.codeandweb.com/

Phaser Examples
https://github.com/photonstorm/phaser3-examples

Node Windows ( run Node.js application as Windows Service in background )
https://github.com/coreybutler/node-windows

---------------------------------------------------------
NOTAS DE DESENVOLVIMENTO
----------------------------------------------------------
> **Node.js**??is an??[open-source](https://en.wikipedia.org/wiki/Open-source_software),??[cross-platform](https://en.wikipedia.org/wiki/Cross-platform),??[back-end](https://en.wikipedia.org/wiki/Front_end_and_back_end)??[JavaScript](https://en.wikipedia.org/wiki/JavaScript)??[runtime environment](https://en.wikipedia.org/wiki/Runtime_system)
    ??that runs on the??[V8 engine](https://en.wikipedia.org/wiki/V8_(JavaScript_engine))??and executes JavaScript code outside a??[web browser](https://en.wikipedia.org/wiki/Web_browser), which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for??[server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting)???running scripts server-side to produce??[dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page)??content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[[6]](https://en.wikipedia.org/wiki/Node.js#cite_note-6)??unifying??[web-application](https://en.wikipedia.org/wiki/Web_application)??development around a single programming language, rather than different languages for server-side and client-side scripts.
    > 
 
- Instala????o do Node.js na m??quina local:
    Vamos utilizar o controlador de vers??o do node.js, chamado NVM:
    
    NVM - Controlador de Vers??o do Node.js
    [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
    
    Comandos:
    nvm install latest   - Instala ultima vers??o do node
    nvm use latest       - Passa a usar a ultima vers??o
    
- Node.js
    node -v                  - Ver vers??o rodando
    node index.js         - Roda arquivo local

- NPM - Gerenciador de pacotes do Node.js



- Comandos uteis GIT
    git status - checar quais arquivos foram modificados
    git add - adicionar arquivos a serem enviados para repositorio
    git reset --hard - restora para ultima vers??o baixada


- Aliases Vite:
    @ = /src
    # = /Components


-------------------------------------------------------------------------
VUE.JS GUIDE
-------------------------------------------------------------------------
= Vue Component structure =
<template>
    <!-- your html here -->
    alguns atributos que podem ser usados dentro das tags html:
</template>

<script>
{
    data() { return {} }    // storage/data/variaveis/propriedades
    mounted() {}            // fun????o chamada quando componente ?? inicializado
    methods: {},            // objeto contento a????es/fun????es desse componente ( podem ser chamadas do html por exemplo no @click="executarAcao")
    components: {},         //objeto contento lista de componentes dependentes
}
</script>

-------------------------------------------------------------------------
VUE.JS HTML atributos
-------------------------------------------------------------------------
@click=""
v-model 
v-if
v-show
v-for


-------------------------------------------------------------------------
BACKLOG INICIAL
-------------------------------------------------------------------------
Criar Arquitetura
    - sistema de componentes vue vinculados ao Phaser
    - sistema de arquivos
Criar DDD
Criar tabuleiro
Criar pe??es ( players )
	Criar movimento
Criar dado
Criar turnos
Criar regras de cada casa
	2 casas pra frente
	2 casas pra tr??s
	restart
	chalenge?
Criar eventos
	start game
	end game
	next turn
	jump 2
	jump back 2
	restart
Criar audios para cada evento
Criar artes