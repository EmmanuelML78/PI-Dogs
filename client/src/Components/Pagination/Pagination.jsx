import React, {useState} from "react";
import style from './pagination.module.css';


const Pagination= ({dogsMax, currentPage, paginated}) => {
    const pageNumbers = [];
    const [input, setInput] = useState(1);
    const nextPage = () => {
        setInput(input + 1);
        paginated(currentPage + 1);
    };
    const previusPage = () => {
        setInput(input - 1);
        paginated(currentPage - 1);
    };

    const firstPage = () => {
        setInput(1);
        paginated(1);
    };

    const lastPage = () => {
        setInput(dogsMax);
        paginated(dogsMax);
    };

    for (let i = 0; i < dogsMax; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav className={style.nav}>
            <ul className={style.conteiner}>
            <button className={style.active, style.numbers } onClick={()=>currentPage === 1 ? null : previusPage()}>previus</button>
                {
                    pageNumbers?.map((number, index) => (
                                <button className={
                                    index === currentPage - 1 ?
                                    style.active :
                                    style.numbers
                                } 
                                key={number} 
                                onClick={() => paginated(number)}>
                                    {" "}
                                    {number}{" "}
                                </button>
                        )
                    )
                }
                
            </ul>
            <button className={style.active, style.numbers } onClick={()=>currentPage === dogsMax ? null : nextPage()}>NEXT</button>
        </nav>
    )
}

export default Pagination;
