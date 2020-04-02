import axios from "axios";

import { getToken, getUserInfo } from "./actions";
export const registerUser = param => async (dispatch, getState) => {
  const data = await axios.post(
    "https://slim-moms.goit.co.ua/api/v1/register",
    param,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  dispatch(getToken(data));
  dispatch(getUserInfo(data));
};
