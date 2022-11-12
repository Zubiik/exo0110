import { React, useState } from 'react';
import getArtistInfo from '../../Utils/API/GET/getArtistInfo';

function RandomBox({ artistID, setArtistID }) {
  const [result, setResult] = useState();

  const OnClickHandler = () => {
    getArtistInfo().then((response) => {
      setResult(response);
    });

    console.log(result.artists[0]);
    setArtistID(result.artists[0]);
  };
  return (
    <div>
      <button onClick={OnClickHandler}>Click here</button>
      <div></div>
    </div>
  );
}

export default RandomBox;
