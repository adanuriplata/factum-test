import React, { FC } from 'react';

interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({ handlePrev, handleNext }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p style={{ cursor: 'pointer' }} onClick={handlePrev}>
          {'<- prev'}
        </p>
        <p style={{ cursor: 'pointer' }} onClick={handleNext}>
          {'next->'}
        </p>
      </div>
    </>
  );
};
