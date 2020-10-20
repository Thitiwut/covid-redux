import React, { useState, useEffect } from "react";

import { fetchDailyData } from "../../api";

import { View } from 'react-native'

const ChartData = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);


  return (
   <View></View>
  );
};

export default ChartData;
