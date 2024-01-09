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
      console.log('Post işlemi başarıyla gerçekleşti:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Post işlemi başarısız oldu:', error);

      // Hata durumunda response olmayabilir, bu nedenle kontrol ekleniyor
      if (error.response) {
        console.error('Response data:', error.response.data);
      }

      throw new Error('Bir hata oluştu');
    });
};
