const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const deepTopics = {
  marcacao: {
    title:"O que é marcação?",
    summary:"Marcação é a forma de colocar uma etiqueta ao redor de uma parte do conteúdo para explicar o que ela é.",
    example:'<p>Olá, este é um parágrafo.</p>',
    details:["<strong>Tag de abertura:</strong> começa o elemento, como &lt;p&gt;.","<strong>Conteúdo:</strong> é a informação que aparece entre as tags.","<strong>Tag de fechamento:</strong> termina o elemento, como &lt;/p&gt;.","Não confunda etiqueta com o que o usuário vê: ela dá significado e ajuda o navegador a organizar."]
  },
  links: {
    title:"Como os links funcionam?",
    summary:"A tag &lt;a&gt; cria uma conexão. O atributo href diz para onde o link deve levar.",
    example:'<a href="https://www.example.com">Visitar o site</a>',
    details:["<strong>href:</strong> indica o destino do link.","Links podem abrir uma página, um arquivo, um e-mail ou uma parte da própria página.","Use textos claros, como “Ler a explicação”, em vez de “Clique aqui”.","O atributo target=\"_blank\" abre em uma nova aba; rel=\"noreferrer\" aumenta a segurança."]
  },
  frontend: {
    title:"HTML, CSS e JavaScript",
    summary:"Os três principais recursos do front-end têm tarefas diferentes e trabalham juntos.",
    example:'HTML: estrutura · CSS: aparência · JavaScript: ação',
    details:["<strong>HTML:</strong> cria o conteúdo e a estrutura.","<strong>CSS:</strong> decide cores, tamanhos, espaçamento e animações.","<strong>JavaScript:</strong> responde a ações e atualiza a página.","Uma boa comparação é: HTML é o esqueleto, CSS é a roupa e JavaScript é o movimento."]
  },
  doctype: {
    title:"&lt;!DOCTYPE html&gt;",
    summary:"Essa primeira linha avisa ao navegador que o documento usa a versão moderna do HTML.",
    example:'<!DOCTYPE html>\n<html lang="pt-BR">',
    details:["Ela não cria um elemento visível.","Deve aparecer antes da tag &lt;html&gt;.","Ajuda o navegador a usar o modo padrão de leitura.","Sem ela, algumas páginas antigas podem ser interpretadas de forma diferente."]
  },
  html: {
    title:"A raiz da página",
    summary:"A tag &lt;html&gt; envolve todo o documento. O atributo lang indica o idioma principal.",
    example:'<html lang="pt-BR"> ... </html>',
    details:["Tudo que pertence à página fica dentro dessa tag.","lang=\"pt-BR\" ajuda leitores de tela e ferramentas de tradução.","Head fica com informações da página; body fica com o que aparece.","Pense nela como a caixa que guarda os dois setores principais."]
  },
  head: {
    title:"O que fica no &lt;head&gt;?",
    summary:"O head guarda informações sobre a página que normalmente não são exibidas diretamente.",
    example:'<head>\n  <title>Meu site</title>\n  <link rel="stylesheet" href="estilo.css">\n</head>',
    details:["<strong>title:</strong> aparece na aba do navegador.","<strong>meta:</strong> informa idioma, descrição e tamanho da tela.","<strong>link:</strong> conecta arquivos CSS.","<strong>script:</strong> pode carregar JavaScript."]
  },
  viewport: {
    title:"Ajustando a tela",
    summary:"A viewport é a área visível da página no aparelho. Essa configuração ajuda o site a se ajustar.",
    example:'<meta name="viewport" content="width=device-width, initial-scale=1">',
    details:["width=device-width usa a largura real do aparelho.","initial-scale=1 começa o zoom sem aumentar ou diminuir automaticamente.","É essencial para páginas funcionarem bem no celular.","O CSS decide como os elementos mudam de lugar ou tamanho."]
  },
  body: {
    title:"Tudo que aparece no &lt;body&gt;",
    summary:"O body guarda títulos, textos, imagens, links, formulários, menus e todas as outras partes visíveis.",
    example:'<body>\n  <h1>Meu primeiro site</h1>\n  <p>Olá!</p>\n</body>',
    details:["É onde quase todo o conteúdo da página é escrito.","Os elementos dentro dele são processados na ordem em que aparecem.","Ele deve ter apenas uma abertura e um fechamento por documento.","Use etiquetas semânticas para explicar cada região."]
  },
  acessibilidade: {
    title:"Acessibilidade",
    summary:"Acessibilidade significa permitir que diferentes pessoas consigam usar a página.",
    example:'<img src="planeta.jpg" alt="Planeta visto do espaço">',
    details:["Texto alternativo descreve uma imagem para quem não a enxerga.","Labels mostram a que campo um formulário se refere.","Links e controles precisam funcionar pelo teclado.","Cores precisam ter contraste suficiente para serem entendidas."]
  },
  seo: {
    title:"Encontrar um site nos buscadores",
    summary:"O HTML ajuda o Google a entender do que uma página trata.",
    example:'<title>Aprenda HTML5</title>\n<meta name="description" content="Guia fácil sobre HTML5">',
    details:["Use um título claro e exclusivo.","Escreva uma descrição curta que representa o conteúdo.","Use um único h1 e uma ordem lógica de títulos.","Conteúdo útil, URLs claras e links melhores ajudam na descoberta."]
  },
  organizacao: {
    title:"Organizando o código",
    summary:"Código organizado é mais fácil de entender, corrigir e melhorar.",
    example:'<!-- Seção principal -->\n<main>\n  <h1>Título</h1>\n</main>',
    details:["Use espaços e linhas para separar partes relacionadas.","Dê nomes claros a classes e ids.","Separe HTML, CSS e JavaScript.","Comente somente pontos que realmente precisam de uma explicação."]
  },
  tags: {
    title:"Entendendo as tags",
    summary:"Uma tag é um nome colocado entre sinais de menor e maior. Cada elemento serve para organizar uma parte diferente da página.",
    example:'<header> · <main> · <article> · <footer>',
    details:["Tags estruturais dividem grandes regiões.","Tags de texto mostram títulos e parágrafos.","Tags multimídia incluem imagens, áudio e vídeo.","Você não precisa decorar todas: use o nome que melhor descreve a ideia."]
  },
  semantica: {
    title:"HTML semântico",
    summary:"Semântica é escolher uma etiqueta pelo significado da região, não pela aparência.",
    example:'<main>Conteúdo principal</main>',
    details:["&lt;main&gt; representa o conteúdo principal.","&lt;nav&gt; representa uma área de navegação.","&lt;article&gt; representa conteúdo independente.","Isso melhora a organização, o SEO e a acessibilidade."]
  },
  formularios: {
    title:"Formulários",
    summary:"Um formulário reúne campos para receber informações da pessoa.",
    example:'<form>\n  <label for="email">E-mail</label>\n  <input id="email" type="email" required>\n</form>',
    details:["&lt;label&gt; explica o campo.","type=email ajuda o navegador a verificar e-mails.","required impede o envio quando o campo está vazio.","O JavaScript pode adicionar ações além da validação nativa."]
  },
  multimidia: {
    title:"Multimídia no HTML",
    summary:"HTML5 permite colocar vídeo e áudio na página sem instalar programas extras.",
    example:'<video controls src="filme.mp4"></video>',
    details:["controls mostra play, pausa e volume.","O atributo src aponta para o arquivo.","&lt;track&gt; pode adicionar legendas.","&lt;picture&gt; permite mostrar versões diferentes de uma imagem."]
  },
  canvas: {
    title:"Gráficos e Canvas",
    summary:"O Canvas é uma área em branco que o JavaScript pinta usando pontos, linhas e formas.",
    example:'const ctx = canvas.getContext("2d")',
    details:["Canvas trabalha com pixels.","Para desenhar várias vezes é usado um loop de animação.","É útil para jogos e gráficos personalizados.","SVG usa formas matemáticas e continua nítido ao ampliar."]
  }
};

