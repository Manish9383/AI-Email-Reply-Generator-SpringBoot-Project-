# **Email Reply Generator**

## 📖 Overview
The Email Reply Generator is a web-based application that automates the creation of professional email replies using AI. It features a Spring Boot backend with Gemini API integration for natural language processing, a React frontend for a user-friendly interface, and a Chrome extension for seamless Gmail integration. This project helps users save time by generating contextually appropriate email responses based on input content and desired tone.

## ✨ Features
- **AI-Powered Replies**: Generate email replies with customizable tones (e.g., professional, casual) using the Gemini API.  
- **Gmail Integration**: Chrome extension to generate and inject replies directly in Gmail.  
- **User-Friendly UI**: Standalone React app for reply generation with tone selection.  
- **Fast Backend**: Spring Boot ensures response times under 2 seconds.  
- **Responsive Design**: Styled with Material-UI and Tailwind CSS for cross-browser compatibility.  

## 🛠️ Technology Stack
**Frontend**: React, Material-UI, Tailwind CSS, Chrome Extension API  
**Backend**: Spring Boot, Java, WebClient, Jackson  
**AI**: Gemini API  
**Tools**: Maven, Vite, npm  

## 🚀 Installation

### Prerequisites
- Node.js and npm (for React frontend)  
- Java 17 and Maven (for Spring Boot backend)  
- Google Chrome (for the Chrome extension)  
- Gemini API key (obtain from the Gemini API provider)  

## Steps

# Clone the Repository:
git clone https://github.com/Manish9383/AI-Email-Reply-Generator-SpringBoot-Project.git
cd AI-Email-Reply-Generator-SpringBoot-Project


# Backend Setup (Spring Boot):

Navigate to the backend directory:cd backend


# Configure the Gemini API key in application.properties:gemini.api.key=your-api-key-here


Build and run the backend:mvn clean install
mvn spring-boot:run


The backend runs on http://localhost:8080.


# Frontend Setup (React):

Navigate to the frontend directory:cd frontend


Install dependencies and start the app:npm install
npm run dev


The frontend runs on http://localhost:5173 (or the port specified by Vite).


# Chrome Extension Setup:

Navigate to the Chrome extension directory:cd chrome-extension


Load the extension in Chrome:
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" (top right).
Click "Load unpacked" and select the chrome-extension folder.


The extension will add an "AI Reply" button in Gmail.



## 📋 Usage
Standalone Web App

Open the React app at http://localhost:5173.
Input the email content and select a tone (e.g., professional, casual).
Click "Generate Reply" to view the AI-generated response.
Copy the reply to use in your email client.

## Gmail Integration

Open Gmail in Chrome with the extension installed.
While composing or replying to an email, click the "AI Reply" button.
Select the desired tone, and the extension will fetch and inject the reply into your email draft.

## 📂 Project Structure

backend/: Spring Boot application with REST API and Gemini API integration.
frontend/: React web app for standalone reply generation.
chrome-extension/: Chrome extension for Gmail integration.
docs/: Project report and diagrams (DFD, architecture diagram).



## 📸 Screenshots

![Screenshot 2025-05-02 144109](https://github.com/user-attachments/assets/39764df2-a926-4e1a-85fa-543140ac4262)


![Screenshot 2025-05-02 144511](https://github.com/user-attachments/assets/8afccc17-1a81-4303-817c-29b55a32de96)

## 🔮 Future Scope

Support for multiple languages in reply generation.
Integration with other email clients (e.g., Outlook).
Offline reply generation capabilities.



## 🤝 Contributing
Contributions are welcome! Fork the repository, create a branch, and submit a pull request with your changes. Please follow the coding standards and include tests where applicable.
