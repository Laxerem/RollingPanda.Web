import type React from "react"
import './styles/news.scss'
import { useEffect, useState } from "react"

interface IArrowClick {
    dirrection: "left" | "right"
}

export interface INewsContent {
    date: Date,
    heading: string,
    content: string,
    mainImage: string,
    secondImage: string
}

interface INewsPreviewProps {
    props: Array<INewsContent>
}

interface INavigationArrowProps {
    bold: boolean;
    direction: "left" | "right";
    onClick?: () => void;
}

const NavigationArrow: React.FC<INavigationArrowProps> = ({ bold, direction, onClick }) => {
    const src = bold ? "news-arrow-bold.svg" : "news-arrow.svg";

    return (
        <img
            src={src}
            onClick={onClick}
            style={{
                transform: direction === "left" ? "rotate(180deg)" : "none",
                cursor: bold ? "pointer" : "default"
            }}
        />
    );
};

const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",  // день недели полностью
    day: "2-digit",   // день с ведущим нулём
    month: "2-digit", // месяц с ведущим нулём
    year: "numeric"   // полный год
};

const NewsPreview: React.FC<INewsPreviewProps> = ({props}) => {
    const [currentNews, setCurrentNews] = useState<number>(0)
    const [leftArrow, setLeftArrow] = useState<boolean>(false)
    const [rightArrow, setRightArrow] = useState<boolean>(props.length > 1)



    const handleArrowRightClick = () => {
        if (currentNews < props.length - 1) {
            setCurrentNews(currentNews + 1)
        }
    }

    const handleArrowLeftClick = () => {
        if (currentNews > 0) {
            setCurrentNews(currentNews - 1)
        }
    }

    useEffect(() => {
        setLeftArrow(currentNews > 0)
        setRightArrow(currentNews < props.length - 1)
    }, [currentNews])

    let currentDate = props[currentNews].date.toLocaleDateString("ru-RU", dateOptions).replace(",", "")
    currentDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

    return (
        <div className="news-container">
            <div className="news-container-content">
                <div className="news-heading">
                    <div className="news-heading-content">
                        <h1>Новости</h1>
                    </div>
                    <div className="news-navigation">
                        <NavigationArrow bold={leftArrow} direction="left" onClick={handleArrowLeftClick}/>
                        <NavigationArrow bold={rightArrow} direction="right" onClick={handleArrowRightClick}/>
                    </div>
                </div>
                <div className="news-pages">
                    <div className="news">
                        <div className="news-background">
                            <div className="news-content-container">
                                <div className="news-date">
                                    <p>{currentDate}</p>
                                    <span className="line"></span>
                                </div>
                                <div className="news-content">
                                    <h2>{props[currentNews].heading}</h2>
                                    <div
                                    style={{
                                        backgroundImage: `url(${props[currentNews].mainImage})`
                                    }} 
                                    className="news-image main" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news-background">
                            <div className="news-content-container">
                                <div className="news-content-text">
                                    <div className="news-date">
                                        <p>{currentDate}</p>
                                        <span className="line"></span>
                                    </div>
                                    <p>{props[currentNews].content}</p>
                                </div>
                                    <div
                                    style={{
                                        backgroundImage: `url(${props[currentNews].secondImage})`
                                    }} 
                                    className="news-image" 
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPreview