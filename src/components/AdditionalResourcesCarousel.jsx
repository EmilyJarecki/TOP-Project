'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import holdingHands from '../assets/addtl-rsrc-holding-hands.png';
import codeScreen from '../assets/addtl-rsrc-code.png';
import covidTest from '../assets/addtl-rsrc-testing.png';

export default function AdditionalResourcesCarousel() {

    const [emblaRef] = useEmblaCarousel();

    return (

        <div className="m-4 bg-temp">
            <div className="flex justify-center gap-1.5">
                <div className="bg-blue-500 h-2.5 w-2.5 rounded-full"></div>
                <div className="bg-blue-500 h-2.5 w-2.5 rounded-full"></div>
                <div className="bg-blue-500 h-2.5 w-2.5 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-2 items-end">
                <p className="font-bold text-[14pt] tracking-tight">Additional Resources</p>
                <p className="underline text-sm mr-1">See All</p>
            </div>
            <div className="embla overflow-hidden mt-2" ref={emblaRef}>
                <div className="embla__container flex gap-3">
                    <div className="embla__slide flex-carousel-mobile min-w-0">
                        <div>
                            <div className="rounded-xl overflow-hidden">
                                <Image src={holdingHands} alt="holding-hands-image"></Image>
                                <p className="text-sm font-medium leading-none p-2 bg-white">We're here to support you</p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0">
                        <div>
                            <div className="rounded-xl overflow-hidden">
                                <Image src={codeScreen} alt="holding-hands-image"></Image>
                                <p className="text-sm font-medium leading-none p-2 bg-white">Your information is secure</p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0">
                        <div>
                            <div className="rounded-xl overflow-hidden">
                                <Image src={covidTest} alt="holding-hands-image"></Image>
                                <p className="text-sm font-medium leading-none p-2 bg-white">You're part of the future of testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};