import React from 'react'
import styles from './Header.module.css'

export default function Header(props) { 
  const handleclick = ()=>{
    console.log("fefewfe")
    props.Setlogin(true)
  }

  return (
    <nav class={styles.navBar}>
      <button class={styles.homeIcon}>
        ICON
      </button>

      <button class={styles.listIcon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-list-task'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z'
          />
          <path d='M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z' />
          <path
            fill-rule='evenodd'
            d='M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z'
          />
        </svg>
      </button>

      <form onSubmit={props.HandleSearch} className={styles.searchThing}>
      
        <div className={styles.searchIcon}>
        <input
          type='search'
          placeholder='search anime'
          required
          defaultValue={props.search}
          onChange={(e) => props.SetSearch(e.target.value)}
          className={styles.searchBar}
        />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </div>
       
      </form>

      <span class={styles.spacer}>
        <button class={styles.accountIcon} onClick={handleclick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-person-fill'
            viewBox='0 0 16 16'
          >
            <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
          </svg>
        </button>
      </span>
    </nav>
  );
}



 