const form = document.querySelector('#answer-form');
const result = document.querySelector('#result');

function normalize(value) {
  return value.trim().replace(/\s+/g, '').replace(',', '.');
}

function fractionEquals(value, numerator, denominator) {
  const normalized = normalize(value);
  if (normalized.includes('/')) {
    const [n, d] = normalized.split('/').map(Number);
    return d !== 0 && n / d === numerator / denominator;
  }
  return Number(normalized) === numerator / denominator;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const correct = data.get('marginali') === 'si'
    && data.get('congiunte') === 'si'
    && fractionEquals(data.get('cond-e1'), 2, 3)
    && fractionEquals(data.get('cond-e1e2'), 3, 4);
  result.className = `result ${correct ? 'success' : 'error'}`;
  result.textContent = correct
    ? '✓ Tutto corretto! Hai verificato l’esercizio.'
    : 'Controlla le risposte: prova a usare le frazioni 2/3 e 3/4.';
});