const tags = [
  { category:"Estrutura", name:"<main>", purpose:"Representa o conteúdo principal e exclusivo da página.", syntax:'<main>Conteúdo principal</main>', demo:'<main>…conteúdo principal…</main>' },
  { category:"Estrutura", name:"<header>", purpose:"Apresenta cabeçalho de uma página ou região.", syntax:'<header>Identidade e navegação</header>', demo:'Cabeçalho da página' },
  { category:"Estrutura", name:"<nav>", purpose:"Agrupa links de navegação principal ou contextual.", syntax:'<nav aria-label="Principal">…</nav>', demo:'Início · Referência · Sobre' },
  { category:"Estrutura", name:"<section>", purpose:"Agrupa conteúdo temático com título próprio.", syntax:'<section><h2>Título</h2>…</section>', demo:'Seção temática' },
  { category:"Estrutura", name:"<article>", purpose:"Conteúdo independente que pode ser distribuído separadamente.", syntax:'<article><h2>Notícia</h2>…</article>', demo:'Artigo independente' },
  { category:"Estrutura", name:"<aside>", purpose:"Conteúdo relacionado, lateral ou complementar.", syntax:'<aside>Conteúdo relacionado</aside>', demo:'Conteúdo complementar' },
  { category:"Estrutura", name:"<footer>", purpose:"Informa o fechamento de uma página ou seção.", syntax:'<footer>Copyright e links</footer>', demo:'Rodapé da seção' },
  { category:"Estrutura", name:"<div>", purpose:"Contêiner genérico quando não existe elemento semântico adequado.", syntax:'<div class="caixa">…</div>', demo:'Contêiner neutro' },
  { category:"Textos", name:"<h1>–<h6>", purpose:"Define níveis de títulos em ordem hierárquica.", syntax:'<h1>Título principal</h1>', demo:'Título de nível 1' },
  { category:"Textos", name:"<p>", purpose:"Representa um parágrafo de texto.", syntax:'<p>Texto do parágrafo.</p>', demo:'Texto do parágrafo.' },
  { category:"Textos", name:"<strong>", purpose:"Indica grande importância para parte do conteúdo.", syntax:'<strong>Importante</strong>', demo:'Texto <strong>importante</strong>' },
  { category:"Textos", name:"<em>", purpose:"Dá ênfase a palavras ou trechos.", syntax:'<em>Enfatizado</em>', demo:'Texto <em>enfatizado</em>' },
  { category:"Textos", name:"<mark>", purpose:"Realça texto relevante em relação ao contexto.", syntax:'<mark>Resultado</mark>', demo:'Um <mark>resultado</mark> destacado' },
  { category:"Textos", name:"<code>", purpose:"Representa fragmentos de código.", syntax:'<code>const x = 1;</code>', demo:'<code>const x = 1;</code>' },
  { category:"Textos", name:"<blockquote>", purpose:"Marca uma citação longa de outra fonte.", syntax:'<blockquote cite="url">…</blockquote>', demo:'“Uma citação extensa.”' },
  { category:"Links", name:"<a>", purpose:"Cria links para documentos, arquivos ou âncoras internas.", syntax:'<a href="/guia">Abrir guia</a>', demo:'<a href="#fundamentos">Abrir guia</a>' },
  { category:"Links", name:"<link>", purpose:"Relaciona o documento a recursos externos, como CSS.", syntax:'<link rel="stylesheet" href="style.css">', demo:'Conecta styles.css ao documento' },
  { category:"Multimídia", name:"<img>", purpose:"Insere uma imagem com alternativa textual.", syntax:'<img src="foto.jpg" alt="Descrição">', demo:'Imagem com atributo alt' },
  { category:"Multimídia", name:"<picture>", purpose:"Escolhe a melhor versão de uma imagem responsiva.", syntax:'<picture><source media="…" srcset="…"><img …></picture>', demo:'Imagem responsiva por densidade ou largura' },
  { category:"Multimídia", name:"<video>", purpose:"Reproduz vídeo com controles nativos.", syntax:'<video controls src="filme.mp4"></video>', demo:'Vídeo nativo do navegador' },
  { category:"Multimídia", name:"<audio>", purpose:"Reproduz áudio com controles nativos.", syntax:'<audio controls src="audio.mp3"></audio>', demo:'Áudio nativo do navegador' },
  { category:"Multimídia", name:"<track>", purpose:"Fornece legendas ou descrições a áudio e vídeo.", syntax:'<track kind="captions" src="pt.vtt" srclang="pt">', demo:'Faixa WebVTT sincronizada' },
  { category:"Multimídia", name:"<source>", purpose:"Informa fontes alternativas para imagem, áudio ou vídeo.", syntax:'<source src="video.webm" type="video/webm">', demo:'Fonte alternativa selecionada pelo navegador' },
  { category:"Multimídia", name:"<iframe>", purpose:"Incorpora outra página ou documento em uma área navegável.", syntax:'<iframe src="pagina.html" title="Página incorporada"></iframe>', demo:'Documento incorporado' },
  { category:"Multimídia", name:"<embed>", purpose:"Incorpora recursos externos suportados pelo navegador.", syntax:'<embed src="arquivo.pdf" type="application/pdf">', demo:'Recurso externo incorporado' },
  { category:"Multimídia", name:"<object>", purpose:"Incorpora recursos externos com conteúdo alternativo.", syntax:'<object data="arquivo.pdf" type="application/pdf">Alternativa</object>', demo:'Objeto incorporável com fallback' },
  { category:"Multimídia", name:"<figure>", purpose:"Agrupa mídia e sua descrição associada.", syntax:'<figure><img …><figcaption>…</figcaption></figure>', demo:'Imagem + legenda' },
  { category:"Listas", name:"<ul>", purpose:"Cria uma lista não ordenada.", syntax:'<ul><li>Item</li></ul>', demo:'• Item da lista' },
  { category:"Listas", name:"<ol>", purpose:"Cria uma lista ordenada.", syntax:'<ol><li>Primeiro</li></ol>', demo:'1. Primeiro item' },
  { category:"Listas", name:"<dl>", purpose:"Cria uma lista de termos e descrições.", syntax:'<dl><dt>HTML</dt><dd>Marcação</dd></dl>', demo:'HTML — linguagem de marcação' },
  { category:"Tabelas", name:"<table>", purpose:"Organiza dados bidimensionais em linhas e colunas.", syntax:'<table><tr><th>…</th></tr>…</table>', demo:'Tabela estruturada' },
  { category:"Tabelas", name:"<thead>/<tbody>", purpose:"Separam o cabeçalho e o corpo dos dados.", syntax:'<thead>…</thead><tbody>…</tbody>', demo:'Cabeçalho + corpo' },
  { category:"Formulários", name:"<form>", purpose:"Agrupa campos e define como os dados serão enviados.", syntax:'<form action="/contato" method="post">…</form>', demo:'Formulário associado' },
  { category:"Formulários", name:"<input>", purpose:"Coleta diferentes tipos de dados do visitante.", syntax:'<input type="email" required>', demo:'Campo de entrada' },
  { category:"Formulários", name:"<label>", purpose:"Nomeia um controle e amplia sua área de ativação.", syntax:'<label for="email">E-mail</label>', demo:'E-mail: [campo]' },
  { category:"Formulários", name:"<select>", purpose:"Apresenta opções em uma lista suspensa.", syntax:'<select><option>Opção</option></select>', demo:'Lista de opções' },
  { category:"Formulários", name:"<button>", purpose:"Executa uma ação, validação ou envio.", syntax:'<button type="submit">Enviar</button>', demo:'Enviar' },
  { category:"Formulários", name:"<progress>", purpose:"Representa o progresso conhecido de uma tarefa.", syntax:'<progress value="70" max="100">70%</progress>', demo:'Progresso: 70%' },
  { category:"Interativos", name:"<details>", purpose:"Cria conteúdo expansível sem JavaScript.", syntax:'<details><summary>Mais</summary>…</details>', demo:'▼ Mais informações' },
  { category:"Interativos", name:"<dialog>", purpose:"Representa uma caixa de diálogo ou modal.", syntax:'<dialog open>Conteúdo</dialog>', demo:'Diálogo nativo' },
  { category:"Interativos", name:"<template>", purpose:"Guarda markup inativo para uso posterior.", syntax:'<template><p>Conteúdo</p></template>', demo:'Modelo reutilizável' },
  { category:"Metadados", name:"<meta>", purpose:"Informa metadados sobre o documento.", syntax:'<meta name="description" content="…">', demo:'Metadados do documento' },
  { category:"Metadados", name:"<time>", purpose:"Representa uma data ou hora legível pela máquina.", syntax:'<time datetime="2026-11-18">18 nov.</time>', demo:'18 de novembro de 2026' },
  { category:"Metadados", name:"<address>", purpose:"Fornece dados de contato relacionados ao conteúdo.", syntax:'<address>contato@example.com</address>', demo:'contato@example.com' }
];

