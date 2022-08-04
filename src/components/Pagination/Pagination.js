import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
function Pagination({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      nextLabel="Next"
      previousLabel="Previous"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      previousClassName={"previous"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      pageRangeDisplayed={5}
    />
  );
}

export default Pagination;
