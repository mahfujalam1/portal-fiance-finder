"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { ProfileCard, ProfileData } from "@/components/ui/HeroCard"


const profilesData: ProfileData[] = [
    {
        id: "1",
        name: "Dorothy H",
        initials: "DH",
        age: 24,
        religion: "Muslim",
        maritalStatus: "Divorced",
    },
    {
        id: "2",
        name: "Sarah M",
        initials: "SM",
        age: 26,
        religion: "Christian",
        maritalStatus: "Single",
    },
    {
        id: "3",
        name: "Emily R",
        initials: "ER",
        age: 28,
        religion: "Jewish",
        maritalStatus: "Widowed",
    },
    {
        id: "4",
        name: "Jessica L",
        initials: "JL",
        age: 25,
        religion: "Muslim",
        maritalStatus: "Single",
    },
    {
        id: "5",
        name: "Amanda K",
        initials: "AK",
        age: 27,
        religion: "Hindu",
        maritalStatus: "Single",
    },
]

export function HeroBanner() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 2,
        loop: true,
    })

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    

    return (
        <Card className="mb-8 ">
            <CardHeader>
                <CardTitle className="text-[#346FB7] text-center text-2xl border-b-2 border-[#65CBE2] pb-6 ">Awaiting Response</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {profilesData.map((profile) => (
                                <ProfileCard key={profile.id} profile={profile} />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300"
                        style={{
                            background: "linear-gradient(to right, #346fb7, #65cbe2)",
                            color: "white",
                            opacity: canScrollPrev ? 1 : 0.5,
                            cursor: canScrollPrev ? "pointer" : "not-allowed",
                        }}
                        aria-label="Previous profiles"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2  flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300"
                        style={{
                            background: "linear-gradient(to right, #65cbe2, #346fb7)",
                            color: "white",
                            opacity: canScrollNext ? 1 : 0.5,
                            cursor: canScrollNext ? "pointer" : "not-allowed",
                        }}
                        aria-label="Next profiles"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="text-center mt-6">
                    <Button variant="link" className="text-[#346FB7]">
                        view all
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
