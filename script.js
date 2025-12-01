// // Plant data array
// const plants = [
//     {
//         genericName: "Frangipani",
//         scientificName: "Plumeria rubra",
//         group: "Flowering Shrub",
//         soilPH: "6.5 - 7.5",
//         availableArea: "Tropical and subtropical regions, coastal areas",
//         season: "Spring to Summer",
//         lifeSpan: "50+ years",
//         image: "new_plant/frangipani.jpeg",
//         description: "Frangipani is a beautiful flowering plant known for its fragrant, colorful flowers. It thrives in warm climates and is often used in lei making in Hawaii. The plant is drought-tolerant once established and produces stunning blooms in white, yellow, pink, and red."
//     },
//     {
//         genericName: "Rose",
//         scientificName: "Rosa spp.",
//         group: "Flowering Shrub",
//         soilPH: "6.0 - 6.5",
//         availableArea: "Worldwide, temperate regions",
//         season: "Spring to Fall",
//         lifeSpan: "15-25 years",
//         image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
//         description: "Roses are classic flowering plants beloved for their beauty and fragrance. They require regular care including pruning, feeding, and disease management. Available in countless varieties, roses can be grown as bushes, climbers, or ground covers."
//     },
//     {
//         genericName: "Lavender",
//         scientificName: "Lavandula angustifolia",
//         group: "Herbaceous Perennial",
//         soilPH: "6.5 - 7.5",
//         availableArea: "Mediterranean, temperate climates",
//         season: "Summer",
//         lifeSpan: "15-20 years",
//         image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80",
//         description: "Lavender is an aromatic herb prized for its fragrant purple flowers and essential oils. It's drought-tolerant, attracts pollinators, and has culinary and medicinal uses. Lavender thrives in sunny locations with well-drained soil."
//     },
//     {
//         genericName: "Sunflower",
//         scientificName: "Helianthus annuus",
//         group: "Annual Flower",
//         soilPH: "6.0 - 7.5",
//         availableArea: "Worldwide, various climates",
//         season: "Summer to Fall",
//         lifeSpan: "1 year (Annual)",
//         image: "https://images.unsplash.com/photo-1597848212624-e530bb37f4c7?w=800&q=80",
//         description: "Sunflowers are cheerful annual plants that follow the sun's movement. They can grow very tall and produce large flower heads filled with seeds. Sunflowers are easy to grow and are cultivated for ornamental purposes, seeds, and oil production."
//     },
//     {
//         genericName: "Hibiscus",
//         scientificName: "Hibiscus rosa-sinensis",
//         group: "Flowering Shrub",
//         soilPH: "6.0 - 7.0",
//         availableArea: "Tropical and subtropical regions",
//         season: "Year-round (tropical)",
//         lifeSpan: "10-15 years",
//         image: "https://images.unsplash.com/photo-1605016104749-e13b8f0c5e5e?w=800&q=80",
//         description: "Hibiscus produces large, showy flowers in vibrant colors. It's a popular ornamental plant in tropical gardens and can also be used to make tea. The plant needs plenty of sunlight and regular watering to thrive."
//     },
//     {
//         genericName: "Jasmine",
//         scientificName: "Jasminum officinale",
//         group: "Climbing Vine",
//         soilPH: "6.0 - 7.5",
//         availableArea: "Warm temperate and tropical regions",
//         season: "Summer",
//         lifeSpan: "15-20 years",
//         image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=800&q=80",
//         description: "Jasmine is renowned for its intensely fragrant white flowers. Often used in perfumes and teas, this climbing plant can cover walls and trellises. It blooms profusely during warm months and prefers full sun."
//     }
// ];

// // Current plant index
// let currentIndex = 0;

// // Get DOM elements
// const plantImage = document.getElementById('plantImage');
// const genericName = document.getElementById('genericName');
// const scientificName = document.getElementById('scientificName');
// const group = document.getElementById('group');
// const soilPH = document.getElementById('soilPH');
// const season = document.getElementById('season');
// const lifeSpan = document.getElementById('lifeSpan');
// const availableArea = document.getElementById('availableArea');
// const description = document.getElementById('description');
// const counter = document.getElementById('counter');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const indicatorsContainer = document.getElementById('indicators');

// // Function to display plant information
// function displayPlant(index) {
//     const plant = plants[index];
    