const categories = ["Todos", "Estrutura", "Textos", "Links", "Multimídia", "Listas", "Tabelas", "Formulários", "Interativos", "Metadados"];
let activeCategory = "Todos";

function renderTags() {
  const query = ($("#tagSearch")?.value || "").trim().toLowerCase();
  const results = tags.filter(tag => (activeCategory === "Todos" || tag.category === activeCategory) && (tag.name.toLowerCase().includes(query) || tag.purpose.toLowerCase().includes(query)));
  const container = $("#tagResults");
  if (!container) return;
  container.innerHTML = results.length ? results.map((tag, index) => `
    <article class="tag-card reveal visible" style="--delay:${Math.min(index * 35, 210)}ms">
      <header><h3>${tag.name}</h3><button type="button" aria-expanded="false" aria-label="Expandir exemplo de ${tag.name}">＋</button></header>
      <p>${tag.purpose}</p>
      <code>${tag.syntax.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>
      <div class="tag-demo">${tag.demo}</div>
      <button class="tag-learn" type="button" data-topic="tags" data-tag-name="${tag.name}">Entenda essa tag <span aria-hidden="true">→</span></button>
    </article>`).join("") : '<div class="tag-empty">Nenhum elemento encontrado.</div>';
  $$(".tag-card header button", container).forEach(button => button.addEventListener("click", () => {
    const card = button.closest(".tag-card");
    const open = card.classList.toggle("open");
    button.textContent = open ? "−" : "＋";
    button.setAttribute("aria-expanded", String(open));
  }));
}

