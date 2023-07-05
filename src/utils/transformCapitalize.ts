const transformCapitalize = (word: string): string => {
  const firstWord = word.split(" ")[0];
  const firstLetterUpperCase = firstWord[0].toUpperCase();
  return firstLetterUpperCase + firstWord.slice(1);
};

export default transformCapitalize;
