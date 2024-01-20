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
  profile: "https://cdn.yurb.dev/profile-0a6496c5-c426-453d-9577-599903002043.webp",
  description:
    "I'm a backend developer who is passionate about building software. I'm also delving into technical writing, and thus, I use this website as my own personal blog to share my learnings and the things I know. In fact, this website is my sandbox, so expect to see a lot of bugs and experimental features. Not because I have nowhere to put them (I don't), but because I truly believe that experimenting and messing things around is the best way for me to become a great SWE. I mean, that is what software is all about, right?",
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
