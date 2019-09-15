import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return { lat, errorMessage }; // community convention would be to return an array to do array destructuring, but i think objects are cooler in case you change the signature
};
