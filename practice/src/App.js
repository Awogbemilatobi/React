import { useState } from "react";
import "./styles.css";

const tipOptions = {
  "Disatisfied (0%)": 0,
  "it was ok (5%)": 0.05,
  "it was good (10%)": 0.1,
  "Absolutely amazing (20%)": 0.2,
};

const options = Object.keys(tipOptions);

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [serviceRating, setServiceRating] = useState("");
  const [friendRating, setFriendRating] = useState("");

  const handleBillChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleServiceChange = (event) => {
    setServiceRating(event.target.value);
  };

  const handleFriendChange = (event) => {
    setFriendRating(event.target.value);
  };

  const calculateTip = (rating, bill) => {
    return bill * tipOptions[rating];
  };

  return (
    <div>
      <form>
        <label>How much was the bill?</label>
        <input type="number" value={billAmount} onChange={handleBillChange} />
      </form>

      <div>
        <label>How did you like the service?</label>
        <select value={serviceRating} onChange={handleServiceChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <form>
        <label>How did your friend like the service?</label>
        <select value={friendRating} onChange={handleFriendChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>

      <DisplayInput
        bill={Number(billAmount)}
        service={serviceRating}
        friend={friendRating}
        calculateTip={calculateTip} // Pass the calculateTip function to DisplayInput
      />
    </div>
  );
}

function DisplayInput({ bill, service, friend, calculateTip }) {
  const tipForYou = calculateTip(service, bill);
  const tipForFriend = calculateTip(friend, bill);

  const totalBill = Math.round(bill + tipForYou + tipForFriend);
  const totalTip = Math.round(tipForFriend + tipForYou);

  return (
    <div>
      <h3>
        You pay ${totalBill} (${bill} + ${totalTip} tip)
      </h3>
    </div>
  );
}
