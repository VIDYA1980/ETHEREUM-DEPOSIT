
# ETH Deposit Tracker

## Overview

The **ETH Deposit Tracker** is an application designed to monitor and record ETH deposits on the Beacon Deposit Contract. The application tracks deposit events, stores the data in MongoDB, and provides visualization of deposit metrics using MongoDB Charts.

## Features

- **Real-time Monitoring:** Listens for deposit events on the Beacon Deposit Contract.
- **Data Storage:** Saves deposit details in MongoDB.
- **Visualization:** Uses MongoDB Charts to visualize deposit data.
- **Error Handling:** Comprehensive logging and error handling.
- **Optional Notifications:** (Optional) Integrates Telegram notifications for new deposits.

## Prerequisites

- **Node.js:** Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **MongoDB Atlas:** Set up a MongoDB Atlas cluster. [Create a MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- **Telegram Bot:** (Optional) Create a Telegram bot if you want notifications. [Create a Telegram Bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## Setup

### 1. Clone the Repository

```sh
git clone https://github.com/VIDYA1980/luganodes-task
cd hihello
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Create and Configure `.env` File

Create a `.env` file in the root of your project directory with the following content:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/your_database?retryWrites=true&w=majority
ALCHEMY_API_URL=https://eth-mainnet.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

Replace the placeholders with your actual MongoDB Atlas connection string, Alchemy API key, Telegram bot token, and chat ID.

### 4. Start the Application

```sh
node index.js
```

The application will start and begin listening for deposit events.

## MongoDB Charts Setup

1. **Access MongoDB Atlas Dashboard:**
   - Go to your MongoDB Atlas dashboard.
   - Navigate to the “Data” tab.

2. **Create a Chart:**
   - Click on “Charts” in the sidebar.
   - Create a new dashboard and add charts to visualize the deposit data.

3. **Add Data Source:**
   - Select the database and collection where your deposit data is stored.
   - Configure charts to display metrics such as total deposits, deposit trends, and other relevant information.

## Usage

- **Deposit Tracking:** The application listens for deposit events on the Beacon Deposit Contract and saves relevant data to MongoDB.
- **Data Visualization:** Use MongoDB Charts to view and analyze deposit trends and metrics.
- **Notifications:** If configured, receive notifications via Telegram when new deposits are detected.

## Examples

### Example Deposit Data

```json
{
  "blockNumber": 12345678,
  "blockTimestamp": "2024-09-01T12:34:56Z",
  "fee": "1.234",
  "hash": "0xabcdef1234567890",
  "pubkey": "0x1234567890abcdef"
}
```

### Example Chart Configurations

- **Total Deposits Over Time:** Line chart showing the number of deposits per day.
- **Deposit Amount Distribution:** Bar chart displaying the distribution of deposit amounts.
- ![Vidya's Dashboard](https://github.com/user-attachments/assets/e51985c5-bb93-4109-bfe0-8bfa3407c13c)


## Error Handling and Logging

- Errors are logged to the console and can be monitored for troubleshooting.
- Ensure proper handling of RPC errors and connection issues.

## Contribution

Feel free to contribute to the project by submitting issues, pull requests, or suggestions. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact:

- **Author:** [VIDYA](https://github.com/VIDYA1980)
- **Email:** vidyaa265@gmail.com.
