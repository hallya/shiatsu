import axios from 'axios';

export const getData = async (uri: string): Promise<any> => {
  const response = await axios.get(uri);
  return response.data;
};
