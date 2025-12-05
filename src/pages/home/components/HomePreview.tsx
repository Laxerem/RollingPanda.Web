import type React from "react";
import PreviewButton from "./PreviewButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_SCREEN_WIDTH = 2000;

const HomePreview: React.FC = () => {
    const [ratio, setRatio] = useState<number>(1)
    const navigate = useNavigate()

    const onButtonHandler = () => {
        navigate("/games")
    }

    useEffect(() => {
        const calculateRatio = () => {
            const currentWidth = window.innerWidth;

            // Получаем коэфициент относительно базовой ширины
            let r = currentWidth / BASE_SCREEN_WIDTH;
            if (r < 0.3) {
                r = 0.3
            }

            setRatio(r);
        };

        calculateRatio(); // Запускаем при монтировании
        window.addEventListener("resize", calculateRatio);

        return () => window.removeEventListener("resize", calculateRatio);
    }, []);

    return (
        <div id="home" className="home_preview">
            <div className="preview-section">
                <div className="studio-name">
                    <h1>Rolling<br></br>Panda</h1>
                    <h2>Студенческая гейм студия</h2>
                </div>
                <PreviewButton ratio={ratio} onClick={onButtonHandler} text="ИГРЫ" />
            </div>
            <div className="preview-section">
                <img src="panda-preview.png" className="panda-preview"/>
            </div>
        </div>
    )
}

export default HomePreview;