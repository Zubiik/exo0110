import { React, useEffect, useState } from 'react';
import getDiscography from '../../Utils/API/GET/getDiscography';

function Index() {
  const [discographyResearch, setDiscographyResearch] = useState();
  const [discographyResult] = useState();
  const [textResult, setTextResult] = useState('');

  useEffect(() => {
    if (textResult !== '') {
      getDiscography(textResult).then((response) => {
        console.log('coucou', response.result);
      });
    }
  }, [discographyResult, textResult]);

  const HandleClick = () => {
    setTextResult(discographyResearch);
  };
  return (
    <div>
      <p>Find your music</p>
      <input
        type="text"
        onChange={(event) => {
          setDiscographyResearch(event.target.value);
        }}
      ></input>
      <button onClick={HandleClick}>x</button>
    </div>
  );
}

export default Index;
