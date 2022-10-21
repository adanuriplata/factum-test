import { ChangeEvent, useState } from 'react';
import styles from '../styles/modules/FormEmployees.module.scss';

export const FormEmployees = (): JSX.Element => {
  const [data, setData] = useState({
    nameEmp: '',
    lastName: '',
    birthday: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const keyProp = e.target.name;
    const value = e.target.value;
    switch (keyProp) {
      case 'nameEmp':
        setData({ ...data, nameEmp: value });
        break;
      case 'lastName':
        setData({ ...data, lastName: value });
        break;
      case 'birthday':
        setData({ ...data, birthday: value });
        break;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.form}>
        <h2>Add new employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nameEmp">
              <input
                placeholder="Name"
                type="text"
                name="nameEmp"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="birthday">
              <input
                type="date"
                name="birthday"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
