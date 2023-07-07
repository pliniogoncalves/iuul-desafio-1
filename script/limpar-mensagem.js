// Função para lidar com o clique no botão "Limpar Mensagens"
function handleClearMessages() {
    localStorage.removeItem('messages'); // Remove o item 'messages' do Local Storage
    alert('Todas as mensagens foram removidas.');
  }
  
  // Adiciona o manipulador de eventos para o clique no botão "Limpar Mensagens"
  document.getElementById('clearMessagesButton').addEventListener('click', handleClearMessages);  