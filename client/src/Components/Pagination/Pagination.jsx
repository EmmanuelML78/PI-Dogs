// import React, { useState } from "react";
// import style from "./pagination.module.css";

// const Pagination = ({ dogsMax, currentPage, paginated }) => {
//   const pageNumbers = [];
//   const [input, setInput] = useState(1);
//   const nextPage = () => {
//     setInput(input + 1);
//     paginated(currentPage + 1);
//   };
//   const previusPage = () => {
//     setInput(input - 1);
//     paginated(currentPage - 1);
//   };

//   const firstPage = () => {
//     setInput(1);
//     paginated(1);
//   };

//   const lastPage = () => {
//     setInput(dogsMax);
//     paginated(dogsMax);
//   };

//   for (let i = 0; i < dogsMax; i++) {
//     pageNumbers.push(i + 1);
//   }

//   return (
//     <nav className={style.nav}>
//       <ul className={style.conteiner}>
//         <button
//           className={(style.active, style.numbers)}
//           onClick={() => (currentPage === 1 ? null : previusPage())}>
//           previus
//         </button>
//         {pageNumbers?.map((number, index) => (
//           <button
//             className={index === currentPage - 1 ? style.active : style.numbers}
//             key={number}
//             onClick={() => paginated(number)}>
//             {" "}
//             {number}{" "}
//           </button>
//         ))}
//       </ul>
//       <button
//         className={(style.active, style.numbers)}
//         onClick={() => (currentPage === dogsMax ? null : nextPage())}>
//         NEXT
//       </button>
//     </nav>
//   );
// };

// export default Pagination;

import React, { useState } from "react";
import style from "./pagination.module.css";

const Pagination = ({ dogsMax, currentPage, paginated }) => {
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

  const renderPageNumbers = () => {
    if (pageNumbers.length > 5) {
      if (currentPage <= 3) {
        return (
          <>
            {pageNumbers.slice(0, 5).map((number, index) => (
              <button
                className={
                  number === currentPage ? style.active : style.numbers
                }
                key={number}
                onClick={() => paginated(number)}>
                {" "}
                {number}{" "}
              </button>
            ))}
            {dogsMax > 5 && (
              <>
                <span>...</span>
                <button
                  className={style.numbers}
                  onClick={() => paginated(dogsMax)}>
                  {" "}
                  {dogsMax}{" "}
                </button>
              </>
            )}
          </>
        );
      } else if (currentPage > 3 && currentPage < dogsMax - 2) {
        return (
          <>
            <button className={style.numbers} onClick={() => firstPage()}>
              {" "}
              1{" "}
            </button>
            <span>...</span>
            {pageNumbers
              .slice(currentPage - 3, currentPage + 2)
              .map((number, index) => (
                <button
                  className={
                    number === currentPage ? style.active : style.numbers
                  }
                  key={number}
                  onClick={() => paginated(number)}>
                  {" "}
                  {number}{" "}
                </button>
              ))}
            <span>...</span>
            <button
              className={style.numbers}
              onClick={() => paginated(dogsMax)}>
              {" "}
              {dogsMax}{" "}
            </button>
          </>
        );
      } else {
        return (
          <>
            <button className={style.numbers} onClick={() => firstPage()}>
              {" "}
              1{" "}
            </button>
            <span>...</span>
            {pageNumbers.slice(-5).map((number, index) => (
              <button
                className={
                  number === currentPage ? style.active : style.numbers
                }
                key={number}
                onClick={() => paginated(number)}>
                {" "}
                {number}{" "}
              </button>
            ))}
          </>
        );
      }
    } else {
      return pageNumbers.map((number, index) => (
        <button
          className={number === currentPage ? style.active : style.numbers}
          key={number}
          onClick={() => paginated(number)}>
          {" "}
          {number}{" "}
        </button>
      ));
    }
  };

  return (
    <nav className={style.nav}>
      <div className={style.containerWrapper}>
        <ul className={style.container}>
          {currentPage !== 1 && (
            <button className={style.numbers} onClick={() => previusPage()}>
              previus
            </button>
          )}
          {renderPageNumbers()}
          {currentPage !== dogsMax && (
            <button className={style.numbers} onClick={() => nextPage()}>
              NEXT
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
