const axios = require('axios');

class MeetPayClient {
  /**
   * Initialize MeetPayClient
   * @param {string} apiKey - User's unique API key.
   * @param {string} baseUrl - Base URL of the MeetPay API (default: https://api.meetpay.africa).
   */
  constructor(apiKey, baseUrl = 'https://api.meetpay.africa') {
    if (!apiKey) {
      throw new Error('API key is required to initialize MeetPayClient.');
    }
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Create a transaction.
   * @param {string} accountId - User's MeetPay account ID.
   * @param {Object} buyerDetails - Buyer details including name, phone, and email.
   * @param {number} amount - Transaction amount.
   * @param {string} webhookUrl - Webhook URL for transaction updates.
   * @returns {Promise<Object>} - Response from the API.
   */
  async createTransaction(accountId, buyerDetails, amount, webhookUrl) {
    if (!accountId || !buyerDetails || !amount || !webhookUrl) {
      throw new Error('Missing required transaction details.');
    }

    const { buyer_name, buyer_phone, buyer_email } = buyerDetails;

    if (!buyer_name || !buyer_phone || !buyer_email) {
      throw new Error('Incomplete buyer details.');
    }

    const payload = {
      buyer_name,
      buyer_phone,
      buyer_email,
      amount,
      account_id: accountId,
      api_key: this.apiKey,
      webhook_url: webhookUrl,
    };

    try {
      const response = await axios.post(`${this.baseUrl}/transactions/create`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`API Error: ${error.response.data.error || error.response.statusText}`);
      }
      throw new Error(`Network Error: ${error.message}`);
    }
  }
}

module.exports = MeetPayClient;