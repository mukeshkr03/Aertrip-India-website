import { createContext, useState } from "react";
import Select from "react-select";
import "./App.css";
import Header from "./Header";
import { Info } from "./Info";
import Card from "./Card";

function App() {
  const { dropdown, filtered_data } = Info();
  const [origin, setOrigin] = useState("BOM");
  const [destination, setDestination] = useState("CCU");
  const [filter, setFilter] = useState("");
  const [stops, setStops] = useState("");

  const options = [
    { value: "PRICE", label: "Price" },
    { value: "DEPARTURE", label: "Departure" },
    { value: "ARRIVAL", label: "Arrival" },
    { value: "DURATION", label: "Duration" },
  ];

  const options1 = [
    { value: "0 STOPS", label: "0 Stops" },
    { value: "1 STOPS", label: "1 Stops" },
    { value: "2 STOPS", label: "2 Stops" },
    { value: "3 STOPS", label: "3 Stops" },
  ];

  console.log(filter.label);
  if (filter.label === "Price") {
    filtered_data.sort((a, b) => a.price - b.price);
  } else if (filter.label == "Departure") {
    filtered_data.sort((a, b) =>
      a.departure_time.localeCompare(b.departure_time)
    );
  } else if (filter.label === "Arrival") {
    filtered_data.sort((a, b) => a.arrival_time.localeCompare(b.arrival_time));
  } else if (filter.label === "Duration") {
    filtered_data.sort(
      (a, b) => a.total_time_of_flight - b.total_time_of_flight
    );
  }

  return (
    <div className="App">
      <Header setOrigin={setOrigin} setDestination={setDestination} />
      <div
        style={{
          display: "flex",
          paddingLeft: "50px",
          paddingRight: "50px",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <div className="filters" style={{ width: 200 }}>
          <Select
            options={options}
            defaultValue={filter}
            placeholder="Sort"
            onChange={setFilter}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                textDecoration: "none",
                width: "150px",
                borderRadius: "25px",
                backgroundColor: "whitesmoke",
                border: "white",
              }),
            }}
          />
        </div>

        <div className="filters" style={{ width: 200 }}>
          <Select
            options={options1}
            defaultValue={stops}
            placeholder="Stops"
            onChange={setStops}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                textDecoration: "none",
                width: "150px",
                borderRadius: "25px",
                backgroundColor: "whitesmoke",
                border: "white",
              }),
            }}
          />
        </div>
        <div>
          <button
            className="clearButton"
            style={{
              width: "110px",
              height: "37px",
              borderRadius: "20px",
              color: " rgb(10, 166, 158)",
              backgroundColor: "white",
              border: "2px solid rgb(10, 166, 158)",
              fontWeight: "bold",
            }}
            onClick={() => {
              setFilter("");
              setStops("");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      {filtered_data
        .filter((item) => item.from === origin && item.to === destination)
        .sort((a, b) => a.price - b.price)
        .map((item) => (
          <Card
            dispatchTime={item.departure_time}
            from={item.from}
            duration={item.total_time_of_flight}
            arrivalTime={item.arrival_time}
            to={item.to}
            price={item.price}
          />
        ))}
    </div>
  );
}

export default App;
