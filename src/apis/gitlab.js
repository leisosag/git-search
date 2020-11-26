import axios from "axios";

export default axios.create({
  baseURL: "https://gitlab.example.com/api/v4",
  params: {
    scope: "users",
    //private_token: "XTr4mRbhMz6KDf-Pi6xF",
  },
});
