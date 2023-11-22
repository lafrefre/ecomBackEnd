# E-Commerce Back End

This repository contains the back end for an e-commerce website. The application uses Express.js for the API and Sequelize to interact with a MySQL database. The primary goal is to provide a foundation for managing categories, products, and tags within an e-commerce platform.

## Project Status

⚠️ **Important Note:** This codebase has been left unfinished due to time constraints, and there are incomplete features and functionalities. The existing code provides a starting point but lacks the full implementation. We plan to continue development in later updates.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Configure the MySQL database by providing the necessary information in the `.env` file.
4. Run the schema.sql file in the db folder to create the required database using MySQL shell commands.


mysql -u your_username -p
source db/schema.sql;

1. Seed the database with test data using npm run seed.

2. Start the server using npm start.

## Usage

This application aims to provide basic API routes for managing categories, products, and tags. However, please note that not all routes and functionalities have been fully implemented. Feel free to explore the existing code and contribute to its completion.

## Roadmap

The following features and improvements are planned for future updates:

Complete the implementation of API routes for categories, products, and tags.
Implement full CRUD operations for managing data in the database.
Enhance error handling and validation in the API routes.
Improve the structure and organization of the codebase.
Your contributions are welcome! If you find issues or have ideas for improvements, please feel free to open an issue or submit a pull request.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and submit a pull request.
Thank you for your interest in contributing!

## License
This project is licensed under the MIT License.