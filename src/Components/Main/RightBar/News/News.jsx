import React, {useEffect, useState} from "react";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";
import style from "./News.module.scss";
import {getNews} from "../../../../API/API-requests";

const News = () => {

    const [stateNews, setNews] = useState([]);
    useEffect(() => {
        getNews()
            .then(result => {setNews(result.data.articles);})
            .catch(error => {console.log(error)})
    }, [])

    return (
        <div className={style.news}>
            {stateNews.map(newses => <NewsCard key={newses.id} info={newses}/>)}
        </div>
    )
};

export default News;