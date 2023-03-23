import { getDogDetail } from "../Redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from '../Nav/Nav'
import detal from "./Detail.module.css";

const Detail = () => {
const dispatch = useDispatch()
const { id } = useParams();
const dogDetail = useSelector((state) => state.dogDetail);

  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch]);

  return (
    <div style = {{position: "relative", display: "flex", justifyContent: "center", margin: "0"}}>
        <Nav/>
        <Link to = "/home" className = {detal.link}><button className = {detal.btnBack}>BACK</button></Link>
        <div className = {detal.conteiner}>
          <div className={detal.detailImgBox}>
              <img className={detal.detailImg} alt= ''  src= {dogDetail.image}/>
              <h1 className={detal.detailCharacterName}>{dogDetail?.name}</h1>
          </div>
                        <div className = {detal.content}>
                            <ul className = {detal.ul}>
                            <h3 className={detal.infoTitle}>Weight:</h3>
                            <p className={detal.detailTxt}> {dogDetail?.weight?.length > 1
                              ? dogDetail?.weight?.join(" - ")
                              : dogDetail?.weight?.pop()}{" "} kgs
                            </p>

                                <li>
                                <h3 className={detal.infoTitle}>Height:</h3>
                                <p className={detal.detailTxt}>{dogDetail?.height?.length > 1
                                ? dogDetail?.height?.join(" - ")
                                : dogDetail?.height?.pop()}{" "} cm</p>
                                </li>
                                <li><h3 className={detal.infoTitle}>Años de vida:</h3>
                                    <p className={detal.detailTxt}>{dogDetail?.life_span}</p></li>
                                <li><h3 className={detal.infoTitle2}>Tempetamentos:</h3>
                                    {dogDetail?.temperaments?.map((item, index) => (
                                    <p  className={detal.detailTxt2} key={index}>{item}</p>))}
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>  
    </div>    
  );
};

export default Detail;