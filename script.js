const dynamicOutput = document.getElementById('dynamicOutput');
const input = document.getElementById('input');

const responses = {
  'cd corazon': 'Entrando a corazon...\n❤️ carpeta: confianza\n💖 carpeta: apoyo\n💘 carpeta: aventuras\n',
  'ls': 'confianza  apoyo  aventuras',
  'cat confianza': 'Siempre puedes contar conmigo.',
  'cat apoyo': 'Estaré a tu lado en cada paso.',
  'cat aventuras': 'Nos esperan muchas historias por vivir.',
  'mensaje': `Así que si quieres ver algo, te ayudaré a conseguirlo.\nSi no sabes algo, te lo enseñaré.\nPero cuando quieras lograr algo por tus propios medios, no interferiré.`,
  'help': 'Comandos disponibles: cd corazon, ls, cat [nombre], mensaje, clear, help',
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    const prompt = `heidy@corazon:~$ ${command}`;

    if (command === 'clear') {
      dynamicOutput.innerHTML = ''; // Solo borra esta parte
    } else {
      dynamicOutput.innerHTML += `\n${prompt}\n`;
      if (responses[command]) {
        dynamicOutput.innerHTML += `${responses[command]}\n`;
      } else {
        dynamicOutput.innerHTML += `Comando no encontrado. Escribe 'help' para ver opciones.\n`;
      }
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});