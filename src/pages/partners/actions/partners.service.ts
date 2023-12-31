import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';

export const getPartnersService = (): Promise<any> => {
  return axiosInstance
    .get(API.partners, {
      headers: {
        'X-Master-Key':
          '$2a$10$Y.P17daU7i/nhthPz5RgCeK/lwySiLS/0BCNstyRdT7QFwWv9DNAe',
      },
    })
    .then(res => {
      return res.data.record.map((item: any) => item);
    })
    .catch(error => {
      console.error('Məlumat gətirilərkən xəta baş verdi:', error);
      throw new Error('Məhsul haqqında məlumat gətirilmədi');
    });
};
