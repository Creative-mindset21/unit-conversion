const convertBtn = document.getElementById("convert-btn");
const inputBtn = document.getElementById("input");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

const meterToFeet = 3.281;
const litreToGallon = 0.264;
const kgToPounds = 2.204;

inputBtn.value = 20;

convertBtn.addEventListener("click", () => {
  let inputValue = inputBtn.value;
  inputValue = Number(inputValue);

  length.textContent = `${inputValue} meters = ${(
    inputValue * meterToFeet
  ).toFixed(3)} feet | ${inputValue} feet = ${(
    inputValue / meterToFeet
  ).toFixed(3)} meters`;

  volume.textContent = `${inputValue} litres = ${(
    inputValue * litreToGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / litreToGallon
  ).toFixed(3)} litres`;

  mass.textContent = `${inputValue} kilos = ${(inputValue * kgToPounds).toFixed(
    3
  )} pounds | ${inputValue} pounds = ${(inputValue / kgToPounds).toFixed(
    3
  )} kilos`;
});