function setupTagReference() {
  const categoryContainer = $("#tagCategories");
  if (!categoryContainer) return;
  categoryContainer.innerHTML = categories.map(category => `<button type="button" class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
  $$("button", categoryContainer).forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    $$(".active", categoryContainer).forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderTags();
  }));
  $("#tagSearch")?.addEventListener("input", renderTags);
  renderTags();
}

const quiz = [
  ["O que o HTML organiza em uma página?", ["As cores","A estrutura e o significado","Os efeitos 3D","Somente os links"], 1],
  ["Qual elemento representa o conteúdo principal?", ["<section>","<article>","<main>","<aside>"], 2],
  ["Qual aviso diz ao navegador que é HTML moderno?", ["<!DOCTYPE html>","<meta charset>","<html lang>","<document>"], 0],
  ["Qual atributo oferece texto alternativo à imagem?", ["title","alt","src","role"], 1],
  ["Qual elemento cria uma lista não ordenada?", ["<ol>","<ul>","<dl>","<li>"], 1],
  ["Qual elemento reproduz vídeo nativamente?", ["<media>","<movie>","<canvas>","<video>"], 3],
  ["Qual é uma ferramenta JavaScript e não uma etiqueta HTML?", ["<canvas>","<video>","Fetch API","<template>"], 2],
  ["Qual elemento cria conteúdo expansível sem JavaScript?", ["<dialog>","<details>","<popover>","<template>"], 1],
  ["Qual atributo associa um label a um campo?", ["name","id","for","value"], 2],
  ["Como o HTML evolui hoje?", ["Em uma nova versão fechada por ano","Por uma regra sempre atualizada","Só dentro do W3C","Ele não evolui"], 1]
];
let quizIndex = 0;
let quizScore = 0;
let quizLocked = false;

function renderQuizQuestion() {
  const question = $("#quizQuestion");
  if (!question) return;
  const [prompt, options] = quiz[quizIndex];
  $("#quizProgressLabel").textContent = `Pergunta ${quizIndex + 1} de ${quiz.length}`;
  $("#quizProgress").style.width = `${((quizIndex + 1) / quiz.length) * 100}%`;
  quizLocked = false;
  question.innerHTML = `<div class="quiz-question"><h3>${prompt}</h3><div class="quiz-options">${options.map((option, index) => `<button type="button" data-answer="${index}">${String.fromCharCode(65 + index)} &nbsp; ${option.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</button>`).join("")}</div><p class="quiz-feedback" role="status"></p></div>`;
  $$(".quiz-options button", question).forEach(button => button.addEventListener("click", () => answerQuiz(Number(button.dataset.answer))));
}

function answerQuiz(answer) {
  if (quizLocked) return;
  quizLocked = true;
  const correct = quiz[quizIndex][2];
  $$(".quiz-options button").forEach((button, index) => {
    button.disabled = true;
    if (index === correct) button.classList.add("correct");
    if (index === answer && answer !== correct) button.classList.add("wrong");
  });
  if (answer === correct) quizScore++;
  $(".quiz-feedback").textContent = answer === correct ? "Resposta correta. Continue para a próxima." : `Não foi desta vez. A resposta correta está destacada em verde.`;
  setTimeout(() => {
    quizIndex++;
    if (quizIndex < quiz.length) renderQuizQuestion();
    else showQuizResult();
  }, 1050);
}

function showQuizResult() {
  $("#quizQuestion").hidden = true;
  $(".quiz-progress").hidden = true;
  const result = $("#quizResult");
  result.hidden = false;
  $("#quizScore").textContent = `${quizScore}/${quiz.length}`;
  const title = quizScore >= 8 ? "Excelente!" : quizScore >= 5 ? "Bom caminho!" : "Continue explorando";
  $("#quizResultTitle").textContent = title;
  $("#quizResultText").textContent = quizScore >= 8 ? "Você demonstra domínio dos fundamentos e da plataforma Web." : "Revise as seções e refaça o teste para consolidar os conceitos.";
}

function resetQuiz() {
  quizIndex = 0; quizScore = 0;
  $("#quizQuestion").hidden = false;
  $(".quiz-progress").hidden = false;
  $("#quizResult").hidden = true;
  renderQuizQuestion();
}

const glossary = [
  ["Tag","Nome escrito entre sinais de menor e maior que identifica um elemento."],
  ["Elemento","A unidade criada por uma tag de abertura, conteúdo opcional e tag de fechamento."],
  ["Atributo","Informação adicional associada a um elemento."],
  ["DOM","Uma árvore que representa as partes da página para o navegador."],
  ["Semântica","Usar etiquetas que explicam o que cada parte da página representa."],
  ["Hipertexto","Texto com links que levam a outras páginas ou informações."],
  ["Front-end","Camada da interface executada no navegador."],
  ["Responsividade","Capacidade da interface se adaptar a diferentes telas."],
  ["Acessibilidade","Projeto que permite uso efetivo por pessoas com diferentes capacidades."],
  ["SEO","Conjunto de práticas que melhora compreensão e descoberta pela busca."],
  ["API","Uma ferramenta que permite que códigos e sistemas conversem entre si."],
  ["Browser","Programa usado para abrir sites, como Chrome, Firefox ou Edge."],
  ["Viewport","Parte da tela onde o site aparece."],
  ["Marcação","Código que organiza e dá significado ao conteúdo."]
];

function setupGlossary() {
  const grid = $("#glossaryGrid");
  if (!grid) return;
  grid.innerHTML = glossary.map(([term, definition]) => `<article class="glossary-card reveal"><h3>${term}</h3><p>${definition}</p></article>`).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin:"0px 0px -40px" });
  $$(".reveal").forEach(element => observer.observe(element));

  const timelineLine = $(".timeline-line");
  if (timelineLine) new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("active"));
  }, { threshold:.15 }).observe(timelineLine);
}

function setupNavigation() {
  const nav = $(".main-nav");
  const menuToggle = $("#menuToggle");
  const closeMenu = () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  };
  menuToggle?.addEventListener("click", event => {
    const open = nav.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  $$(".main-nav a").forEach(link => link.addEventListener("click", closeMenu));
  const sections = $$("main section[id]");
  const navLinks = $$(".main-nav a");
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin:"-35% 0px -55%", threshold:0 });
  sections.forEach(section => new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${section.id}`));
    });
  }, { rootMargin:"-35% 0px -55%", threshold:.01 }).observe(section));

  window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - innerHeight;
    $("#readingProgress").style.width = `${height > 0 ? (scrollY / height) * 100 : 0}%`;
  }, { passive:true });
}

