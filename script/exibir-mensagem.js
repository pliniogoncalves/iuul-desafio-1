function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  
  // Carregar as informações usando AJAX
  $.ajax({
    url: "../local-storage.html",
    dataType: "html",
    success: function(response) {
      $("#info-container").html(response);
    },
    error: function() {
      console.log("Erro ao carregar as informações.");
    }
  });
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}