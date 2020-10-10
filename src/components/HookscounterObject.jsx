import React, { useState } from "react";

function HookscounterObject() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <form className="HookscounterObject">
      <input
        type="text"
        placeholder="firstname"
        value={name.firstname}
        onChange={(e) => setName({...name, firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="lastname"
        value={name.lastname}
        onChange={(e) => setName({...name, lastname: e.target.value })}
      />
      <h4>Your firstname is {name.firstname}</h4>
      <h4>Your lastname is {name.lastname}</h4>
      <h3>{JSON.stringify(name)}</h3>
    </form>
  );
}

export default HookscounterObject;
