import React, {useEffect, useState} from "react";
import NewsCard from "./NewsCard/NewsCard";
import style from "./News.module.scss";
import {getNews} from "../../../../API/API-requests";
import Loading from "../../../Loading/Loading";

const News = () => {

    const [stateNews, setNews] = useState(null);
    useEffect(() => {
        getNews()
            .then(result => {setNews(result.data.articles)
                console.log(result)})
            .catch(error => {console.log(error)})
    }, [])

    return (
        <div className={style.news}>
            {stateNews === null ? <Loading/> : stateNews.map(newses =>
                <NewsCard
                    key={newses.publishedAt}
                    info={newses}
                />)}
        </div>
    )
};

export default News;