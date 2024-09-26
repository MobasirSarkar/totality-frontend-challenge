🚀 Quick Start

🐳 Get Started with Docker

Just install Docker on your platform – it’s a simple development Dockerfile (not a multi-stage production build).
Then, run the following command to start the project:

bash

docker compose up --build -d

🔑 Add your Environment Variables

Make sure to create a .env file in the root directory and add the following:

bash

```
AUTH_SECRET=YOUR_AUTH_SECRET
AUTH_GOOGLE_ID=YOUR_GOOGLE_ID
AUTH_GOOGLE_SECRET=YOUR_GOOGLE_SECRET
```

🛠 Tech Stack

    Web Framework: Next.js
    Language: TypeScript
    CSS Library: TailwindCSS
    Styling Tools: Shadcn UI, Aceternity UI
