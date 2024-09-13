**Daily News** is a sophisticated news application developed with React.js, designed to provide users with the latest global news through the GNews public API. By utilizing React.js, the app offers a responsive and intuitive interface that adjusts seamlessly across various devices.

![image](https://github.com/user-attachments/assets/6f9f57c7-2e48-4bd6-a5b3-372c809cbaf3)


Upon starting Daily News, users encounter a streamlined layout where news articles are organized into categories such as World, Business, Technology, Health, and Entertainment. This organization facilitates easy browsing and ensures users can quickly find articles that pique their interest. React’s component-based architecture allows for reusable and consistent UI elements throughout the application, enhancing development efficiency and maintainability.

The core functionality of Daily News revolves around its integration with the GNews API. React’s `useEffect` and `useState` hooks are utilized to manage API data fetching and state updates. This setup ensures that the news feed remains current with the latest articles without requiring page reloads.

Additional features include a search function and filtering options, allowing users to find specific news topics or keywords and filter results by date or relevance. These interactive features are implemented using React’s controlled components and state management practices, offering a responsive and engaging user experience.

For robust application performance, Daily News incorporates error handling and loading indicators to manage asynchronous API requests, ensuring users are kept informed of any issues with data retrieval or network connectivity.

### Testing and Running Steps

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/neeraj542/acowale-news.git
   cd acowale-news
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and add your GNews API key:
   ```plaintext
   REACT_APP_GNEWS_API_KEY=your_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run Tests**:
   ```bash
   npm test
   # or
   yarn test
   ```

6. **Build for Production**:
   ```bash
   npm run build
   # or
   yarn build
   ```

### Additional Notes

- Ensure the API key in your `.env` file is kept confidential and not shared or committed to version control.
- For any issues or feature requests, consult the GitHub repository or contact the development team.

Daily News combines React.js’s powerful features with the comprehensive GNews API to deliver an efficient and user-centric news application, keeping users well-informed with the latest updates.
