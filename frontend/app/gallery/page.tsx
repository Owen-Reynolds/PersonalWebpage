"use client"

import TiltedCard from '@/app/components/TiltedCard';

const pictures = [
    "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58", 
]

export default function gallery(){
    return(
        <div className="flex justify-center w-4/5">
            {pictures.map((point, index) =>(
                <TiltedCard
                    imageSrc={point}
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Kendrick Lamar - GNX"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                    <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                    </p>
                }
                />
            ))}
            
        </div>
    )
}  