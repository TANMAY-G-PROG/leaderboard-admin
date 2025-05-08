import axios from "axios";

export default axios.create({
  baseURL: "https://leaderboard-backend-neon.vercel.app/" // update if deployed
});
