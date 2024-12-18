const MeetPayClient = require('./index');

// Initialize the MeetPayClient
const client = new MeetPayClient('unique-api-key-123');

(async () => {
  try {
    const buyerDetails = {
      buyer_name: 'William',
      buyer_phone: '0689726060',
      buyer_email: 'william@zeno.co.tz',
    };

    const accountId = 'mp-001';
    const amount = 1000;
    const webhookUrl = 'https://example.com/webhook';

    const response = await client.createTransaction(accountId, buyerDetails, amount, webhookUrl);
    console.log('Transaction created:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();