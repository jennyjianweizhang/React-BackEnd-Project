// import axios from 'axios';
import request from 'src/axios/authService';
import dataReports from '../data/datasets';

export const sendDataToBackend = async (dataset) => {
  try {
    const res = await request.post('http://127.0.0.1:8000/addData', { data: dataset });
    console.log('Data sent successfully:', res.data);
  } catch (error) {
    console.error('Failed to send data:', error);
  }
};

export const fetchData = async() => {
    try {
        const res = await request.get('http://127.0.0.1:8000/getData');
        console.log(res);
    } catch (error){
        console.log(error);
    }
}

export const sendAllDataToBackend = async () => {
  for (const dataset of dataReports) {
    await sendDataToBackend(dataset);
  }
};


