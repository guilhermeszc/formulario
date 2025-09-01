emailjs.init({
  publicKey: "KMI2gy6M-JTCa2hKh",
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formdata = {
      name: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("mensagem").value,
    };

    const serviceID = "service_e0qmr2b";
    const templateID = "template_9wbm3an";
    const submitButton = document.getElementById("submitbutton");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs
      .send(serviceID, templateID, formdata)
      .then(() => {
        Toastify({
          text: "Email enviado !",
          duration: 3000,
        }).showToast();

        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        Toastify({
          text: "Erro ao enviar !",
          style: {
            background: "#FF0000",
            color: "#FFF",
          },
          duration: 3000,
        }).showToast();
      })
      .finally(() => {
        submitButton.textContent = "Enviar mensagem";
        submitButton.disabled = false;
      });
  });
