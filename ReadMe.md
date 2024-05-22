# E-Commerce Platform

This project is a simple e-commerce platform backend built with Node.js, Express, and MongoDB. The primary functionality includes adding items to a cart and updating the cart total.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [File Processing](#file-processing)
- [Directory Structure](#directory-structure)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ecommerce-platform.git
    cd ecommerce-platform
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Ensure MongoDB is installed and running on your machine.

## Usage

1. Start the MongoDB server:

    ```bash
    mongod
    ```

2. Start the Node.js server:

    ```bash
    node server.js
    ```

3. The server will be running on `http://localhost:3000`.

## API Endpoints

### Add to Cart

- **URL**: `/api/add-to-cart`
- **Method**: `POST`
- **Body Parameters**:
  - `itemId` (string): The ID of the item.
  - `price` (number): The price of the item.
  - `quantity` (number): The quantity of the item.

#### Example Request

```json
{
    "itemId": "item1",
    "price": 100,
    "quantity": 2
}
