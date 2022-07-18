import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Helpers/loader/Loader";

export const Fetch_API = (path, method, body, options, params) => {
  
    let fetchDATA = new Promise((resolve, reject) => {
      let config = {};
      if (options) {
        if (options) {
          config.headers = { ...options };
        }
      }
      // params = params ? "?" + new URLSearchParams(params).toString() : "";
      if (method === "get" || method === "delete") {
        axios[method](path)
          .then((e) => {
            return e.data.data;
          })
          .then((res) => {
            if (res !== "") {
              return res;
            }
            if (res == "") {
              return "there is something wrong in API Path as no data found in this path";
            }
          })
          .then((res) => console.log(res))
          .catch((err) => {
            console.log(err);
            console.log(err.message);
          });
      }
      if (method === "post" || method === "put") {
        return axios[method](`${path}`, body, config)
          .then((e) => e.data)
          .then((res) => {
            if (res !== "") {
              return res;
            }
            if (res == "") {
              return "there is something wrong";
            }
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err.message));
      }
    });

};
