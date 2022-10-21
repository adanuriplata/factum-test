import { ChangeEvent, FC } from 'react';
import styles from '../../styles/modules/Search.module.scss';

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ handleChange }): JSX.Element => {
  return (
    <div className={styles.containerSearch}>
      <h3>Employees</h3>
      <label htmlFor="serachEmployee">
        <input
          placeholder="🔎 Buscar"
          type="text"
          name="serachEmployee"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
  );
};
