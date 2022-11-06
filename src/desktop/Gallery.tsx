import { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type TSwiper from "swiper";
import styles from "./Gallery.module.scss";
import { motion, useInView, useMotionValue, useSpring, useTransform, } from "framer-motion";
import AnimationText from "./Animation"
import { Keyboard, } from "swiper";
import SlideUpText from "./SlideupText";

const imgUrl = process.env.PUBLIC_URL;

function Gallery() {
    const [currentSlide, setSlide] = useState(0);
    const swiperRef = useRef<TSwiper | null>(null);
    const currentGalleryItem = galleryItems[currentSlide];
    const [previousRatio, setPreviousRatio] = useState(currentGalleryItem.ratio);
    const ratio = useSpring(currentGalleryItem.ratio);
    if (currentGalleryItem.ratio !== previousRatio) {
        ratio.set(currentGalleryItem.ratio);
        setPreviousRatio(currentGalleryItem.ratio);
    }
    const frameWidth = useTransform(
        [ratio],
        (ratio) => `calc(670rem / ${ratio} + 40rem)`
    );

    return (
        <div
            style={{
                paddingTop: "4%",
                paddingLeft: "4%",
                paddingRight: "5%",
                paddingBottom: "6%",
            }}>
            <div className="title" style={{ marginBottom: "5%" }}>
                <AnimationText text="GALLREY" />
            </div>
            <div
                style={{
                    position: "absolute",
                }}>
                <span
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        fontStyle: "italic",
                        color: "#fff",
                    }}
                >
                    Ha Jung woo
                </span>
                <div style={{
                    fontSize: "1.25rem",
                    color: "#fff",
                }}>
                    {currentGalleryItem.description.map((text, index) => {
                        return (
                            <Fragment key={text}>
                                {index !== 0 && <br />}
                                <SlideUpText text={text} />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
            {/* <motion.div
                animate={{
                    width: "",
                }}
                style={{
                    // position: "absolute",
                    height: "40rem",
                    border: "1px solid #CE8BB4",
                }}>
            </motion.div> */}
            <Swiper
                slidesPerView={2}
                speed={800}
                onActiveIndexChange={(swiper) => {
                    setSlide(swiper.activeIndex);
                }}
                slideToClickedSlide={true}
                centeredSlides={true}
                keyboard={{
                    enabled: true,
                }}
                autoplay={false}
                modules={[Keyboard,]}
                style={{
                    left: "0%",
                    width: "100%",
                    position: "absolute",
                    overflow: "hidden",
                    zIndex: "0",
                }}>
                {galleryItems.map((item, index) => {
                    return (
                        <SwiperSlide key={item.imageUrl}>
                            <GallerySlideItem
                                imageUrl={imgUrl + item.imageUrl}
                                highlight={currentSlide === index}
                                prev={currentSlide > index}
                                onClick={() => {
                                    if (currentSlide + 1 === index) {
                                        swiperRef.current?.slideNext();
                                        return;
                                    }
                                    if (currentSlide - 1 === index) {
                                        swiperRef.current?.slidePrev();
                                        return;
                                    }
                                }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div
                style={{
                    width: "70rem",
                    height: "0.5rem",
                    marginTop: "50rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: `rgba(112,112,112, 0.5)`,
                }}>
                <div
                    style={{
                        width: `calc(70rem / ${galleryItems.length})`,
                        height: "100%",
                        backgroundColor: "#fff",
                        transition: `transform 0.15s`,
                        transform: `translateX(calc(70rem / ${galleryItems.length} * ${currentSlide}))`,
                    }}
                />
            </div>
        </div>
    );
}

export default Gallery;

function GallerySlideItem({
    imageUrl,
    highlight,
    prev,
    onClick,
}: {
    imageUrl: string;
    highlight: boolean;
    prev: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={styles.slideItem}
            data-highlight={highlight}
            data-prev={prev}
        >
            <img src={imageUrl} onClick={onClick} />
        </div>
    );
}

type GalleryItem = {
    imageUrl: string;
    description: string[];
    ratio: number;
};

export const galleryItems: GalleryItem[] = [
    {
        imageUrl: "/img/gallery/galleryimg1.png",
        description: ["Dream", "2010", "Mixed Media on Plywood", "88 × 65 cm"],
        ratio: 88 / 65,
    },
    {
        imageUrl: "/img/gallery/galleryimg2.png",
        description: ["Portrait G", "2022", "Mixed Media on Canvasd", "116.8 × 91 cm",],
        ratio: 116.8 / 91,
    },
    {
        imageUrl: "/img/gallery/galleryimg3.png",
        description: ["Work", "2018", "Oil on Canvas", "101.5 × 76 cm"],
        ratio: 101.5 / 76,
    },
    {
        imageUrl: "/img/gallery/galleryimg4.png",
        description: ["Berlin", "2012", "Acrylic, Pen on Canvas", "178 × 139 cm"],
        ratio: 178 / 139,
    },
    {
        imageUrl: "/img/gallery/galleryimg5.png",
        description: ["Grapeseed", "2019", "Mixed Media on Canvas", "53.0 × 45.5 cm",],
        ratio: 53 / 45.5,
    },
    {
        imageUrl: "/img/gallery/galleryimg6.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm"],
        ratio: 73 / 61,
    },
    {
        imageUrl: "/img/gallery/galleryimg7.png",
        description: ["Red flower 2", "2013", "Acrylic, Pen on Canvas", "50 × 39 cm",],
        ratio: 50 / 40,
    },
    {
        imageUrl: "/img/gallery/galleryimg8.png",
        description: ["Portrait L", "2020", "Mixed Media on Canvas", "72.7 × 60.6 cm",],
        ratio: 72.7 / 60.6,
    },
    {
        imageUrl: "/img/gallery/galleryimg9.png",
        description: ["Untitled", "Oil on Canvas", "91 × 72.8 cm"],
        ratio: 91 / 72.8,
    },
    {
        imageUrl: "/img/gallery/galleryimg10.png",
        description: ["Untitled", "2021", "Oil on Canvas", "117 × 91 cm"],
        ratio: 117 / 92,
    },
    {
        imageUrl: "/img/gallery/galleryimg11.png",
        description: ["Untitled", "2021", "Oil on Canvas", "73 × 61 cm"],
        ratio: 73 / 61,
    },
];