//     // Update all plant information
//     plantImage.src = plant.image;
//     plantImage.alt = plant.genericName;
//     genericName.textContent = plant.genericName;
//     scientificName.textContent = plant.scientificName;
//     group.textContent = plant.group;
//     soilPH.textContent = plant.soilPH;
//     season.textContent = plant.season;
//     lifeSpan.textContent = plant.lifeSpan;
//     availableArea.textContent = plant.availableArea;
//     description.textContent = plant.description;
    
//     // Update counter
//     counter.textContent = `${index + 1} / ${plants.length}`;
    
//     // Update indicators
//     updateIndicators();
// }

// // Function to create indicator dots
// function createIndicators() {
//     indicatorsContainer.innerHTML = '';
    
//     plants.forEach((_, index) => {
//         const indicator = document.createElement('button');
//         indicator.classList.add('indicator');
//         indicator.setAttribute('aria-label', `Go to plant ${index + 1}`);
        
//         indicator.addEventListener('click', () => {
//             currentIndex = index;
//             displayPlant(currentIndex);
//         });
        
//         indicatorsContainer.appendChild(indicator);
//     });
// }

// // Function to update active indicator
// function updateIndicators() {
//     const indicators = document.querySelectorAll('.indicator');
//     indicators.forEach((indicator, index) => {
//         if (index === currentIndex) {
//             indicator.classList.add('active');
//         } else {
//             indicator.classList.remove('active');
//         }
//     });
// }

// // Next button functionality
// function nextPlant() {
//     currentIndex = (currentIndex + 1) % plants.length;
//     displayPlant(currentIndex);
// }

// // Previous button functionality
// function prevPlant() {
//     currentIndex = (currentIndex - 1 + plants.length) % plants.length;
//     displayPlant(currentIndex);
// }

// // Event listeners
// prevBtn.addEventListener('click', prevPlant);
// nextBtn.addEventListener('click', nextPlant);

// // Keyboard navigation
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowLeft') {
//         prevPlant();
//     } else if (e.key === 'ArrowRight') {
//         nextPlant();
//     }
// });

// // Touch swipe functionality for mobile
// let touchStartX = 0;
// let touchEndX = 0;

// const plantCard = document.getElementById('plantCard');

// plantCard.addEventListener('touchstart', (e) => {
//     touchStartX = e.changedTouches[0].screenX;
// });

// plantCard.addEventListener('touchend', (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
// });

// function handleSwipe() {
//     const swipeThreshold = 50;
    
//     if (touchStartX - touchEndX > swipeThreshold) {
//         // Swiped left
//         nextPlant();
//     }
    
//     if (touchEndX - touchStartX > swipeThreshold) {
//         // Swiped right
//         prevPlant();
//     }
// }

// // Initialize the app
// function init() {
//     createIndicators();
//     displayPlant(currentIndex);
// }

// // Run initialization when DOM is loaded
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
// } else {
//     init();
// }















