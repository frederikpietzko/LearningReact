import axios from "axios";

const KEY = "AIzaSyBUYoGYHyFmxcaRAn_qkdG4orgsIQt721w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
