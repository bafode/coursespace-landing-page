import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface LazyImageProps {
    image: string;
    alt: string;
    key?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LazyImage = (props: LazyImageProps) => {
    return (
        <LazyLoadImage
            style={{ objectFit: 'cover' }}
            key={props.key}
            src={props.image}
            width={'100%'}
            height={'100%'}
            effect="opacity"
            alt={''}
        />
    );
};

export default LazyImage;
