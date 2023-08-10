import AnimeCard from "./AnimeCard"
import HeadingText from "./HeadingText";
import styles from './ScrollableList.module.css'
import React from 'react'

export default function Searched(props) {
    return (
      <div>
        <HeadingText text={"Search results for "+ props.search}/>
        <div className={styles.scrollableList}>
          {props.animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    );
}