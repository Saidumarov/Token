import axios from "axios";
import { axiosInstance } from "./token.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const BASE_URI = import.meta.env.VITE_API;

export const postData = async ({ url, body }) => {
  try {
    const res = await axiosInstance.post(`${BASE_URI}${url}`, body);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const postDataMutation = (key) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};

export const postRefech = async ({ url }) => {
  try {
    const res = await axios.post(
      `${BASE_URI}${url}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("refresh_token")
          )}`,
        },
      }
    );
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const postRefchMutation = (key) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postRefech,
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};
