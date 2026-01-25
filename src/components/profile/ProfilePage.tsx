"use client"

import { useState } from "react"
import { User, Briefcase, MapPin, Info, Home } from "lucide-react"
import { ProfileData } from "@/types/profile"
import { ProfilePicture } from "@/components/profile/components/ProfilePicture"
import { InfoCard } from "@/components/profile/components/InfoCard"
import { AboutSection } from "@/components/profile/components/AboutYourself"
import { CheckboxCard } from "@/components/profile/components/CheckboxCard"

const initialProfileData: ProfileData = {
    id: "SH791O2O29",
    profileId: "prof-001",
    email: "mahfujalam@gmail.com",
    mobileNumber: "0197432832",
    mainTab: "sent",
    status: "accepted",
    coverImage: "",
    profileImage: "/professional-portrait-man.jpg",
    images: ["/professional-portrait-man.jpg", "/casual-portrait-man.jpg", "/formal-portrait-man.jpg"],
    name: "Imran Hossain Shaon",
    idNo: "SH791O2O29",
    about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    basicInfo: {
        age: 27,
        religion: "Muslim",
        gender: "Male",
    },
    moreInfo: {
        height: "5'7\"",
        weight: "87 kg",
        skinTone: "Fair",
        bodyType: "Healthy",
        bloodGroup: "B+ (ve)",
        community: "Sunni",
        profileFor: "Self",
        maritalStatus: "Divorced",
    },
    family: {
        fatherStatus: "Officer",
        fatherOccupation: "Officer",
        motherStatus: "Housewife",
        motherOccupation: "Housewife",
        siblings: {
            brothers: 2,
            sisters: 0,
        },
        affluence: "Middle class",
        livesIn: "Comilla",
    },
    education: {
        education: "BSc Graduate",
        institute: "Private University",
        profession: "Banker",
        monthlyIncome: "15,700 /=",
        areaField: "Assistant Manager",
        company: "Rupali Bank",
    },
    address: {
        homeDistrict: "Barishal",
        city: "Barishal",
        country: "Bangladesh",
        presentAddress:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut",
        permanentAddress: "Same as preset address",
        citizen: "No (PP: BBO690458)",
        postalCode: "No (PP: BBO690458)",
    },
    lifestyle: {
        smoking: false,
        drinking: false,
        vegetarian: false,
        arrogant: false,
        badMood: false,
        recklessDriving: false,
        otherHobbies: "",
    },
}

