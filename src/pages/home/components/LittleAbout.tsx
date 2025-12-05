import type React from "react";
import { useEffect, useMemo, useState } from "react";

const blocks_content: Array<IAboutBlock> = [
    {
        heading: "Команда",
        text: "В студии работает более тридцати студентов"
    },
    {
        heading: "Game Jam",
        text: "Мы провели 9 событий за 4 года"
    },
    {
        heading: "",
        text: ""
    },
    {
        heading: "Таланты",
        text: "Самому младшему участнику студии 15 лет"
    },
]

const BASE_SCREEN_WIDTH = 1800;

interface IAboutBlock {
    heading: string,
    text: string
}

interface IAboutBlockProps {
    content: IAboutBlock,
    ratio: number
}

const AboutBlock: React.FC<IAboutBlockProps> = ({content, ratio}) => {
    const { width, height } = useMemo(() => {
            // console.log(ratio)
            return {
                width: 350 * ratio,
                height: 350 * ratio
            };
        }, [ratio]);

    return (
        <div className="about-block"
        style={{
            width,
            height
        }}
        >
            <div className="about-block-content">
                <h1>{content.heading}</h1>
                <p>{content.text}</p>
            </div>
        </div>
    )
}

interface LittleAboutProps {
    minimal_ratio: number
}

const LittleAbout: React.FC<LittleAboutProps> = ({minimal_ratio}) => {
    const [ratio, setRatio] = useState<number>(1)
    
    useEffect(() => {
        const calculateRatio = () => {
            const currentWidth = window.innerWidth;

            // Получаем коэфициент относительно базовой ширины
            let r = currentWidth / BASE_SCREEN_WIDTH;
            if (r < minimal_ratio) {
                r = minimal_ratio
            }

            setRatio(r);
        };

        calculateRatio(); // Запускаем при монтировании
        window.addEventListener("resize", calculateRatio);

        return () => window.removeEventListener("resize", calculateRatio);
    }, []);

    return (
        <div id="about_us" className="about-content">
            <div className="about-content-heading">
                <h1>Про нас</h1>
            </div>
            <div className="little_about">
                {blocks_content.map((content, i) => (
                    <AboutBlock key={i} content={content} ratio={ratio} />
                ))}
            </div>
        </div>
    )
}

export default LittleAbout