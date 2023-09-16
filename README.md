# Alter-Games
# Real-Time Quiz Application

A real-time quiz application built using Node.js, Express.js, Socket.IO, and MongoDB. This application allows users to participate in quizzes, join rooms, and compete with each other in real-time.
# Usage
Start the application:
## npm start
Access the lobby by opening a web browser and navigating to http://localhost:3000.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Lobby Module:**
  - Create and join quiz rooms.
  - Accommodate a maximum of two users per room.
  - Dynamically update available rooms.

- **Matchmaking Module:**
  - Join a matchmaking queue to find opponents.
  - Automatically pair users with available opponents.
  - Create new rooms when needed.

- **Gameplay Module:**
  - Real-time quiz questions and answers.
  - Timed questions with a 10-second response window.
  - Scoring system with 10 points for correct answers.

- **Game Conclusion:**
  - End games after five questions or 50 seconds.
  - Broadcast game results to both users.
  - Close and delete rooms after a game concludes.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB installed and running locally or accessible through a connection URL.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-quiz-app.git
