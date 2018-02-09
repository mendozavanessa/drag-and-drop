$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApZ1KLdWqYhreGGncB-WjiZ3PVa6mf_tw",
    authDomain: "drag-an-drop.firebaseapp.com",
    databaseURL: "https://drag-an-drop.firebaseio.com",
    projectId: "drag-an-drop",
    storageBucket: "drag-an-drop.appspot.com",
    messagingSenderId: "259125372032"
  };
  firebase.initializeApp(config);
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
