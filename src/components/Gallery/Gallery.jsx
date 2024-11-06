import React from 'react';

// Image imports from the "asserts" folder
import h1 from "../../asserts/img/h1.jpg";
import h2 from "../../asserts/img/h2.jpg";
import h3 from "../../asserts/img/h3.jpg";
import h4 from "../../asserts/img/h4.jpg";
import h5 from "../../asserts/img/h5.jpg";
import h6 from "../../asserts/img/h6.jpg";
import h7 from "../../asserts/img/h7.jpg";
import h8 from "../../asserts/img/h8.jpg";
import h9 from "../../asserts/img/h9.jpg";
import h10 from "../../asserts/img/h10.jpg";
import h11 from "../../asserts/img/h11.jpg";

function Gallery() {
    // Images array to simplify mapping over them
    const images = [
        { src: h1, alt: "gallery-photo-1" },
        { src: h2, alt: "gallery-photo-2" },
        { src: h3, alt: "gallery-photo-3" },
        { src: h4, alt: "gallery-photo-4" },
        { src: h5, alt: "gallery-photo-5" },
        { src: h6, alt: "gallery-photo-6" },
        { src: h7, alt: "gallery-photo-7" },
        { src: h8, alt: "gallery-photo-8" },

    ];

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-10">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="grid gap-4"
                    data-aos="fade-up"
                    data-aos-delay={`${200 * (index + 1)}`}
                >
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center"
                            src={image.src}
                            alt={image.alt}
                            loading="lazy" // Lazy loading for images
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
