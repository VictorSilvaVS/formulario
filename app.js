function sendEmail(option) {
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'O formulário foi enviado com sucesso!',
        });
      } else {
        throw new Error('Ocorreu um erro ao enviar o formulário.');
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
      console.error('Erro ao enviar o formulário:', error);
    });
}

function selectOption(option, button) {
  var buttons = document.querySelectorAll('.label');
  buttons.forEach(function (btn) {
    btn.classList.remove('clicked');
  });

  button.classList.add('clicked');
}

function submitForm(button) {
  var selectedOption = document.querySelector('.label.clicked');

  if (selectedOption) {
    button.classList.add('clicked');

    var option = selectedOption.textContent.trim().charAt(0);

    setTimeout(function () {
      sendEmail(option);
    }, 1000);
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Você precisa escolher uma opção antes de enviar o formulário!',
    });
  }
}