function setupTheme() {
  const stored = localStorage.getItem("html-guide-theme");
  if (stored) document.documentElement.dataset.theme = stored;
  const toggle = $("#themeToggle");
  const updateLabel = () => {
    const light = document.documentElement.dataset.theme === "light";
    toggle?.setAttribute("aria-label", light ? "Ativar tema escuro" : "Ativar tema claro");
    toggle?.setAttribute("aria-pressed", String(light));
  };
  updateLabel();
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("html-guide-theme", next);
    updateLabel();
  });
}

function setupCopy() {
  $$(".copy-button").forEach(button => button.addEventListener("click", async () => {
    const element = document.getElementById(button.dataset.copy);
    if (!element) return;
    const text = element.tagName === "CODE" ? element.innerText : element.textContent;
    try {
      await navigator.clipboard.writeText(text);
      const old = button.textContent;
      button.textContent = "Copiado";
      setTimeout(() => button.textContent = old, 1400);
    } catch {
      button.textContent = "Selecione o código";
    }
  }));
}

function setupDemo() {
  $("#codeTab")?.addEventListener("click", () => switchDemo("code"));
  $("#previewTab")?.addEventListener("click", () => switchDemo("preview"));
  function switchDemo(type) {
    const code = $("#completeCodePane"), preview = $("#demoPreview"), codeTab = $("#codeTab"), previewTab = $("#previewTab");
    const showCode = type === "code";
    code.hidden = !showCode; preview.hidden = showCode;
    codeTab.classList.toggle("active", showCode); previewTab.classList.toggle("active", !showCode);
    codeTab.setAttribute("aria-selected", String(showCode)); previewTab.setAttribute("aria-selected", String(!showCode));
  }
}

