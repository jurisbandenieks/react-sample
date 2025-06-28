import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserData } from "@/api";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import type { UserModel } from "@/types";

export const useUsers = () => {
  const [, setData] = useAtom(userAtom);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  useEffect(() => {
    if (data) {
      setData(data as UserModel[]);
    }
  }, [data]);

  return { data, isLoading, error };
};

export const useRefreshUsers = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ["users"] });
};
