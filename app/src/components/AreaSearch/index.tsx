import styles from './styles.module.scss';
import { FaSistrix } from 'react-icons/fa'
import { useState } from 'react';

export function AreaSearch(){

  const [search, setSearch] = useState('')


  return (
    <form className={styles.searchContainer}>
    <input 
    type="text"
    placeholder="Search healthy recipes"
    value={search}
    onChange={event => setSearch(event.target.value)}
    />


    <button type="button"  ><FaSistrix /></button>
  </form>
  )

}

