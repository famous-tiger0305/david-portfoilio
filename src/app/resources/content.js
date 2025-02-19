import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "David",
  lastName: "Kevin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Web Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "davidkevin0305",
    icon: "email",
    link: "mailto:davidkevin0305@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Web Developer</>,
  subline: (
    <>
      {/*I'm {person.name}, a Senior Web Developer at <InlineCode>FLY</InlineCode>, where I craft intuitive*/}
      {/*<br /> user experiences. After hours, I build my own projects.*/}
      I'm {person.name}, a Senior Web Developer with 7 years experience.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Senior Web Developer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Web-Weave – Los Angeles, CA",
        timeframe: "2022 - Present",
        role: "Senior Web Developer",
        achievements: [
            <>
              Led and optimized web solutions across multiple projects.
            </>,
            <>
              Developed and maintained web applications using React.js, Next.js, and PHP.
            </>,
            <>
              Integrated Wagtail, Shopify, and WordPress solutions for diverse clients.
            </>,
            <>
              Implemented RESTful APIs to improve system efficiency and maintainability.
            </>,
            <>
              Managed CI/CD pipelines for automated deployment and development workflow.
            </>,
            <>
              Mentored junior developers and conducted code reviews to uphold high-quality standards.
            </>

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "WestHillsWeb – Los Angeles, CA",
        timeframe: "2018 - 2022",
        role: "Web Developer",
        achievements: [
            <>
              Improved website performance by optimizing assets, reducing server response times, and using lazy loading.
            </>,
            <>
              Integrated APIs, payment gateways, and authentication systems.
            </>,
            <>
              Collaborated with UI/UX designers to enhance application usability and aesthetics.
            </>
        ],
        images: [],
      },
      {
        company: "Visital Utility – Los Angeles, CA",
        timeframe: "2017 - 2018",
        role: "Junior Web Developer",
        achievements: [
          <>
            Contributed to developing web applications with an emphasis on front-end features.
          </>,
          <>
            Resolved bugs, enhanced performance, and refactored code to uphold best practices.
          </>,
          <>
            Acquired practical experience with Git, Agile workflows, and responsive design.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educations",
    institutions: [
      {
        name: "Phillips Graduate University",
        description: <>MSIT in Computer Science</>,
      },
    ],
  },
  project: {
    display: false, // set to false to hide this section
    title: "Projects",
    projects: [
      {
        title: "Next.js",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  skill:{
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Front-End",
        description:<>JavaScript(ES6+), HTML5, CSS3, Bootstrap, JSON, React.js, Next.js, Vue.js, TypeScript</>
      },
      {
        title: "Back-End",
        description:<>PHP, Python, Node.js, FastAPI</>
      },
      {
        title: "Databases-End",
        description:<>MySQL, MongoDB, Oracle</>
      },
      {
        title: "Tools & Plateforms",
        description:<>Wagtail, Docker, Shopify, WordPress, Django</>
      },
      {
        title: "Other",
        description:<>RESTful APIs, Microservices Architecture, Agile & Scrum Methodologies</>
      },
    ]
  }
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
