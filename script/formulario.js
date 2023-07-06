    document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

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

    var successMessage = document.createElement('p');
    successMessage.textContent = 'E-mail enviado';
    successMessage.style.color = 'green';
    document.querySelector('form').appendChild(successMessage);

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });

