/* import { get } from "axios";

function setUserLocation(ipInfoAddress) {
  const ipTextbox = document.getElementById("ipAddressTextbox");
  ipTextbox.value = ipInfoAdress;
}

function fetchCurrentIpAddress() {
  get("https://ipinfo.io/json?token=765e38de554a28")
    .then((response) => {
      (ipInfoAddress = response.data.ip),
        console.log(`Your IP address is: ${ipInfoAddress}`);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
fetchCurrentIpAddress(); */

const { get } = require("axios");

function setUserLocation(ipInfoAddress) {
  const ipTextbox = document.getElementById("ipAddressTextbox");
  ipTextbox.value = ipInfoAddress;
}

function fetchCurrentIpAddress() {
  get("https://ipinfo.io/json?token=765e38de554a28")
    .then((response) => {
      const ipInfoAddress = response.data.ip;
      console.log(`Your actuall IP address is: ${ipInfoAddress}`);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

fetchCurrentIpAddress();
