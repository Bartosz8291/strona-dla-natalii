// Pobranie wszystkich przycisków
const buttons = document.querySelectorAll('button');

// Funkcja obsługująca kliknięcie w przycisk
function handleClick(event) {
  const button = event.target;
  const buttonText = button.textContent;
  alert(`Kliknięto przycisk "${buttonText}"`);
}

// Dodanie obsługi zdarzenia dla każdego przycisku
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
