const getDiscography = async (textResult) => {
  console.log(textResult, 'result coté api');
  // const apiKey = '2';
  // eslint-disable-next-line no-return-await
  return await fetch(
    `https://theaudiodb.com/api/v1/json/2/discography.php?s=${textResult}`,
    {},
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export default getDiscography;
