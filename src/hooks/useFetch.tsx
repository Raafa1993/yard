import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../services/api";

async function fetchData(ctx: QueryFunctionContext) {
  const [, url] = ctx.queryKey;
  const { data } = await api.get(`${url}`);

  console.log("CHAMOU API");
  return data;
}

export default function useFetch(url: string, name: string) {
  return useQuery({
    queryKey: [name, url],
    queryFn: fetchData,
    staleTime: 1000 * 60, // 1 minuto
  });
}
