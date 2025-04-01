import food1 from "../assets/hero/hero1.png";
import food2 from "../assets/hero/hero2.png";
import food3 from "../assets/hero/hero3.png";
import bgImg from "../assets/hero/bg-image.png";

export const imageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  },
];
export const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
