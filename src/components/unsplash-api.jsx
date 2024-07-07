import axios from "axios";
import toast from "react-hot-toast";

const ACCESS_KEY = 'zSMlenwZaCKdvgMJ8ji46V7MXghdrD9TLiRzWBR-6RU';

axios.defaults.baseURL = "https://api.unsplash.com/";


export const getPhotos = async (searchQuery, page) => {
  try {
    const query = searchQuery;
    const response = await axios.get("search/photos", {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        page: page,
        per_page: 10,
        orientation: 'landscape',
      },
    });
    const total_pages = response.data.total_pages;
    return {
      results: response.data.results,
      total_pages: total_pages,
    };
  } catch (error) {
    toast.error("Server error. Please try again!");
  }
};