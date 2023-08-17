import axios from 'axios'
import queryString from "query-string";

const axiosClients = axios.create({
  baseURL :  "http://103.28.174.29:4180/",

    paramsSerializer: (params) => queryString.stringify(params)
})

