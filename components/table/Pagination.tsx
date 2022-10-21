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
        <p
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            border: 'solid 2px',
            color: '#4440db',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '4px',
            paddingLeft: '1px',
          }}
          onClick={handlePrev}
        >
          {'< '}
        </p>
        <p
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            border: 'solid 2px',
            color: '#4440db',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '4px',
            paddingLeft: '1px',
          }}
          onClick={handleNext}
        >
          {' >'}
        </p>
      </div>
    </>
  );
};
