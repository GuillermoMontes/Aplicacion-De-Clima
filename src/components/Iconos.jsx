const Iconos = (icon) => {
  switch (icon) {
    case "Thunderstorm":
        //Tormenta
      icon = "icons/thunderstoms.svg";
      break;

    case "Clear":
        //Claro
      icon = "icons/clear-day.svg";
      break;

    case "Drizzle":
        //LLovizna
      icon = "icons/drizzle.svg";
      break;

    case "Mist":
        //Niebla
      icon = "icons/fog.svg";
      break;

    case "Hail":
        // Granizo
      icon = "icons/hail.svg";
      break;

    case "Haze":
        // Bruma
      icon = "icons/haze.svg";
      
      break;

    case "Hurricane":
        // Huracan
      icon = "icons/hurricane.svg";
      break;

    case "Clouds":
        // Nublado
      icon = "icons/overcast.svg";
      break;

    case "Rain":
        // LLuvia
      icon = "icons/rain.svg";
      break;

    case "Snow":
        // Nieve
      icon = "icons/snow.svg";
      break;

    default:
        icon = "icons/wi_clear-day.svg"
      break;
  }
  return icon
};

export default Iconos;
