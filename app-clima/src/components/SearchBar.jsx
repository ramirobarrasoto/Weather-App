import React, { useState } from "react";
import "./Nav.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="holis" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div class="input-group mb-3">
          <input type="text" class="form-control" value={city}  onChange={e => setCity(e.target.value)} placeholder="Ciudad..." aria-label="Ciudad..." aria-describedby="basic-addon2"/>
          <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">Agregar</button>
          </div>
      </div>
      
    </form>
  );
}
