import axios from "axios";

const getAPILink = (area: String) => {
  return `https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84[dd.ddddd]&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=${area}&type_dm=any&nameInfo_dm=51003202&itdDateDayMonthYear=10.05.2022&itdTime=09:28&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON`;
};

export const getTfiData = async () => {
  // ! Change "var" to "let"...
  //* Glentworth Limerick Bus Station
  // TODO Implement into states in main App...

  var stopMain1 = "";
  var stopName1_1 = "";
  var stopName1_2 = "";
  var stopName1_3 = "";

  var stopTime1_1 = 0;
  var stopTime1_2 = 0;
  var stopTime1_3 = 0;

  var conTime1_1;
  var conTime1_2;
  var conTime1_3;

  var locTime1_1;
  var locTime1_2;
  var locTime1_3;

  //* Glentworth vars end...
  //* Granville Park vars start

  var stopMain2 = "";
  var stopName2_1 = "";
  var stopName2_2 = "";
  var stopName2_3 = "";

  var stopTime2_1 = 0;
  var stopTime2_2 = 0;
  var stopTime2_3 = 0;

  var conTime2_1;
  var conTime2_2;
  var conTime2_3;

  var locTime2_1;
  var locTime2_2;
  var locTime2_3;

  //* Granville Park vars end...
  //*Cathal Brugha Road vars start

  var stopMain3 = "";
  var stopName3_1 = "";
  var stopName3_2 = "";
  var stopName3_3 = "";

  var stopTime3_1 = 0;
  var stopTime3_2 = 0;
  var stopTime3_3 = 0;

  var conTime3_1;
  var conTime3_2;
  var conTime3_3;

  var locTime3_1;
  var locTime3_2;
  var locTime3_3;
  //* Cathal Brugha Road vars end...
  //* St. Brigids Church vars start

  var stopMain4 = "";
  var stopName4_1 = "";
  var stopName4_2 = "";
  var stopName4_3 = "";

  var stopTime4_1 = 0;
  var stopTime4_2 = 0;
  var stopTime4_3 = 0;

  var conTime4_1;
  var conTime4_2;
  var conTime4_3;

  var locTime4_1;
  var locTime4_2;
  var locTime4_3;

  //* API Call for (Glentworth Limerick Bus Station)



// https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84[dd.ddddd]&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Glentworth, Limerick Bus Station&type_dm=any&nameInfo_dm=51003202&itdDateDayMonthYear=10.05.2022&itdTime=09:28&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON

// https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84[dd.ddddd]&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick City, Granville Park, stop 608231&type_dm=any&nameInfo_dm=8400B6082301&itdDateDayMonthYear=19.05.2022&itdTime=14:13&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON

// https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84[dd.ddddd]&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick City, St Brigids Church, stop 608251&type_dm=any&nameInfo_dm=8400B6082501&itdDateDayMonthYear=19.05.2022&itdTime=14:20&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON

// https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84[dd.ddddd]&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick City, Cathal Brugha Road, stop 608241&type_dm=any&nameInfo_dm=8400B6082401&itdDateDayMonthYear=19.05.2022&itdTime=14:23&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON
  await axios
    .get(
      `https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84%5Bdd.ddddd%5D&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Glentworth%2C%20Limerick%20Bus%20Station&type_dm=any&nameInfo_dm=51003202&itdDateDayMonthYear=10.05.2022&itdTime=09%3A28&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON`
    )
    .then((res) => {
      stopMain1 = res.data.locations[0].disassembledName;

      stopName1_1 = res.data.stopEvents[0].transportation.name;
      stopTime1_1 = res.data.stopEvents[0].departureTimePlanned;
      conTime1_1 = new Date(stopTime1_1);
      locTime1_1 = conTime1_1.toTimeString().slice(0, 8);

      stopName1_2 = res.data.stopEvents[1].transportation.name;
      stopTime1_2 = res.data.stopEvents[1].departureTimePlanned;
      conTime1_2 = new Date(stopTime1_2);
      locTime1_2 = conTime1_2.toTimeString().slice(0, 8);

      stopName1_3 = res.data.stopEvents[2].transportation.name;
      stopTime1_3 = res.data.stopEvents[2].departureTimePlanned;
    })
    .catch((err) => {
      console.error(err);
    });

  await axios
    .get(
      `https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84%5Bdd.ddddd%5D&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick%20City%2C%20Granville%20Park%2C%20stop%20608231&type_dm=any&nameInfo_dm=8400B6082301&itdDateDayMonthYear=19.05.2022&itdTime=14%3A13&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON`
    )
    .then((res) => {
      stopMain2 = res.data.locations[0].disassembledName;

      stopName2_1 = res.data.stopEvents[0].transportation.name;
      stopTime2_1 = res.data.stopEvents[0].departureTimePlanned;
      conTime2_1 = new Date(stopTime2_1);
      locTime2_1 = conTime2_1.toTimeString().slice(0, 8);

      stopName2_2 = res.data.stopEvents[1].transportation.name;
      stopTime2_2 = res.data.stopEvents[1].departureTimePlanned;
      conTime2_2 = new Date(stopTime2_2);
      locTime2_2 = conTime2_2.toTimeString().slice(0, 8);

      stopName2_3 = res.data.stopEvents[2].transportation.name;
      stopTime2_3 = res.data.stopEvents[2].departureTimePlanned;
      conTime2_3 = new Date(stopTime2_3);
      locTime2_3 = conTime2_3.toTimeString().slice(0, 8);
    })
    .catch((err) => {
      console.error(err);
    });

  await axios
    .get(
      `https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84%5Bdd.ddddd%5D&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick%20City%2C%20St%20Brigids%20Church%2C%20stop%20608251&type_dm=any&nameInfo_dm=8400B6082501&itdDateDayMonthYear=19.05.2022&itdTime=14%3A20&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON`
    )
    .then((res) => {
      stopMain3 = res.data.locations[0].disassembledName;

      stopName3_1 = res.data.stopEvents[0].transportation.name;
      stopTime3_1 = res.data.stopEvents[0].departureTimePlanned;
      conTime3_1 = new Date(stopTime3_1);
      locTime3_1 = conTime3_1.toTimeString().slice(0, 8);

      stopName3_2 = res.data.stopEvents[1].transportation.name;
      stopTime3_2 = res.data.stopEvents[1].departureTimePlanned;
      conTime3_2 = new Date(stopTime3_2);
      locTime3_2 = conTime3_2.toTimeString().slice(0, 8);

      stopName3_3 = res.data.stopEvents[2].transportation.name;
      stopTime3_3 = res.data.stopEvents[2].departureTimePlanned;
      conTime3_3 = new Date(stopTime3_3);
      locTime3_3 = conTime3_3.toTimeString().slice(0, 8);
    })
    .catch((err) => {
      console.error(err);
    });

  await axios
    .get(
      `https://journeyplanner.transportforireland.ie/nta/XML_DM_REQUEST?coordOutputFormat=WGS84%5Bdd.ddddd%5D&language=en&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useAllStops=1&name_dm=Limerick%20City%2C%20Cathal%20Brugha%20Road%2C%20stop%20608241&type_dm=any&nameInfo_dm=8400B6082401&itdDateDayMonthYear=19.05.2022&itdTime=14%3A23&itdLPxx_snippet=1&itdLPxx_template=dmresults&outputFormat=rapidJSON`
    )
    .then((res) => {
      stopMain4 = res.data.locations[0].disassembledName;

      stopName4_1 = res.data.stopEvents[0].transportation.name;
      stopTime4_1 = res.data.stopEvents[0].departureTimePlanned;
      conTime4_1 = new Date(stopTime4_1);
      locTime4_1 = conTime4_1.toTimeString().slice(0, 8);

      stopName4_2 = res.data.stopEvents[1].transportation.name;
      stopTime4_2 = res.data.stopEvents[1].departureTimePlanned;
      conTime4_2 = new Date(stopTime4_2);
      locTime4_2 = conTime4_2.toTimeString().slice(0, 8);

      stopName4_3 = res.data.stopEvents[2].transportation.name;
      stopTime4_3 = res.data.stopEvents[2].departureTimePlanned;
      conTime4_3 = new Date(stopTime4_3);
      locTime4_3 = conTime4_3.toTimeString().slice(0, 8);
    })
    .catch((err) => {
      console.error(err);
    });
  return {
    stopMain1,
    stopMain2,
    stopMain3,
    stopMain4,
    stopName1_1,
    stopName1_2,
    stopName1_3,
    stopName2_1,
    stopName2_2,
    stopName2_3,
    stopName3_1,
    stopName3_2,
    stopName3_3,
    stopName4_1,
    stopName4_2,
    stopName4_3,
    locTime1_1,
    locTime1_2,
    locTime1_3,
    locTime2_1,
    locTime2_2,
    locTime2_3,
    locTime3_1,
    locTime3_2,
    locTime3_3,
    locTime4_1,
    locTime4_2,
    locTime4_3,
  };
};
