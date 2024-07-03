
# Express Weather App

This is a simple Express.js application that fetches the client's IP address, determines their location using a geolocation API, and then fetches the current temperature for that location using the OpenWeatherMap API. The application responds with a greeting that includes the visitor's name and the current temperature in their location.

## Getting Started

### Prerequisites

- Node.js
- npm (Node package manager)
- An OpenWeatherMap API key

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:
    ```bash
    apiKey=YOUR_OPENWEATHERMAP_API_KEY
    PORT=8000 # Optional: specify a port, defaults to 8000
    ```

### Usage

Start the server:
```bash
node app.js
```

The server will start running on the port specified in the `.env` file (default is 8000). You can access the application by navigating to `http://localhost:8000` in your web browser.

### Endpoints

- `GET /`: This endpoint accepts an optional query parameter `visitor_name`. It returns a JSON response with the client's IP address, location, and a greeting message that includes the visitor's name and the current temperature in their location.

Example request:
```bash
curl "http://localhost:8000/?visitor_name=John"
```

Example response:
```json
{
  "client_ip": "203.0.113.1",
  "location": "New York",
  "greeting": "Hello, John! The temperature is 25 degrees Celsius in New York."
}
```

### Error Handling

If the server is unable to fetch the data from the geolocation or weather API, it will respond with a status code of 400 and a JSON error message:
```json
{
  "error": "Unable to fetch data"
}
```

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Axios](https://github.com/axios/axios) - Promise-based HTTP client
- [dotenv](https://github.com/motdotla/dotenv) - Module to load environment variables from a `.env` file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
