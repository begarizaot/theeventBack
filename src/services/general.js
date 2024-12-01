const imageToBase64 = require("image-to-base64");

const onReduceRepeatedElements = (data, { elemen = "", valueD = "amount" }) => {
  const noDuplicates = data.reduce((accumulator, value) => {
    const elementItExists = accumulator.find(
      (elemento) => elemento[elemen] === value[elemen]
    );
    if (elementItExists) {
      return accumulator.map((elemento) => {
        if (elemento[elemen] === value[elemen]) {
          return {
            ...elemento,
            [valueD]: elemento[valueD] + value[valueD],
          };
        }

        return elemento;
      });
    }

    return [...accumulator, value];
  }, []);

  return noDuplicates;
};

const eventBase64ImageFromURL = async (url) => {
  let base64Image = await imageToBase64(url || '');
  return `data:image/png;base64,${base64Image || ''}`;
};

module.exports = {
  onReduceRepeatedElements,
  eventBase64ImageFromURL,
};
