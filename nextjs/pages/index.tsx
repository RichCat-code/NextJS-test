import React, { useEffect, useState } from "react";
import { getWeather } from "./components/weather";
import { getTfiData } from "./components/tfi";

// import '../styles/index.css';

export default function Home() {
  //! API commented out due to limitation on calls/month for openweather API... (marked red on both ends!)
  let [wthrData, setWthrData] = useState("");
  let [wthrCond, setWthrCond] = useState("");

  let [wthrTemp, setWthrTemp] = useState(0);
  let [wthrTempMin, setWthrTempMin] = useState(0);
  let [wthrTempMax, setWthrTempMax] = useState(0);
  let [wthrTempFeel, setWthrTempFeel] = useState(0);

  //* TFI data further down

  let [stopMain1, setStopMain1] = useState("");
  let [stopName1_1, setStopName1_1] = useState("");
  let [stopName1_2, setStopName1_2] = useState("");
  let [stopName1_3, setStopName1_3] = useState("");
  let [locTime1_1, setLocTime1_1] = useState();
  let [locTime1_2, setLocTime1_2] = useState();
  let [locTime1_3, setLocTime1_3] = useState();

  let [stopMain2, setStopMain2] = useState("");
  let [stopName2_1, setStopName2_1] = useState("");
  let [stopName2_2, setStopName2_2] = useState("");
  let [stopName2_3, setStopName2_3] = useState("");
  let [locTime2_1, setLocTime2_1] = useState();
  let [locTime2_2, setLocTime2_2] = useState();
  let [locTime2_3, setLocTime2_3] = useState();

  let [stopName3_1, setStopName3_1] = useState("");
  let [stopName3_2, setStopName3_2] = useState("");
  let [stopName3_3, setStopName3_3] = useState("");
  let [locTime3_1, setLocTime3_1] = useState();
  let [locTime3_2, setLocTime3_2] = useState();
  let [locTime3_3, setLocTime3_3] = useState();

  let [stopMain4, setStopMain4] = useState("");
  let [stopName4_1, setStopName4_1] = useState("");
  let [stopName4_2, setStopName4_2] = useState("");
  let [stopName4_3, setStopName4_3] = useState("");
  let [locTime4_1, setLocTime4_1] = useState();
  let [locTime4_2, setLocTime4_2] = useState();
  let [locTime4_3, setLocTime4_3] = useState();

  useEffect(() => {
    // getWeather()
    //   .then((res) => {
    //     // console.log(res);

    //     setWthrData(res.wthrData);
    //     setWthrCond(res.wthrCond);
    //     setWthrTemp(res.wthrTemp);

    //     setWthrTempFeel(res.wthrTempFeel);
    //     setWthrTempMin(res.wthrTempMin);
    //     setWthrTempMax(res.wthrTempMax);
    //   })
    //   .catch((error) => console.error(error));

    //! Openweather out-commenting ends here...

    //* TFI Api calls start here!
    getTfiData().then((res) => {
      setStopMain1(res.stopMain1);
      setStopName1_1(res.stopName1_1);
      setStopName1_2(res.stopName1_2);
      setStopName1_3(res.stopName1_3);
      setLocTime1_1(res.locTime1_1);
      setLocTime1_2(res.locTime1_2);
      setLocTime1_3(res.locTime1_3);

      setStopMain2(res.stopMain2);
      setStopName2_1(res.stopName2_1);
      setStopName2_2(res.stopName2_2);
      setStopName2_3(res.stopName2_3);
      setLocTime2_1(res.locTime2_1);
      setLocTime2_2(res.locTime2_2);
      setLocTime2_3(res.locTime2_3);

      setStopMain3(res.stopMain3);
      setStopName3_1(res.stopName3_1);
      setStopName3_2(res.stopName3_2);
      setStopName3_3(res.stopName3_3);
      setLocTime3_1(res.locTime3_1);
      setLocTime3_2(res.locTime3_2);
      setLocTime3_3(res.locTime3_3);

      setStopMain4(res.stopMain4);
      setStopName4_1(res.stopName4_1);
      setStopName4_2(res.stopName4_2);
      setStopName4_3(res.stopName4_3);
      setLocTime4_1(res.locTime4_1);
      setLocTime4_2(res.locTime4_2);
      setLocTime4_3(res.locTime4_3);

      console.log(stopName1_1 + " " + locTime1_1);
      console.log(stopName1_2 + " " + locTime1_2);
      console.log(stopName1_3 + " " + locTime1_3);
    });
  });
  //* TFI Api calls end here!

  return (
    <div className="container">
      <h1>hello world</h1>
    </div>
  );
}
