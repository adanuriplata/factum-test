import { ChangeEvent, useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameEmp">
          Nombre:
          <input type="text" name="nameEmp" onChange={(e) => handleChange(e)} />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Apellido:
          <input
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
        <button>Enviar</button>
      </div>
    </form>
  );
};
