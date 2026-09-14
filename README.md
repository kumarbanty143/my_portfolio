# Himanshu Kumar Patra — Portfolio

The source for [himanshukumarpatra.info](https://himanshukumarpatra.info/), a focused portfolio for my backend and full-stack engineering work.

## What the site presents

- Selected personal work: Nexus Cloud Commerce, Splitwise MVP, and this portfolio.
- Production experience with Node.js, TypeScript, React, MySQL, Redis, REST APIs, and AWS.
- Java, Spring Boot, Spring Data JPA, Kafka, and Docker as technologies I am actively developing through personal projects.
- Experience at Vedak and volunteer work with Zigbee Student Developers’ Club.
- Trek leadership with Tripbae and my interest in photography and cinematography.

The content intentionally distinguishes production experience from technologies I am learning.

## Local development

Requires a current Node.js release supported by Vite.

```sh
npm install
npm run dev
```

Open [http://localhost:5143](http://localhost:5143).

## Checks

```sh
npm run typecheck
npm run build
```

## Stack

React, TypeScript, Vite, and custom responsive CSS. The project avoids a runtime UI framework and external data requests so the first render remains small and predictable.

## Deployment

The domain currently points to the deployed portfolio. The repository includes GitHub Pages workflows, and it can also be deployed to services such as Netlify or Vercel using:

- Build command: `npm run build`
- Publish directory: `dist`

## Credits

This repository started from the open-source [GitProfile](https://github.com/arifszn/gitprofile) project by Ariful Alam. The current portfolio replaces the template’s data-driven interface with a custom design and content structure. The original MIT license is retained in [LICENSE](LICENSE).
