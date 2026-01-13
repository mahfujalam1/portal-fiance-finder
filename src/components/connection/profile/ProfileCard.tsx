"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProfileData } from "@/types/profile";

interface ProfileCardProps {
  profile: ProfileData;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onBlock: (id: string) => void;
}

export function ProfileCard({
  profile,
  onAccept,
  onReject,
  onBlock,
}: ProfileCardProps) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-md bg-white shadow-md hover:scale-105 transition-all duration-500">
      <div className="relative w-full h-64   overflow-hidden">
        <Image
          src={profile.image || "/placeholder.svg"}
          alt={profile.name}
          fill
          className="object-cover p-3 rounded-2xl"
        />
      </div>

      <div className="px-6">
        <div className="text-center mb-4">
          <h3
            className="text-lg font-bold
    bg-linear-to-r to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent
    transition-all duration-300"
          >
            {profile.name}
          </h3>
          <p className="text-sm text-gray-500">ID: {profile.id}</p>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="">
            <p className="font-semibold text-gray-700">Age</p>
            <p className="font-semibold text-gray-700">Religion</p>
            <p className="font-semibold text-gray-700">Marital Status</p>
          </div>
          <div className="">
            <p className="text-gray-600">: {profile.age}</p>
            <p className="text-gray-600">: {profile.religion}</p>
            <p className="text-gray-600">: {profile.maritalStatus}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 flex flex-col gap-3">
        <div className="flex gap-3 justify-center w-full">
          <Button
            className="px-9"
            variant={"default"}
            onClick={() => onAccept(profile.id)}
          >
            Accept
          </Button>
          <Button
            onClick={() => onReject(profile.id)}
            variant="outline"
            className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-50"
          >
            Reject
          </Button>
        </div>
        <button
          onClick={() => onBlock(profile.id)}
          className="w-full text-center cursor-pointer text-sm text-blue-400 hover:text-blue-500 underline py-2"
        >
          block user
        </button>
      </div>
    </div>
  );
}
