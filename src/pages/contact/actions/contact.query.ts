import { useMutation, useQueryClient } from 'react-query';
import { postContactService } from './contact.service';

export const useContact = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    formData => postContactService(formData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('contact');
      },
    }
  );

  return mutation;
};
