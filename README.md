-======================================================-
            TREASURE HUNT - READ-ME
-======================================================-

----------------------------------------------------------
INSTRUCTIONS
----------------------------------------------------------
# RUN DEVELOPMENT MODE
1) open terminal
2) cd TreasureHunt
3) npm install
4) npm run dev
5) open http://localhost:port

# HOW TO LOGIN GIT BITBUCKET
1) Open and copy your Username from this URL: 
https://bitbucket.org/account/settings/

2) Open and click "create app password" 
https://bitbucket.org/account/settings/app-passwords/

- Label: git
- Select all permissions
- Click "Create" buttom
- Copy the password

3) Use your Username and password to log in. 

# CHANGE HTTP HOST / PORT
edit config in this file: ./TreasureHunt/vite.config.js


---------------------------------------------------------
USED LIBRARIES
---------------------------------------------------------
Vue.js
https://vuejs.org/
used vue.js for frontend purpose

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

---------------------------------------------------------
OTHER TOOLS / DOCUMENTATIONS
----------------------------------------------------------
Texture Packer Documentation
https://www.codeandweb.com/texturepacker/documentation

Sprite Sheets Phaser 3 Tutorial
https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?utm_source=ad&utm_medium=banner&utm_campaign=phaser-2018-10-16

Tools for Game Developers
https://www.codeandweb.com/


---------------------------------------------------------
DOCUMENTATION / BOARD / REPOSITORY
----------------------------------------------------------

Documentation:
https://skyshi.atlassian.net/l/cp/H1ece5UN

Jira Board:
https://skyshi.atlassian.net/jira/software/projects/ES/boards/6

Repository:
https://bitbucket.org/rodrigocoeio/treasurehunt/src/main/



---------------------------------------------------------
NOTAS DE DESENVOLVIMENTO
----------------------------------------------------------

Objetivo:
Entregar ao teacher um board game estilo Treasure Hunter

Como fazer:
Vamos utilizar um pacote/biblioteca Node.js chamado Phaser, para isso precisamos instalar o Node.js localmente

- O que é o Node.js
    > **Node.js** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform), [back-end](https://en.wikipedia.org/wiki/Front_end_and_back_end) [JavaScript](https://en.wikipedia.org/wiki/JavaScript) [runtime environment](https://en.wikipedia.org/wiki/Runtime_system)
     that runs on the [V8 engine](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) and executes JavaScript code outside a [web browser](https://en.wikipedia.org/wiki/Web_browser), which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for [server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting)—running scripts server-side to produce [dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page) content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[[6]](https://en.wikipedia.org/wiki/Node.js#cite_note-6) unifying [web-application](https://en.wikipedia.org/wiki/Web_application) development around a single programming language, rather than different languages for server-side and client-side scripts.
    > 
    

- Instalação do Node.js na máquina local:
    Vamos utilizar o controlador de versão do node.js, chamado NVM:
    
    NVM - Controlador de Versão do Node.js
    [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
    
    Comandos:
    nvm install latest   - Instala ultima versão do node
    nvm use latest       - Passa a usar a ultima versão
    
- Node.js
    node -v                  - Ver versão rodando
    node index.js         - Roda arquivo local

- NPM - Gerenciador de pacotes do Node.js



- Comandos uteis GIT
    git status - checar quais arquivos foram modificados
    git add - adicionar arquivos a serem enviados para repositorio
    git reset --hard - restora para ultima versão baixada


-------------------------------------------------------------------------
ESTRUTURA COMPONENT VUE.js
-------------------------------------------------------------------------
{
    data:   armazenamento de variaveis/propriedades
    mounted:   função chamada quando componente é inicializado
    methods:   objeto contento methodos/ações desse componente
    components:  objeto contento lista de componentes dependentes
}

-------------------------------------------------------------------------
VUE.JS HTML atributos
-------------------------------------------------------------------------
@click=""  -  on click call an method



-------------------------------------------------------------------------
ANOTAÇÕES ESTUDO RANGEL
-------------------------------------------------------------------------
switch - logica de programação




-------------------------------------------------------------------------
BACKLOG INICIAL
-------------------------------------------------------------------------
Estudar / Decidir melhor linguagem/biblioteca de desenvolvimento

Criar Arquitetura
Criar DDD
Criar tabuleiro
Criar peões ( players )
	Criar movimento
Criar dado
Criar turnos
Criar regras de cada casa
	2 casas pra frente
	2 casas pra trás
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