# Discord TypeScript Boilerplate

A modern boilerplate for developing Discord bots using TypeScript, featuring the latest library versions and best practices.

## Features

- Built with TypeScript
- Modern Discord.js implementation
- Command handler structure
- Environment configuration support
- Type-safe development

## Prerequisites

- Node.js 16.x or higher
- npm or yarn
- A Discord bot token

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/discord-ts-boilerplate.git
cd discord-ts-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_TOKEN=your_bot_token_here
```

4. Start the development server:
```bash
npm run dev
```

## Building for Production

To build the project for production:
```bash
npm run build
```

The compiled files will be available in the `dist` directory.

To start the production server:
```bash
npm run start
```
## Project Structure

- `src/`: Source code for the bot.
- `dist/`: Compiled JavaScript files for production.
- `package.json`: Project configuration and dependencies.
- `README.md`: This file.