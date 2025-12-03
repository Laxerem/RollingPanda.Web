import type React from "react";
import "./styles/games.scss"
import { useEffect, useState } from "react";
import ProfileCard from "../../../components/ProfileCard";
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'; // основные стили
import 'swiper/css/navigation'; // если нужен navigation
import { EffectCoverflow, Navigation } from 'swiper/modules';


export interface IGameCard {
    name: string,
    description: string,
    backgroundImage: string
}

interface IGameCardProps {
    className?: string,
    card: IGameCard,
    index: number,
    backgroundColorDefault?: string,
    backgroundColorHover?: string
}

interface GamesContainerProps {
    games: Array<IGameCard>
}

const defaultWidth = 33

const GameCard: React.FC<IGameCardProps> = ({className, card, index, backgroundColorDefault, backgroundColorHover}) => {
    const [isHovered, setIsHovered] = useState<number | null>(null)
    const [width, setWidth] = useState<number>(defaultWidth)
    const [backgroundColor, setBackgroundColor] = useState<string | undefined>(backgroundColorDefault)

    useEffect(() => {
        if (isHovered != null) {
            setWidth(50)
            setBackgroundColor(backgroundColorHover)
        }
        else {
            setWidth(defaultWidth)
            setBackgroundColor(backgroundColorDefault)
        }
    }, [isHovered])


    return (
        <div 
        className={className ?? undefined}
        key={index}
        style={{
            background: ` linear-gradient(${backgroundColor}, ${backgroundColor}), 
            url(${card.backgroundImage}) top no-repeat`,
            backgroundSize: "cover",
            width: `${width}%`
        }}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(null)}
        >
            <h1>{card.name}</h1>
            <h2>{card.description}</h2>
        </div>
    )
}

const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }

const GamesPreview: React.FC<GamesContainerProps> = ({games}) => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    
    useEffect(() => {
        const handleWidthChange = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidthChange)

        return () => window.removeEventListener('resize', handleWidthChange)
    }, [])

    useEffect(() => {
        if (width < 700) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }, [width])

    return (
        <div className="games-container">
            <h1>Игры</h1>
            <div className="games-preview">
            {isMobile ? (
                <>
                <Swiper
                {...params}
                modules={[Navigation, EffectCoverflow]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                >
                {games.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="game-slide">
                            <ProfileCard
                                className="game-card-preview"
                                name={card.name}
                                title={card.description}
                                handle="javicodes"
                                status=""
                                contactText="Contact Me"
                                avatarUrl={card.backgroundImage}
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                                onContactClick={() => console.log('Contact clicked')}
                            />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                </>
            ) : (
                games.map((card, i) => (
                <ProfileCard
                    key={i}
                    className="game-card-preview"
                    name={card.name}
                    title={card.description}
                    handle="javicodes"
                    status=""
                    contactText="Contact Me"
                    avatarUrl={card.backgroundImage}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
                ))
            )}
            </div>
        </div>
    )
}

export default GamesPreview;