export class Emoji {
  async getEmoji(category) {
    try {
      const data = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${category}`
      );
      return data;
    } catch (error) {
      console.log("something went wrong while retrieving data : ", error);
      return false;
    }
  }
}

const emoji = new Emoji();

export default emoji;
