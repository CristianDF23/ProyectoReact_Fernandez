import { Carousel } from 'flowbite-react';

export const Car = ({ item }) => {
    return (
        <div className="lg:w-1/2 w-full lg:h-auto h-64">
            <Carousel slideInterval={3000}>
                <img src={`../${item.image.one}`} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={`../${item.image.two}`} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={`../${item.image.three}`} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={`../${item.image.four}`} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
            </Carousel>
        </div>
    );
}