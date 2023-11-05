const data = [
  {
    id: 1,
    date: '2022-04-01',
    role: 'Engineering Manager',
    company: 'PeopleGrove',
    timeInRole: 'Apr, 2022 - Present',
    location: 'Remote, India',
    responsibilities: `
      <ul>
         <li>Mentoring and leading a team of 3 junior developers & close collaboration with product managers and designers.</li>
         <li>Architect & developed a process to sync data using BigQuery from the primary database to an automated messaging platform used by marketing.</li>
         <li>Architect & developed a tool to migrate various legacy customer platforms to PeopleGrove V2 platform. So far, 150+ customer sites have been migrated using this tool.</li>
      </ul>
    `,
    skills: [
      'Javascript',
      'TypeScript',
      'Node.js',
      'React.js',
      'Redux',
      'Elasticsearch',
      'Redis',
      'PostgreSQL',
      'RabbitMQ',
      'SASS',
      'Google Cloud Functions',
      'Google Cloud Pub/Sub',
    ],
  },
  {
    id: 2,
    date: '2021-04-01',
    role: 'Senior Software Development Engineer',
    company: 'PeopleGrove',
    timeInRole: 'Apr, 2021 - Mar, 2022',
    location: 'Remote, India',
    responsibilities: `
      <ul>
         <li>Optimized PostgreSQL queries for 20+ million records. Brought response time of multiple APIs from > 4-5s to < 50ms.</li>
         <li>Managed newsletter service using Google Pub/Sub & SendGrid to send newsletters daily, weekly & monthly. This product is actively used to send more than 500k newsletters monthly.</li>
         <li>Worked on code-splitting in React front-end for better site-load times for better user experience.</li>
      </ul>
    `,
    skills: [
      'Javascript',
      'Node.js',
      'React.js',
      'Redux',
      'Elasticsearch',
      'Redis',
      'PostgreSQL',
      'RabbitMQ',
      'SASS',
      'Google Cloud Functions',
      'Google Cloud Pub/Sub',
    ],
  },
  {
    id: 3,
    date: '2020-04-01',
    role: 'Software Development Engineer II',
    company: 'PeopleGrove',
    timeInRole: 'Apr, 2020 - Mar, 2021',
    location: 'Remote, India',
    responsibilities: `
      <ul>
         <li>Built Cron jobs for scheduled tasks like sending email notifications and data cleaning.</li>
         <li>Maintained and ported legacy code from Angular.js to React. This increased user engagement on the platform by ~10 times because of better UX (as per our internal Mixpanel funnels).</li>
         <li>Experience working on worker threads for processing CPU intensive tasks.</li>
      </ul>
    `,
    skills: [
      'Javascript',
      'Node.js',
      'React.js',
      'Redux',
      'Redis',
      'PostgreSQL',
      'RabbitMQ',
      'SASS',
      'Google Cloud Functions',
    ],
  },
  {
    id: 4,
    date: '2019-03-18',
    role: 'Software Development Engineer I',
    company: 'PeopleGrove',
    timeInRole: 'Mar, 2019 - Mar, 2020',
    location: 'Mumbai, India',
    responsibilities: `
      <ul>
         <li>Architect & developed a tool called 'bulk matching' to pair mentees and mentors for mentorship based on their profile data. One of the highest revenue generating product in the platform.</li>
         <li>Architect & developed an internal tool called 'launch groups' to make releases behind feature flags easier and scalable. The tool has been used to release more than 20 products so far.</li>
         <li>Worked on Postmark for sending template-based emails.</li>
      </ul>
    `,
    skills: [
      'Javascript',
      'Node.js',
      'React.js',
      'Redux',
      'Redis',
      'PostgreSQL',
      'RabbitMQ',
      'SASS',
      'Google Cloud Functions',
    ],
  },
  {
    id: 5,
    date: '2018-10-14',
    role: 'Assistant System Engineer',
    company: 'Tata Consultancy Services',
    timeInRole: 'Oct, 2018 - Mar, 2019',
    location: 'Hyderabad, India',
    responsibilities: `
      <ul>
         <li>Developed an application that showed various reports generated in Tableau, PowerBI and SAP BO. The application was SSO enabled using Microsoft Azure.</li>
         <li>Conducted more than 10 corporate level trainings for React.js.</li>
      </ul>
    `,
    skills: ['Javascript', 'Node.js', 'React.js', 'MobX'],
  },
  {
    id: 6,
    date: '2017-09-13',
    role: 'Assistant System Engineer - Trainee',
    company: 'Tata Consultancy Services',
    timeInRole: 'Sept, 2017 - Sept, 2018',
    location: 'Hyderabad, India',
    responsibilities: `
      <ul>
         <li>Received corporate training in Java and Spring Boot.</li>
         <li>Developed an application to feed on the data exposed by SAP OData service. This data was used to create a dashboard, that helped a sales-person to help decide on whether to go ahead with a deal or not.</li>
      </ul>
    `,
    skills: [
      'Javascript',
      'Java',
      'Spring Boot',
      'Node.js',
      'React.js',
      'MobX',
    ],
  },
  {
    id: 7,
    date: '2013-07-01',
    role: 'Bachelor of Engineering in Computer Science',
    company: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
    timeInRole: 'July, 2013 - July, 2017',
    location: 'Indore, India',
    isEducation: true,
    responsibilities: `
      <ul>
         <li>Graduated with 7.1/10 CGPA.</li>
         <li>Major Project: Developed an application using AngularJS and Java to check grammar and spellings in text for English language.</li>
      </ul>
    `,
    skills: [],
  },
];

export default data;
