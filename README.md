📜 Animando Elementos com Scroll (scrollTop + jQuery)

Este projeto demonstra como animar elementos e destacar links do menu com base na posição do scroll da página utilizando jQuery.

🚀 Objetivo

O objetivo deste estudo é entender como:

Capturar a posição do scroll da janela
Identificar qual seção está visível
Alterar estilos dinamicamente
Criar uma navegação interativa baseada no scroll

🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
jQuery


📂 Estrutura do Projeto
📁 projeto
 ├── index.html
 ├── css/
 │    └── style.css
 └── js/
      └── functions.js

O HTML possui:

Um menu de navegação
Seções com atributo customizado target

<nav>
  <ul>
    <li><a class="home">Home</a></li>
    <li><a class="contato">Contato</a></li>
    <li><a class="sobre">Sobre</a></li>
    <li><a class="teste">Teste</a></li>
  </ul>
</nav>

<div class="container">

  <div target="home" class="sessao">
    <h2>Estou na sessão home</h2>
  </div>

  <div target="contato" class="sessao">
    <h2>Estou na sessão contato</h2>
  </div>

  <div target="sobre" class="sessao">
    <h2>Estou na sessão sobre</h2>
  </div>

</div>

🎨 CSS (Estilização)

Principais pontos:

Menu fixo no topo
Layout simples
Destaque visual via border-bottom

nav {
  position: fixed;
  text-align: center;
  padding: 20px 0;
  background: rgb(210,210,210);
  width: 100%;
}

nav ul li {
  display: inline-block;
  margin: 0 15px;
  text-transform: uppercase;
}

.container {
  height: 100%;
  position: relative;
}

.sessao {
  min-height: 100%;
  padding: 30px 2%;
}

⚙️ JavaScript (Lógica do Scroll)

Aqui está o coração do projeto:

$(function(){

  $(window).scroll(function(){

    var windowOffY = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.sessao').each(function(){

      var elOffY = $(this).offset().top;

      if(elOffY + 30 < (windowOffY + windowHeight) &&
         elOffY + 30 + $(this).height() > windowOffY){

        $('a').css('border-bottom', '0');

        var target = $(this).attr('target');
        $('.' + target).css('border-bottom', '2px solid #333');

        return;
      }

    });

  });

});


🎯 Resultado

✔️ Ao rolar a página:

A seção visível é detectada automaticamente
O menu é atualizado em tempo real
O usuário sabe exatamente onde está


💡 Possíveis melhorias

Adicionar scroll suave (smooth scroll)
Usar Intersection Observer (mais moderno)
Adicionar animações com fade ou transform
Melhorar responsividade


📚 Aprendizados

Manipulação de scroll com jQuery
Trabalhar com offset() e height()
Criar interações dinâmicas com o usuário
Organização de código front-end


👨‍💻 Autor

Desenvolvido para fins de estudo 🚀



