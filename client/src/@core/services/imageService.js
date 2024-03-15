import request from "src/axios/authService";

export const fetchImages = async () => {
  try {
    const response = await request({
      url: "/getImages",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
};
