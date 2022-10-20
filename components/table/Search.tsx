import { ChangeEvent, FC } from 'react';

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ handleChange }): JSX.Element => {
  return (
    <div>
      <label htmlFor="serachEmployee">
        <input
          type="text"
          name="serachEmployee"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
  );
};
