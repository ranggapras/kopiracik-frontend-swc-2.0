const currencyRegex = (subject) => {
  const rupiah = subject.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp${rupiah}`;
};
export default currencyRegex;
