import type { Dispatch, SetStateAction } from "react";

export type ThemeType = 'light' | 'dark';
export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>]
type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

//data

type ID = number;

export interface SiteData {
    id: ID;
    name: string;
    description: string;
    favicon: Media;
    seo: any | null;
}

export interface ProfileData {
    id: ID;
    firstName: string;
    lastName: string;
    bio: string;
    imageUrl: string;
}


export interface Skill {
    id: ID;
    name: string;
    iconUrl: string;
};

export interface Resume {
    id: ID;
    fileUrl: string;
    updatedOn: string;
}

export interface ThemedIcon extends Record<ThemeType, Media> {
    id: ID;
}

export interface Social {
    id: ID;
    url: string;
    iconUrl: string;
    name: string
}

export interface ExperienceData {
    id: ID;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string;
    companyLogoUrl: string;    
}

export interface Address{
  id: ID;
  location: string;
  locationUrl: string;
  imageUrl: string;
}

export interface Project {
    id: ID;
    name: string;
    sourceCodeUrl: string;
    previewUrl: string;
    imageUrl: string;

}

export type Data = {
        id: ID;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        siteData: SiteData;
        profile: ProfileData
        skills: Skill[];
        resume: Resume;
        socials: Social[];
        experiences: ExperienceData[];
        address: Address;
        themeIcon: ThemedIcon;
        projects: Project[]
};


type Media = {
    id: ID;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any | MediaFormat;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

interface MediaFormat {
    thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
};
