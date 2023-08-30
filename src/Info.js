import React, { useState } from "react";
import { JsonData } from "./JsonData";

export function Info() {
  let dropdown = [];
  for (let key in JsonData.data.flights[1].results.apdet) {
    dropdown.push({
      code: key,
      city: JsonData.data.flights[1].results.apdet[key].c,
    });
  }

  let flights1 = JsonData.data.flights[0].results.j;
  let flights2 = JsonData.data.flights[1].results.j;
  let flights = [];
  flights = [...flights1, ...flights2];
  let filtered_data = [];
  for (let obj of flights) {
    let price = obj.farepr;

    for (let x of obj.leg[0].flights) {
      let stp = obj.leg[0].stp;
      filtered_data.push({
        from: x.fr,
        to: x.to,
        departure_time: x.dt,
        arrival_time: x.at,
        airline_of_that_flight: x.al,
        total_time_of_flight: x.ft,
        price: price,
        stops: stp,
      });
    }
  }
  return { dropdown, filtered_data };
}
