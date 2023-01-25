import React from "react";
import style from "./NewsCard.module.scss"

const NewsCard = (props) => {
    return (
            <a className={style.newsCard} href={props.info.url} target={"_blank"}>
                <img src={props.info.urlToImage}/>
                <p>{props.info.title}</p>
                <p>{props.info.content}</p>
            </a>
    )
}

export default NewsCard;