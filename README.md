# SNHU-CS-465
The frontend development in my full stack project included a combination of Express HTML, JavaScript, and an Angular-based Single Page Application (SPA). Express HTML was used to structure the customer-facing website, incorporating Handlebars (HBS) templating for rendering dynamic content. JavaScript played a key role in enhancing interactivity, handling user events, and managing API requests. The SPA, built using Angular, provided a more seamless experience for the administrative side by dynamically updating content without requiring full-page reloads. Unlike traditional multi-page applications, the SPA allowed for faster interactions and a more efficient user experience by keeping users engaged within a single interface while dynamically fetching and updating data as needed.

The backend used a NoSQL MongoDB database because it is well-suited for handling dynamic and unstructured data, which is common in web applications. MongoDB stores data in a flexible JSON-like format, making it easy to scale and modify as the project requirements evolve. Unlike relational databases, which require predefined schemas and structured relationships, MongoDB allows for more adaptability, particularly in applications with frequently changing data structures. Additionally, MongoDB integrates well with Node.js and Express, streamlining the development process and improving performance for handling large amounts of data.

JSON (JavaScript Object Notation) differs from JavaScript in that it is a lightweight data format used for exchanging information between a server and a client. While JavaScript is a programming language used for executing logic within the application, JSON is a data-interchange format that allows for easy communication between the frontend and backend. In the full stack application, JSON played a critical role in connecting the frontend and backend by allowing Angular to send structured data requests to the Express server, which then interacted with the MongoDB database. The server responded with JSON data that Angular processed and displayed dynamically in the UI.

During the development process, I refactored code to improve functionality and efficiency. One instance was restructuring the API endpoints to separate concerns by implementing controllers in Express, which improved code organization and maintainability. Additionally, reusable UI components in Angular allowed for a more modular approach to frontend development. For example, creating reusable form components for login and trip management reduced redundancy and improved maintainability. The benefit of this approach was that updates and fixes only needed to be applied to a single component rather than multiple instances throughout the application, making development more efficient and scalable.

API testing was crucial in ensuring the application functioned correctly, especially when dealing with user authentication and data retrieval. Methods in the API defined how the application handled requests and responses, such as GET for retrieving data, POST for creating new entries, and PUT for updating records. Endpoints were designed to interact with the MongoDB database while maintaining security. Authentication added complexity to testing since secure endpoints required proper token-based authorization. Using Postman, I tested API requests to ensure that data was being fetched and modified correctly while verifying that unauthorized requests were blocked. Security layers such as JSON Web Tokens (JWT) ensured that only authenticated users could access restricted areas of the admin panel.

This course has helped me build a solid understanding of full stack web development, reinforcing both frontend and backend skills. It has improved my ability to design scalable web applications, work with APIs, and implement authentication mechanisms. By mastering tools like MongoDB, Express, Angular, and Node.js, I have become more confident in working with modern web development frameworks. Additionally, the hands-on experience with API testing and security has strengthened my ability to build secure applications, which is valuable in any development role. Overall, this course has contributed to my professional growth by giving me the practical experience needed to develop, test, and deploy full stack applications, making me a more competitive candidate in the field of software development.
