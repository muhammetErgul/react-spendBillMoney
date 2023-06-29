const FormatPrice = (number) => {
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + number).length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  const formattedValue1 = shortValue + suffixes[suffixNum];
  const formattedValue2 = number.toLocaleString();
  return { format1: formattedValue1, format2: formattedValue2 };
};

export default FormatPrice;
