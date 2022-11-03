import axios from "axios";

export const getNews = (setNews) => {
    return axios
        .get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a2ad074efe094b24ae4e3b595c54779e")
}