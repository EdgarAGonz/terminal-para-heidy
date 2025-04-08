const dynamicOutput = document.getElementById('dynamicOutput');
const input = document.getElementById('input');
// Comment out or remove the audio reference since we're not using it
// const keySound = document.getElementById('keySound');

const responses = {
  'cd corazon': 'Entrando a corazon...\n❤️ carpeta: confianza\n💖 carpeta: apoyo\n💘 carpeta: aventuras\n',
  'ls': 'confianza  apoyo  aventuras',
  'cat confianza': 'Siempre puedes contar conmigo.',
  'cat apoyo': 'Estaré a tu lado en cada paso.',
  'cat aventuras': 'Nos esperan muchas historias por vivir.',
  'cat secreto.txt': '🌌 Quiero que sepas que todo esto lo hice pensando en ti.\nNo importa cuánto tiempo pase o cuántos comandos escribas,\nmi cariño por ti siempre estará aquí.\n- Danny 🐧',
  'mensaje': `Así que si quieres ver algo, te ayudaré a conseguirlo.\nSi no sabes algo, te lo enseñaré.\nPero cuando quieras lograr algo por tus propios medios, no interferiré.`,
  'help': 'Comandos disponibles: cd corazon, ls, cat [nombre], mensaje, sudo love ., clear, help',
};

function createFallingHeart() {
  const heart = document.createElement('div');
  heart.className = 'falling-heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  const container = document.getElementById('heartsContainer');
  container.appendChild(heart);
  
  // Remove heart after animation
  heart.addEventListener('animationend', () => heart.remove());
}

function startHeartsFalling() {
  // Create initial hearts
  for(let i = 0; i < 10; i++) {
    setTimeout(() => createFallingHeart(), Math.random() * 1000);
  }
  
  // Continue creating hearts
  setInterval(() => {
    createFallingHeart();
  }, 300);
}

function createFallingSun() {
  const sun = document.createElement('div');
  sun.className = 'falling-sun';
  sun.innerHTML = '☀️';
  sun.style.left = Math.random() * 100 + '%';
  sun.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  const container = document.getElementById('heartsContainer');
  container.appendChild(sun);
  
  sun.addEventListener('animationend', () => sun.remove());
}

function startSunsFalling() {
  for(let i = 0; i < 8; i++) {
    setTimeout(() => createFallingSun(), Math.random() * 1000);
  }
  
  setInterval(() => {
    createFallingSun();
  }, 400);
}

function createFallingStar() {
  const star = document.createElement('div');
  star.className = 'twinkling-star';
  star.innerHTML = '⭐';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  
  const container = document.getElementById('heartsContainer');
  container.appendChild(star);
  
  setTimeout(() => star.remove(), 3000);
}

function startStarsFalling() {
  // Clear any existing intervals
  if (window.starInterval) {
    clearInterval(window.starInterval);
  }
  
  // Create initial stars
  for(let i = 0; i < 6; i++) {
    setTimeout(() => createFallingStar(), Math.random() * 1000);
  }
  
  // Store the interval ID so we can clear it later
  window.starInterval = setInterval(() => {
    createFallingStar();
  }, 800);
}

// Keep only the first version of startStarsFalling (around line 89-102)
function startStarsFalling() {
  // Clear any existing intervals
  if (window.starInterval) {
    clearInterval(window.starInterval);
  }
  
  // Create initial stars
  for(let i = 0; i < 4; i++) {
    setTimeout(() => createFallingStar(), Math.random() * 1000);
  }
  
  // Store the interval ID so we can clear it later
  window.starInterval = setInterval(() => {
    createFallingStar();
  }, 1000);
}

// Remove this standalone if statement that's causing the error
/* Remove this block
if (command === 'clear') {
  dynamicOutput.innerHTML = '';
  document.getElementById('heartsContainer').innerHTML = '';
  if (window.starInterval) {
    clearInterval(window.starInterval);
  }
}
*/
function createHearts() {
  const container = document.getElementById('heartsContainer');

  // Crear múltiples corazones
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    container.appendChild(heart);

    // Eliminar el corazón después de la animación
    heart.addEventListener('animationend', () => heart.remove());
  }
}

function startStarsFalling() {
  // Create just a few initial stars
  for(let i = 0; i < 4; i++) {
    setTimeout(() => createFallingStar(), Math.random() * 1000);
  }
  
  // Create new stars less frequently
  setInterval(() => {
    createFallingStar();
  }, 1000);
}

// Modify the event listener to include suns for 'ls' command
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      const prompt = `heidy@corazon:~$ ${command}`;
      const line = document.createElement('div');
      line.textContent = prompt;
      line.classList.add('fade-in');
      dynamicOutput.appendChild(line);
  
      if (command === 'clear') {
        dynamicOutput.innerHTML = '';
        document.getElementById('heartsContainer').innerHTML = '';
        if (window.starInterval) {
          clearInterval(window.starInterval);
        }
      } else if (command === 'sudo love .') {
        createHearts();
      } else if (command === 'cd corazon') {
        const responseLine = document.createElement('div');
        responseLine.textContent = responses[command];
        responseLine.classList.add('fade-in');
        dynamicOutput.appendChild(responseLine);
        startHeartsFalling();
      } else if (command === 'ls') {
        const responseLine = document.createElement('div');
        responseLine.textContent = responses[command];
        responseLine.classList.add('fade-in');
        dynamicOutput.appendChild(responseLine);
        startSunsFalling();
      } else if (command === 'mensaje') {
        const responseLine = document.createElement('div');
        responseLine.textContent = responses[command];
        responseLine.classList.add('fade-in');
        dynamicOutput.appendChild(responseLine);
        
        // Clear any existing intervals first
        if (window.starInterval) {
          clearInterval(window.starInterval);
        }
        document.getElementById('heartsContainer').innerHTML = '';
        
        // Start new stars falling
        startStarsFalling();
      } else if (responses[command]) {
        const responseLine = document.createElement('div');
        responseLine.textContent = responses[command];
        responseLine.classList.add('fade-in');
        dynamicOutput.appendChild(responseLine);
      } else {
        const errorLine = document.createElement('div');
        errorLine.textContent = 'Comando no reconocido.';
        errorLine.classList.add('fade-in');
        dynamicOutput.appendChild(errorLine);
      }
  
      input.value = '';
      dynamicOutput.scrollTop = dynamicOutput.scrollHeight;
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const lines = document.querySelectorAll('.letter-animation');
  let lineDelay = 0;

  lines.forEach(line => {
    const text = line.textContent;
    line.textContent = '';
    line.style.opacity = 1;
    
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${lineDelay + (i * 0.05)}s`;
      line.appendChild(span);
    });
    
    lineDelay += (text.length * 0.05) + 0.5; // Add delay between lines
  });
});
  
