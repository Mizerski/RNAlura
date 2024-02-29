import plant from "../../assets/icon.png";

const randNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Represents a list of plants.
 */
export default {
  title: "Plants",
  plant_list: [
    /**
     * Represents a plant.
     * @property {string} name - The name of the plant.
     * @property {string} image - The image of the plant.
     * @property {string} distance - The distance of the plant.
     * @property {number} avaliation - The avaliation of the plant.
     */
    {
      name: "Imbé",
      image: plant,
      distance: `${randNum(1, 500)}m`,
      avaliation: randNum(1, 5),
    },
    {
      name: "Peperomia",
      image: plant,
      distance: `${randNum(1, 500)}m`,
      avaliation: randNum(1, 5),
    },
    {
      name: "Cacto",
      image: plant,
      distance: `${randNum(1, 500)}m`,
      avaliation: randNum(1, 5),
    },
    {
      name: "Suculenta",
      image: plant,
      distance: `${randNum(1, 500)}m`,
      avaliation: randNum(1, 5),
    },
    {
      name: "Yucca",
      image: plant,
      distance: `${randNum(1, 500)}m`,
      avaliation: randNum(1, 5),
    },
  ],
};
