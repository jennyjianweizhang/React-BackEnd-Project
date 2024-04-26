// import axios from 'axios';
import dataReports from "../data/datasetAnalytics";
import request from "src/axios/authService";

export const sendDataToBackend = async (dataset) => {
  try {
    await request({
      url: "/addEcommerceData",
      method: "POST",
      data: dataset,
    });
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
};

export const fetchData = async () => {
  try {
    const response = await request({
      url: "/getEcommerceData",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
