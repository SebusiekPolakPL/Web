let secret = 0;
let tries = 0;

function newGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = 'Próby: 0';
  const input = document.getElementById('guess-input');
  input.value = '';
  input.disabled = false;
  document.getElementById('guess-btn').disabled = false;
  input.focus();
}

function makeGuess() {
  const input = document.getElementById('guess-input');
  const value = Number(input.value);

  if (!Number.isInteger(value) || value < 1 || value > 100) {
    document.getElementById('message').textContent = 'Proszę wpisać liczbę od 1 do 100!';
    input.focus();
    return;
  }

  tries++;
  if (value < secret) {
    document.getElementById('message').textContent = 'Za mała! Spróbuj większej!';
  } else if (value > secret) {
    document.getElementById('message').textContent = 'Za duża! Spróbuj mniejszej!';
  } else {
    document.getElementById('message').textContent = `Masz to! Nasza sekretna liczba to: ${secret}.`;
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
