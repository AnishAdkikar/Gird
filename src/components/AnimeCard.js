import styles from './AnimeCard.module.css'
import React from 'react'
import '../Fonts/Kanit/Kanit-Medium.ttf'


export default function AnimeCard({anime,setAnimeInfo}){
    return (
        <article className={styles.animeCard} onClick={()=>setAnimeInfo(anime)}>
            <div class={styles.cardContainer} >
                <img className={styles.images} alt='' src={anime.images.jpg.image_url} />
                <div class={styles.gradient}></div>
                <div class={styles.cardTitle}>{anime.title}</div>
                <div className={styles.overlay}>
                <img alt='' src={anime.images.jpg.small_image_url} />
             <div className={styles.synopsis}>
                <p>Episodes:{anime.episodes}</p>
                <p>Duration:{anime.duration}</p>
                <p>Rating:{anime.rating}</p>
                  </div>
                  </div>
                  </div>
                    </article>
    );
}