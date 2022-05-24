import axios from "axios";

export const getWeather = async () => {
  var wthrData = "";
  var wthrCond = "";

  var wthrTemp = 0;
  var wthrTempMin = 0;
  var wthrTempMax = 0;
  var wthrTempFeel = 0;
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Limerick&appid=e5007b7953609acb7e252f7b5934fc32&units=metric`
    )
    .then((res) => {
      wthrData = res.data.main;
      wthrCond = res.data.weather[0];

      wthrTemp = res.data.main.temp;
      wthrTempMin = res.data.main.temp_min;
      wthrTempMax = res.data.main.temp_max;
      wthrTempFeel = res.data.main.feels_like;

      console.log(wthrData);
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    wthrCond,
    wthrData,
    wthrTemp,
    wthrTempFeel,
    wthrTempMax,
    wthrTempMin,
  };
};
