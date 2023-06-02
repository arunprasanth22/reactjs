import { useState } from "react";

export default function Payment(){
        const [cardNumber, setCardNumber] = useState('');
        const [expiration, setExpiration] = useState('');
        const [cvv, setCVV] = useState('');
        const [billingAddress, setBillingAddress] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Payment submitted');
        };
    return(
        <>
        <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expiration">Expiration Date:</label>
        <input
          type="text"
          id="expiration"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          required
        />

        <label htmlFor="billingAddress">Billing Address:</label>
        <input
          type="text"
          id="billingAddress"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
        </>    
        )
}