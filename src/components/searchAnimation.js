import styles from './Header.module.css'

console.log("Script called")
var bar = document.getElementsByClassName(styles.searchBar);
var icon = document.getElementsByClassName(styles.searchIcon);
  icon.addEventListener("mouseover", func, false);
  icon.addEventListener("mouseout", func1, false);

  function func()
  { 
   icon.setAttribute("style", "width: 10rem;")
  }

  function func1()
  {  
   item.setAttribute("style", "background-color:green;")
  } 