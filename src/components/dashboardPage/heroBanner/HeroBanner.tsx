'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { ProfileCard } from "@/components/ui/HeroCard"
import { profiles } from "@/constant/profilesData"

export function HeroBanner() {
    const [slidesToScroll, setSlidesToScroll] = useState(1)

    /* ---------- responsive slides ---------- */
    useEffect(() => {
        const handleResize = () => {
            setSlidesToScroll(window.innerWidth >= 768 ? 2 : 1)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll,
        loop: true,
    })

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    /* ---------- update scroll button states ---------- */
    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return
        requestAnimationFrame(() => {
            setCanScrollPrev(emblaApi.canScrollPrev())
            setCanScrollNext(emblaApi.canScrollNext())
        })
    }, [emblaApi])

    /* ---------- subscribe to embla events ---------- */
    useEffect(() => {
        if (!emblaApi) return

        // call once after mount
        updateScrollButtons()

        emblaApi.on("select", updateScrollButtons)
        emblaApi.on("reInit", updateScrollButtons)

        return () => {
            emblaApi.off("select", updateScrollButtons)
            emblaApi.off("reInit", updateScrollButtons)
        }
    }, [emblaApi, updateScrollButtons])

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-[#346FB7] text-center text-2xl border-b-2 border-[#65CBE2] py-3">
                    Awaiting Response
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {profiles.map(profile => (
                                <ProfileCard key={profile.id} profile={profile} />
                            ))}
                        </div>
                    </div>

                    {/* Prev */}
                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                            background: "linear-gradient(to right, #346fb7, #65cbe2)",
                            color: "white",
                            opacity: canScrollPrev ? 1 : 0.4,
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Next */}
                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                            background: "linear-gradient(to right, #65cbe2, #346fb7)",
                            color: "white",
                            opacity: canScrollNext ? 1 : 0.4,
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="text-center py-2">
                    <Button variant="link" className="text-[#346FB7]">
                        view all
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
