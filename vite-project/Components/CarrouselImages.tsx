import React, { useState } from 'react';

interface ProductImageGalleryProps {
    images: string[];  // Type des images : tableau de chaînes (URLs des images)
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0]);

    const handleThumbnailClick = (image: string) => {
        setCurrentImage(image);
    };

    return (
        <div className="image-gallery">
            <div className="main-image">
                <img src={currentImage} alt="Main" />
            </div>
            <div className="thumbnails">
                {images.map((image: string, index: number) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleThumbnailClick(image)}
                        className={`thumbnail ${currentImage === image ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductImageGallery;
