import { useEffect, useState } from 'react';
import Header from './Header.js';
import TopAiring from './TopAiring.js';
import AnimeTrailer from './AnimeTrailer.js';
import Searched from './Searched.js';
import HeadingText from './HeadingText.js';
import React from 'react';
import { AnimeInfo } from './AnimeInfo.js';
import Recommendation from './Recommendation.js'

function Home({login, Setlogin}) {
  const [topAnime, SetTopAnime] = useState([]);
  const [recommendation, SetRecommendation] = useState([]);
  // const recommendation = [
  //   820,
  //   28977,
  //   32281,
  //   5114,
  //   9253,
  //   9969,
  //   28851,
  //   32935,
  //   918,
  //   15417,
  //   15335,
  //   11061,
  //   2904,
  //   12431,
  //   4181,
  // ];
  const [animeList, SetAnimeList] = useState([]);
  const [Rec, SetRecList] = useState([]);
  const [search, SetSearch] = useState('');
  const [searchStatus, SetSearchStatus] = useState(true);
  const [animeInfo,setAnimeInfo]=useState('')
  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=10').then(
      (res) => res.json()
    );
    SetTopAnime(response.data);
  };

  const GetRecommendations = async () => {
    try {
      const response = await fetch(
        'https://otakuoracle-api.azurewebsites.net/?uid=1'
        // 'http://192.168.13.208:5000/?uid=1'
      ).then((res)=>res.json());
      // console.log(response)
      SetRecommendation(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error);
    }
  }

  const HandleSearch = (e) => {
    e.preventDefault();
    SetSearchStatus(false);
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=10`
    ).then((res) => res.json());
    SetAnimeList(response.data);
  };
  
  const FetchRecommendations = async (id) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    let data = await response.json();
    setTimeout(10000);
    return data.data; // Return the actual data
  };
  
  const promises = async () => {
    const promiseArray = recommendation.map((id) => FetchRecommendations(id));
    console.log('hi',promiseArray)
    const resolvedPromises = await Promise.all(promiseArray);

    // Set the state with the resolved data
    SetRecList(resolvedPromises);

    console.log(resolvedPromises); // Output the resolved data
  };
  GetRecommendations(); 
  useEffect(() => {
    promises();
    GetTopAnime();
    return () => {
      // GetRecommendations();
      promises();
      GetTopAnime();

    };
  }, [recommendation]);

  {console.log(Rec)}
  {console.log(recommendation)}

  return (
    <div>
      <AnimeTrailer topAnime={topAnime} />
      <Header
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}
        SetSearchStatus={SetSearchStatus}
        login={login}
        Setlogin={Setlogin}
      />
      <HeadingText text='Top Recommendations'/>
      {Rec  && <Recommendation RecData={Rec} setAnimeInfo={setAnimeInfo} />}
      {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
      {searchStatus ? (
        <div>
          <HeadingText text='Top Anime' />
          <TopAiring topAnime={topAnime} setAnimeInfo={setAnimeInfo} />
        </div>
      ) : (
        <div>
          <Searched search={search} animeList={animeList} />
        </div>
      )}
    </div>
  );
}

export default Home;
