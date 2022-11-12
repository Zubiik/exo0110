import { React, useEffect, useState } from 'react';
import getDiscography from '../../Utils/API/GET/getDiscography';
import getMusicVideo from '../../Utils/API/GET/getMusicVideo';
import RandomBox from '../../component/randomBox/index';
import MusicVideo from '../../component/MusicVideo';

function Index() {
  const [discographyResearch, setDiscographyResearch] = useState();
  const [discographyResult, setDiscographyResult] = useState();
  const [musicVideoData, setMusicVideoData] = useState('');
  const [textResult, setTextResult] = useState('');
  const [artistID, setArtistID] = useState('');

  useEffect(() => {
    if (textResult !== '') {
      getDiscography(textResult).then((response) => {
        setDiscographyResult(response);
      });
    }
  }, [discographyResult, textResult]);
  useEffect(() => {
    console.log('hello', artistID.idArtist);
    if (artistID !== '') {
      getMusicVideo(artistID.idArtist).then((response) => {
        setMusicVideoData(response.mvids);
      });
      console.log('musicVideoData', musicVideoData);
    }
  }, [artistID]);

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
      <MusicVideo musicVideoData={musicVideoData} />
      <button onClick={HandleClick}>x</button>
      <RandomBox artistID={artistID} setArtistID={setArtistID} />
    </div>
  );
}

export default Index;
