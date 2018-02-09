$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCRd3pQMg8wzu3rKiX-Myf4ucE6s3f8vP0',
    authDomain: 'install-collage.firebaseapp.com',
    databaseURL: 'https://install-collage.firebaseio.com',
    projectId: 'install-collage',
    storageBucket: 'install-collage.appspot.com',
    messagingSenderId: '162495257777'
  };
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
