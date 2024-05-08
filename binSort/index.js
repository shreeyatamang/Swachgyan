//Data for organic items
const organicItems = [
    "Tomatoes",
    "Food Wastes",
    "Hairs",
    "Apples",
    "Bananas"
];

//Data for recyclable items
const recyclableItems = [
    "Cardboard Boxes",
    "Toiletpapers",
    "Water Bottles",
    "Aluminium Cans",
    "Milk Jugs"
];

//Data for non-recyclable items
const nonRecyclableItems = [
    "Broken Glass Pieces",
    "Used Paper Cups",
    "Medicines",
    "Sanitary Pads",
    "Food Wrappers"
];

// To drag item image 
const itemImages = document.querySelectorAll(".itemImage");
itemImages.forEach(function(image) {
    image.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", image.alt);
    });
});

// Function to check if item is organic
function isOrganic(item) {
    return organicItems.includes(item);
}

// Function to check if item is recyclable
function isRecyclable(item) {
    return recyclableItems.includes(item);
}

// Function to check if item is non-recyclable
function isNonRecyclable(item) {
    return nonRecyclableItems.includes(item);
}



// Event listener for trash bin image drag over and drop
document.querySelectorAll(".trashBin").forEach(function(bin) {
    bin.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    //Check if item is organic,recyclable or nonrecyclable
    bin.addEventListener("drop", function(event) {
        event.preventDefault();
        const itemName = event.dataTransfer.getData("text/plain");
        const resultDiv = document.getElementById("result");

        if (bin.id === "organicBin") {
            if (isOrganic(itemName)) {
                resultDiv.innerText = `${itemName} are Organic! ✔️`;
            } else {
                resultDiv.innerText = `${itemName} are not Organic ❌`;
                return; // Don't generate the next item if dropped in the wrong bin
            }
        } else if (bin.id === "recyclableBin") {
            if (isRecyclable(itemName)) {
                resultDiv.innerText = `${itemName} are Recyclable ✔️`;
            } else {
                resultDiv.innerText = `${itemName} are not Recyclable! ❌`;
                return; 
            }
        } else if (bin.id === "nonRecyclableBin") {
            if (isNonRecyclable(itemName)) {
                resultDiv.innerText = `${itemName} are Non-Recyclable ✔️`;
            } else {
                resultDiv.innerText = `${itemName} are not Non-Recyclable ❌`;
                return; 
            }
        } else {
            resultDiv.innerText = "Bin not recognized.";
            return; 
        }

        // Generate the next item only when dropped in the correct bin
        showRandomItem();
    });
});

let remainingImages = Array.from(itemImages); // Copy of itemImages
let currentItemIndex = -1;

// Function to hide all item images
function hideAllItemImages() {
    itemImages.forEach(function(image) {
        image.style.display = "none";
    });
}

// Function to show a random item image
function showRandomItem() {
    if (remainingImages.length === 0) {
        document.getElementById("result").innerText = "The end";
        hideAllItemImages(); // Ensure no image is displayed when "The end" is shown
        return;
    }

    hideAllItemImages();
    currentItemIndex = Math.floor(Math.random() * remainingImages.length);
    remainingImages[currentItemIndex].style.display = "block";
    remainingImages.splice(currentItemIndex, 1); // Remove displayed image from remaining images
}

// Show a random item image initially
showRandomItem();
