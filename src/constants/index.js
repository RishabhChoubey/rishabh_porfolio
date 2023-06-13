import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  infosys,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Big Data Developer",
    icon: creator,
  },
];

const technologies = [

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
//     {
//     name: "HTML 5",
//     icon: html,
//   },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "Digital Specialist Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Built a generic YAML-based ingestion and data processing framework using Spark and Scala. This framework allows for efficient data ingestion, processing, and transformation from multiple sources.",
      "Developed a feature of pivot in the data processing framework, which eliminates the need for manual coding for pivot logic. This feature helps to improve productivity and reduces the chances of errors in the data processing pipeline.",
      "Solely worked on changing the aggregate level for fraud radar based on business demand, which helped to improve the accuracy and effectiveness of the risk alert monitoring system.",
      "Built multiple pipelines for the UI team and optimized the job processing time. This resulted in improved performance and faster turnaround time for the risk alert monitoring system.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    _id: {
      $oid: "601441bf8df0dd00151a2ba3",
    },
    title: "Ekart",
    sub_des: "Online shopping web site from where you can order product",
    git: "https://ekartweb.netlify.app",
    image: {
      public_id: "portfolio/b9d13ewol9lklxht5cko",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1674721421/portfolio/Screenshot_2023-01-26_135012_q050s7.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611940287080",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "601441bf8df0dd00151a2ba3",
    },
    title: "CodeBox",
    sub_des: "Quickly write your html css and js. To see what it result into",
    git: "https://codeweb.web.app/",
    image: {
      public_id: "portfolio/b9d13ewol9lklxht5cko",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1611940275/portfolio/b9d13ewol9lklxht5cko.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611940287080",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6015255c14cb490015b4b87d",
    },
    title: "Track Expense",
    sub_des: "Track your expenses",
    git: "https://trackexpenses.web.app/",
    image: {
      public_id: "portfolio/yfsl1qv1gip0nju7vwlf",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1611998543/portfolio/yfsl1qv1gip0nju7vwlf.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611998556527",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6015258214cb490015b4b87e",
    },
    title: "Snapy Snap",
    sub_des: "Share your picture to your friends",
    git: "https://snapysnap.web.app/",
    image: {
      public_id: "portfolio/marpefwcvgmwqfzrhrxf",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1611998585/portfolio/marpefwcvgmwqfzrhrxf.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611998594894",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "601525a314cb490015b4b87f",
    },
    title: "Notes",
    sub_des: "Note important things",
    git: "https://notesnotes.web.app/",
    image: {
      public_id: "portfolio/hchohvlqq88kstxujhld",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1611998619/portfolio/hchohvlqq88kstxujhld.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611998627825",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "601525f214cb490015b4b880",
    },
    title: "Chaty chat",
    sub_des: "Chat with your friends",
    git: "https://chatychat.web.app/",
    image: {
      public_id: "portfolio/jos2nazdw0rwcsb40xht",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1611998699/portfolio/jos2nazdw0rwcsb40xht.png",
    },
    created_at: {
      $date: {
        $numberLong: "1611998706645",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60168df9d1d4c000151180a4",
    },
    title: "Blog",
    sub_des: "Its blog site for my sister",
    git: "https://smritiblog.herokuapp.com/",
    image: {
      public_id: "portfolio/hehmdmbavsdgnlbrf6yo",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1612175291/portfolio/hehmdmbavsdgnlbrf6yo.png",
    },
    created_at: {
      $date: {
        $numberLong: "1612090873171",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "602c0d90b2dd0800158b7fa7",
    },
    title: "Git Repository",
    sub_des: "You can see Your git repository",
    git: "https://gitrepository.herokuapp.com/",
    image: {
      public_id: "portfolio/ialyhsnkxmqk6oftmvmh",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1613499783/portfolio/ialyhsnkxmqk6oftmvmh.png",
    },
    created_at: {
      $date: {
        $numberLong: "1613499792242",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6066e5eaa5379a0015530a0d",
    },
    title: "Ask Query",
    sub_des: "u can ask your query h",
    git: "https://askquery.netlify.app/",
    image: {
      public_id: "portfolio/uvvrph7awxmt9d1fl9mc",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1617356245/portfolio/uvvrph7awxmt9d1fl9mc.png",
    },
    created_at: {
      $date: {
        $numberLong: "1617356266299",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60699079f6c62b001544c274",
    },
    title: "Covid Tracker",
    sub_des: "It give's you number of cases in different country",
    git: "https://secndtry-fbaeb.firebaseapp.com/",
    image: {
      public_id: "portfolio/du09l8selt7mnguodqz2",
      url: "https://res.cloudinary.com/duvsvsxhk/image/upload/v1617530994/portfolio/du09l8selt7mnguodqz2.png",
    },
    created_at: {
      $date: {
        $numberLong: "1617531001399",
      },
    },
    __v: 0,
  },
];

export { services, technologies, experiences, testimonials, projects };
