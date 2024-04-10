// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  const fahrenheit = parseFloat(document.getElementById("side-a").value)
  //prosess
  
  //output
  document.getElementById("page-content").innerHTML = "Formula	 (324°F − 32) × 5 / 9 = 162.222°C"
}