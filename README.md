### Requisição e consumo da API do GitHub com ReactJS

<details>
  <summary> Instalação do Projeto Local ✔️ </summary>
  
 - Para sua instalação é necessário ter o GitBash instalado e configurado em sua máquina.
   
 - Logo após isto, basta copiar este código `https://github.com/Development-Group-UNG/Github-Profile-Search.git`
   
 - Abra o GitBash em sua máquina em alguma pasta e/ou workspace desejada e dar o comando .
   
 - Com o botão direito no GitBash escreva o seguinte comando `git clone` e após isto aperte novamente o botão direito e selecione `Paste` para colar o link do repositório.
   
 - Aperte `Enter` e espere a clonagem ser realizada.
</details>

<details>
 <summary> Instalação das dependências e execução do projeto 💻 </summary>

 - Após a clonagem do repositório estar completa, abra o projeto em seu editor de código preferido, no meu caso utilizei o `Visual Studio Code`.
   
 - Caso esteja usando o Visual Studio Code, aperte em seu teclado os seguintes botões para abrir o terminal `Ctrl + ""`
   
 - Dê o comando `yarn` ou `yarn install` no terminal para instalar todas as dependências.
   
 - Após todas serem instaladas, digite no terminal o comando `yarn start` e aplicação estará rodando localmente em sua máquina!
</details>

<details>
 <summary> Commits mais utilizados 💻 </summary>

 - `git clone url-do-repositorio-no-github` - Clona um repositório remoto existente no GitHub para o seu ambiente local.
   
 - `git add .` - Adiciona todos os arquivos e alterações no diretório atual para a área de stage (preparando-os para o commit).
   
 - `git commit -m "[type]: <message>"` - Registra as alterações adicionadas na área de stage com uma mensagem descritiva sobre o que foi modificado.
   
 - `git pull origin main`  - Atualiza a branch local main com as mudanças do repositório remoto origin. Combina git fetch e git merge.
   
 - `git pull origin [branch]`  - Atualiza a branch de ramificação com as mudanças do repositório remoto origin.
   
 - `git push origin [branch]`  - Sobe as alterações locais para o GitHub em sua ramificação.
   
 - `git checkout -b [branch]`  - Cria uma ramificação da branch main/ raiz do projeto.
   
 - `git merge [branch]`  - Mescla a branch selecionada com a main/ raiz do projeto.
</details>

<details>
 <summary> Commits semanticos + types 💻 </summary>

 - `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).
   
 - `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).
   
 - `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).
   
 - `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

 - `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.
   
 - `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).
   
 - `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.
   
 - `remove` - Commits do tipo remove indicam a exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.
</details>
