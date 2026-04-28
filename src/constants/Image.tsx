import backgroundImage from '@/assets/images/background_image.jpg'
import backgroundImage_2 from '@/assets/images/background_image_2.jpg'

import image_1 from "@/assets/images/image-1.webp"
import image_2 from "@/assets/images/image-2.webp"
import image_3 from "@/assets/images/image-3.webp"
import image_4 from "@/assets/images/image-4.webp"
import image_5 from "@/assets/images/image-5.webp"
import image_6 from "@/assets/images/image-6.webp"
import image_7 from "@/assets/images/image-7.webp"
import image_8 from "@/assets/images/image-8.webp"
import image_9 from "@/assets/images/image-9.webp"

const BACKGROUND = {
    background: backgroundImage,
    background_2: backgroundImage_2
} as const;

const COMMODITIES_IMAGE = {
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
} as const


const ROOMS = {
    image_1,
    image_2,
    image_3

} as const
export { BACKGROUND, COMMODITIES_IMAGE, ROOMS}