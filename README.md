<!-- TABLE OF CONTENTS -->
<details id="table">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
      <ul>
        <li><a href="#tech-and-libraries">Technologies and libraries</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Introduction

A full-stack, mobile-first Next.js portfolio application designed to allow users to add their personal information (full name, brief description, and professional skills) and the projects they have worked on in the past, through an admin page. The design, including fonts, colors, and some element shapes, is inspired by <a href="https://www.moveagency.com/en">Move Agency</a>.

Premise n.1: Being a simple CRUD application with no super complex features, the array of technologies used might appear overkill and it probably is. Though, while extensive typing and data validation using React Hook Form and Zod may seem unnecessary, this setup ensures that the project is ready for future expansions. Code quality and predictability are fundamental, especially in full-stack applications.

Techniques such as:

- using TypeScript + React Hook Form + Zod to ensure a smooth development experience regarding form handling and data validation, also with the benefit of having types and UI errors directly inferred from the defined schemas;

- utilizing a global styling theme to ensure look and feel consistency across the application and leveraging Emotion variables and functions (e.g. the mediaQueries utility) to make the code more readable and maintainable;

- Abstracting asynchronous @tanstack/query logic with custom hooks to avoid "useEffect hell" and semplify the process of fetching and updating data from the client;

surely are some good practices to go in the right direction.

Premise n.2:
Despite using Next.js 14.2.5, the application still leverages the pages router instead of the new app router, because of some <a href="https://nextjs.org/docs/app/building-your-application/styling/css-in-js">limitations and lack of support with Emotion and styled-components</a>.

Premise n.3: All the pages (Home, About, and Admin) are generated
statically at build time using the Next.js Static Site Generation (SSG) feature. Considering the nature of this portfolio application, there was no need to implement a heavy server-side rendering (SSR) solution.

### Tech and libraries

This section should list any major frameworks/libraries used to develop the application.

- <a href="https://nextjs.org/">Next.js</a>
- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://tanstack.com/query/v4/docs/react/overview">TanStack Query</a>
- <a href="https://emotion.sh/docs/introduction">Emotion</a>
- <a href="https://zod.dev/">Zod</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://jestjs.io/">Jest</a>
- <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a>

<!-- GETTING STARTED -->

## Getting Started

To get a local version up and running download these dependencies and follow the nextsteps:

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)
- npm (>= 6.x)

### Installation

1. Clone the repository from GitHub

```sh
git clone https://github.com/GraMya96/nextjs-portfolio-app.git
```

2. Install needed NPM packages

```sh
npm install
```

3. Create a MongoDB instance on your local machine (you can use <a href="https://www.mongodb.com/try/download/community">MongoDB Compass</a> or any other tool of your choice) and save the Connection String URI; you will need it in the next step.

4. Create a .env.local file in the root directory and add the following variables:

- CLIENT_URL=\_your-client-url\*
- MONGODB_URI=\_your-mongodb-uri\*

5. Run the application, making sure that MongoDB is running locally

```sh
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

7. To run component testing, run the following command:

```sh
npm run test
```

<p align="right">(<a href="#table">back to top</a>)</p>
