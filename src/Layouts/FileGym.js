import React from "react";
import Target from "../Ui/Target";

const FileGym = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
            textName: 'Gimnasio',
            direction: 'direccion',
            // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        },
        {
            image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
            textName: 'Gimnasio',
            direction: 'direccion',
            // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        },
        {
            image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
            textName: 'Gimnasio',
            direction: 'direccion',
            // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        },
        {
            image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
            textName: 'Gimnasio',
            direction: 'direccion',
            // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        },
        {
            image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
            textName: 'Gimnasio',
            direction: 'direccion',
            // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        }
        // {
        //     image: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png',
        //     textName: 'Gimnasio',
        //     direction: 'direccion',
        //     // imageGym: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371332/ImagenD_zycbgp.jpg'
        // }
    ]

    return (
        <div className="card-list">
            {data.map((cardData, index) => (
                <Target
                    key={index}
                    image={cardData.image}
                    textName={cardData.textName}
                    direction={cardData.direction}
                    // imageGym={cardData.imageGym}
                />
            ))}
        </div>
    )
}

export default FileGym;