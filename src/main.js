import './style.css';

const app = document.getElementById('app');

function header(active) {
  return `
    <header>
      <a class="logo" href="#/">🐍 Apprendre Python</a>
      <nav>
        <a href="#/" class="${active === 'home' ? 'active' : ''}">Accueil</a>
        <a href="#/cours" class="${active === 'cours' ? 'active' : ''}">Cours</a>
        <a href="#/sandbox" class="${active === 'sandbox' ? 'active' : ''}">Bac à sable</a>
      </nav>
    </header>`;
}

function footer() {
  return `<footer>Apprendre Python — ton code s'exécute dans ton navigateur grâce à Pyodide. Aucun compte requis.</footer>`;
}

export function render(html, active) {
  app.innerHTML = header(active) + `<main>${html}</main>` + footer();
  window.scrollTo(0, 0);
}

async function route() {
  const hash = window.location.hash || '#/';
  const parts = hash.replace(/^#\//, '').split('/');

  const { renderHome } = await import('./pages/home.js');
  const { renderLesson } = await import('./pages/lesson.js');
  const { renderExercise } = await import('./pages/exercise.js');
  const { renderSandbox } = await import('./pages/sandbox.js');

  if (parts[0] === 'cours' && parts[1]) {
    renderLesson(parts[1]);
  } else if (parts[0] === 'exercice' && parts[1]) {
    renderExercise(parts[1]);
  } else if (parts[0] === 'sandbox') {
    renderSandbox();
  } else if (parts[0] === 'cours') {
    renderHome('cours');
  } else {
    renderHome('home');
  }
}

window.addEventListener('hashchange', route);
route();
