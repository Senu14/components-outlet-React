import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

const Pagination = ({ items, childComponent:ChildComponent, childProps }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(items.length / itemsPerPage)

  // Calculate the starting and ending indices
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's data
  const currentItems = items.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Render the component
  return (
    <div className="card-list">
      {currentItems.map((item) => (
        <ChildComponent key={item.id} data={item} {...childProps} />
      ))}

      {/* Pagination controls */}
      <div className="pagination">
        <button className='prev'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}><FaAngleDoubleLeft /></button>

        {Array.from({length : numberOfPages}, (_, i) => i+1).map((page) => {
          return <button onClick={() => handlePageChange(page)}
          disabled = {currentPage === page}>{page}</button>
        })}

        <button className='next'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === numberOfPages}><FaAngleDoubleRight /></button>
      </div>
    </div>
  );
};

export default Pagination;