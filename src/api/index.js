import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '74e0c0015emsh2a0db00ec93c3bap1a5258jsnd72da4f732a7'
    },
  });
  
    return data;  
  } catch (error) {
    console.log(error);
  }
}