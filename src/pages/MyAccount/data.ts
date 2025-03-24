import imgMug from "../../assets/products/mug.jpg";
import imgShirt from "../../assets/products/shirt.jpg";

// TODO: Request this from an api as JSON data through RTKQ
export const orderData = [
  {
    id: 7587657698,
    date: 1742826611653,
    address: ["478 Street Lane", "Townsburg", "Citysville", "ND4 8JS"],
    items: [
      {
        id: 75745837856485,
        name: "Games Company Mug",
        image: imgMug,
        details: [
          { label: "Type", value: "Unisex" },
          { label: "Size", value: "Large" },
          { label: "Price", value: 1499 },
        ],
      },
      {
        id: 87676858463782,
        name: "Games Company Shirt",
        image: imgShirt,
        details: [
          { label: "Type", value: "Unisex" },
          { label: "Size", value: "Large" },
          { label: "Price", value: 1499 },
        ],
      },
    ],
  },
  {
    id: 6907687658,
    date: 1742821348264,
    address: ["478 Street Lane", "Townsburg", "Citysville", "ND4 8JS"],
    items: [
      {
        id: 87676858463782,
        name: "Games Company Shirt",
        image: imgShirt,
        details: [
          { label: "Type", value: "Unisex" },
          { label: "Size", value: "Large" },
          { label: "Price", value: 1499 },
        ],
      },
    ],
  },
];
