import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/userConstant";
import api from "utils/api.jsx";

// ----------LOGIN-----------------
const login = (email, password, isGuest) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await api.post(
      "/api/v1/login",
      { email, password, isGuest },
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// -------REGISTER/ SIGNUP----------------
const signUp = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });

    const config = { headers: { "Content-type": "multipart/form-data" } };

    const { data } = await api.post("api/v1/register", userData, config);

    dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// -----------LOAD USER(to save the state of login user)--------------
const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await api.get("/api/v1/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ---------logout user-------------
const logout = () => async (dispatch) => {
  try {
    await api.get("/api/v1/logout");

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ------------Update Profile of User----------------------
const updateUserProfile = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const config = { headers: { "Content-type": "multipart/form-data" } };

    const { data } = await api.put("/api/v1/me/update", userData, config);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ---------------Update Password--------------
const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PASSWORD_REQUEST,
    });

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await api.put(
      "/api/v1/password/update",
      passwords,
      config,
    );

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ---------------Forgot Password--------------
const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await api.post("/api/v1/password/forgot", email, config);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// -----------reset password ---------------------------
const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await api.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config,
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get all Users action--(Admin)-----
export const getAllUsersAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });

    const { data } = await api.get("/api/v1/admin/users");

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get User Details----(Admin)----
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await api.get(`/api/v1/admin/user/${id}`);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User Action -- (Admin) -----
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.put(
      `/api/v1/admin/user/${id}`,
      userData,
      config,
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User Action -- (Admin) -----
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await api.delete(`/api/v1/admin/user/${id}`);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// To clear the errors
const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export {
  login,
  signUp,
  loadUser,
  logout,
  clearErrors,
  updateUserProfile,
  updatePassword,
  forgotPassword,
  resetPassword,
};
