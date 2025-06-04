import axios from "axios";

export const BaseInstance = axios.create({
  baseURL: 'http://api.jejutour.kro.kr/',
  headers: {
    Authorization: '',
  },
});