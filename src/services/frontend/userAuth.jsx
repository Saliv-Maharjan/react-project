import axios from "axios";
import { sha256 } from "../../utils/encryption";

export const AUTH_TOKEN = "516fb57b-f2c5-4985-95e1-e3e4836d8bd4";

export const doLogin = async (email, password) => {
  const response = await axios.get(
    `http://localhost:4000/userData?email=${email}&password=${await sha256(
      password
    )}`
  );
  if (response.data.length > 0) {
    const user = response.data[0];

    if (user.role === "User") {
      localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN);
      localStorage.setItem("USER_EMAIL", user.email);
      return { success: true };
    } else {
      return { success: false, reason: "not-user" };
    }
  } else {
    return { success: false, reason: "invalid" };
  }
};
