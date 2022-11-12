const getArtistInfo = async () => {
  // const apiKey = '2';
  // eslint-disable-next-line no-return-await
  return await fetch(
    `
    https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay`,
    {},
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export default getArtistInfo;
