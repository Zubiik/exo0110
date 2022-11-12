const getMusicVideo = async (artistID) => {
  console.log('apifetch', artistID);

  // const apiKey = '2';
  // eslint-disable-next-line no-return-await
  return await fetch(
    `https://theaudiodb.com/api/v1/json/2/mvid.php?i=${artistID}`,
    {},
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export default getMusicVideo;
