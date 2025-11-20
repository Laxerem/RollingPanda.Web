import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import type React from "react"
import { useEffect, useState } from "react";

const links_list = {
    "telegram.svg": "",
    "youtube.svg": "",
    "tic-tok.svg": "",
    "steam.svg": "",
    "twich.svg": ""
};

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [width, setWidth] = useState(window.innerWidth)
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(event)
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = width < 770;

    const links = ["Главная", "О нас", "Анонсы", "Игры", "Контакты"];


    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                {isMobile ? (
                    <>
                    <IconButton
                        onClick={handleClick}
                        size="large"
                        edge="end"
                        color="inherit"
                    >
                        <img src="menu.svg"></img>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                        paper: {
                            sx: {
                                backgroundColor: "#1c002f",
                                color: "white",
                                width: "20vw",
                                borderRadius: "30px",
                                border: "solid #da81f8 1.5px",
                                padding: "1%",
                            }
                        }
                        }}
                        className="menu-list"
                        disableScrollLock
                    >
                        {links.map((link, index) => (
                            <MenuItem 
                                key={index}
                                onClick={handleClose}
                                sx= {{
                                    fontFamily: "Montserrat"
                                }}
                            >
                                {link}
                            </MenuItem>
                        ))}
                        <MenuItem>
                        <div className="links mob">
                            {Object.keys(links_list).map((key, index) => 
                                <img key={index} src={key} height={"100%"}/>
                            )}
                        </div>
                        </MenuItem>
                    </Menu>
                    </>
                ) : (
                    <>
                    <div className="links">
                        {Object.keys(links_list).map((key, index) => 
                            <img key={index} src={key}/>
                        )}
                    </div>
                    <div className="site-catalog">
                        <a>Главная</a>
                        <a>О нас</a>
                        <a>Анонсы</a>
                        <a>Игры</a>
                        <a>Контакты</a>
                    </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header