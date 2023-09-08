type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "yavurb@gmail.com",
  title: "Hi, I’m Roy 🐙",
  // profile: "/profile.webp",
  description:
    "I'm a backend developer",
  socials: [
    {
      label: "Bento",
      link: "https://bento.me/yurb",
    },
    {
      label: "Github",
      link: "https://github.com/yavurb",
    },
  ],
};

export default presentation;
