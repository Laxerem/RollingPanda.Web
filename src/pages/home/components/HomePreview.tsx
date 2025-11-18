import type React from "react";

const HomePreview: React.FC = () => {
    
    return (
        <div className="home_preview">
            <div className="preview-section">
                <div className="studio-name">
                    <h1>Rolling<br></br>Panda</h1>
                    <h2>Студенческая гейм студия</h2>
                </div>
                <div className="preview-button">
                    <span>Игры</span>
                </div>
            </div>
            <div className="preview-section">
                <img src="panda-preview.png" className="panda-preview"/>
            </div>
        </div>
    )
}

export default HomePreview;