function setupForms() {
  $("#progress")?.addEventListener("input", event => $("#rangeOutput").textContent = `${event.target.value}%`);
  $("#demoForm")?.addEventListener("submit", event => {
    event.preventDefault();
    $("#formStatus").textContent = "Formulário válido. Dados prontos para envio.";
  });
  $("#mediaPlay")?.addEventListener("click", event => {
    const demo = $("#videoDemo");
    const playing = demo.classList.toggle("playing");
    event.currentTarget.textContent = playing ? "❚❚" : "▶";
    event.currentTarget.setAttribute("aria-label", playing ? "Pausar animação" : "Reproduzir animação");
  });
}

function setupCanvas() {
  const canvas = $("#demoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let frame = 0, animation = null, paused = false;
  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle = "rgba(183,164,216,.10)";
    ctx.lineWidth = 1;
    for (let x=0;x<w;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
    for (let y=0;y<h;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
    ctx.beginPath();
    for (let x=0;x<=w;x+=4) {
      const y = h/2 + Math.sin(x/42 + frame/18) * 52 + Math.cos(x/19) * 18;
      x === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    const gradient = ctx.createLinearGradient(0,0,w,0);
    gradient.addColorStop(0,"#b7a4d8"); gradient.addColorStop(1,"#ed8b70");
    ctx.strokeStyle = gradient; ctx.lineWidth = 4; ctx.stroke();
    frame++;
    if (!paused && !document.hidden) animation = requestAnimationFrame(draw);
  }
  const start = () => {
    if (paused || document.hidden || animation !== null) return;
    draw();
  };
  start();
  $("#drawCanvas")?.addEventListener("click", () => { frame = 0; });
  $("#toggleCanvas")?.addEventListener("click", event => {
    paused = !paused;
    event.currentTarget.setAttribute("aria-pressed", String(paused));
    event.currentTarget.textContent = paused ? "Continuar" : "Pausar";
    if (paused) {
      cancelAnimationFrame(animation);
      animation = null;
    } else start();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animation);
      animation = null;
    } else start();
  });
  const svg = $("#demoSvg");
  const point = $("#svgCursor");
  if (!svg || !point) return;
  let dragging = false;
  const movePoint = event => {
    const matrix = svg.getScreenCTM();
    if (!matrix) return;
    const cursor = svg.createSVGPoint();
    cursor.x = event.clientX;
    cursor.y = event.clientY;
    const position = cursor.matrixTransform(matrix.inverse());
    const x = Math.max(20,Math.min(580,position.x));
    const y = Math.max(20,Math.min(260,position.y));
    point.setAttribute("cx",x.toFixed(1));
    point.setAttribute("cy",y.toFixed(1));
    point.setAttribute("aria-valuenow",String(Math.round((x - 20) / 5.6)));
  };
  point.addEventListener("pointerdown", event => {
    dragging = true;
    point.setPointerCapture(event.pointerId);
    movePoint(event);
  });
  point.addEventListener("pointermove", event => dragging && movePoint(event));
  const stopDragging = () => { dragging = false; };
  point.addEventListener("pointerup",stopDragging);
  point.addEventListener("pointercancel",stopDragging);
  point.addEventListener("keydown",event => {
    const step = event.shiftKey ? 10 : 2;
    let x = Number(point.getAttribute("cx"));
    let y = Number(point.getAttribute("cy"));
    if (event.key === "ArrowLeft") x -= step;
    else if (event.key === "ArrowRight") x += step;
    else if (event.key === "ArrowUp") y -= step;
    else if (event.key === "ArrowDown") y += step;
    else return;
    event.preventDefault();
    const boundedX = Math.max(20,Math.min(580,x));
    const boundedY = Math.max(20,Math.min(260,y));
    point.setAttribute("cx",String(boundedX));
    point.setAttribute("cy",String(boundedY));
    point.setAttribute("aria-valuenow",String(Math.round((boundedX - 20) / 5.6)));
  });
}

function setupParallax() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  $(".hero")?.addEventListener("pointermove", event => {
    const shield = $("#htmlShield");
    if (!shield) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 7;
    shield.style.setProperty("--gesture-y",`${x.toFixed(2)}deg`);
    shield.style.setProperty("--gesture-x",`${(y / 3).toFixed(2)}deg`);
  });
  $(".hero")?.addEventListener("pointerleave", () => {
    $("#htmlShield")?.style.setProperty("--gesture-y","0deg");
    $("#htmlShield")?.style.setProperty("--gesture-x","0deg");
  });
  $$(".magnetic").forEach(button => {
    button.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width/2) * .12;
      const y = (event.clientY - rect.top - rect.height/2) * .12;
      button.style.transform = `translate(${x}px,${y}px)`;
    });
    button.addEventListener("pointerleave", () => button.style.transform = "");
  });
}

