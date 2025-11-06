/*Interstellar Cornfield Color Palette
Light Sky Blue - #799AE0
Light Army Green - #616F42
Dark Truck Navy - #2C383E
Rich Dark Corn - #182511
*/

"use client"

import TiltedCard from '@/app/components/TiltedCard';
import PageBackground from '@/app/components/PageBackground';
import image1 from '@/public/images/20230718_115217.jpg'
import image2 from '@/public/images/20230718_125956.jpg'
import image3 from '@/public/images/20240408_151357.jpg'
import image4 from '@/public/images/20240510_222255.jpg'
import image5 from '@/public/images/PXL_20250202_200310915.MP.jpg'
import image6 from '@/public/images/Snapchat-1200036031.jpg'
import image7 from '@/public/images/Snapchat-205734307.jpg'
import image8 from '@/public/images/dji_fly_20230704_154932_34_1688500221843_photo_optimized.jpg'
import image9 from '@/public/images/dji_fly_20230718_120446_81_1689696298184_photo_optimized.jpg'
import image10 from '@/public/images/PXL_20250424_010654590.jpg'
import image11 from '@/public/images/PXL_20250609_000041108.MP.jpg'
import image12 from '@/public/images/PXL_20250609_133424638.jpg'
import image13 from '@/public/images/PXL_20250609_144136887.jpg'
import image14 from '@/public/images/PXL_20250610_175951152.MP.jpg'
import image15 from '@/public/images/Screenshot_20251016-151414.png'
const pictures = [
    image10, image2, image6, image5, image15, image3, image11, image8, image14, image13, image7, image12, image1, image4, image9
]

export default function gallery() {
    return (
        <>
            <PageBackground color="#799AE0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-8">
                {pictures.map((point, index) => (
                    <TiltedCard
                        key={index}
                        imageSrc={point.src}
                        altText={`Gallery image ${index + 1}`}
                        containerHeight="300px"
                        containerWidth="100%"
                        imageHeight="300px"
                        imageWidth="100%"
                        rotateAmplitude={6}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                    />
                ))}
            </div>
        </>
    );
}