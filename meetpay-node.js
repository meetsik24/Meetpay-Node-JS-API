import axios from 'axios';

// Base URL for the MeetPay API
const BASE_URL = 'https://api.meetpay.africa'; // Correct API URL

class MeetPaySender {
  constructor(apiKey) {
    this.apiKey = apiKey; // Store user's unique API key
  }

  // Create a transaction for a user
  async createTransaction(accountId, buyerDetails, amount, webhookUrl) {
    try {
      const { buyer_name, buyer_phone, buyer_email } = buyerDetails;

      // Ensure required fields are present
      if (!buyer_name || !buyer_phone || !buyer_email || !amount || !accountId || !webhookUrl) {
        throw new Error('Missing required transaction details.');
      }

      // Payload to send
      const data = {
        buyer_name,
        buyer_phone,
        buyer_email,
        amount,
        account_id: accountId,
        api_key: this.apiKey,
        webhook_url: webhookUrl,
      };

      // Make POST request to create transaction
      const response = await axios.post(`${BASE_URL}/transactions/create`, data, {
        headers: {
          'Content-Type': 'application/json', // Sending JSON data
        },
      });

      console.log('Transaction created:', response.data);
      return response.data; // Return API response
    } catch (error) {
      console.error('Error creating transaction:', error.response?.data || error.message);
    }
  }
}