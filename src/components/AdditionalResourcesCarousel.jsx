"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import holdingHands from "../assets/addtl-rsrc-holding-hands.png";
import codeScreen from "../assets/addtl-rsrc-code.png";
import covidTest from "../assets/addtl-rsrc-testing.png";
import virus from "../assets/addtl-rscr-virus.png"
import { useCallback, useEffect, useState } from "react";

export default function AdditionalResourcesCarousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 0 });
    const [carouselIndex, setCarouselIndex] = useState(0);

    const onSelect = useCallback((emblaApi, eventName) => {

        setCarouselIndex(emblaApi.selectedScrollSnap());

    });

    useEffect(() => {

        if (emblaApi) emblaApi.on("select", onSelect);

    }, [emblaApi]);



    return (

        <div className="mx-auto pt-20 bg-[#E4EAEE] ">
            <div className="flex justify-center gap-1.5">
                <div className={`${carouselIndex == 0 || carouselIndex == 4 ? "bg-hych-subheading-blue" : "bg-gray-300"} h-2.5 w-2.5 rounded-full`}></div>
                <div className={`${carouselIndex == 1 || carouselIndex == 5 ? "bg-hych-subheading-blue" : "bg-gray-300"} h-2.5 w-2.5 rounded-full`}></div>
                <div className={`${carouselIndex == 2 || carouselIndex == 6 ? "bg-hych-subheading-blue" : "bg-gray-300"} h-2.5 w-2.5 rounded-full`}></div>
                <div className={`${carouselIndex == 3 || carouselIndex == 7 ? "bg-hych-subheading-blue" : "bg-gray-300"} h-2.5 w-2.5 rounded-full`}></div>
            </div>
            <div className="flex justify-between mt-2 items-end">
                <p className="font-bold text-[14pt] tracking-tight">Additional Resources</p>
                <Link href="/resources"><p className="underline text-sm mr-1">See All</p></Link>
            </div>
            <div className="embla overflow-hidden mt-2" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/faq">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={holdingHands} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">We&apos;re here to support you</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="privacy">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={codeScreen} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">Your information is secure</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/about">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={covidTest} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">You&apos;re part of the future of testing</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/about">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={virus} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">Why you should report results</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/faq">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={holdingHands} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">We&apos;re here to support you</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/privacy">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={codeScreen} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">Your information is secure</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/about">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={covidTest} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">You&apos;re part of the future of testing</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="embla__slide flex-carousel-mobile min-w-0 mr-3">
                        <div>
                            <Link href="/about">
                                <div className="rounded-xl overflow-hidden">
                                    <Image src={virus} alt="holding-hands-image"></Image>
                                    <p className="text-sm font-medium leading-none p-2 bg-white">Why you should report results</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};