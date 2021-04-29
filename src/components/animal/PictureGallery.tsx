import Image from 'material-ui-image';
import React from 'react';

import { makeStyles } from '@material-ui/core';

interface PictureGalleryProps {
    images: string[];
}

export default function PictureGallery({ images }: PictureGalleryProps) {
    const classes = useStyles();
    return (
        <div>
            {images[0] ? (
                <Image src={images[0]} aspectRatio={3 / 2} cover />
            ) : (
                <div>
                    <div>
                        <img src="/animal-default-image.jpg" alt="paw" className={classes.bigImageCharacteristic} />
                    </div>
                    <div className={classes.imagesCharacteristic}>
                        <img src="/animal-default-image.jpg" alt="paw" className={classes.imageCharacteristic} />
                    </div>
                </div>
            )}
        </div>
    );
}
const useStyles = makeStyles(theme => ({
    bigImageCharacteristic: {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.primary.light}`,
    },
    imagesCharacteristic: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
    },
    imageCharacteristic: {
        width: '20%',
        height: '20%',
        border: `1px solid ${theme.palette.primary.light}`,
    },
}));
