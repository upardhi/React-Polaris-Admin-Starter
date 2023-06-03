import userReducer from "store/slices/userSlice";
import authReducer from "store/slices/authSlice";
//import garmentColorReducer from "store/slices/garmentColorSlice";
export default {
  user: userReducer,
  auth: authReducer,

  //agreement: agreementReducer,

  //garmentColor: garmentColorReducer,
};
