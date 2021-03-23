import React, { useState } from "react";
import scss from "./Paginator.module.scss";

function Paginator({
  totalCount,
  itemsPerPage,
  currentPage,
  loadPage,
  portionSize = 10,
}) {
  const numberOfPages = Math.ceil(totalCount / itemsPerPage);
  const numberOfPortions = numberOfPages / portionSize;
  const pages = Array.from({ length: numberOfPages }, (v, k) => k + 1);

  let [currentPortion, setCurrentPortion] = useState(1);

  const [portion, changePortion] = useState(pages.slice(0, 10));

  const setPortion = () =>
    changePortion(
      pages
        .slice(currentPortion - 1, currentPortion * portionSize)
        .slice(-portionSize)
    );

  function nextPage() {
    if (currentPortion < numberOfPortions) {
      setCurrentPortion(++currentPortion);
      setPortion();
    }
  }

  function prevPage() {
    if (currentPortion > 1) {
      setCurrentPortion(--currentPortion);
      setPortion();
    }
  }

  let pagesComponents = portion.map((p) => (
    <p
      className={currentPage === p ? scss.activePage : scss.pageNumber}
      onClick={() => loadPage(p, currentPage, itemsPerPage)}
    >
      {p}
    </p>
  ));

  return (
    <div>
      <div className={scss.controlsArea}>
        {currentPortion <= 1 ? null : (
          <button className={scss.controlBtn} onClick={() => prevPage()}>
            PREV
          </button>
        )}
        <div className={scss.pages}>{pagesComponents}</div>
        {currentPortion >= numberOfPortions ? null : (
          <button
            className={scss.controlBtn}
            onClick={() => {
              nextPage();
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}

export default Paginator;
