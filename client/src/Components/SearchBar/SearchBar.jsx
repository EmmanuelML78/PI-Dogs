import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../Redux/actions';
import styles from "./SearchBar.module.css"
import {GrSearch} from "react-icons/gr"

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getDogByName(value));
    // setValue('');
}

function handleChange(e){
    //console.log(e.target.value)
    setSearchTerm(e.target.value);
    dispatch(getDogByName(e.target.value));
}

  return (
    <div className = {styles.banner}>
            <form className={styles.form} onSubmit =  {handleSubmit}>
                <div className = {styles.searchConteiner}>
                    <input
                        className = {styles.input}
                        value = {searchTerm}
                        onChange = {handleChange}
                        placeholder = 'Search a breed...'>
                    </input>
                    <button className = {styles.btn}><GrSearch/></button>
                </div> 
            </form>
        </div>
  );
}

export default SearchBar;