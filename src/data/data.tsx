import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jeno Manivcsuk',
  description: "Jeno's Personal CV website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jeno Manivcsuk.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a South-West London based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Bucher Municipal</strong> advancing the development of contemporary,
        mobile-oriented software for state-of-the-art municipal vehicles.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me working on my car, or tinkering with
        <strong className="text-stone-100"> Media Server</strong>, fixing{' '}
        <strong className="text-stone-100">Electronics</strong>, and watching{' '}
        <strong className="text-stone-100">Rick & Morty</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/src/cv/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey i'm Jeno (pronounced Jenno not Gino but im sure you got it right the first time), a Computer Science graduate from Royal Holloway University of London 
  with a diverse range of programming skills and practical experience in IT roles. 
  I thrive in dynamic environments, where my strong communication, teamwork abilities, 
  and detail-oriented approach contribute to the success of software development projects. 
  Outside work, I maintain a balance of physical fitness, community service, and technology tinkering. 
  Passionate about continuous learning, I am excited to leverage my expertise and innovative spirit in contributing to cutting-edge software solutions.`,
  aboutItems: [
    {label: 'Location', text: 'South-West London, U.K.', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Ukrainian / British', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Media Servers, Automation', Icon: SparklesIcon},
    {label: 'Study', text: 'Royal Holloway University of London', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bucher Municipal.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Ukrainian',
        level: 10,
      },
      {
        name: 'Russian',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'HTML5/CSS',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java/C#',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Swift',
        level: 2,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2020 - June 2023 | Grade: 2:1',
    location: 'Royal Holloway University of London',
    title: 'Bachelor of Computer Science',
    content: (
      <p>
        During my comprehensive study of Computer Science at Royal Holloway, University of London, I acquired deep
        knowledge of key areas such as Algorithms, Data Structures, Programming, Machine Learning, and Cybersecurity.
        Alongside theoretical learning, I undertook numerous practical projects. One significant project involved the
        end-to-end development of a mobile application, enriching my coding skills and providing valuable experience in
        project management.
        <br></br>
        <br></br>
        In addition to coursework and practical projects, I completed a year-long individual research project focusing
        on Machine Learning, enhancing my problem-solving and research skills. My engagement with the Computer Science
        Society allowed me to participate in coding competitions and hackathons, fostering my passion for the field.
        This journey at Royal Holloway has shaped me into a well-rounded Computer Science professional with a solid
        theoretical background and hands-on experience.
      </p>
    ),
  },
  {
    date: 'September 2018 - June 2020 | Grade: D*D*D*',
    location: 'Kingston College',
    title: 'Extended Diploma in IT(Software Development)',
    content: (
      <p>
        During my time at Kingston College studying for an Extended Diploma in IT, I specialized in Software
        Development. I strengthened my understanding of key concepts in computer science and software engineering, and
        mastered various programming languages including Python, Java, and C#. In addition to my academic studies, I
        participated in numerous coding competitions and hackathons, consistently ranking among the top contenders. This
        provided a platform to apply theoretical knowledge to time-bound challenges. Collaborative work was also a key
        part of my studies, enhancing my teamwork abilities and communication skills. This comprehensive experience has
        equipped me with a robust foundation in software development, preparing me to excel in the fast-paced tech
        industry.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Bucher Municipal',
    title: 'Junior Software Engineer',
    content: (
      <ul>
        <li>• Integral in creating and improving Bucher Municipal's software systems.</li>
        <li>
          • Collaborated in a team to develop software solutions optimizing vehicle functionality and operational
          efficiency.
        </li>
        <li>• Specialized in full-stack development using Java, C#, and Python.</li>
        <li>• Designed intuitive user interfaces, server-side functions, and robust databases.</li>
        <li>• Adhered to agile methodologies for rapid response to changes and continuous feature delivery.</li>
        <li>• Conducted comprehensive testing to ensure software reliability and performance.</li>
        <li>• Investigated and implemented new technologies and practices to keep our software at the cutting edge.</li>
        <li>
          • Applied deep software engineering understanding and commitment to quality for superior software solution
          development.
        </li>
      </ul>
    ),
  },
  {
    date: 'Septmeber 2018 - July 2023',
    location: 'Lima&J LTD',
    title: 'IT Assistant / Junior Developer',
    content: (
      <ul>
        <li>• Demonstrated exceptional organizational skills and adaptability in a fast-paced environment.</li>
        <li>• Enhanced team collaboration by quickly learning and utilizing required software.</li>
        <li>• Met deadlines for software updates and maintenance tasks.</li>
        <li>• Introduced creative solutions to improve task execution.</li>
        <li>• Designed and coded a finance application to streamline invoicing processes for employees.</li>
        <li>• Developed a website using HTML, CSS, and JavaScript, increasing customer engagement by 60%.</li>
        <li>• Managed domain and email systems, ensuring smooth operation and robust security.</li>
      </ul>
    ),
  },
  {
    date: 'August 2021 - July 2023',
    location: 'Screwfix',
    title: 'Customer Service and Sales Assistant',
    content: (
      <ul>
        <li>
          • Served as a key link between the company and its customers, managing inbound calls and email correspondence
          with efficiency and professionalism.
        </li>
        <li>
          • Handled product inquiries, order placements, and order tracking over the phone, resolving issues promptly to
          ensure customer satisfaction.
        </li>
        <li>• Processed company purchase orders via email, ensuring the accuracy of order details.</li>
        <li>
          • Utilized comprehensive understanding of Screwfix’s product offerings to facilitate effective product
          recommendations and upselling, contributing to the company's sales objectives.
        </li>
        <li>
          • Strengthened abilities in customer service, sales, and order management, providing a robust foundation for
          career advancement.
        </li>
      </ul>
    ),
  },
  {
    date: 'November 2019 - August 2021',
    location: 'Currys plc',
    title: 'Customer Advisor and Sales Assistant',
    content: (
      <ul>
        <li>• Worked collaboratively to achieve sales targets and goals.</li>
        <li>• Guided customers to suitable products, ensuring satisfaction with purchases.</li>
        <li>• Handled cash and card payments in accordance with FCA regulations.</li>
        <li>• Processed transactions worth over £100,000 during a peak one-month period.</li>
        <li>• Worked closely with business clients for their bulk transaction needs.</li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hey there! Send me an email or a message on LinkedIn and I will make sure to get back to you asap! ',
  items: [
    {
      type: ContactType.Email,
      text: 'manivcsuk2002@yahoo.com',
      href: 'mailto:manivcsuk2002@yahoo.com',
    },
    {
      type: ContactType.Location,
      text: 'South-West London, England, United Kingdom',
      href: 'https://www.google.com/maps/place/Kingston+upon+Thames/@51.4175308,-0.3037983,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@jeno.m_',
      href: 'https://www.instagram.com/jeno.m__/',
    },
    {
      type: ContactType.Github,
      text: 'JeKaQM',
      href: 'https://github.com/JeKaQM',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/JeKaQM'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jeno-manivcsuk-1474911a1/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jeno.m__'},
];
