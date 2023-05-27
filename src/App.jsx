import { useState } from "react";
import amexLogo from "./assets/amex.svg";
import dinersClubLogo from "./assets/diners-club.svg";
import discoverLogo from "./assets/discover.svg";
import maestroLogo from "./assets/maestro.svg";
import mastercardLogo from "./assets/mastercard.svg";
import visaLogo from "./assets/visa.svg";
import "./App.css";

function App() {
  const defaultValues = {
    isAmex: false,
    isDinersClub: false,
    isDiscover: false,
    isMaestro: false,
    isMasterCard: false,
    isVisa: false,
  };
  const [creditCardType, setCreditCardType] = useState(defaultValues);

  const creditCardMapper = [
    {
      startsWith: [34, 37],
      length: [15],
      type: "isAmex",
    },
    {
      startsWith: [38, 39],
      length: [14],
      type: "isDinersClub",
    },
    {
      startsWith: [6],
      length: [16, 19],
      type: "isDiscover",
    },
    {
      startsWith: [50, 56, 57, 58, 59],
      length: [15],
      type: "isMaestro",
    },
    {
      startsWith: [51, 52, 53, 54, 55],
      length: [16],
      type: "isMasterCard",
    },
    {
      startsWith: [4],
      length: [13, 16, 19],
      type: "isVisa",
    },
  ];

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setCreditCardType(defaultValues);
    }

    for (let index = 0; index < creditCardMapper.length; index++) {
      const element = creditCardMapper[index];
      for (
        let startIndex = 0;
        startIndex < element.startsWith.length;
        startIndex++
      ) {
        const startingNumber = element.startsWith[startIndex];
        if (
          value.startsWith(startingNumber) &&
          element.length.indexOf(value.length) > -1
        ) {
          setCreditCardType({
            ...defaultValues,
            [element.type]: true,
          });
        }
      }
    }
  };

  return (
    <>
      <h1>Credit Card Verification</h1>
      <input type="number" onChange={handleChange} />
      <div className="container">
        <img
          src={amexLogo}
          alt="American Express"
          className={`"img " ${creditCardType.isAmex ? "active" : ""}`}
        ></img>
        <img
          src={dinersClubLogo}
          alt="Diners Club"
          className={`"img " ${creditCardType.isDinersClub ? "active" : ""}`}
        ></img>
        <img
          src={discoverLogo}
          alt="Discover Card"
          className={`"img " ${creditCardType.isDiscover ? "active" : ""}`}
        ></img>
        <img
          src={maestroLogo}
          alt="Maestro"
          className={`"img " ${creditCardType.isMaestro ? "active" : ""}`}
        ></img>
        <img
          src={mastercardLogo}
          alt="MasterCard"
          className={`"img " ${creditCardType.isMasterCard ? "active" : ""}`}
        ></img>
        <img
          src={visaLogo}
          alt="VISA"
          className={`"img " ${creditCardType.isVisa ? "active" : ""}`}
        ></img>
      </div>
      <p>
        Icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </>
  );
}

export default App;
