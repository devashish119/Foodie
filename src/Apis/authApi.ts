import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//https://redmangoapi.azurewebsites.net
const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
    prepareHeaders: (headers: Headers, api) => {
      const token = localStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },

  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
       headers:{
        "Content-type":"application/json",
       },
       body:userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "auth/login",
        method: "POST",
       headers:{
        "Content-type":"application/json",
       },
       body:userCredentials
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
export default authApi;