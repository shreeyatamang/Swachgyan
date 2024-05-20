import React, { useState, useEffect } from "react";
import "./BinSort.css";
import hand from "../../assests/hand.png";
import OrganicBin from "../../assests/greenbin.png";
import RecyclableBin from "../../assests/blueBin.png";
import NonRecyclableBin from "../../assests/redBin.png";
import Tomatoes from "../../assests/tomato.png";
import foodWAste from "../../assests/bone.png";
import Hairs from "../../assests/hair.png";
import apple from "../../assests/apple.png";
import banana from "../../assests/banana.png";
import Cardboard from "../../assests/cardboard.png";
import Toiletpapers from "../../assests/toiletpaper.png";
import can from "../../assests/can.png";
import Milk from "../../assests/milkbottle.png";
import glass from "../../assests/glass.png";
import medicines from "../../assests/medicines.png";
import pad from "../../assests/sanitarypad.png";
import Wrappers from "../../assests/waiwai.png";
import Bottles from "../../assests/bottle.png";
import usedPaperCups from "../../assests/cups.png";
import grass from "../../assests/grass.png";

const images = {
  Tomatoes: Tomatoes,
  "Food Wastes": foodWAste,
  Hairs: Hairs,
  Apples: apple,
  Bananas: banana,
  "Cardboard Boxes": Cardboard,
  Toiletpapers: Toiletpapers,
  "Water Bottles": Bottles,
  "Aluminium Cans": can,
  "Milk Jugs": Milk,
  "Broken Glass Pieces": glass,
  "Used Paper Cups": usedPaperCups,
  Medicines: medicines,
  "Sanitary Pads": pad,
  "Food Wrappers": Wrappers,
};

const organicItems = ["Tomatoes", "Food Wastes", "Hairs", "Apples", "Bananas"];
const recyclableItems = [
  "Cardboard Boxes",
  "Toiletpapers",
  "Water Bottles",
  "Aluminium Cans",
  "Milk Jugs",
];
const nonRecyclableItems = [
  "Broken Glass Pieces",
  "Used Paper Cups",
  "Medicines",
  "Sanitary Pads",
  "Food Wrappers",
];

let remainingImages = organicItems.concat(recyclableItems, nonRecyclableItems);

const RecyclabilityChecker = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [result, setResult] = useState("");
  const [currentItemIndex, setCurrentItemIndex] = useState(-1);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    showRandomItem();
  }, []);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e, bin) => {
    e.preventDefault();
    document.getElementById(bin).classList.add("hover");
  };

  const handleDragLeave = (e, bin) => {
    e.preventDefault();
    document.getElementById(bin).classList.remove("hover");
  };

  const binDrop = (e, bin) => {
    e.preventDefault();
    document.getElementById(bin).classList.remove("hover");

    if (draggedItem) {
      const itemName = draggedItem;
      if (bin === "organicBin") {
        if (organicItems.includes(itemName)) {
          setResult(`${itemName} are Organic! ✔️`);
        } else {
          setResult(`${itemName} are not Organic ❌`);
          return; // Don't generate the next item if dropped in the wrong bin
        }
      } else if (bin === "recyclableBin") {
        if (recyclableItems.includes(itemName)) {
          setResult(`${itemName} are Recyclable ✔️`);
        } else {
          setResult(`${itemName} are not Recyclable! ❌`);
          return;
        }
      } else if (bin === "nonRecyclableBin") {
        if (nonRecyclableItems.includes(itemName)) {
          setResult(`${itemName} are Non-Recyclable ✔️`);
        } else {
          setResult(`${itemName} are not Non-Recyclable ❌`);
          return;
        }
      } else {
        setResult("Bin not recognized.");
        return;
      }

      remainingImages = remainingImages.filter((item) => item !== itemName);

      setCurrentItemIndex(-1);
      showRandomItem();
    }
  };

  const showRandomItem = () => {
    if (remainingImages.length === 0) {
      setImageName(""); // Clear the current image
      setResult("The end");
      return;
    }
    const currentItemIndex = Math.floor(Math.random() * remainingImages.length);
    setCurrentItemIndex(currentItemIndex);
    setImageName(remainingImages[currentItemIndex]);
  };

  return (
    <div className="bin-sort-container">
      <h1>Drag the Item to the Trash Bins!</h1>
      <img className="hand" src={hand} alt="hand" draggable="false" />
      <div className="itemContainer">
        {currentItemIndex !== -1 && (
          <img
            className="itemImage"
            src={images[imageName]}
            alt={imageName}
            draggable="true"
            onDragStart={(e) =>
              handleDragStart(e, remainingImages[currentItemIndex])
            }
          />
        )}
      </div>
      <div className="trashBinContainer">
        <img
          className="trashBin"
          id="organicBin"
          src={OrganicBin}
          alt="Organic bin"
          onDragOver={(e) => handleDragOver(e)}
          onDragEnter={(e) => handleDragEnter(e, "organicBin")}
          onDragLeave={(e) => handleDragLeave(e, "organicBin")}
          onDrop={(e) => binDrop(e, "organicBin")}
        />
        <img
          className="trashBin"
          id="recyclableBin"
          src={RecyclableBin}
          alt="Recyclable bin"
          onDragOver={(e) => handleDragOver(e)}
          onDragEnter={(e) => handleDragEnter(e, "recyclableBin")}
          onDragLeave={(e) => handleDragLeave(e, "recyclableBin")}
          onDrop={(e) => binDrop(e, "recyclableBin")}
        />
        <img
          className="trashBin"
          id="nonRecyclableBin"
          src={NonRecyclableBin}
          alt="Non Recyclable bin"
          onDragOver={(e) => handleDragOver(e)}
          onDragEnter={(e) => handleDragEnter(e, "nonRecyclableBin")}
          onDragLeave={(e) => handleDragLeave(e, "nonRecyclableBin")}
          onDrop={(e) => binDrop(e, "nonRecyclableBin")}
        />
      </div>
      <img className="grass" src={grass} alt="grass" />
      <div id="result">{result}</div>
    </div>
  );
};

export default RecyclabilityChecker;