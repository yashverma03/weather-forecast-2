## Links

- [Deployed link (frontend)](https://weather-forecast-2-b623.onrender.com)
- [Postman API collection](https://www.postman.com/yashverma03/weather-forecast-2/overview)

## Description

- Created a weather forecast application using openweathermap API
- Tech: TypeScript, ReactJS, Tailwind CSS, openweathermap API

1. Default current weather (New York)
   ![image](https://github.com/user-attachments/assets/17b08690-b846-41c0-8dd6-9157e7890dc2)
2. Default future weather forecasts (New York)
   ![image](https://github.com/user-attachments/assets/11db8456-66c4-438f-97c5-2ea3475e4319)
3. Dropdown search options
   ![image](https://github.com/user-attachments/assets/8c6295d3-9454-4831-b3b1-f8c321840076)
4. Selecting a city from search options
   ![image](https://github.com/user-attachments/assets/64d3c506-d7e1-4f1a-afa3-cc2665f96363)
5. Converting from Celsius to Fahrenheit
   ![image](https://github.com/user-attachments/assets/638cef08-d3bc-4dcf-b37a-8c27472127a5)

## Requirements

1. Weather Data Display (React.js Basics & Componentization)

- Displays the current weather for a default city (New York)
- Uses the openweathermap API to fetch the weather data
- Displays the city name, temperature, weather condition and weather icon

2. City Search (API Integration & Custom Components)

- Allows the user to search for a city
- Displays the search results in a dropdown
- Uses the openweathermap API to fetch the search results
- Error handling when the city is not found

3. Five-Day Forecast (Data Manipulation & Component Reuse)

- Displays the five-day weather forecast using Forecast component
- For each day, displays the date, high and low temperatures and weather icon

4. Temperature Unit Conversion (Logical Reasoning & State Management)

- Add a toggle button to switch between Celsius and Fahrenheit
- Add custom function (`getTemperature`) to get the temperature value, after converting the temperature from Celsius to Fahrenheit
- Uses React state to manage the temperature unit and update the displayed temperatures accordingly

5. Styling and UI (React.js UI Skills & Responsive Design)

- Used Tailwind CSS for styling
- Add styles for loading state, error state and empty state
- Responsive design for mobile and desktop

6. Bonus Challenge (Advanced Skills - Optional)

- Implement caching to store the weather data for a city (latitude and longitude)
- Add a pull-to-refresh button to refetch the latest weather data
- Add performance optimizations
  - Lazy loading for pages and components
  - Debouncing for search input
  - Loading state for pull-to-refresh button, to prevent multiple API requests
  - React context (`useTemperature`) to prevent props drilling

## Installation

### Frontend

- Requirements- Node.js
- Create a .env file in frontend folder (refer to [.env.example](./frontend/.env.example))
- Open terminal in the project root directory and run the following commands:
  ```bash
  cd ./frontend
  ```
  ```bash
  npm ci
  ```
  ```bash
  npm start
  ```
