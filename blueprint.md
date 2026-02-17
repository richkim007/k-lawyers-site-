# Pyeongwon Law Firm - Hybrid AI Platform Blueprint

## **1. Project Overview**

This document outlines the development plan for a cutting-edge web platform for Pyeongwon Law Firm. The platform will serve as a digital extension of the firm's expertise, showcasing its unique "Hybrid AI" approach that combines veteran legal insight with powerful artificial intelligence. The primary goal is to establish Pyeongwon as a technology-driven leader in the legal-tech space, attracting high-value clients in finance and real estate.

The design will be authoritative and sophisticated, using a "Midnight Blue" and "Gold" color scheme to convey trust and value. The user experience will be seamless, guiding visitors through the firm's core competencies and unique AI-driven service offerings.

## **2. Core Features & Implemented Design**

### **Design & Aesthetics**
*   **Color Palette**:
    *   `--midnight-blue`: #001F3F (Primary background, conveying seriousness and trust)
    *   `--gold`: #D4AF37 (Accent color for headlines, buttons, and key elements, symbolizing value and prestige)
    *   `--light-gray`: #F5F5F5 (For text and secondary backgrounds)
*   **Typography**:
    *   **Headlines**: Serif font (e.g., 'Garamond', 'Times New Roman') for a classic, trustworthy feel.
    *   **Body Text**: Sans-serif font (e.g., 'Roboto', 'Open Sans') for excellent readability.
*   **Layout**: Modern, responsive layout using Flexbox and Grid. A clean, spacious design that is mobile-first.
*   **Visuals**:
    *   A hero section with a powerful background image or abstract graphic that represents the fusion of law and technology.
    *   High-quality professional headshots for the key personnel.
    *   Custom icons to represent the different service areas and features.

### **Implemented Sections & Functionality**
*   **Header & Navigation**: A sticky header with the firm's logo and navigation links to key sections (Home, Expertise, Centaur Doctrine, Contact).
*   **Hero Section**: A compelling headline like "The Future of Law: Where Human Insight Meets AI Precision." with a call-to-action button.
*   **Expertise Matrix (Authority Section)**:
    *   Dedicated cards for **Son Tae-geun** (Criminal/Investigation) and **Kim Min-soo** (Finance/RealEstate).
    *   Each card details their extensive experience and explicitly states the "AI Nexus" - how AI amplifies their expertise.
*   **Pyeongwon Centaur Doctrine**:
    *   A visually engaging section explaining the 5-step workflow.
    *   This will be represented as a dashboard-like UI or an infographic to clearly illustrate the synergy between human experts and AI.
*   **Digital Doctrine (Core Features)**:
    *   **Precision Guided Research**: A UI mockup of the tool, emphasizing its reliance on trusted government sources to prevent AI "hallucination."
    *   **Client Care Automation**: A feature demonstration where users can input (or see an example of) complex legal text and receive a simplified, AI-generated summary.
*   **Contact & Consultation Form**: A simple, elegant form for potential clients to request a consultation.

## **3. Technical Stack**

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+ Modules)
*   **Backend & Hosting**: Firebase (Hosting, Firestore for form submissions)
*   **Analytics**: Google Analytics 4 (GA4) and Microsoft Clarity for user behavior tracking. **(Note: Awaiting `GA_MEASUREMENT_ID` and `CLARITY_PROJECT_ID` from the user after domain setup).**

## **4. Current Development Plan: Initial Build**

The following steps will be executed to create the initial version of the website.

1.  **Create `index.html`**: Structure the entire website with semantic HTML, including all sections outlined above.
2.  **Create `style.css`**:
    *   Implement the Midnight Blue and Gold color scheme with CSS Variables.
    *   Apply the specified typography.
    *   Style all sections, ensuring a responsive, mobile-first design.
    *   Create the card layout for the "Expertise Matrix."
    *   Design the "Centaur Doctrine" workflow visualization.
3.  **Create `main.js`**:
    *   Add placeholder code for Firebase initialization.
    *   Implement smooth scrolling for navigation links.
    *   Add interactivity to the "Client Care Automation" summarizer tool.
    *   Handle the submission logic for the contact form (connecting to Firestore).
4.  **Integrate Analytics**: Add the tracking scripts for GA4 and Clarity to `index.html`.
5.  **Configure Firebase**: Set up the necessary Firebase configuration files (`.firebaserc` and `firebase.json`) for hosting and add firebase to `mcp.json`.
