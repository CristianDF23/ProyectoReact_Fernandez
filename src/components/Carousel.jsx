import { Carousel } from 'flowbite-react';

export const Car = ({ item }) => {
    return (
        <div className="lg:w-1/2 w-full lg:h-auto h-64">
            <Carousel slideInterval={3000}>
                <img src={`../${item.image.one}`} alt="..." />
                <img src={`../${item.image.two}`} alt="..." />
                <img src={`../${item.image.three}`} alt="..." />
                <img src={`../${item.image.four}`} alt="..." />
            </Carousel>
        </div>
    );
}