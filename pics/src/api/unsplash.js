import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 970a87f5ce06ed61bbf622ba953a7484d7118ff1f08b714e195c89b45df1b7f3"
  }
});