function setupAtmosphere() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener("pointermove", event => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  }, { passive:true });

  const canvas = $("#heroParticles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let frame;
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio,0,0,ratio,0,0);
    particles = Array.from({ length: Math.min(38, Math.max(18, Math.floor(rect.width / 30))) }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      r: Math.random() * 1.4 + .35,
      vx: (Math.random() - .5) * .14,
      vy: (Math.random() - .5) * .14,
      alpha: Math.random() * .45 + .12
    }));
  };
  const draw = () => {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0,0,rect.width,rect.height);
    particles.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0) particle.x = rect.width;
      if (particle.x > rect.width) particle.x = 0;
      if (particle.y < 0) particle.y = rect.height;
      if (particle.y > rect.height) particle.y = 0;
      ctx.beginPath();
      ctx.arc(particle.x,particle.y,particle.r,0,Math.PI * 2);
      ctx.fillStyle = `rgba(183,164,216,${particle.alpha})`;
      ctx.fill();
      particles.slice(i + 1).forEach(other => {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx,dy);
        if (distance < 110) {
          ctx.beginPath();
          ctx.moveTo(particle.x,particle.y);
          ctx.lineTo(other.x,other.y);
          ctx.strokeStyle = `rgba(183,164,216,${(1 - distance / 110) * .09})`;
          ctx.stroke();
        }
      });
    });
    frame = requestAnimationFrame(draw);
  };
  resize();
  draw();
  addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
}

