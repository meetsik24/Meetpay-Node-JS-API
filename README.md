# MeetPay Node.js Library

A simple and lightweight Node.js library for interacting with the MeetPay API. This library provides methods to create transactions and manage payment-related interactions with MeetPay.

## Features
	•	Create transactions with buyer details, account ID, and webhook URL.
	•	Configurable API key and endpoint.
	•	Handles API and network errors gracefully.
	•	Lightweight and easy to use.


## Installation

Install the package using npm:
```bash
npm install meetpay-node
```
## Usage

Initialize the Client
```bash
const MeetPayClient = require('meetpay-node');

// Initialize the MeetPayClient with your API key
const client = new MeetPayClient('your-api-key');
```

Create a Transaction

To create a transaction, use the createTransaction method. Provide the buyer details, account ID, transaction amount, and a webhook URL.

```bash
(async () => {
  try {
    const buyerDetails = {
      buyer_name: 'William',
      buyer_phone: '0689726060',
      buyer_email: 'william@zeno.co.tz',
    };

    const accountId = 'mp-001'; // The user's MeetPay account ID
    const amount = 1000; // Transaction amount
    const webhookUrl = 'https://example.com/webhook'; // URL to receive transaction updates

    const response = await client.createTransaction(accountId, buyerDetails, amount, webhookUrl);
    console.log('Transaction created:', response);
  } catch (error) {
    console.error('Error creating transaction:', error.message);
  }
})();
```
## Example Response
On success, the createTransaction method will return:
```bash
{
  "message": "Transaction created successfully",
  "transactionId": "tr-001"
}
```
On error, it will throw an exception with a descriptive error message.

## Error Handling

### This library throws descriptive error messages when API or network issues occur
	•	Missing required transaction details.
	•	Incomplete buyer details.
	•	API Error: Invalid account ID or API key.
	•	Network Error: Request timed out.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.

## Support

 If you encounter any issues or have questions, feel free to reach out:
	•	Email: home@meetpay.africa
	•	Documentation: [MeetPay API Docs](https://meetpay.africa/documentation)
