import { v4 as uuidV4 } from "uuid";

const musicProvider = () => {
  return [
    {
      name: "Lost Love",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c3cb92a68f953925c92d259d8d7b52d3bd9aa06-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7837",
      color: ["#3C6B57", "#3C6B57"],
      id: uuidV4(),
      active: true,
    },
    {
      name: "Cloud Dance",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
      artist: "Blue Wednesday, Ian Ewing",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8930",
      color: ["#D58A98", "#7A6787"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "Murmuration",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
      color: ["#018985", "#575A68"],
      id: uuidV4(),
      active: false,
    },
  ];
};

export default musicProvider;
