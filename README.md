## Requisitos:
    *** Node.js 22 ou superior - Conferir a versao: node -v

## Como rodar o projeto baixado:
    *** Instalar todas as dependencias indicada pelo package.json:
        ** npm install

## Sequencia para criar o  projeto:
    ## Cria o arquivo package.json
        *** npm init (Cria o projeto manualmente)
        *** npm init -y (Cria o projeto automaticamente)

## Instalar o Express para gerenciar as reqsicoes, rotas e URLs, entre outras funcionalidades:
    *** npm install express --save
    *** npm i express

## Instalar os pacotes para suporte ao TypeScript:
    *** npm i --save-dev @types/express
    *** npm i --save-dev @types/node

## Instalar o compilador projeto com TypeScript e reiniciar o projeto quando o arquivo e modificado:
    *** npm i --save-dev ts-node

## Gerar o arquivo de configuracao para o TypeScript(tsconfig.json):
    *** npx tsc --init

## Compilar o arquivo TypeScript:
    *** npx tsc

## Executar o arquivo gerado com Node.js:
    *** node dist/index.js


################################################## GITHUB ######################################################
### Como fazer upload e download de arquivos do Github

*** Baixar arquivos do git
** git clone -b (nome do branch) (url do nome do repositório)

### Verifique em qual branch você está
*** git branch

### Mude para o branch desejado:

*** git checkout <nome-do-branch>

### Verifique os branches remotos:

### Enviar os commits locais para um repositório remoto
*** git push origin -u (nome do branch)

### Enviando o código atualizado para o github pelo vscode
*** Clique no ícone do git
*** Clique no +
*** Escrever uma mensagem de commit
*** Commit & push

*** git branch -r (Isso listará todos os branches remotos do seu repositório.)

### Buscar os branches remotos:

*** git fetch (Isso atualizará as informações sobre os branches remotos.)

*** Agora, execute git branch -r novamente para verifique se o branch "origin/development" está atualizado.

### Crie um branch local a partir do branch remoto:

*** Após buscar os branches remotos, você pode criar um branch local chamado "branch name" a partir do branch remoto "origin/branch name".

*** Execute o comando git checkout -b branch name origin/branch name no terminal.

*** Isso criará um novo branch local chamado "branch name" e o configurará para rastrear o branch remoto "origin/branch name".

### Baixe atualizações do Github

*** git pull

### Adicione todos os arquivos modificados à área de preparação.

*** git add .

### Commit

*** git commit -m "mensagem de commit aqui"

### Envie commits locais para um repositório remoto

*** git push origin -u (nome do branch)


################################################## NODEMON ######################################################
### Como instalar nodemon
   *** npm install -g nodemon ou npm install --save-dev nodemon

### Compilar o arquivo TypeScript. Executar o arquivo gerado(Rodando o nodemon):
   *** npm run dev


################################################## WATCH ######################################################
### Compilar o arquivo TypeScript. Executar o arquivo gerado(Rodando o watch):
    *** npm run start:watch

## Instalar a dependencia para rodar processo simultaneamente:
    *** npm install --save-dev concurrently


###################################### BANCO DE DADOS MySQL ######################################################
### COMANDO SQL PARA CRIAR A BASE DE DADOS:
   *** CREATE DATABASE celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

### Instalar a dependencia para conectar o Node.js (TypeScript) com banco de dados.
   *** npm install typeorm --save

### Bibliotecas utilizada no TypeScript para adicionar metadados (informcoes adicionais) a classes.
   *** npm install reflect-metadata --save

### Instalar o drive do bnco de dados MySQL:
   *** npm install mysql2 --save

### Iniciar o MySQL instalado no sistema operacional com PowerShell:
   *** net start mysql(versao do mysql)

### Digita esse comando no terminal, ea cessa o mysql
   *** mysql -h localhost -u root -p

### Instalar os tipos do TypeScript:
   *** npm install --save-dev @types/dotenv

### MVC (Arquitetura e estrutura aplicacoes web):
   * C: Controller(recebe, controla e processa as requisicoes);
   * V: View(Interface, faz uma requisicao para a controllers, exibi os dados ao usuario);
   * M: Models(gerencia as interacoes com BD, retorna para controllers);

### Manipular variaveis de ambiente:
    *** npm install dotenv --save

### Instalar os tipos do TypeScript:
    *** npm install --save-dev @types/dotenv

######################### MIGRATIONS ##############################
### npx typeorm migration:create src/migration/<nome-da-migrations>
### npx typeorm migration:create src/migration/CreateSituationsTable

###Executar as migrations para criar as tabelas no banco de dados:
npx typeorm migration:run -d dist/data-source.js