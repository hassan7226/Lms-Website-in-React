import { createContext, useContext } from 'react'
import { assets } from '../assets/assets'

const CourseContext = createContext()

const dummyCourses = [
  {
    id: 'react-development',
    image: assets.course_1_thumbnail,
    title: 'Complete React Development',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    price: '$39',
    reviews: 2150,
    duration: '12 hours',
    lessons: 24,
    demoVideo: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
    curriculum: [
      {
        title: 'Getting Started with React',
        total: '4 lectures - 1 hour',
        lectures: [
          {
            id: 'intro-react',
            title: 'Intro to React',
            description: 'Overview of React, why it exists, and common use cases.',
            contentType: 'video',
            duration: '15:00',
            preview: true,
            resources: [{ title: 'Slides', href: '#' }],
            quiz: false,
            assignment: false,
          },
          {
            id: 'setup-vite',
            title: 'Project Setup with Vite',
            description: 'Create a new Vite project and review the project structure.',
            contentType: 'video',
            duration: '20:00',
            resources: [{ title: 'Starter repo', href: '#' }],
            quiz: false,
            assignment: true,
          },
          { id: 'jsx-render', title: 'JSX and Rendering', description: 'Learn JSX syntax and how rendering works.', contentType: 'article', duration: '12:00', resources: [], quiz: false, assignment: false },
          { id: 'components-props', title: 'Components and Props', description: 'Function and class components, passing props.', contentType: 'video', duration: '13:00', resources: [], quiz: true, assignment: false },
        ],
      },
      {
        title: 'State Management',
        total: '3 lectures - 45 minutes',
        lectures: [
          { id: 'useState-events', title: 'useState and Events', description: 'Manage local state and handle events.', contentType: 'video', duration: '15:00', resources: [], quiz: false, assignment: false },
          { id: 'useEffect-basics', title: 'useEffect Basics', description: 'Side effects and lifecycle using useEffect.', contentType: 'video', duration: '15:00', preview: true, resources: [], quiz: false, assignment: true },
          { id: 'lifting-state', title: 'Lifting State', description: 'Share state between components by lifting it up.', contentType: 'article', duration: '15:00', resources: [], quiz: false, assignment: false },
        ],
      },
    ],
    level: 'Intermediate',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['react', 'frontend', 'javascript'],
    learningOutcomes: ['Build React apps', 'Use hooks effectively', 'Deploy a React app'],
    prerequisites: ['Basic JavaScript', 'HTML & CSS'],
    shortDescription: 'Learn React from basics to advanced patterns by building real projects.',
    longDescription:
      'This hands-on React course covers components, hooks, state management, routing, performance optimization, and testing. Build several real-world projects and deploy them.',
  },
  {
    id: 'ui-ux-fundamentals',
    image: assets.course_2_thumbnail,
    title: 'UI/UX Design Fundamentals',
    instructor: 'David Miller',
    rating: 4.6,
    price: '$29',
    reviews: 842,
    duration: '8 hours',
    lessons: 18,
    demoVideo: 'https://www.youtube.com/embed/3t2x3p9Z8bY',
    curriculum: [
      {
        title: 'Design Principles',
        total: '3 lectures - 50 minutes',
        lectures: [
          { id: 'visual-hierarchy', title: 'Visual Hierarchy', description: 'Principles that guide users\' attention.', contentType: 'article', duration: '20:00', preview: true, resources: [], quiz: false, assignment: false },
          { id: 'color-theory', title: 'Color Theory', description: 'Color usage and accessibility considerations.', contentType: 'video', duration: '15:00', resources: [], quiz: false, assignment: false },
          { id: 'typography', title: 'Typography Basics', description: 'Choosing and pairing typefaces.', contentType: 'article', duration: '15:00', resources: [], quiz: true, assignment: false },
        ],
      },
    ],
    level: 'Beginner',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['design', 'ui', 'ux'],
    learningOutcomes: ['Understand UI fundamentals', 'Prototype interfaces', 'Critique designs'],
    prerequisites: ['Basic computer skills'],
    shortDescription: 'Core UI/UX principles and practical design system techniques.',
    longDescription:
      'Explore visual design, user research basics, wireframing, prototyping, and building consistent component libraries. Includes hands-on projects and critique sessions.',
  },
  {
    id: 'data-analytics-python',
    image: assets.course_3_thumbnail,
    title: 'Data Analytics With Python',
    instructor: 'Ayesha Khan',
    rating: 4.7,
    price: '$49',
    reviews: 1294,
    duration: '16 hours',
    lessons: 30,
    demoVideo: 'https://www.youtube.com/embed/rfscVS0vtbw',
    curriculum: [
      {
        title: 'Python for Data',
        total: '4 lectures - 2 hours',
        lectures: [
          { id: 'python-basics', title: 'Python Basics', description: 'Core language features for data tasks.', contentType: 'video', duration: '30:00', resources: [], quiz: false, assignment: false },
          { id: 'pandas-intro', title: 'Pandas Intro', description: 'DataFrames, selection, and grouping.', contentType: 'video', duration: '30:00', preview: true, resources: [{ title: 'Notebook', href: '#' }], quiz: true, assignment: true },
        ],
      },
    ],
    level: 'Intermediate',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['python', 'data', 'pandas'],
    learningOutcomes: ['Analyze datasets', 'Use Pandas effectively', 'Create visualizations'],
    prerequisites: ['Basic Python'],
    shortDescription: 'Practical data analytics workflows using Python and Pandas.',
    longDescription:
      'Analyze real datasets, clean and transform data with Pandas, visualize results, and build reproducible data pipelines. Includes project-based labs and Jupyter notebooks.',
  },
  {
    id: 'advanced-node-apis',
    image: assets.course_4_thumbnail,
    title: 'Advanced Node.js APIs',
    instructor: 'Michael Lee',
    rating: 4.5,
    price: '$34',
    reviews: 412,
    duration: '10 hours',
    lessons: 20,
    demoVideo: 'https://www.youtube.com/embed/Oe421EPjeBE',
    curriculum: [
      {
        title: 'API Design',
        total: '3 lectures - 1 hour 30 minutes',
        lectures: [
          { id: 'rest-graphql', title: 'REST vs GraphQL', description: 'Tradeoffs and when to choose each.', contentType: 'video', duration: '30:00', preview: true, resources: [], quiz: false, assignment: false },
          { id: 'error-handling', title: 'Error Handling', description: 'Patterns for robust APIs.', contentType: 'article', duration: '30:00', resources: [], quiz: true, assignment: true },
        ],
      },
    ],
    level: 'Advanced',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['node', 'backend', 'apis'],
    learningOutcomes: ['Design APIs', 'Secure endpoints', 'Scale services'],
    prerequisites: ['JavaScript basics', 'Async programming'],
    shortDescription: 'Build production-ready APIs with Node.js and best practices.',
    longDescription:
      'Covers REST and GraphQL API design, authentication, testing, error handling, performance, and deployment patterns with real-world examples and projects.',
  },
  {
    id: 'modern-javascript-essentials',
    image: assets.course_1_thumbnail,
    title: 'Modern JavaScript Essentials',
    instructor: 'Emily Carter',
    rating: 4.8,
    price: '$32',
    reviews: 980,
    duration: '9 hours',
    lessons: 22,
    demoVideo: 'https://www.youtube.com/embed/W6NZfCO5SIk',
    curriculum: [
      {
        title: 'ESNext Features',
        total: '3 lectures - 1 hour',
        lectures: [
          { id: 'destructuring', title: 'Destructuring & Spread', description: 'Useful patterns for working with objects and arrays.', contentType: 'article', duration: '20:00', resources: [], quiz: false, assignment: false },
          { id: 'async-await', title: 'Async/Await', description: 'Handle asynchronous code with async/await patterns.', contentType: 'video', duration: '25:00', preview: true, resources: [], quiz: true, assignment: false },
        ],
      },
    ],
    level: 'Beginner',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['javascript', 'es6'],
    learningOutcomes: ['Use ESNext syntax', 'Write cleaner async code'],
    prerequisites: ['Basic JavaScript knowledge'],
    shortDescription: 'Modern JavaScript features and patterns for daily development.',
    longDescription:
      'Understand ES6+ language features, modules, async patterns, and modern tooling to write cleaner and more maintainable JavaScript code.',
  },
  {
    id: 'react-ui-systems',
    image: assets.course_2_thumbnail,
    title: 'React UI Systems',
    instructor: 'Noah Wilson',
    rating: 4.7,
    price: '$42',
    reviews: 740,
    duration: '11 hours',
    lessons: 26,
    demoVideo: 'https://www.youtube.com/embed/8xw5vJm2Jv0',
    curriculum: [
      {
        title: 'Design Systems',
        total: '2 lectures - 40 minutes',
        lectures: [
          { id: 'tokens', title: 'Tokens & Tokens Usage', description: 'Create and use design tokens across components.', contentType: 'video', duration: '20:00', preview: true, resources: [], quiz: false, assignment: false },
          { id: 'component-libs', title: 'Component Libraries', description: 'Structure and document reusable components.', contentType: 'article', duration: '20:00', resources: [], quiz: true, assignment: true },
        ],
      },
    ],
    level: 'Intermediate',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['react', 'design-systems'],
    learningOutcomes: ['Build tokens', 'Document components'],
    prerequisites: ['Familiarity with React'],
    shortDescription: 'Design and implement scalable React component systems.',
    longDescription:
      'Learn how to build design systems, create reusable components, manage tokens, accessibility, and documentation for large-scale React apps.',
  },
  {
    id: 'python-data-projects',
    image: assets.course_3_thumbnail,
    title: 'Python Data Projects',
    instructor: 'Sophia Lee',
    rating: 4.6,
    price: '$45',
    reviews: 615,
    duration: '14 hours',
    lessons: 28,
    demoVideo: 'https://www.youtube.com/embed/rfscVS0vtbw',
    curriculum: [
      {
        title: 'Project Templates',
        total: '2 lectures - 1 hour',
        lectures: [
          { id: 'data-cleaning', title: 'Data Cleaning Project', description: 'Walkthrough of cleaning real-world messy data.', contentType: 'video', duration: '30:00', preview: true, resources: [{ title: 'Dataset', href: '#' }], quiz: false, assignment: true },
          { id: 'visualization', title: 'Visualization Project', description: 'Create expressive charts and dashboards.', contentType: 'video', duration: '30:00', resources: [], quiz: true, assignment: false },
        ],
      },
    ],
    level: 'Intermediate',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['python', 'projects'],
    learningOutcomes: ['Deliver data projects', 'Create visualizations'],
    prerequisites: ['Python basics'],
    shortDescription: 'Hands-on Python projects for data cleaning, analysis, and visualization.',
    longDescription:
      'Work through end-to-end data projects including collection, cleaning, exploratory analysis, and visualization using Python libraries with deployable notebooks.',
  },
  {
    id: 'node-backend-masterclass',
    image: assets.course_4_thumbnail,
    title: 'Node.js Backend Masterclass',
    instructor: 'Daniel Brown',
    rating: 4.5,
    price: '$38',
    reviews: 502,
    duration: '13 hours',
    lessons: 32,
    demoVideo: 'https://www.youtube.com/embed/Oe421EPjeBE',
    curriculum: [
      {
        title: 'Backend Fundamentals',
        total: '3 lectures - 2 hours',
        lectures: [
          { id: 'http-servers', title: 'HTTP & Servers', description: 'Basics of HTTP, servers and request lifecycle.', contentType: 'video', duration: '40:00', preview: true, resources: [], quiz: false, assignment: false },
          { id: 'databases', title: 'Databases', description: 'Relational and NoSQL options and integrations.', contentType: 'video', duration: '40:00', resources: [], quiz: true, assignment: true },
        ],
      },
    ],
    level: 'Advanced',
    language: 'English',
    subtitles: ['English'],
    certificate: true,
    tags: ['node', 'backend'],
    learningOutcomes: ['Build scalable backends', 'Integrate databases'],
    prerequisites: ['JavaScript', 'Async patterns'],
    shortDescription: 'Comprehensive backend course covering servers, databases, and scaling.',
    longDescription:
      'Build scalable backend systems with Node.js, learn database integrations, background jobs, observability, and deployment strategies used in production.',
  },
]

const dummyTestimonials = [
  {
    image: assets.profile_img_1,
    name: 'Kevin Blake',
    role: 'Frontend Developer',
    rating: 4.8,
    text: 'This course helped me land my first job. Lessons are practical and well-paced.',
  },
  {
    image: assets.profile_img_2,
    name: 'Priya Sharma',
    role: 'Computer Science Student',
    rating: 4.7,
    text: 'Great instructors and hands-on projects. Highly recommend for beginners.',
  },
  {
    image: assets.profile_img_3,
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    rating: 4.6,
    text: 'Practical assignments helped me build a portfolio that stands out.',
  },
]

export const CourseProvider = ({ children }) => {
  const value = {
    courses: dummyCourses,
    getCourseById: (id) => dummyCourses.find((course) => course.id === id),
    testimonials: dummyTestimonials,
  }

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
}

export const useCourses = () => {
  const context = useContext(CourseContext)
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider')
  }
  return context
}
