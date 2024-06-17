export type FAQDataProps = {
  title: string;
  description: string;
  link?:{
    href:string,
    title:string
  }
};

export const faqData: FAQDataProps[] = [
  {
    title: "What is Hex Colors?",
    description: "Hex Colors is the biggest NFT collection in web3 history going to include exactly 16,777,216 items and each one represents a hexadecimal color. This big number of items for a collection will rely on TON scalable infra so keep calm.",
  },
  {
    title: "OWN?",
    description: "The nature of web3 is OWN something freely, today you can OWN your favorite branding color or just gift a color to your friend with this NFT and proof it! So, hurry up and mint it.",
    link: {
      href: "mint-color",
      title: "Mint Color Now"
    }
  },
  {
    title: "Use case?",
    description: "Any DApp or App can integrate with this collection to enhance user experience using their own colors. Find out more at the roadmap.",
    link: {
      href: "roadmap-section",
      title: "Roadmap"
    }
  }
];