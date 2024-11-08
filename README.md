# Talktime App

## Overview
Talktime App is a web application designed to facilitate seamless communication between users. It offers features such as video conferencing and instant messaging.

## Features
- **Video Conferencing**: Conduct video meetings with up to 25 participants.
- **Instant Messaging**: Send and receive messages in real-time.
- **User Authentication**: User login and authentication system.

## Installation
To get started with the Talktime App, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Taher-Chabra/talktime-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd talktime-app
   ```
3. Install pnpm (if not already installed):
   ```bash
   npm install -g pnpm
   ```
4. Install dependencies:
   ```bash
   pnpm install
   pnpm postinstall
   ```
5. Initialize and update the submodule server:
   ```bash
   git submodule update --init --recursive
   ```
6. Add environment variables:
   - Create a `.env` file in the root directory and add the necessary variables.
   - Create a `.env` file in the `server` directory and add the necessary variables.
7. Run client on port 3000:
   ```bash
   pnpm client
   ```
8. Run server on port 5100:
   ```bash
   pnpm server
   ```

## Usage
Once the server is running, open your browser and navigate to `http://localhost:3000` to start using the Talktime App.

## Contributing
We welcome contributions to improve the Talktime App. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact at [Taher Chabra](mailto:taher.chabra09@gmail.com).
