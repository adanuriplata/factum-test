interface postEmployeeResponse {
  success: boolean;
  data: string;
}

export const postEmployee = async (
  name: string,
  lastName: string,
  birthday: string
): Promise<postEmployeeResponse> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      last_name: lastName,
      birthday: birthday.replaceAll('-', '/'),
    }),
  };
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_HOST as unknown as URL,
    requestOptions
  );
  const data = await response.json();
  return data;
};
