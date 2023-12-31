import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
