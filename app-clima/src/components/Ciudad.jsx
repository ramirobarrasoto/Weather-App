import React from "react";
import "./Ciudad.css"

export default function Ciudad({ city }) {
  var sunrise = new Date(city.amanecer * 1000);
  var sunset = new Date(city.anochecer * 1000);
  console.log(city)
  return (
    <div className="tarjeta">
      <div className="card">
        <div className="container">
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Nubosidad: {city.clouds}%</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
            <div>
              Amanece: {`${sunrise.getHours()}:${sunrise.getMinutes()} h`} UTC
            </div>
            <div>
              Anochece: {`${sunset.getHours()}:${sunset.getMinutes()} h`} UTC
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                width="120"
                height="120"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
