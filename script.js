const dynamicOutput = document.getElementById('dynamicOutput');
const input = document.getElementById('input');
const keySound = document.getElementById('keySound');

const responses = {
  'cd corazon': 'Entrando a corazon...\n❤️ carpeta: confianza\n💖 carpeta: apoyo\n💘 carpeta: aventuras\n',
  'ls': 'confianza  apoyo  aventuras',
  'cat confianza': 'Siempre puedes contar conmigo.',
  'cat apoyo': 'Estaré a tu lado en cada paso.',
  'cat aventuras': 'Nos esperan muchas historias por vivir.',
  'cat secreto.txt': '🌌 Quiero que sepas que todo esto lo hice pensando en ti.\nNo importa cuánto tiempo pase o cuántos comandos escribas,\nmi cariño por ti siempre estará aquí.\n- Danny 💚',
  'mensaje': `Así que si quieres ver algo, te ayudaré a conseguirlo.\nSi no sabes algo, te lo enseñaré.\nPero cuando quieras lograr algo por tus propios medios, no interferiré.`,
  'help': 'Comandos disponibles: cd corazon, ls, cat [nombre], mensaje, sudo love ., clear, help',
};

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
      } else if (command === 'sudo love .') {
        createHearts();
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
  
