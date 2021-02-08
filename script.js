const button = document.querySelector('button');
const sum = document.querySelector('#sum');

const getPercent = (number, percent) => {
  return number / 100 * percent;
}

const setPercent = (summary, category, percent) => {
  category.textContent = getPercent(summary, percent);
}

const getSum = () => {
  const summary = parseInt(sum.value, 10);
  for (let i = 1; i < 7; i++) {
    const sum = document.querySelector(`#sum${i}`);
    const percent = parseInt(document.querySelector(`#percent${i}`).textContent, 10);
    setPercent(summary, sum, percent);
  }
}

button.addEventListener('click', () => {
  getSum();
});
