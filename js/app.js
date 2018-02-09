$(document).ready(function() {
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);

  function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function permitirDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    if (event.target.className === 'marco-foto' || event.target.className === 'marco') {
      let idFoto = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(idFoto));
    }
  }
});
