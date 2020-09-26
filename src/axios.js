import Axios from "axios"

const instance = Axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;