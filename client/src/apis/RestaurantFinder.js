import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production" ?
    "/api/v1/restaurants" :
    "http://18.212.34.243:3001/api/v1/restaurants";

export default axios.create({
    baseURL,
});