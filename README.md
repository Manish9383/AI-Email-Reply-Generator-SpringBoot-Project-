Email Reply Generator
Overview
The Email Reply Generator is a web-based application designed to automate the generation of professional email replies using AI. It integrates a Spring Boot backend with the Gemini API for natural language processing, a React frontend for a user-friendly interface, and a Chrome extension for seamless Gmail integration. The project aims to save time for users by generating contextually appropriate email responses based on input email content and desired tone.
Features

AI-Powered Reply Generation: Generate email replies using the Gemini API with customizable tones (e.g., professional, casual).
Gmail Integration: A Chrome extension allows users to generate and inject replies directly in Gmail.
User-Friendly Interface: A standalone React web app for reply generation with tone selection.
Fast and Scalable Backend: Built with Spring Boot, ensuring response times under 2 seconds.
Responsive Design: Styled with Material-UI and Tailwind CSS for cross-browser compatibility.

Technology Stack

Frontend: React, Material-UI, Tailwind CSS, Chrome Extension API
Backend: Spring Boot, Java, WebClient, Jackson
AI: Gemini API
Development Tools: Maven, Vite, npm

Installation
Prerequisites

Node.js and npm (for React frontend)
Java 17 and Maven (for Spring Boot backend)
Google Chrome (for the Chrome extension)
Gemini API key (obtain from the Gemini API provider)

Steps

Clone the Repository:
git clone https://github.com/Manish9383/AI-Email-Reply-Generator-SpringBoot-Project.git
cd AI-Email-Reply-Generator-SpringBoot-Project


Backend Setup (Spring Boot):

Navigate to the backend directory:cd backend


Configure the Gemini API key in application.properties:gemini.api.key=your-api-key-here


Build and run the Spring Boot application:mvn clean install
mvn spring-boot:run


The backend will run on http://localhost:8080.


Frontend Setup (React):

Navigate to the frontend directory:cd frontend


Install dependencies and start the React app:npm install
npm run dev


The frontend will run on http://localhost:5173 (or the port specified by Vite).


Chrome Extension Setup:

Navigate to the Chrome extension directory:cd chrome-extension


Load the extension in Chrome:
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" (top right).
Click "Load unpacked" and select the chrome-extension folder.


The extension will appear in Gmail, adding an "AI Reply" button.



Usage

Standalone Web App:

Open the React app at http://localhost:5173.
Input the email content and select a tone (e.g., professional, casual).
Click "Generate Reply" to view the AI-generated response.
Copy the reply to use in your email client.


Gmail Integration:

Open Gmail in Chrome with the extension installed.
While composing or replying to an email, click the "AI Reply" button (added by the extension).
Input the desired tone, and the extension will fetch a reply from the backend and inject it into the email draft.



Project Structure

backend/: Spring Boot application with REST API and Gemini API integration.
frontend/: React web app for standalone reply generation.
chrome-extension/: Chrome extension for Gmail integration.
docs/: Project report and diagrams (DFD, architecture diagram).



Screenshots

React UI: (To be added - placeholder for UI.png)  
Gmail Integration: (To be added - placeholder for Email Integrated.png)

Future Scope

Add support for multiple languages in reply generation.
Integrate with other email clients (e.g., Outlook).
Enable offline reply generation capabilities.



Contributing
Contributions are welcome! Please fork the repository, create a branch, and submit a pull request with your changes. Ensure to follow the coding standards and include tests where applicable.
License
This project is licensed under the MIT License - see the LICENSE file for details.