// Plant data array
const plants = [
    {
        genericName: "Frangipani",
        scientificName: "Plumeria rubra",
        group: "Flowering Shrub",
        soilPH: "6.5 - 7.5",
        availableArea: "Tropical and subtropical regions, coastal areas",
        season: "Spring to Summer",
        lifeSpan: "50+ years",
        image: "https://www.bing.com/th/id/OIP.yYBgeGnWrEzoggnenn2fGgHaFj?w=263&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Frangipani is a beautiful flowering plant known for its fragrant, colorful flowers. It thrives in warm climates and is often used in lei making in Hawaii. The plant is drought-tolerant once established and produces stunning blooms in white, yellow, pink, and red."
    },
    {
        genericName: "Rose",
        scientificName: "Rosa spp.",
        group: "Flowering Shrub",
        soilPH: "6.0 - 6.5",
        availableArea: "Worldwide, temperate regions",
        season: "Spring to Fall",
        lifeSpan: "15-25 years",
        image: "https://picsum.photos/800/600?random=2",
        description: "Roses are classic flowering plants beloved for their beauty and fragrance. They require regular care including pruning, feeding, and disease management. Available in countless varieties, roses can be grown as bushes, climbers, or ground covers."
    },
    {
        genericName: "Lavender",
        scientificName: "Lavandula angustifolia",
        group: "Herbaceous Perennial",
        soilPH: "6.5 - 7.5",
        availableArea: "Mediterranean, temperate climates",
        season: "Summer",
        lifeSpan: "15-20 years",
        image: "https://picsum.photos/800/600?random=3",
        description: "Lavender is an aromatic herb prized for its fragrant purple flowers and essential oils. It's drought-tolerant, attracts pollinators, and has culinary and medicinal uses. Lavender thrives in sunny locations with well-drained soil."
    },
    {
        genericName: "Sunflower",
        scientificName: "Helianthus annuus",
        group: "Annual Flower",
        soilPH: "6.0 - 7.5",
        availableArea: "Worldwide, various climates",
        season: "Summer to Fall",
        lifeSpan: "1 year (Annual)",
        image: "https://picsum.photos/800/600?random=4",
        description: "Sunflowers are cheerful annual plants that follow the sun's movement. They can grow very tall and produce large flower heads filled with seeds. Sunflowers are easy to grow and are cultivated for ornamental purposes, seeds, and oil production."
    },
    {
        genericName: "Hibiscus",
        scientificName: "Hibiscus rosa-sinensis",
        group: "Flowering Shrub",
        soilPH: "6.0 - 7.0",
        availableArea: "Tropical and subtropical regions",
        season: "Year-round (tropical)",
        lifeSpan: "10-15 years",
        image: "https://picsum.photos/800/600?random=5",
        description: "Hibiscus produces large, showy flowers in vibrant colors. It's a popular ornamental plant in tropical gardens and can also be used to make tea. The plant needs plenty of sunlight and regular watering to thrive."
    },
    {
        genericName: "Jasmine",
        scientificName: "Jasminum officinale",
        group: "Climbing Vine",
        soilPH: "6.0 - 7.5",
        availableArea: "Warm temperate and tropical regions",
        season: "Summer",
        lifeSpan: "15-20 years",
        image: "https://picsum.photos/800/600?random=6",
        description: "Jasmine is renowned for its intensely fragrant white flowers. Often used in perfumes and teas, this climbing plant can cover walls and trellises. It blooms profusely during warm months and prefers full sun."
    }
];

// Current plant index
let currentIndex = 0;

// Get DOM elements
const plantImage = document.getElementById('plantImage');
const genericName = document.getElementById('genericName');
const scientificName = document.getElementById('scientificName');
const group = document.getElementById('group');
const soilPH = document.getElementById('soilPH');
const season = document.getElementById('season');
const lifeSpan = document.getElementById('lifeSpan');
const availableArea = document.getElementById('availableArea');
const description = document.getElementById('description');
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');

// Function to display plant information
function displayPlant(index) {
    const plant = plants[index];
    
    // Update all plant information
    plantImage.src = plant.image;
    plantImage.alt = plant.genericName;
    
    // Add error handling for image loading
    plantImage.onerror = function() {
        this.src = 'https://via.placeholder.com/800x600/4ade80/ffffff?text=' + encodeURIComponent(plant.genericName);
    };
    
    genericName.textContent = plant.genericName;
    scientificName.textContent = plant.scientificName;
    group.textContent = plant.group;
    soilPH.textContent = plant.soilPH;
    season.textContent = plant.season;
    lifeSpan.textContent = plant.lifeSpan;
    availableArea.textContent = plant.availableArea;
    description.textContent = plant.description;
    
    // Update counter
    counter.textContent = `${index + 1} / ${plants.length}`;
    
    // Update indicators
    updateIndicators();
}

// Function to create indicator dots
function createIndicators() {
    indicatorsContainer.innerHTML = '';
    
    plants.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('indicator');
        indicator.setAttribute('aria-label', `Go to plant ${index + 1}`);
        
        indicator.addEventListener('click', () => {
            currentIndex = index;
            displayPlant(currentIndex);
        });
        
        indicatorsContainer.appendChild(indicator);
    });
}

// Function to update active indicator
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Next button functionality
function nextPlant() {
    currentIndex = (currentIndex + 1) % plants.length;
    displayPlant(currentIndex);
}

// Previous button functionality
function prevPlant() {
    currentIndex = (currentIndex - 1 + plants.length) % plants.length;
    displayPlant(currentIndex);
}

// Event listeners
prevBtn.addEventListener('click', prevPlant);
nextBtn.addEventListener('click', nextPlant);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevPlant();
    } else if (e.key === 'ArrowRight') {
        nextPlant();
    }
});

// Touch swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

const plantCard = document.getElementById('plantCard');

plantCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

plantCard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left
        nextPlant();
    }
    
    if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right
        prevPlant();
    }
}

// Initialize the app
function init() {
    createIndicators();
    displayPlant(currentIndex);
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}