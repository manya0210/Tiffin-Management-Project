import React from 'react'
import Navbar from '../../components/Navbar'
import "./Subscription.css";

function Subscription() {

  const plans = [
    {
      title: "6 Meals",
      price: "480",
      features: [
        "6 meals delivery",
        "Skip weekends",
        "Change address once/week",
        "Email support"
      ]
    },
    {
      title: "15 Meals",
      price: "1100",
      features: [
        "15 meals delivery",
        "Flexible schedule",
        "Change address twice/week",
        "Priority support"
      ]
    },
  ];

  return (
    <>
    <Navbar />
    <div className="subscription-page">

      <h1>Choose Your Plan</h1>

      <div className="plans-container">

        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>

            <h2>{plan.title}</h2>

            <div className="price">
              ₹{plan.price}
              <span>/month</span>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button>
              Login to Subscribe
            </button>

          </div>
        ))}

      </div>

    </div>
    </>
  );
}

export default Subscription;
