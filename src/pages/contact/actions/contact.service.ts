import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';

export const postContactService = formData => {
  const masterKey =
    '$2a$10$Y.P17daU7i/nhthPz5RgCeK/lwySiLS/0BCNstyRdT7QFwWv9DNAe';

  return axiosInstance
    .post(API.contact, formData, {
      headers: {
        'X-Master-Key': masterKey,
        'Content-Type': 'application/json', 
      },
    })
    .then(response => {
      console.log('Məlumat post edildi:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Məlumat post edilərkən xəta baş verdi:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
      }

      throw new Error('Bir xəta baş verdi');
    });
};
