import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      temp: null,
      city: null,
      weather: null
    };
  }

  async componentDidMount() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Sleman&appid=69db624d6768601eeb046d6a847ee587&lang=id&units=metric";
    await fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            city: result.name,
            weather: result.weather[0].description,
            temp: result.main.temp
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  
  render() {
    const { error, isLoaded, city, temp, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{city}</h1>
          <h2>
            {temp} {weather}
          </h2>
        </div>
      );
    }
  }
}

export default Test;
