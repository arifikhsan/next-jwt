import useSWR from "swr";
import { getUserRepository } from "../../data/repository/user-repository";

export const useUser = () => {
  const { data, mutate, error } = useSWR("api_user", getUserRepository);
  const loading = !data && !error;
  const loggedOut = error && error.status === 403;
  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
