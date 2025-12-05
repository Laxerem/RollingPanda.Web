import type React from "react"
import './styles/annoouncements.scss'

export interface IAnnoouncementsContent {
    text: string,
    image: string,
    date: string
}

interface IAnnoouncementsContainerProps {
    props: Array<IAnnoouncementsContent>
}

interface IAnnoouncementProps {
    props: IAnnoouncementsContent
}

const Annoouncement: React.FC<IAnnoouncementProps> = ({props}) => {

    return (
        <div className="annoouncement-card">
            <div className="annoouncement-image"
            style={{
                background: `url(${props.image}) no-repeat center`,
                backgroundSize: "100% 100%"
            }}
            />
            <div className="annoouncement-text">
                <h3>{props.text}</h3>
                <p>{props.date.toString()}</p>
            </div>
        </div>
    )
}

const AnnoouncementsContainer: React.FC<IAnnoouncementsContainerProps> = ({props}) => {

    return (
        <div className="annoouncements-container">
            <div className="annoouncements-heading">
                <h1>Анонсы</h1>
            </div>
            <div className="center-container">
                <div className="annoouncements-content">
                    {props.map((prop, index) => (
                        <Annoouncement key={index} props={prop}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnnoouncementsContainer