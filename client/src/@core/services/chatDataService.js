import request from "src/axios/authService";

export const sendDataToBackend = async (dataset) => {
  try {
    await request({
      url: "/addChatData",
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
      url: "/getChatData",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
