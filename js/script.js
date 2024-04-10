// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

window.oninput = function() {
  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
  //prosess
  const celsius = (fahrenheit - 32) * 5.0 / 9.0
  const roundedCelsius = Math.round(celsius * 100) / 100
  //output
  document.getElementById("page-content").innerHTML = "Formula: (" + fahrenheit + "°F − 32) × 5 / 9 = " + roundedCelsius + "°C"
}

function myButtonClicked() {
  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
  //prosess
  const celsius = (fahrenheit - 32) * 5.0 / 9.0
  const roundedCelsius = Math.round(celsius * 100) / 100
  //output
  document.getElementById("answer").innerHTML = "Answer: " + roundedCelsius + "°C"
}