import { Carousel } from 'flowbite-react';

export const Car = ({ item }) => {
    return (
        <div className="lg:w-1/2 w-full lg:h-auto h-64">
            <Carousel slideInterval={3000}>
                <img src={item.imageOne} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={item.imageTwo} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={item.imageThree} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
                <img src={item.imageFour} alt={`${item.category} ${item.brand} modelo ${item.model}`} />
            </Carousel>
        </div>
    );
}