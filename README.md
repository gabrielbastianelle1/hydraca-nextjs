This is a [Next.js](https://nextjs.org/) project made by Gabriel Bastianelle and Maria Vivian.

## Getting Started

### Pre-requisits:

-   You need a mongodb server running localy on port 27017

First, install the dependencies:

```bash
npm install
```

Then, run the application:

- If you want to run just on you computer:

```bash
npm run dev
```

- If you want to run locally in the network to access from a mobile device:
    * change de ulr in the file: services/host.js
        ![](readme/Captura%20de%20tela%20de%202022-12-21%2013-20-47.png)
    * run the next command instead

```bash
npx next dev -H (your ipv4 adress)
```



Open [http://localhost:3000](http://localhost:3000) with your browser and have fun with Hydraca.

![Hydraca.](/readme/hydraca.gif 'Hydraca')
