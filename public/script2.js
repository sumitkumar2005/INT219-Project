let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlides() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  const translateXValue = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${translateXValue}%)`;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds

function addCircle(img) {
  const circleContainer = document.querySelector(".circleCont");
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.innerHTML = `
    <img src="${img}" width="210" alt="">
  `;
  circleContainer.appendChild(circle);
}

// Call addCircle function for each image

// Add more images as needed

// Function to add a square with dynamically assigned ID and event listeners
function addSquare(img, type, name, price) {
  const box = document.querySelector(".store");
  const square = document.createElement("div");
  square.classList.add("square");

  // Dynamically assign ID using a counter
  square.id = `square-${document.querySelectorAll('.square').length + 1}`;

  square.innerHTML = `
    <img src="${img}" width="200" alt="">
    <div style="cursor: pointer;" class="hidden">
      <p>Add to Cart</p>
    </div>
    <p style="font-size: 17px;">${name}</p>
    <p style="font-size: 14px;">${type}</p>
    <p style="font-size: 16px;">&#8377; ${price}</p>
  `;

  // Append the square to the container
  box.appendChild(square);

  // Add event listeners to the new square
  addSquareEventListeners(square, img, type, name, price);
}
function addSquareEventListeners(square, img, type, name, price) {
  // Get the hidden element within the square
  const hidden = square.querySelector('.hidden');

  // Add event listener for mouse click
  square.addEventListener('click', () => {
    // Log the selected item details to the console
    console.log("Item added to cart:", { img, type, name, price });

    // Store the selected item details in localStorage
    const selectedItem = { img, type, name, price };
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems.push(selectedItem);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    updateCart(selectedItems);
  });

  // Add event listener for mouse enter (hover)
  square.addEventListener('mouseenter', () => {
    hidden.style.opacity = '1'; // Show with smooth transition
  });

  // Add event listener for mouse leave (hover out)
  square.addEventListener('mouseleave', () => {
    hidden.style.opacity = '0'; // Hide with smooth transition
  });
}


// Call addSquare function with unique identifier for each square
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24681706/2023/8/27/5e9ad3d5-951b-4b00-8a13-e1dcea0878cd1693134857976PowerlookMenMulticolouredTartanChecksOpaqueCheckedCasualShir1.jpg", "UrbanStitch", "Shirt 1", "599");
// Add more squares as needed

addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24681706/2023/8/27/5e9ad3d5-951b-4b00-8a13-e1dcea0878cd1693134857976PowerlookMenMulticolouredTartanChecksOpaqueCheckedCasualShir1.jpg", "UrbanStitch", "Shirt 1", "599");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28774580/2024/4/8/140aef5e-9eed-491a-9f94-34b4a6cd42f61712586807615CLAFOUTISMenPoloCollarPocketsT-shirt1.jpg", "UrbanVibe", "Shirt 2", "799");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9680385/2019/8/19/9a71effc-5ca8-4f56-94c0-2c71054102101566218377789-Roadster-Men-Shirts-8021566218376333-1.jpg", "Shirt", "Roadster", "999");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9680385/2019/8/19/9a71effc-5ca8-4f56-94c0-2c71054102101566218377789-Roadster-Men-Shirts-8021566218376333-1.jpg", "Shirt", "Roadster ", "799");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28774580/2024/4/8/140aef5e-9eed-491a-9f94-34b4a6cd42f61712586807615CLAFOUTISMenPoloCollarPocketsT-shirt1.jpg", "Shirt", "CLAFOUTIS ", "799");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21679342/2023/10/20/71d04655-ff55-470c-b472-37a345e182081697770842603BeneKleedPureCottonMid-RiseRelaxedFitDenimJeans1.jpg", "Jeans", "Bene Kleed Pur", "1299");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26229240/2023/12/4/81d5bc81-e440-44ca-8fbf-eeded9d1bb8a1701688349041FeatherSoftStraightRegularJeans1.jpg", "Jeans", "FeatherSoft ", "1099");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26833484/2024/1/8/594ee5b8-61b0-475b-ad06-814f77fe43e41704730827513HMWideHighJeans1.jpg", "Jeans", "HM Wide High Jeans", "1499");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25483104/2024/1/23/16b83be9-7024-439e-b788-39e38b8d89b91706010729025HIGHLANDERMenGreyStraightFitMid-RiseCleanLookStretchableJean1.jpg", "Jeans", "HIGHLANDER ", "899");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg", "Jeans", "HIGHLANDER ", "999");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24344304/2023/8/4/f5f359ce-c916-4748-a5c6-f600b38a27b51691147040993VeroModaWomenBlueWashedLonglineDenimJacket6.jpg", "Jacket", "HIGHLANDER  Jacket", "999");
// Call addSquare function with unique identifier for each square
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15444588/2021/9/13/08729d91-9316-4c8a-972f-03c77512fae11631529629695VastramayMensGreySilkBlendNehruJackets1.jpg", "Jacket", "Vastramay", "1999");
addSquare("https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27030072/2024/2/13/913279b1-42ad-4fd3-b4a8-3fc312c451491707826288189SHOWOFFWindcheaterWashedDenimJacket1.jpg", "Jacket", "Vastramay", "1999");

// Call addCircle function for each image
addCircle("https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg");
addCircle("https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg");
addCircle("https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg");
addCircle("https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg");
addCircle("https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg");
