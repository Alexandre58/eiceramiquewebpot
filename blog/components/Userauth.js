import React from "react";

const Userauth = ({ user }) => {
  return (
    <div>
      <h2>
        {user.name} {user.username}
      </h2>
      <h3>Email: {user.email}</h3>
      <h4>Street: {user.address.street}</h4>
      <h4>Adresse: {user.address.suite}</h4>
      <h4>City: {user.address.city}</h4>
      <h4>ZipCode: {user.address.zipcode}</h4>
      <h4>Compagny phrase: {user.company.catchPhrase}</h4>
      <h4>Compagny BS: {user.company.name}</h4>
    </div>
  );
};

export default Userauth;
