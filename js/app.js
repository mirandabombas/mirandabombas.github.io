document.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const url = button.getAttribute('href');
  const target = button.getAttribute('data-bs-target');

  // TODO be a bit smarter, create modal elements on the fly and load external html only
  fetch(url).then(function(response) {
    return response.text();
  }).then(function(body) {
    document.querySelector('#modal .modal-content').innerHTML = body;
  });
});
