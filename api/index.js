import axios from "axios";

const url = "https://api.covid19api.com";

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
     const formatData = data.map(({ Country, Slug, ISO2 }) => ({
       Country,
       Slug,
       ISO2,
     }));
    return formatData;
  } catch (error) {
    return error;
  }
};
export const fetchData = async (country) => {
  let changeableUrl = url;
  
  if (country) {
    changeableUrl = `${url}/live/country/${country}`;
  }

  try {

  const {
    data
  } = await axios.get(changeableUrl);
     
   const dataFilter = data.map(({ Confirmed, Deaths, Recovered, Active,Date }) => ({
     Confirmed,
     Deaths,
     Recovered,
     Active,
     Date
   }));

   return dataFilter;

  
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { positive, recovered, death, dateChecked: date },
    } = await axios.get("https://api.covidtracking.com/v1/us/daily.json");
    
    // return data.map(({ positive, recovered, death, dateChecked: date }) => ({
    //   confirmed: positive,
    //   recovered,
    //   deaths: death,
    //   date,
    // }));
    return { positive, recovered, death, dateChecked: date };
  } catch (error) {
    return error;
  }
};