export const ProfilePage = () => {
    const hisProfile = true
    const [profileData, setProfileData] = useState<ProfileData>(initialProfileData)

    const handlePhotoChange = (photoUrl: string) => {
        setProfileData((prev) => ({ ...prev, profileImage: photoUrl }))
        console.log("[Profile] Photo updated:", { photoUrl, timestamp: new Date().toISOString() })
    }

    const handleBasicInfoSave = (data: Record<string, string | number>) => {
        const updatedBasicInfo = {
            age: Number(data.age) || profileData.basicInfo.age,
            religion: (data.religion as string) || profileData.basicInfo.religion,
            gender: (data.gender as string) || profileData.basicInfo.gender,
        }
        setProfileData((prev) => ({ ...prev, basicInfo: updatedBasicInfo }))
        console.log("[Profile] Basic Info saved:", updatedBasicInfo)
    }

    const handleAboutSave = (content: string) => {
        setProfileData((prev) => ({ ...prev, about: content }))
        console.log("[Profile] About section saved:", content)
    }

    const handleMoreInfoSave = (data: Record<string, string>) => {
        const updatedMoreInfo = {
            ...profileData.moreInfo,
            height: data.height || profileData.moreInfo.height,
            weight: data.weight || profileData.moreInfo.weight,
            skinTone: data.skinTone || profileData.moreInfo.skinTone,
            bodyType: data.bodyType || profileData.moreInfo.bodyType,
            bloodGroup: data.bloodGroup || profileData.moreInfo.bloodGroup,
            community: data.community || profileData.moreInfo.community,
            profileFor: data.profileFor || profileData.moreInfo.profileFor,
            maritalStatus: data.maritalStatus || profileData.moreInfo.maritalStatus,
        }
        setProfileData((prev) => ({ ...prev, moreInfo: updatedMoreInfo }))
        console.log("[Profile] More Info saved:", updatedMoreInfo)
    }

    const handleFamilySave = (data: Record<string, string>) => {
        const updatedFamily = {
            ...profileData.family,
            fatherStatus: data.fatherStatus || profileData.family.fatherStatus,
            fatherOccupation: data.fatherOccupation || profileData.family.fatherOccupation,
            motherStatus: data.motherStatus || profileData.family.motherStatus,
            motherOccupation: data.motherOccupation || profileData.family.motherOccupation,
            affluence: data.affluence || profileData.family.affluence,
            livesIn: data.livesIn || profileData.family.livesIn,
        }
        setProfileData((prev) => ({ ...prev, family: updatedFamily }))
        console.log("[Profile] Family info saved:", updatedFamily)
    }

    const handleEducationSave = (data: Record<string, string>) => {
        const updatedEducation = {
            ...profileData.education,
            education: data.education || profileData.education.education,
            institute: data.institute || profileData.education.institute,
            profession: data.profession || profileData.education.profession,
            monthlyIncome: data.monthlyIncome || profileData.education.monthlyIncome,
            areaField: data.areaField || profileData.education.areaField,
            company: data.company || profileData.education.company,
        }
        setProfileData((prev) => ({ ...prev, education: updatedEducation }))
        console.log("[Profile] Education saved:", updatedEducation)
    }

    const handleAddressSave = (data: Record<string, string>) => {
        const updatedAddress = {
            ...profileData.address,
            homeDistrict: data.homeDistrict || profileData.address.homeDistrict,
            country: data.country || profileData.address.country,
            presentAddress: data.presentAddress || profileData.address.presentAddress,
            permanentAddress: data.permanentAddress || profileData.address.permanentAddress,
            citizen: data.citizen || profileData.address.citizen,
            postalCode: data.postalCode || profileData.address.postalCode,
        }
        setProfileData((prev) => ({ ...prev, address: updatedAddress }))
        console.log("[Profile] Address saved:", updatedAddress)
    }

    const handleLifeStyleSave = (data: Record<string, boolean>) => {
        const updatedLifestyle = {
            ...profileData.lifestyle,
            smoking: data.smoking ?? profileData.lifestyle.smoking,
            drinking: data.drinking ?? profileData.lifestyle.drinking,
            vegetarian: data.vegetarian ?? profileData.lifestyle.vegetarian,
            arrogant: data.arrogant ?? profileData.lifestyle.arrogant,
            badMood: data.badMood ?? profileData.lifestyle.badMood,
            recklessDriving: data.recklessDriving ?? profileData.lifestyle.recklessDriving,
        }
        setProfileData((prev) => ({ ...prev, lifestyle: updatedLifestyle }))
        console.log("[Profile] Lifestyle saved:", updatedLifestyle)
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="w-full">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className=" text-gray-600 text-xl font-bold bg-linear-to-r text-xl to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent text-center">
                            My Profile
                        </p>
                    </div>
                    <div className="space-y-6">
                        {/* Profile Picture Section */}
                        <div className="flex justify-between gap-4">
                            <div className="bg-white rounded-lg p-6  col-span-1">
                                <ProfilePicture
                                    src={profileData.profileImage}
                                    alt={profileData.name}
                                    name={profileData.name}
                                    userId={profileData.idNo}
                                    hisProfile={hisProfile}
                                    onPhotoChange={handlePhotoChange}
                                />
                            </div>

                            {/* Photo Gallery Section */}
                            <div className="bg-white rounded-lg p-6 shadow-sm w-full">
                                <InfoCard
                                    title="Basic Information"
                                    icon={<User className="w-4 h-4" />}
                                    fields={[
                                        { key: "age", label: "Age", value: String(profileData.basicInfo.age) },
                                        { key: "religion", label: "Religion", value: profileData.basicInfo.religion },
                                        { key: "gender", label: "Gender", value: profileData.basicInfo.gender },
                                    ]}
                                    hisProfile={hisProfile}
                                    onSave={handleBasicInfoSave}
                                />
                            </div>
                        </div>

                        {/* Basic Information */}
                        

                        {/* About Yourself */}
                        <AboutSection
                            title="About Yourself"
                            content={profileData.about}
                            hisProfile={hisProfile}
                            onSave={handleAboutSave}
                        />

                        {/* More Information and Family - Two Columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <InfoCard
                                title="More Information"
                                icon={<Info className="w-4 h-4" />}
                                fields={[
                                    { key: "height", label: "Height", value: profileData.moreInfo.height },
                                    { key: "weight", label: "Weight", value: profileData.moreInfo.weight },
                                    { key: "skinTone", label: "Skin Tone", value: profileData.moreInfo.skinTone },
                                    { key: "bodyType", label: "Body Type", value: profileData.moreInfo.bodyType },
                                    { key: "bloodGroup", label: "Blood Group", value: profileData.moreInfo.bloodGroup },
                                    { key: "community", label: "Community", value: profileData.moreInfo.community },
                                ]}
                                hisProfile={hisProfile}
                                onSave={handleMoreInfoSave}
                            />

                            <InfoCard
                                title="Family"
                                icon={<Home className="w-4 h-4" />}
                                fields={[
                                    { key: "fatherStatus", label: "Father's status", value: profileData.family.fatherStatus },
                                    { key: "fatherOccupation", label: "Occupation", value: profileData.family.fatherOccupation },
                                    { key: "motherStatus", label: "Mother's status", value: profileData.family.motherStatus },
                                    { key: "motherOccupation", label: "Occupation", value: profileData.family.motherOccupation },
                                    { key: "affluence", label: "Affluence", value: profileData.family.affluence },
                                    { key: "livesIn", label: "Lives in", value: profileData.family.livesIn },
                                ]}
                                hisProfile={hisProfile}
                                onSave={handleFamilySave}
                            />
                        </div>

                        {/* Education & Career and Address - Two Columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <InfoCard
                                title="Education & Career"
                                icon={<Briefcase className="w-4 h-4" />}
                                fields={[
                                    { key: "education", label: "Education", value: profileData.education.education },
                                    { key: "institute", label: "Institute", value: profileData.education.institute },
                                    { key: "profession", label: "Profession", value: profileData.education.profession },
                                    { key: "monthlyIncome", label: "Monthly Income", value: profileData.education.monthlyIncome },
                                    { key: "areaField", label: "Area/Field", value: profileData.education.areaField },
                                    { key: "company", label: "Company", value: profileData.education.company },
                                ]}
                                hisProfile={hisProfile}
                                onSave={handleEducationSave}
                            />

                            <InfoCard
                                title="Address"
                                icon={<MapPin className="w-4 h-4" />}
                                fields={[
                                    { key: "homeDistrict", label: "Home District", value: profileData.address.homeDistrict },
                                    { key: "country", label: "Country", value: profileData.address.country },
                                    { key: "citizen", label: "Citizen", value: profileData.address.citizen },
                                    { key: "postalCode", label: "Postal Code", value: profileData.address.postalCode },
                                ]}
                                hisProfile={hisProfile}
                                onSave={handleAddressSave}
                            />
                        </div>

                        {/* Lifestyle */}
                        <CheckboxCard
                            title="Life Style"
                            fields={[
                                { key: "smoking", label: "Smoking", checked: profileData.lifestyle.smoking },
                                { key: "drinking", label: "Drinking", checked: profileData.lifestyle.drinking },
                                { key: "vegetarian", label: "Vegetarian", checked: profileData.lifestyle.vegetarian },
                                { key: "arrogant", label: "Arrogant", checked: profileData.lifestyle.arrogant },
                                { key: "badMood", label: "Bad Mood", checked: profileData.lifestyle.badMood },
                                { key: "recklessDriving", label: "Reckless Driving", checked: profileData.lifestyle.recklessDriving },
                            ]}
                            hisProfile={hisProfile}
                            onSave={handleLifeStyleSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
