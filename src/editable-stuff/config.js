// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2E85E8, #1BC6B5, #E5A84C, #B142DA, #FF3737, #D8D9DA, #48DF5C",
  firstName: "Syed",
  middleName: "Ahmad",
  lastName: "Fazli",
  message: " Helping businesses leveraging cloud technology - Amazon Web Services | Alibaba Cloud",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/EdFazli",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/syed-fazli-019539100/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/SyedAhmadFazli.jpg"),
  imageSize: 375,
  message:
    "My name is Syed Ahmad Fazli. I'm a senior cloud consultant with a passion on DevOps and containers. With a decade of IT experience including 5 years in cloud industry, my goal is to help companies journey to onboard and leverage the benefits of cloud.",
  resume: require("../editable-stuff/SYEDAHMADFAZLI_Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "EdFazli", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["eks-fargate-sample-1", "k8s-autoscale-demo", "vagrant-packer-ansible-samples", "basicTerraform-azurePipelines", "terraform" ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/SyedAhmadFazli.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/SyedAhmadFazli.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Cloud Architecture Design", value: 60 },
    { name: "Cloud Security", value: 60 },
    { name: "Cloud Cost Optimzation", value: 70 },
    { name: "Kubernetes/Containers", value: 45 },
    { name: "Terraform", value: 50 },
    { name: "CI/CD", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    " Feel free to email me at",
  email: "edfazli92@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
     {
      role: 'Galactic Network Sdn Bhd (Senior Cloud Consultant)',// Here Add Company Name
      // companylogo: require('../assets/img/lazada.jpg'),
      date: 'September 2024 – Present',
    },
    {
      role: 'Lazada Malaysia (Cloud Engineer)',// Here Add Company Name
      // companylogo: require('../assets/img/lazada.jpg'),
      date: 'September 2023 – August 2024',
    },
    {
      role: 'ECloudvalley Technology Malaysia (Cloud Engineer)',
      // companylogo: require('../assets/img/ecv.png'),
      date: 'January 2022 – August 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
