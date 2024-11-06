import React from 'react';
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
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-10">
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h1}
                        alt="gallery-photo-1"

                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h2}
                        alt="gallery-photo-2"


                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h3}
                        alt="gallery-photo-3"


                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h4}


                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h5}
                        alt="gallery-photo-5"


                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h6}
                        alt="gallery-photo-6"


                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h7}
                        alt="gallery-photo-7"


                    />
                </div>
                <div>
                    <img

                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h8}
                        alt="gallery-photo-8"


                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"

                        src={h9}
                        alt="gallery-photo-9"


                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h10}
                        alt="gallery-photo-10"


                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={h11}
                        alt="gallery-photo-11"


                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
