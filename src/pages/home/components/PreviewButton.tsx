import React, { useMemo } from "react";

interface IPreviewButtonProps {
    ratio: number;
    text?: string;
    onClick?: () => void;   
}

const BASE_WIDTH = 352;
const BASE_HEIGHT = 152;

const PreviewButton: React.FC<IPreviewButtonProps> = ({ ratio, text, onClick }) => {
    const { width, height } = useMemo(() => {
        console.log(ratio)
        return {
            width: BASE_WIDTH * ratio,
            height: BASE_HEIGHT * ratio
        };
    }, [ratio]);

    return (
        <div
            onClick={onClick}
            style={{
                display: "inline-block",
                width,
                height,
                marginTop: "15%",
                backgroundImage: "url('game-button.svg')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
            }}
        >
            <p className="button-text">
                {text}    
            </p>
        </div>
    );
};

export default PreviewButton;
