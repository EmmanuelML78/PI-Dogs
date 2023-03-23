import {React, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getDogs} from "../Redux/actions";
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import logo from "../img/logo2.jpg"

export default function Nav(){
    const dispatch =  useDispatch();

    useEffect(()=>{
        //cada vez q renderizo el comp me dispacha todos los perros
        dispatch(getDogs())
    }, [dispatch]);

    return(
        <header className = {styles.divHeader}>
            <div className = {styles.contentLogo}>
                <Link  to = '/' className = {styles.linkLogo}><img className={styles.logo} alt= '' src = {logo}/></Link>
            </div>
            <div className = {styles.content}>
                <Link className = {styles.home}  to = '/home'>Home</Link>
                <Link className = {styles.home} to = '/createDog'>Create</Link>
            </div>
        </header>
    )
}