# Homepage Redesign

## Overview
This project focuses on the redesign of the homepage for a web application. The goal was to enhance user experience, create a more intuitive layout, and ensure responsive design across various devices.

## Rationale
The previous design of the homepage was cluttered and overwhelming, which hindered user engagement. To address these challenges, I implemented several key features:

- **Sidebars and Toggles**: I added sidebars that help organize content into easily navigable sections. The toggle functionality allows users to expand or collapse these sections, minimizing visual clutter while retaining access to all functionalities. This approach ensures that users can find what they need without feeling overwhelmed by too much information at once.

- **Maintaining Core Functionalities**: Throughout the redesign process, I made a concerted effort to keep the core functionalities intact. Users can still access all the features they need, but with a more streamlined and visually appealing interface.

# Validations

This project implements several validations to ensure that user input is appropriate and meets the application's requirements. The following validations are in place for the post submission feature:

1. **Character Limit for Post Text:**
   - The post text must not exceed 250 characters. If it does, an error message will be displayed:
     - *"Post cannot exceed 250 characters."*

2. **Minimum Length for Post Text:**
   - The post text must be at least 5 characters long. If it is shorter, the following error message will be shown:
     - *"Post must be at least 5 characters long."*

3. **Prohibited Words Check:**
   - The application checks for any prohibited words in the post text. If any prohibited word is detected, an error message will appear:
     - *"Your post contains inappropriate content."*

4. **Post Content Validation:**
   - The post cannot be empty. At least one of the following must be provided: text or an attached file. If both are missing, an error message will indicate this:
     - *"Post cannot be empty. Add text or attach a file."*

These validations are implemented in the `MiddleColumn` component to enhance user experience and maintain content quality.

- **Enhanced UI for Clean Aesthetics**: I applied a modern user interface design that emphasizes cleanliness and simplicity. This includes adjusting spacing, typography, and color schemes to create a cohesive look that enhances readability and user experience. The layout is designed to guide the user's eye naturally, ensuring that important content stands out.

- **Responsive Design Adjustments**: The redesign prioritizes responsiveness, ensuring that the homepage functions seamlessly across various devices. Special attention was given to mobile views, allowing users to navigate comfortably without the sidebar, relying on toggles for key information instead.

## Tech Stack
The following technologies were utilized in the redesign:
- **React**: For building the user interface and managing state.
- **React DOM**: For rendering React components into the DOM.
- **Tailwind CSS**: For rapid styling and responsive design, allowing for customization while maintaining a clean look.
- **JavaScript**: As the primary programming language for application logic and interactivity.
- **TypeScript**: For adding type safety to JavaScript, improving code quality and maintainability.
- **React Icons**: For using a variety of icons throughout the application.
- **Date Picker**: For selecting dates in a user-friendly manner.
- **Emoji Icons**: For adding visual appeal and expressiveness to user interactions.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate into the project directory:
```bash
cd <project-directory>

3. npm install


Acknowledgments
Thank you, Makerble, for the opportunity to work on this project!

Conclusion
The redesign of the homepage not only improves aesthetics but also enhances usability, making it easier for users to interact with the application. By maintaining core functionalities while applying a modern UI design, I have created a more appealing and user-friendly experience. The combination of React and Tailwind CSS facilitates a responsive design that meets the diverse needs of today's users.