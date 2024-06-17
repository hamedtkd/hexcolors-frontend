
export type PortfolioCardT = {
    url: string;
    title: string;
    description: string;
    tags: string[];
    video: string;
    imageUrl: string;
};
export const portfolioData: PortfolioCardT[] = [
    {
        url: "/services/samples/remocapp",
        title: "Remocapp",
        description:
            "Remocapp empowers you to effortlessly create motion capture studio and generate real-time video streams featuring personalized avatars.",
        tags: ["Product Design", "Visual Identity", "Product Development"],
        video: "/videos/samples/remocapp.mp4",
        imageUrl: "/Portofilo/remocapp-portofilo.webp",
    },
    {
        url: "/services/samples/smile-smile",
        title: "SmileeSmile",
        description:
            "AI-powered teeth enhancement for a unique smile preview. Explore dentists and treatments for the best fit after optimizing.",
        tags: ["Brand Strategy", "App Design", "Visual Identity"],
        video: "/videos/samples/SmileeSmile.mp4",
        imageUrl: "/Portofilo/SmileSmile-portofilo.webp",
    },
    {
        url: "/services/samples/nibex",
        title: "Nibex",
        description:
            "Nibex collaborates closely with AI startups, offering consulting and unwavering support. Our rebranding emphasizes our agency's modernity and comprehensive services, envisioning a friendly approach to help achieve your business goals.",
        tags: ["Market research", "Visual Identity", "Website design"],
        video: "/videos/samples/Nibex.mp4",
        imageUrl: "/Portofilo/portofolioNibex.webp",
    },
    {
        url: "/services/samples/flexui",
        title: "FlexUi",
        description:
            "FlexUi is a flexible and variable design system. an outstanding tool for your projects, significantly amplifying your design efficiency.",
        tags: ["Brand Strategy", "Visual Identity", "Design System"],
        video: "/videos/samples/Flex-Ui.mp4",
        imageUrl: "/Portofilo/portofolioFlexUI.webp",
    },
    {
        url: "/services/samples/tap4work",
        title: "Tap4Work",
        description:
            "Discover Your Next Job Today! Tap4Work have New Job Postings Every Day. Browse and Apply for the Job You Want.",
        tags: ["App Design", "Visual Identity", "Website design"],
        video: "/videos/samples/Tap4Work.mp4",
        imageUrl: "/Portofilo/tap4workHeader.webp",
    },

    // Todo add page for these
    // {
    //     url: "/services/samples/wearland",
    //     title: "Wear Land",
    //     description:
    //         "Realistic virtual Tyrone solution for buying garments. Wear Land lets your customers to have a new experience when buying cloths, shoes, and other wearables in-store and online !",
    //     tags: ["App Design", "Visual Identity", "Website design"],
    //     video: "/videos/samples/Tap4Work.mp4",
    //     imageUrl: process?.env?.NEXT_PUBLIC_IMAGE_S3_URL+"/Portofilo/WearLandHeader.webp",
    // },
    // {
    //     url: "/services/samples/raadco",
    //     title: "Raadco",
    //     description:
    //         "Building Better Solutions Together, We collaborate with startups to enterprises, producing user-friendly products.",
    //     tags: ["Brand Strategy", "Visual Identity", "Website design"],
    //     video: "/videos/samples/Tap4Work.mp4",
    //     imageUrl: process?.env?.NEXT_PUBLIC_IMAGE_S3_URL+"/Portofilo/raadcoHeader.webp",
    // },
];