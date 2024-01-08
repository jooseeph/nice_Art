// import { useQuery } from "react-query";
// import { getPartnersService } from './partners.service';

// export const usePartners = () => {
//   return useQuery<any[], Error>(["partners"], () => {
//     return getPartnersService();
//   });
// };


import { useQuery } from "react-query";
import { getPartnersService } from './partners.service';


export const usePartners = () => {
  return useQuery<any, Error>(
    ["partners"],
    () => {
      return getPartnersService();
    },
  );
};
