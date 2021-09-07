import styles from './styles.module.scss';
import { FaSistrix } from 'react-icons/fa'
import { useState } from 'react';

export function AreaSearch(){

  const [search, setSearch] = useState('')

  function teste(){
    console.log(search)
  }

  return (
    <form className={styles.searchContainer}>
    <input 
    type="text"
    placeholder="Search healthy recipes"
    value={search}
    onChange={event => setSearch(event.target.value)}
    />


    <button type="button" onClick={teste} ><FaSistrix /></button>
  </form>
  )

}

