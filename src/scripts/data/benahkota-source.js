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
      return [];
    }
  }

  static async idInformasiBenahKota(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();

      return responseJson.data.infoBenah || [];
    } catch (error) {
      return [];
    }
  }
}

export default BenahKotaSource;
