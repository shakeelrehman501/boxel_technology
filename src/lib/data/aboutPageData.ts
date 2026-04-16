
export interface ProjectCardData {
  id:number,
  image:string,
  title:string,
  description:string
}

export const projectCardData : ProjectCardData[] = [
  {
    id: 1,
    image:"/other_images/projects_completed.svg",
    title: "200+",
    description: "Project Completed"
  },
  {
    id: 2,
    image:"/other_images/team_member.svg",
    title: "10+",
    description: "Team Members"
  },
  {
    id: 3,
    image:"/other_images/countries.svg",
    title: "27+",
    description: "Countries Served"
  }
]


export interface SocialLinks {
  linkedin?: string;
  behance?: string;
  github?: string;
  artstation?:string;
}

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  role: string;
  links?: SocialLinks;
}

export const teamsData: TeamMember[] = [
  {
    id: 1,
    image: '/team_pictures/jameel.webp',
    name: "Jamil Rahman",
    role: "3D Game Artist | Graphic Designer",
    links: {
      linkedin: "linkedin.com/in/jamil-rahman-0023b8177",
      behance: "https://www.behance.net/jamilbhatti/projects",
      artstation: "https://www.artstation.com/jamilrahman",
    },
  },
  {
    id: 2,
    image: '/team_pictures/waqas.webp',
    name: "Muhammad Waqas",
    role: "Graphic Design & UI/UX Specialist",
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-waqas-ab8005224/",
      behance: "https://www.behance.net/waqasbhatti1",
    },
  },
  {
    id: 3,
    image: '/team_pictures/shakeel.webp',
    name: "Shakeel Rahman",
    role: "Web Developer",
    links: {
      linkedin: "https://www.linkedin.com/in/shakeel-rehman-332339251/",
      github: "https://github.com/shakeelrehman501",
    },
  },
  {
    id: 4,
    image: '/team_pictures/khaleel.webp',
    name: "Khaleel Rahman",
    role: "Game Developer",
    links: {
      linkedin: "https://www.linkedin.com/in/khaleel-ur-rehman-ba6ab616a/",
      github: "https://khaleel990.github.io/github-portfolio/",
    },
  },
  {
    id: 5,
    image: '/team_pictures/hamza.webp',
    name: "Ameer Hamza",
    role: "Packaging Design Specialist",
    links: {
      linkedin: "https://www.linkedin.com/in/ameer-hamza-930742227/",
      behance: "https://www.behance.net/ameerhamza81",
    },
  },
  {
    id: 6,
    image: '/team_pictures/usama.webp',
    name: "Usama Azhar",
    role: "3D Character Artist",
    links: {
      linkedin: "https://www.linkedin.com/in/usama-azhar-834883296/",
      artstation: "https://www.artstation.com/usamaazhar3",
    },
  },
  {
    id: 7,
    image: '/team_pictures/bilal.webp',
    name: "Muhammad Bilal",
    role: "Graphic Designer",
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-bilal-6a8899248/",
      behance: "https://www.behance.net/MHafizBilall",
    },
  },
  {
    id: 8,
    image: '/team_pictures/hasaan.webp',
    name: "Muhammad Hasaan",
    role: "Web Developer",
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-hasaan-12a355362/",
      github: "https://github.com/muhammadhasaan0100",
    },
  },
  {
    id: 9,
    image: '/team_pictures/usman.webp',
    name: "Muhammad Usman",
    role: "3D Artist",
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-usman-b3662b311/",
      artstation: "https://muhammadusman647.artstation.com/",
    },
  },
  {
    id: 10,
    image: '/team_pictures/zafar.webp',
    name: "Zafar Sultan",
    role: "Graphic & UI UX Designer",
    links: {
      linkedin: "https://www.linkedin.com/in/zafar-sultan-919178235/",
      behance: "https://www.behance.net/zafarsultan",
    },
  },
  {
    id: 11,
    image: '/team_pictures/sohail.webp',
    name: "Sohail Zia",
    role: "3D Environment Artist",
    links: {
      linkedin: "https://www.linkedin.com/in/sohail-zia-2b9850270/",
      artstation: "https://www.artstation.com/sohailzia9",
    },
  },

];
