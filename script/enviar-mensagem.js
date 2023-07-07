document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    var errorMessage = document.createElement('p');
    errorMessage.textContent = 'Por favor, preencha todos os campos.';
    errorMessage.style.color = 'red';
    document.querySelector('form').appendChild(errorMessage);

    return;
  }

  // Cria um objeto com os dados do formulário
  var formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Obtém as mensagens armazenadas no Local Storage ou cria um novo array vazio
  var messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Adiciona o objeto do formulário ao array de mensagens
  messages.push(formData);

  // Converte o array de mensagens para JSON e o armazena no Local Storage
  localStorage.setItem('messages', JSON.stringify(messages));

  var successMessage = document.createElement('p');
  successMessage.textContent = 'Mensagem enviada';
  successMessage.style.color = 'green';

  // Remova a mensagem anterior, se existir
  var previousSuccessMessage = document.getElementById('successMessage');
  if (previousSuccessMessage) {
    previousSuccessMessage.remove();
  }

  // Adicione a nova mensagem de sucesso
  successMessage.id = 'successMessage';
  document.querySelector('form').appendChild(successMessage);

  // Limpa os campos do formulário
  successMessage.textContent = 'E-mail enviado';
  successMessage.style.color = 'green';
  document.querySelector('form').appendChild(successMessage);

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

