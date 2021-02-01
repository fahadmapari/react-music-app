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
    {
      name: "Melancholy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
      color: ["#FEDD5C", "#2A5C9E"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "Flowers",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, xander.",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11249",
      color: ["#88A95D", "#E6F1EB"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "String Along",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "Miscél",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
      color: ["#F9F9F9", "#1F487C"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "Small Town Palm Trees",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12124",
      color: ["#482217", "#3D5710"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "One Last Call",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Nymano, Kanisan, Mau",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10134",
      color: ["#191514", "#605786"],
      id: uuidV4(),
      active: false,
    },
    {
      name: "Rest Until Dark",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
      color: ["#3E7D99", "#97633E"],
      id: uuidV4(),
      active: false,
    },
  ];
};

export default musicProvider;
