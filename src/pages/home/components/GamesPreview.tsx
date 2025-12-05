import type React from "react";
import "./styles/games.scss"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import type { IGameCard } from "../../../components/GameCard";
import GameCard from "../../../components/GameCard";


interface GamesContainerProps {
    games: Array<IGameCard>
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
                {games.map((game, i) => (
                    <SwiperSlide key={i}>
                        <div className="game-slide">
                            <GameCard game={game}/>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                </>
            ) : (
                games.map((game, i) => (
                    <GameCard key={i} game={game}/>
                ))
            )}
            </div>
        </div>
    )
}

export default GamesPreview;