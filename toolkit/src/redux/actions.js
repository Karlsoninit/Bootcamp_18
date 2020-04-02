import { createAction } from "@reduxjs/toolkit";

export const addNotes = createAction("ADD_NOTES");
export const updateNotes = createAction("UPDATE_NOTES");
export const getToken = createAction("GET_TOKEN");
export const getUserInfo = createAction("GET_USER_INFO");
export const error = createAction("USER_ERROR");
