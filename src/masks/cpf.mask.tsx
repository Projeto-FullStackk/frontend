const cpfMask = (input) => {
  const lenght = input.value.lenght;

  if (lenght === 3 || lenght === 7) {
    input.value += ".";
  }

  if (lenght === 10) {
    input.value += "-";
  }
};

export default cpfMask;
