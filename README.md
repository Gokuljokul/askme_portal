# React Portal Docker

This project is a React application that demonstrates the use of React portals to render content outside of the parent component's DOM hierarchy. The application is containerized using Docker, allowing for easy deployment and scalability.

## Project Structure

```
react-portal-docker
├── src
│   ├── App.js
│   ├── components
│   │   └── Portal.js
│   ├── index.js
│   └── styles
│       └── main.css
├── public
│   ├── index.html
│   └── favicon.ico
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/react-portal-docker.git
   cd react-portal-docker
   ```

2. Build the Docker image:

   ```
   docker-compose build
   ```

### Running the Application

To run the application, use the following command:

```
docker-compose up
```

The application will be available at `http://localhost:8084`.

### Project Structure Overview

- **src/App.js**: The main component that renders the application layout and includes the Portal component.
- **src/components/Portal.js**: The Portal component that utilizes React's portal feature.
- **src/index.js**: The entry point of the React application.
- **src/styles/main.css**: CSS styles for the application.
- **public/index.html**: The main HTML file serving the React application.
- **public/favicon.ico**: The favicon for the application.

### Docker Configuration

- **Dockerfile**: Contains instructions to build the Docker image for the React application.
- **.dockerignore**: Specifies files and directories to ignore when building the Docker image.
- **docker-compose.yml**: Defines the services for the Docker application.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.