let secret = 0;
let tries = 0;

function newGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  const msg = document.getElementById('message');
  msg.textContent = '';
  msg.className = '';
  document.getElementById('attempts').textContent = 'Próby: 0';
  const input = document.getElementById('guess-input');
  input.value = '';
  input.disabled = false;
  document.getElementById('guess-btn').disabled = false;
  input.focus();
}

function makeGuess() {
  const input = document.getElementById('guess-input');
  const msg = document.getElementById('message');
  const value = Number(input.value);

  // usuń klasę .shake i wymuś ponowne uruchomienie animacji
  msg.classList.remove('shake');
  void msg.offsetWidth; // reset animacji CSS

  if (!Number.isInteger(value) || value < 1 || value > 100) {
    msg.textContent = 'Proszę wpisać liczbę od 1 do 100!';
    msg.style.color = '#dc2626';
    msg.classList.add('shake');
    input.focus();
    return;
  }

  tries++;
  if (value < secret) {
    msg.textContent = 'Za mała! Spróbuj większej!';
    msg.style.color = '#dc2626';
    msg.classList.add('shake');
  } else if (value > secret) {
    msg.textContent = 'Za duża! Spróbuj mniejszej!';
    msg.style.color = '#dc2626';
    msg.classList.add('shake');
  } else {
    msg.textContent = `🎉 Masz to! Nasza sekretna liczba to: ${secret}.`;
    msg.className = 'win';
    document.getElementById('guess-btn').disabled = true;
    input.disabled = true;
  }
  document.getElementById('attempts').textContent = 'Próby: ' + tries;
  input.select();
}

document.getElementById('guess-btn').addEventListener('click', makeGuess);
document.getElementById('new-btn').addEventListener('click', newGame);
document.getElementById('guess-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') makeGuess();
});

newGame();
