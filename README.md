# React CRM Server

This repository contains the server-side code for a CRM (Customer Relationship Management) system. The server is designed to manage and serve customer data, handle authentication, and interact with the client-side React application.

## Features

- **Customer Management:** Add, view, edit, and delete customer records.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Secure Authentication:** Uses JWT for user authentication and authorization.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Git**
- **AWS CLI** (for deployment and management of EC2)
- **Database (e.g., MongoDB, PostgreSQL)** - ensure the database is configured and accessible.

## Installation

1. **Clone the Repository:**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/raja-taha/crm-server.git

2. **Navigate to the Project Directory:**

   ```bash
   cd crm-server

3. **Install Dependencies:**

   Install the required npm packages by running:

   ```bash
   npm install

## Environment Variables

   The application requires certain environment variables to be set. These can be defined in a .env file in the root directory:
   ```bash
   PORT=8000
   DATABASE_URL=mongodb://localhost:27017/crm
   JWT_SECRET=your_jwt_secret_key
   ```

## Running the Application

To run the application locally:

1. **Start the Development Server:**

   Run the following command to start the development server:

   ```bash
   npm start
   ```

   The server will be accessible at http://localhost:8000 by default. You can change the port by modifying the PORT environment variable.
