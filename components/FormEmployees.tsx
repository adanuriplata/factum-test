import { ChangeEvent, useState } from 'react';
import { postEmployee } from '../api/postEmployee';
import styles from '../styles/modules/FormEmployees.module.scss';
import { Loader } from './Loader';

export const FormEmployees = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorValidation, setIsErrorValidation] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
        if (value.length > 30) {
          setIsErrorValidation(true);
        } else {
          setIsErrorValidation(false);
        }
        setData({ ...data, nameEmp: value });
        break;
      case 'lastName':
        if (value.length > 30) {
          setIsErrorValidation(true);
        } else {
          setIsErrorValidation(false);
        }
        setData({ ...data, lastName: value });
        break;
      case 'birthday':
        setData({ ...data, birthday: value });
        break;
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (
      !data.birthday.length ||
      !data.lastName.length ||
      !data.nameEmp.length
    ) {
      setIsErrorValidation(true);
      return;
    }
    console.log(data);

    const resp = await postEmployee(data.nameEmp, data.lastName, data.birthday);
    setIsLoading(true);
    if (resp.success) {
      setData({
        nameEmp: '',
        lastName: '',
        birthday: '',
      });
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.form}>
        <h2>Add new employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nameEmp">
              <input
                value={data.nameEmp}
                maxLength={30}
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
                value={data.lastName}
                maxLength={30}
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
                value={data.birthday}
                type="date"
                name="birthday"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          {isErrorValidation && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              ⚠️ Todos los campos son obligatorios y no deben exceder de 30
              caracteres
            </span>
          )}
          <div>
            {isSuccess && (
              <span style={{ color: 'green', fontSize: '12px' }}>
                ✅ El registro se agregó correctamente
              </span>
            )}
            {isLoading && <Loader />}
            <button
              disabled={!!isLoading || !!isErrorValidation}
              style={
                isLoading || isErrorValidation
                  ? { opacity: '.3', cursor: 'not-allowed' }
                  : { opacity: '1' }
              }
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