function setupScrollEffects() {
  const header = $(".site-header");
  const backToTop = $("#backToTop");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header?.classList.toggle("scrolled", scrollY > 24);
      if (backToTop) backToTop.hidden = scrollY < 480;
      ticking = false;
    });
  }, { passive:true });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

function setupTopicModal() {
  const modal = $("#topicModal");
  if (!modal) return;
  const background = [$(".site-header"), $("main"), $(".site-footer")].filter(Boolean);
  let previousFocus = null;
  let closeTimer;

  const closeModal = () => {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    background.forEach(element => { element.inert = false; });
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => { modal.hidden = true; }, 280);
    if (previousFocus?.isConnected) previousFocus.focus();
  };

  const openModal = (topicKey, trigger) => {
    const tag = tags.find(item => item.name === trigger?.dataset.tagName);
    const topic = tag ? {
      ...deepTopics.tags,
      title:tag.name,
      summary:tag.purpose,
      example:tag.syntax,
      details:[
        "A etiqueta informa ao navegador qual é o papel desse conteúdo.",
        "Combine-a com outras etiquetas para criar partes completas de uma página.",
        "Escolha a etiqueta pelo significado e confira o exemplo antes de usar."
      ]
    } : deepTopics[topicKey] || deepTopics.tags;
    previousFocus = document.activeElement;
    $("#topicModalTitle").textContent = topic.title;
    $("#topicModalIndex").textContent = `EXPLICAÇÃO PROFUNDA · ${topicKey.toUpperCase()}`;
    $("#topicModalSummary").textContent = topic.summary;
    $("#topicModalExample").innerHTML = `<span>EXEMPLO</span><code>${topic.example.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`;
    $("#topicModalDetails").innerHTML = topic.details.map((detail, index) => `
      <article>
        <span>${String(index + 1).padStart(2,"0")}</span>
        <p>${detail}</p>
      </article>`).join("");
    modal.hidden = false;
    background.forEach(element => { element.inert = true; });
    requestAnimationFrame(() => modal.classList.add("open"));
    document.body.classList.add("modal-open");
    clearTimeout(closeTimer);
    $("#topicModalClose")?.focus();
  };

  document.addEventListener("click", event => {
    const trigger = event.target.closest?.("[data-topic]");
    if (trigger) openModal(trigger.dataset.topic, trigger);
  });
  document.addEventListener("keydown", event => {
    const topicCard = event.target.closest?.('[data-topic][role="button"]');
    if (topicCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal(topicCard.dataset.topic, topicCard);
      return;
    }
    if (event.key === "Escape") closeModal();
    if (modal.hidden || event.key !== "Tab") return;
    const focusable = $$("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])", modal)
      .filter(element => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  $$("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
  $("#topicModalClose")?.addEventListener("click", closeModal);
}

setupTagReference();
setupGlossary();
setupReveal();
setupNavigation();
setupTheme();
setupCopy();
setupDemo();
setupForms();
setupCanvas();
setupParallax();
setupAtmosphere();
setupScrollEffects();
setupTopicModal();
renderQuizQuestion();
$("#quizReset")?.addEventListener("click", resetQuiz);
