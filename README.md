# ChatterBot

ChatterBot is a Next.js application that utilizes OpenAI's powerful language processing capabilities to create an interactive chatbot experience. This README provides an overview of the project structure, how to set it up, and basic usage instructions.

![Image of Chatterbot](https://github.com/greyfoks/chatterbot/blob/master/images/chatterbot.PNG?raw=true)

## Features

- **Interactive Chat Interface**: Users can engage in conversations with the ChatterBot.
- **Powered by OpenAI**: Utilizes OpenAI's language processing models for natural and contextually relevant responses.
- **Next.js Framework**: Built with Next.js for server-side rendering and optimized performance.

## Prerequisites

Before running this application, ensure you have the following installed on your local machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- OpenAI API key (sign up at [OpenAI](https://openai.com))

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/chatterbot.git
   ```

2. Navigate into the project directory:

   ```bash
   cd chatterbot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory of the project and add your OpenAI API key:

   ```bash
   OPENAI_API_KEY=your-api-key-here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser to interact with the ChatterBot.

## Usage

Once the application is running, you can engage in conversations with the ChatterBot through the provided interface. Type your messages in the input field and press enter to send them. The bot will respond with contextually relevant replies generated by OpenAI's language models.

## Deployment

To deploy this application to a production environment, you can use various hosting platforms like Vercel, Netlify, or deploy it to your own server. Ensure to set up environment variables containing your OpenAI API key in your deployment environment.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance the functionality or fix any bugs.

## Acknowledgments

- The ChatterBot application is powered by OpenAI's language models.
- This project was built with Next.js, a fantastic framework for React applications.
