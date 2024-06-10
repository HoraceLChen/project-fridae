document.addEventListener('DOMContentLoaded', function() {
  console.log('fridae chat online');
  const form = document.querySelector('#chat_form');
  const messageInput = document.querySelector('#message');
  const responseOutput = document.querySelector('.ai__chatbox__message');

  const userMessageRecord = document.querySelector('.ai-chat__record');

  function scrollToBottom() {
    console.log('scrolling');
    var recordDiv = document.querySelector('.record-parent');
    recordDiv.scrollTop = recordDiv.scrollHeight;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = messageInput.value;

    fetch('/dashboards/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ message: message })
      })
      .then(response => response.json())
      .then(data => {
        responseOutput.textContent = data.response;
      })
      .catch(error => {
        console.error('Error:', error);
        responseOutput.textContent = 'wrong again idiot';
      });
    const userMessage = document.createElement("div")
    userMessage.classList.add('ai-chat__record__message', 'mt-2')
    userMessage.innerText = `${messageInput.value}`
    userMessageRecord.appendChild(userMessage)
    scrollToBottom()
    messageInput.value=''
    });
  });




// event.preventDefault();
//     const message = messageInput.value;

//     fetch('/dashboards/gpt', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json',
//       'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//         },
//       body: JSON.stringify({ message: message })
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//        response.json();
//     })
//     .then(data => {
//       console.log(data);
//       // responseOutput.textContent = data.response;
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       responseOutput.textContent = 'An error occurred.';
//     });
