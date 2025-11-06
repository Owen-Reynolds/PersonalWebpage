"use client"

import TiltedCard from '@/app/components/TiltedCard';
import image1 from '@/public/images/20230718_115217.jpg'
import image2 from '@/public/images/20230718_125956.jpg'
import image3 from '@/public/images/20240408_151357.jpg'

const pictures = [
    image1, image2, image3
]

export default function gallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
            {pictures.map((point, index) => (
                <TiltedCard
                    key={index}
                    imageSrc={point.src}
                    altText={`Gallery image ${index + 1}`}
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={6}
                    scaleOnHover={1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                />
            ))}
        </div>
    );
}