// Obter os elementos do DOM
const formCofre = document.getElementById('form-cofre');
const senhaCofre = document.getElementById('senha-cofre');
const botaoCofre = document.getElementById('botao-cofre');
const mensagemSecreta = document.getElementById('mensagem-secreta');
const mensagemErro = document.getElementById('mensagem-erro');

// Definir a senha correta
const senhaCorreta = '11114242515';

// Definir o manipulador de eventos para o envio do formulário
formCofre.addEventListener('submit', function(event) {
  // Impedir o envio padrão do formulário
  event.preventDefault();
  
  // Verificar se a senha está correta
  if (senhaCofre.value === senhaCorreta) {
    // Se a senha estiver correta, desbloquear o cofre e exibir a mensagem secreta
    mensagemSecreta.style.display = 'block';
    mensagemErro.style.display = 'none';
  } else {
    // Se a senha estiver incorreta, exibir uma mensagem de erro
    mensagemErro.style.display = 'block';
    mensagemSecreta.style.display = 'none';
  }
});

$('.tooltip-custom').tooltipster({
  touchDevices: true,
  theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
  animation: 'slide',
  arrow: false,
  trackTooltip: true,
  position: 'top',
  interactive: true,
  delay: [0, 3000],
  trigger: 'click',
});  


