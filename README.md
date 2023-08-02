This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the repository: git clone https://github.com/Johnlamar316/my-legalease-app.git

Navigate to the project directory: cd my-legalease-app

Install dependencies: npm install

Start the development server: npm start

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Explore the application: The main dashboard page will display company information with tooltips showing previous company names when you hover over the company name. You can click the "Details" button to view more details about each company. The data is loaded from a mock data file (data.js) and the colours for the sectors are mocked as well (getSectorColor function in constants/index.js).
<img src="https://github.com/Johnlamar316/my-legalease-app/blob/main/Screenshot%202023-08-02%20at%2023.34.37.png">
<img src="https://github.com/Johnlamar316/my-legalease-app/blob/main/Screenshot%202023-08-02%20at%2023.34.55.png">

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
