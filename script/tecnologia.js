function openTechnologyPage(technology) {
    var technologyPageOverlay = document.getElementById('technology-page-overlay');
    var technologyPage = document.getElementById('technology-page');
    var technologyPageTitle = document.getElementById('technology-page-title');
    var technologyPageContent = document.getElementById('technology-page-content');
  
    // Definir o título e o conteúdo da página de tecnologia com base na tecnologia selecionada
    if (technology === 'html') {
      technologyPageTitle.textContent = 'HTML';
      technologyPageContent.innerHTML = `
        <p>
          HTML é uma linguagem de marcação usada para estruturar o conteúdo de uma página da web. É a base de qualquer site e é amplamente utilizado na construção de interfaces da web.
        </p>
        <p>
          <strong>Vantagens do HTML:</strong>
        </p>
        <ul>
          <li>Fácil de aprender e entender</li>
          <li>Compatível com todos os navegadores</li>
          <li>Ampla comunidade e recursos disponíveis</li>
        </ul>
        <p>
          <strong>Limitações do HTML:</strong>
        </p>
        <ul>
          <li>Limitado em termos de estilos e layout</li>
          <li>Não é uma linguagem de programação completa</li>
          <li>Depende de outras tecnologias para funcionalidades avançadas</li>
        </ul>
        <p>
          <strong>Grandes projetos que utilizam HTML:</strong>
        </p>
        <ul>
          <li>Google</li>
          <li>Facebook</li>
          <li>YouTube</li>
        </ul>
      `;
    } else if (technology === 'css') {
      technologyPageTitle.textContent = 'CSS';
      technologyPageContent.innerHTML = `
        <p>
          CSS é uma linguagem de estilo usada para controlar a aparência e o layout de uma página da web. É usado em conjunto com o HTML para adicionar estilos e design aos elementos da página.
        </p>
        <p>
          <strong>Vantagens do CSS:</strong>
        </p>
        <ul>
          <li>Possibilita o design e a aparência visual dos sites</li>
          <li>Facilita a manutenção e reutilização do código</li>
          <li>Permite a criação de layouts responsivos</li>
        </ul>
        <p>
          <strong>Limitações do CSS:</strong>
        </p>
        <ul>
          <li>Compatibilidade entre navegadores</li>
          <li>Complexidade em alguns casos de design avançado</li>
          <li>Depende do HTML para estrutura e conteúdo</li>
        </ul>
        <p>
          <strong>Grandes projetos que utilizam CSS:</strong>
        </p>
        <ul>
          <li>Twitter</li>
          <li>Netflix</li>
          <li>Amazon</li>
        </ul>
      `;
    } else if (technology === 'figma') {
      technologyPageTitle.textContent = 'Figma';
      technologyPageContent.innerHTML = `
        <p>
          Figma é uma ferramenta de design de interface de usuário baseada na web. É amplamente utilizada por designers para criar protótipos interativos, colaborar em tempo real e criar designs de alta qualidade.
        </p>
        <p>
          <strong>Vantagens do Figma:</strong>
        </p>
        <ul>
          <li>Acesso baseado na web e colaboração em tempo real</li>
          <li>Interface intuitiva e fácil de usar</li>
          <li>Recursos avançados de design e prototipagem</li>
        </ul>
        <p>
          <strong>Limitações do Figma:</strong>
        </p>
        <ul>
          <li>Requer uma conexão com a internet</li>
          <li>Recursos mais avançados podem exigir uma assinatura paga</li>
          <li>Não é uma ferramenta de desenvolvimento completa</li>
        </ul>
        <p>
          <strong>Grandes projetos que utilizam o Figma:</strong>
        </p>
        <ul>
          <li>Microsoft</li>
          <li>Uber</li>
          <li>Zoom</li>
        </ul>
      `;
    }
  
    // Exibir a página de tecnologia
    technologyPageOverlay.style.display = 'block';
  }

  function closeTechnologyPage() {
  var technologyPageOverlay = document.getElementById('technology-page-overlay');
  technologyPageOverlay.style.display = 'none';
}

// Adicionar evento de clique ao botão de fechar
document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', closeTechnologyPage);
});
  
  window.onload = function() {
    var technologyPageContainer = document.getElementById('technology-page-container');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './technology-page.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        technologyPageContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  };