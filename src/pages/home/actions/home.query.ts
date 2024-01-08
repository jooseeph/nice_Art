import { useQuery } from "react-query";
import { getHomepageData } from "./home.service";


export const useLeads = () => {
  return useQuery<any, Error>(
    ["leads"],
    () => {
      return getHomepageData();
    }
  );
};
