import API_ENDPOINT from '../global/api-endpoint';

class BenahKotaSource {
  static async informasiBenahKota() {
    try {
      const response = await fetch(API_ENDPOINT.INFORMASI);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.data.informasi || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  static async penggunaBenahKota() {
    try {
      const response = await fetch(API_ENDPOINT.PENGGUNA);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.data.infoPengguna || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  static async idInformasiBenahKota(id) {
    try {
      console.log('Fetching details for ID:', id);
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson.data.infoBenah || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}

export default BenahKotaSource;
