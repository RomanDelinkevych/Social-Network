import React from "react";
import style from "./NewsCard.module.scss"

const NewsCard = (props) => {
    console.log(props);
    return (
        <div className={style.newsCard}>
            <img src={props.info.urlToImage}/>
            <p>{props.info.title}</p>
            <p>{props.info.content}</p>
            <a href={props.info.url}></a>
        </div>
    )
}

export default NewsCard;