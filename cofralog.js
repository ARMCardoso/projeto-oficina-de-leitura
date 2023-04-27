// Obter os elementos do DOM
const formCofre = document.getElementById('form-cofre');
const senhaCofre = document.getElementById('senha-cofre');
const botaoCofre = document.getElementById('botao-cofre');
const mensagemSecreta = document.getElementById('mensagem-secreta');
const mensagemErro = document.getElementById('mensagem-erro');

// Definir a senha correta
const senhaCorreta = '1234';

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
  theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
  animation: 'slide',
  arrow: false,
  trigger: 'click',
  trackTooltip: true,
  position: 'top'
});

$('.tooltip-custom').tooltipster({
  theme: 'tooltipster-noir-customized',
  contentAsHTML: true, // indica que o conteúdo deve ser tratado como HTML
  functionInit: function(instance, helper) {
    var content = $(helper.origin).data('tooltip-content'); // obtém o conteúdo da tooltip a partir do atributo data-tooltip-content
    $(helper.tooltip).html(content); // define o conteúdo da tooltip
    $(helper.origin).on('touchend', function() {
    instance.close(); // evita que a tooltip seja fechada automaticamente no celular
    });
  }
})
