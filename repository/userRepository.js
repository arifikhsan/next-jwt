import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function getRailsDeprecated() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/rails/rails",
    fetcher
  );

  return {
    rails: data,
    isLoading: !error && !data,
    isError: error,
  };
}

