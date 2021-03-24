import React, { useEffect, useState } from "react";
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

  const [portion, changePortion] = useState(pages.slice(0, portionSize));

  useEffect(() => {
    const page = Math.ceil(currentPortion * portionSize);
    changePortion(pages.slice(page - portionSize, page));
  }, [currentPortion]);

  useEffect(() => {
    changePortion(pages.slice(currentPage - 1, currentPage + portionSize - 1));
    setCurrentPortion(Math.ceil(currentPage / portionSize));
  }, [currentPage]);

  function nextPage() {
    setCurrentPortion(++currentPortion);
  }

  function prevPage() {
    setCurrentPortion(--currentPortion);
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
