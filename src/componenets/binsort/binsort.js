import React, { useState, useEffect } from 'react';
import './binsort.css';
import hand from "../../assests/hand.png"; 
import OrganicBin from "../../assests/greenbin.png"; 
import RecyclableBin from "../../assests/blueBin.png"; 
import NonRecyclableBin from "../../assests/redBin.png"; 
import grass from "../../assests/grass.png"; 



const organicItems = ["Tomatoes", "Food Wastes", "Hairs", "Apples", "Bananas"];
const recyclableItems = ["Cardboard Boxes", "Toiletpapers", "Water Bottles", "Aluminium Cans", "Milk Jugs"];
const nonRecyclableItems = ["Broken Glass Pieces", "Used Paper Cups", "Medicines", "Sanitary Pads", "Food Wrappers"];


const Binsort = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [result, setResult] = useState('');
    const [currentItemIndex, setCurrentItemIndex] = useState(-1);

    const remainingImages = organicItems.concat(recyclableItems, nonRecyclableItems);

    useEffect(() => {
        showRandomItem();
    }, []);

    const handleDragStart = (e, item) => {
      // console.log({item})
        setDraggedItem(item);

    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e, bin) => {
        e.preventDefault();
        document.getElementById(bin).classList.add('hover');
    };

    const handleDragLeave = (e, bin) => {
        e.preventDefault();
        document.getElementById(bin).classList.remove('hover');
    };

    const binDrop = (e, bin) => {
      e.preventDefault();
      document.getElementById(bin).classList.remove('hover');
  
      if (draggedItem) {
        // console.log({draggedItem})
          const itemName = draggedItem;
        // console.log({organicItems,itemName})
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
  
          setCurrentItemIndex(-1);
          showRandomItem();
      }
  };

    const showRandomItem = () => {
        const currentItemIndex = Math.floor(Math.random() * remainingImages.length);
        setCurrentItemIndex(currentItemIndex);
    };

    return (
        <div id="container">
            <h1>Drag the Item to the Trash Bins!</h1>
            <img className="hand" src={hand} alt="hand" />
            <div className="itemContainer">
                {currentItemIndex !== -1 && (
                    <img
                        className="itemImage"
                        src={`./img/${remainingImages[currentItemIndex].toLowerCase()}.png`}
                        alt={remainingImages[currentItemIndex]}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, remainingImages[currentItemIndex])}
                    />
                )}
            </div>
            <div className="trashBinContainer">
                <img className="trashBin"  id="organicBin" src={OrganicBin} alt="Organic bin" 
                    onDragOver={(e) => handleDragOver(e)} 
                    onDragEnter={(e) => handleDragEnter(e, 'organicBin')}
                    onDragLeave={(e) => handleDragLeave(e, 'organicBin')}
                    onDrop={(e) => binDrop(e, 'organicBin')}
                />
               <img className="trashBin"  id="recyclableBin" src={RecyclableBin} alt="Recyclable bin" 
                    onDragOver={(e) => handleDragOver(e)}
                    onDragEnter={(e) => handleDragEnter(e, 'recyclableBin')}
                    onDragLeave={(e) => handleDragLeave(e, 'recyclableBin')}
                    onDrop={(e) => binDrop(e, 'recyclableBin')}
                />
                   <img className="trashBin" id="nonRecyclableBin" src={NonRecyclableBin} alt="Non Recyclable bin" 
                    onDragOver={(e) => handleDragOver(e)}
                    onDragEnter={(e) => handleDragEnter(e, 'nonRecyclableBin')}
                    onDragLeave={(e) => handleDragLeave(e, 'nonRecyclableBin')}
                    onDrop={(e) => binDrop(e, 'nonRecyclableBin')}
                />
            </div>
            
            <img className="grass" src={grass} alt="" />
            <div id="result">{result}</div>
        </div>
    );
};

export default Binsort;