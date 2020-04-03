import axios from "axios";
import { addNotes } from "./actions";

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
  await dispatch(getToken(data));
  await dispatch(getUserInfo(data));
};

export const loginUser = param => async (dispatch, getState) => {
  const data = await axios.post(
    "https://slim-moms.goit.co.ua/api/v1/login",
    param,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  console.log("data", data);
  await dispatch(getToken(data));
  await dispatch(getUserInfo(data));
};

export const putData = param => async (dispatch, getState) => {
  const userName = getState().auth.user.nickname;
  const data = await axios.post(
    `https://authorization-3e689.firebaseio.com/${userName}.json`,
    param
  );

  console.log(data);
};

export const getData = () => async (dispatch, getState) => {
  const userName = getState().auth.user.nickname;
  const data = await axios.get(
    `https://authorization-3e689.firebaseio.com/${userName}.json`
  );

  if (!data.data) {
    dispatch(addNotes([]));
    return;
  }

  const transform = Object.keys(data.data).map(key => {
    console.log("data.data[key]", data.data[key]);
    return {
      ...data.data[key],
      id: key
    };
  });

  console.log("transform", transform);

  dispatch(addNotes(transform));
};
