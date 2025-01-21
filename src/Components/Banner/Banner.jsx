import { useEffect, useState } from "react";

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1); // Keep track of the current slide
    const totalSlides = 3; // Total number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev % totalSlides) + 1); // Cycle through slides
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [totalSlides]);

    return (
        <div className="flex justify-center items-center mx-auto rounded-2xl">
            <div className="carousel w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px] relative">
                {/* Slide 1 */}
                <div
                    id="slide1"
                    className={`carousel-item relative w-full ${activeSlide === 1 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://islamichelp.org.uk/storage/Bangladesh%20Flood%202023/bangladeshflooding.jpeg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(6)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❯</button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    id="slide2"
                    className={`carousel-item relative w-full ${activeSlide === 2 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://static.wixstatic.com/media/925fa3_0964f59beaff4581b601333451c9898f~mv2.jpg/v1/fill/w_2500,h_1985,al_c/925fa3_0964f59beaff4581b601333451c9898f~mv2.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(3)}>❯</button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    id="slide3"
                    className={`carousel-item relative w-full ${activeSlide === 3 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://p3j8e7f4.delivery.rocketcdn.me/wp-content/uploads/2022/08/Palestine_Emergency_feature.png"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❯</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;
