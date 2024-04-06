//Variables are being created for the HTML elements .
//These are for the login/logout button and pop-up
const loginBtn = document.getElementById('login-button');
const loginPopup = document.getElementById('loginPopup');
const closePopupBtn = document.getElementById('close-popup');
const userNameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");
const loginSubmitBtn=document.getElementById("loginSubmit");
const display=document.getElementById("error-message");
const logoutBtn = document.getElementById("logout-button");

//These are for the elements that allow the admin to edit the website content and save changes.
const editIconBtn=document.getElementById("editicon");
const saveIconBtn = document.getElementById("savelogo");

//this is for admin to be able to view the subscription list.
const subscribePopupBtn = document.getElementById("subscribebutton");
const viewSubsBtn = document.getElementById('subsbtn');
const submitSubsBtn = document.getElementById('submitstyle');
const closeBtn = document.getElementById('closebtnsub');
const subsTablePopup = document.getElementById("tablepopup");
const closeSubsPopupBtn = document.getElementById("closebox");
const subsPopup = document.getElementById('nsPopup');


// Defining the JSON data objects for each page of the website by breaking them down to sections

//login section

// const user ={
//     "users":[
//         {
//             "username":"admin",
//             "password":"admin",
//             "role":"admin",
//             "email":"admin@admin.com"
//         },
//         {
//             "username":"user",
//             "password":"user",
//             "role":"site_user",
//             "email":"user@user.com"

//         }
//     ]
// };

// //JSON formatting for the seven pages of the website

// const pageData = {
//     index : {
//         maintopic:{
//             topic:"SRI LANKAN WILDLIFE"
//         },
//         section1 : {
//             title: "Flora And Fauna",

//             content: "The oldest known wildlife preserve in the world is located in Sri Lanka.About 25% of Sri Lanka's approximately 3500 plant species are native to the country. The island's vegetation types are primarily influenced by its topography and climate. One of the most amazing locations for plant enthusiasts to visit is the vast and immaculate Peradeniya Botanic Gardens. The gardens feature more than 4,000 distinct plant species, which are thought to be the best in all of Asia. Sri Lanka is presently home to roughly :",

//             list: [
//                 "123 species of mammals",
//                 "227 species of birds",
//                 "185 species of reptiles",
//                 "101 species of fish",
//                 "1000s of species of insects",
//                 "122 species of amphibians"
//             ]
//         },
//         section2: {
//             title: "The Big Five",

//             content: "The diversity and abundance of flora and fauna found in Sri Lanka's virgin forests are remarkable. However, indiscriminate exploitation is causing a rapid depletion of tree species like ebony, mahogany, satinwood, and teak as well as wildlife like elephants, leopards, bears, buffalo, and peafowl.Sri Lanka is also thought to be the greatest location on Earth to see blue whales, the largest animals to have ever lived. Five animals which are known to be the country’s most prominent wildlife attractions:",

//             list: [
//                 "Elephants",
//                 "Leopards",
//                 "Sloth bears",
//                 "Blue whale",
//                 "Sperm whale"
//             ]
//         },
//         section3: {
//             title: "Conservation Efforts",

//             content: "Many endemic species found in Sri Lanka are threatened by habitat loss, poaching, and conflicts between humans and wildlife. The nation has made major efforts in conservation to address these issues. Many species, including the Asian elephant, the Sri Lankan leopard, and many bird species, depend on national parks like Wilpattu, Udawalawe, and Yala as their home. Anti-poaching patrols, habitat restoration initiatives, and community engagement programmes are examples of conservation initiatives in these parks that work to foster wildlife coexistence with nearby communities. In addition, Sri Lanka has put programmes and policies in place to safeguard endangered species. Wildlife corridors were created across the nation to help animals move between dispersed habitats, thereby lowering isolation and increasing genetic diversity."
//         }
//     },

//     wildlifeintroduction:{
//         maintopic:{
//             topic:"Prominent Wildlife Locations In Sri Lanka"
//         },
//         section1:{
//             title:"Sinharaja Forest Reserve",
//             content:"One of Sri Lanka's least altered and biologically distinctive lowland rain forests is Sinharaja. It is a national park in Sri Lanka and a hotspot for biodiversity. UNESCO has named it a World Heritage Site and Biosphere Reserve, indicating its international significance.This dense rain forest, which is close to Ratnapura, is home to an incredible array of natural wonders. These include refreshing waterfalls, swift-moving streams, and pure freshwater streams.\n\nAlthough leopards are extremely rare to see in person, their frequent presence has been verified by tracks and other indicators. The most uncommon birds in Sri Lanka are the Green-billed Coucal, the rarest of all Sri Lankan birds, the Ashy-headed Barbbler, the Red-faced Malkoha, the Sri Lanka Blue Magpie, and the White-headed Starling.\n\nVisitors can find a comfortable accomodation in the Sinharaja Forest Edge hotel, located only 6.3km away from the forest site",
//         },
//         section2:{
//             title:"Mirissa Coastline",
//             content:"Mirissa is a stunning beach town in the centre of Sri Lanka's south coast.It has beautiful beaches, fantastic sunset views, and an abundance of delicious dining options.This coastline is always bustling with fun activites and attractions. The Coconut Hill Tree area is a summit with an amazing sunset view amongst the many hundreds of palm trees encircling the area. The Secret Beach is one of the best places to go surfing, snorkelling, swimming and for sighting turtles.Mirissa is famous for its nightlife and bars.\n\nAmong the most popular activities in the region is whale watching. The best months to see blue whales are March and April during the whale watching season, which runs from November to April.\n\nThe public bus from Unawatuna to Mirissa costs just $0.40 USD per person and takes takes about an hour for the whole journey. There are plenty of hotels in this area. A popular accomodation spot being the Paradise Beach Resort.",
//         },
//         section3:{
//             title:"Wasgamuwa National Park",
//             content:"Wasgamuwa National Park is situated 225 kilometres from Colombo in the districts of Matale and Polonnaruwa. Rivers almost entirely surround the park, and its natural beauty is further enhanced by the small mountain range of the Sudu Kanda and the small streams that follow it.\n\nAs early as 1938, a portion of Wasgamuwa was designated as a Strict Nature Reserve. There is a wide variety of wildlife in the park because of the early conservation efforts. Wasgamuwa is home to 140 species of birds and 23 species of mammals.Large herds of Sri Lankan axis deers and water buffalos are frequently spotted in this area. Wasgamuwa is well-known as the place for elephant herds and sloth bear spotting.\n\nVisitors are provided a Safari jeep and a tourguide for the tour.Three wildlife bungalows can be found in Wasgamuwa National Park: Kadurupitiya, Mahaweli, and Wawul Ebe. Accommodation would therefore not be a problem."

//         },
//         section4:{
//             title:"Horton Plains National Park",
//             content:"Horton Plains is spread over the southern ridge of the central highlands in between Nuwara Eliya and Haputale.It is the coldest and windiest location in the country. It consists of ecosystems such as Montane evergreen forests, grasslands, marshy lands and aquatic ecosystems. It is the highest tableland of the island. Horton Plains was declared a UNESCO World Heritage Site in 2010.\n\nThe World’s End in Horton Plains gives a lovely view of the low lying plains of the southern Sri Lanka.Visitors cn enjoy a 9km main trek of the Horton Plains taking a circular route which can be enjoyed within 3 hours.Horton Plains is a good place to spot herds of Sambar Deer,leopards, wild boars and monkeys.\n\nThere are many hotels found within 15k from the park."

//         },
//         section5:{
//             title:"Sea Turtle Hatchery Centre",
//             content:"The Mahamodara Sea Turtle Hatchery is a turtle conservation centre in Galle and it can be reached by a short drive from Galle. Here,volunteers strive to preserve Sea Turtles who are sure to reach destruction if left uncared for. Many sea turtles of all sizes are being cared for and left in their natural habitat here; you can help them hatch and raise their litters by keeping their area free of trash.\n\nIf your tour was satisfactory, it is encouraged to offer the centre a small donation in order to support a worthy cause. You could also join the conservation efforts as a volunteer and participate in activities like collecting turtle eggs, breeding and caring for these incredible animals."

//         },
//         section6:{
//             title:"Pinnawala Elephant Orphanage",
//             content:"The Pinnawala Elephant Orphanage is situated northwest of the town of Kegalle, at a distance of 90km from Colombo.The orphanage was originally founded in order to afford care and protection to the many orphaned Elephants found in the jungles of Sri Lanka. There are many daily activities available for visitors which inlcude feeding the elephants, bathing the elephants, watching elephant herds and riding on elephants. The entrance to the orphanage centre is lined with several small shops from which visitors can buy Sri Lankan souvenirs.\n\nMoreover, Pinnawala is an elephant paradise!"

//         },

//         table:{
//                 row1:{
//                     location: "Sinharaja Forest Reserve",
//                     animal_sightings: [
//                         "Sri Lanka Blue Magpie",
//                         "Sri Lanka Yellow-fronted Barbet",
//                         "Sri Lanka Red Faced Malkoha",
//                         "Sri Lanka Wood Pigeon"
            
//                     ],
//                     did_you_know: "Sinharaja world heritage site is rich in bird life with an impressive 147 species recorded to date. It is also the only location where 21 out of 26 bird species endemic to Sri Lanka may be viewed."
//                     },
            
//                 row2:{
//                     location: "Mirissa Coastline",
//                     animal_sightings: [
//                         "Blue whale",
//                         "Sperm whale",
//                         "Dolphin",
            
//                     ],
//                     did_you_know: "Mirissa attracts tourists not only for its coastal wildlife but for other fun activities including surfing, snorkeling and its vibrant nightlife."
//                     },
//                 row3:{
//                     location: "Wasgamuwa National Park",
//                     animal_sightings: [
//                         "Sloth Bear",
//                         "Elephant",
//                         "Peacock",
            
//                     ],
//                     did_you_know: "Sloth bears are not commonly spotted in many wildlife regions in Sri Lanka. Wasgamuwa is one of the very few places where you are likely to spot this fascinating creature."
//                     },
//                 row4:{
//                     location: "Horton Plains National Park",
//                     animal_sightings: [
//                         "Sambar deer",
//                         "Monkey",
//                         "Leopard",
//                         "Wildboar",
            
//                     ],
//                     did_you_know: "Horton Plains is reknowned for its breathtaking scenery, amazing waterfalls, the World’s End reservoir view and its three-hour long hiking trail"
//                     },
//                 row5:{
//                     location: "Sea Turtle Hatchery Centre",
//                     animal_sightings: [
//                         "Turtles"
            
//                     ],
//                     did_you_know: "Turtle nesting season in Sri Lanka takes place between November and May, while hatching season falls between January and June (peak February - April). You may like to bear this in mind when selecting your visit dates."
//                     },
//                 row6:{
//                     location: "Pinnawala Elephant Orphanage",
//                     animal_sightings: [
//                         "Elephants"
            
//                     ],
//                     did_you_know: "As of 2023,Pinnawala has the largest herd of captive elephants in the world."
//                     },
//             }
        
//     },

//     depwildlifecon:{
//         maintopic:{
//             topic:"The Department of Wildlife Conservation"
//         },
//         section1: {
//           title: "About",
//           content: "The Sri Lankan Biodiversity is Conserved by the Department of Wildlife Conservation. The Fauna and Flora Protection Ordinance No. 2 of 1937 grants legal protection to each and every species. Protected Areas serve as a network for the protection of habitats and the biodiversity they support. The Fauna and Flora Protection Ordinance and the Provisions of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) are used to regulate the international trade of wild species.\n\nSri Lanka's protected areas are essential to the preservation of biodiversity. Certain species are becoming threatened due to the shrinking and disappearance of their habitats brought about by urbanisation, development projects, and the country's fastest population growth. In the protected areas, human intervention is either strictly forbidden or restricted. As a result, these places serve as havens for various species, offering the perfect environment to guarantee their survival. Ecosystem services and places of cultural and historical significance are safeguarded by protected areas."
//         },
//         section2:{
//             title:"Protected Areas"
//         },
//         section3:{
//             title:"Department Location"
//         }

//     } ,

//     leopard:{
//         maintopic:{
//             topic:"Sri Lankan Leopards"
//         },
//         section1:{
//             title:"Where to find them?",
//             content:"Though the Sri Lanka leopard is classified as endangered, leopards can be more easily observed in Sri Lanka than in any other Asian country.",
//         },
//         section2:{
//             title:"Yala National Park",
//             content:"The best location in Sri Lanka to see leopards is Yala National Park. This is due to the fact that Yala has the island's largest number of leopards. Nonetheless, this data indicates that there are frequently a lot of visitors in the park as well, particularly during the peak travel months of December through March. Yala has a craggy coastline, as well as dry grasslands, arid scrubland, and isolated areas of jungle. There are also crocodiles, elephants, and sloth bears living in this park.\n\nDecember through August is  the best time to visit Yala National Park. The beginning of the year brings an abundance of greenery, which gradually becomes sparser until the end of August. September and October mark the closure of Yala National Park, and November is primarily rainy because of the monsoon season.",

//         },
//         section3:{
//             title:"Kumana National Park",
//             content:"Kumana National Park, which is neighbouring to Yala, is a more serene and smaller alternative for individuals who want to see leopards away from the crowd. Although sightings are less common here comparative to Yala, the scenery is still breathtaking. This park also serves mostly as a bird sanctuary, with many migratory species finding the expansive mangrove lagoon to be an ideal place to nest.\n\nSee striking water birds like painted storks, herons, egrets, and pelicans by going in May or June.",

//         },
//         section4:{
//             title:"Wilpattu National Park",
//             content:"The amazing Wilpattu National Park is located  opposite  from Yala. The largest and most exquisite wildlife reserve in Sri Lanka is located here. Even though Wilpattu is the largest wildlife park, it is far from the main tourist route and has fewer visitors than Yala because of its remote northwest location. Encircled by a web of interconnecting lakes, this densely forested park conceals sloth bears, countless bird species, and leopards in its dense undergrowth.\n\nWilpattu National Park is best visited in the summer when more animals congregate at the watering holes due to the dry season. Keep an eye out for sloth bears during the months of July and August as they consume the fallen fruit from the Palu tree.",

//         },
//         section5:{
//             title:"Threats to the leopard population of Sri Lanka",

//         },
//         section6:{
//             title:"Habitat Loss",
//             content:"The loss of habitat brought on by human activities like deforestation, urbanisation, and agricultural expansion is one of the main threats facing leopards in Sri Lanka.\n\n The main threat facing leopards in Sri Lanka is habitat loss brought on by human activity. This loss of habitat causes habitat to be reduced and fragmented, resulting in conflicts between humans and wildlife, prey loss, declining populations, and ecosystem imbalances that endanger the survival of the species and call for conservation measures.\n\nThe Department of Wildlife Conservation is in favour of declaring 2021 as Sri Lanka Leopard Day. It keeps spreading awareness of the ongoing threats the species faces.",
//         },
//         section7:{
//             title:"Poaching and Illegal Wildlife Trade",
//             content:"Leopards are sometimes targeted by poachers for their skin, bones, and other body parts, which are illegally traded in the wildlife market.\n\nPoaching and illegal wildlife trade severely diminish leopard populations, disrupt ecosystems, reduce genetic diversity, fuel illegal trade networks, and perpetuate cultural demand for leopard body parts.\n\nA multi-regional monitoring system was recently introduced by WNPS to aid in the conservation of Sri Lankan leopards. The fieldwork for the project started in 2022, and surveys and camera traps will be used to monitor leopards.\n\nThe research centres will foster networking among regional forest and wildlife officers and act as focal points for education to raise local awareness. Knowledge will be shared and research-based strategies for mitigating human-leopard conflicts will be developed.",

//         }

//     },

//     animalsinsrilanka:{
//         maintopic:{
//             topic:"Indigenous Animals Of Sri Lanka"
//         },
//         section1:{
//             title:"Sri Lankan Elephant",
//             content:"Out of the three subspecies of Asian elephants, the Sri Lankan elephant is the largest. It is indigenous to the island of Sri Lanka, primarily found in the country's dry zones in the north, east, and southeast."
//         },
//         section2:{
//             title:"Sri Lankan Junglefowl",
//             content:"The Ceylon junglefowl, also called Lafayette's junglefowl or the Sri Lankan junglefowl, is an indigenous bird species found only in Sri Lanka. It is closely related to the more well-known red junglefowl and serves as the nation's national bird."
//         },
//         section3:{
//             title:"Purple-Faced Langur",
//             content:"The purple-faced leaf monkey, or purple-faced langur, is an Old World monkey species that is unique to Sri Lanka. It has an unusually long tail that it uses for balance. It is only arboreal. This monkey is referred to as the Sri Lanka black monkey locally."
//         },
//         section4:{
//             title:"Grizzled Giant Squirrel",
//             content:"Large tree squirrels of the grizzled giant squirrel species are indigenous to southern India and Sri Lanka. Although it is regarded as one of the country's unofficial national animals, habitat loss and hunting are thought to be the main threats to its extinction."
//         },
//         section5:{
//             title:"Sri Lanka Blue Magpie",
//             content:"It is a vibrantly coloured Corvidae species that is unique to Sri Lanka. This species is extremely active and nimble because it is adapted to hunting in the dense canopy. However, it is rarely used for long-distance flying due to its weak flight."
//         },
//         section6:{
//             title:"Pygmy Blue Whale",
//             content:"One of the blue whale's subspecies is the pygmy. It is restricted to the southern Pacific and Indian oceans, in contrast to its enormous counterpart. Even though it goes by the name pygmy, it is still a very big animal, growing up to 24 metres (79 feet) in length."
//         },
//         section7:{
//             title:"Learn more about the 2 most prominent wildlife destinations of Sri Lanka below."
//            }
//     },

//     yalapark: {
//         maintopic:{
//             topic:"YALA NATIONAL PARK"
//         },
//         section1:{
//             title:"ABOUT YALA",
//             content:"One of Sri Lanka's must-see locations is Yala National Park, also called Ruhuna National Park.\n\nThis outstanding game reserve, which is the most well-known in Sri Lanka, is situated in the southeast of the country for good reason. Yala is divided into five blocks and occupies an area of 1,260 square kilometres. It is believed to have the highest density of leopards per square kilometre in the world. The most popular area of the reserve is Block I, which also offers the best opportunities for a leopard safari.\n\nAlthough leopards are usually difficult to spot, sightings in Yala are very good; you may see them lounging in the sun on rocky outcrops, in trees, across paths, and next to waterholes.\n\nSloth bears, Asian elephants, deer, monkeys, buffalo, and numerous bird species exist alongside with leopards. Yala provides the best chance to see leopards in Sri Lanka if that's your top priority."
//         },
//         section2:{
//             title:"HISTORY",
//             content:"Yala is one of the oldest national parks in Sri Lanka. It was first recognised as a wildlife sanctuary in 1900, but it wasn't until 1938 that it was made into a national park. The Buddhist temple Sithulpawa, located in the centre of Yala, was formerly a monastery and is believed to have been there for 2,000 years.\n\nThe monastery is believed to have supported 12,000 people at one point in time, and pilgrims from all over Sri Lanka still come to see it as a significant temple. Nearby are two other important cultural sites: Kataragama and Magul Maha Vihara"
//         },
//         section3:{
//             title:"GAME DRIVES",
//             content:"Yala National Park is an all year long wildlife safari destination. The best times to go are in early October, when the beginning of the drought and the regrowth of vegetation enhance the chances of seeing wildlife, and from May to September, when it is dry. Rainfall is brought in by the northeast monsoon from October/November through January, when the reserve becomes considerably more verdant.\n\nThe best time to see sloth bears is between May and July when they are in season and love to gorge on the delicious fruits of the Palu tree. Be ready to get up early because early morning and evening are the best times to see wildlife"

//         }
//     },

//     wilpattupark:{
//         maintopic:{
//             topic:"Wilpattu National Park"
//         },
//         section1:{
//             title:"ABOUT",
//             content:"Situated in northwest Sri Lanka, Wilpattu National Park spans 131,000 hectares and features a variety of landscapes, including open grasslands, shimmering lakes, and dense forests. A variety of wildlife, including the Sri Lankan leopard, sloth bears, elephants, spotted deer, water buffalo, and several bird species, can be found in this biodiverse haven, which supports a thriving ecosystem. Wilpattu's name, which alludes to natural lakes, confers cultural significance in addition to its ecological richness."
//         },
//         section2:{
//             title:"SAFARI CAMPING",
//             content:"Sri Lankan Expeditions is a Wilpattu-based expert in facilitating safari game drives and custom safari tours. For all of your needs arranging Wilpattu safari tours, we are the only company you need to contact. Our staff of wildlife specialists and photographers frequently visit Wilpattu and are familiar with the area." },
//         section3:{
//             title:"HISTORY",
//             content:"Wilpattu National Park, steeped in history and natural beauty, offers not just a wildlife sanctuary but also glimpses into ancient civilizations. The park features several archaeological sites, including ruins and remnants dating back to Sri Lanka's rich cultural heritage.Visitors can explore these archaeological marvels, such as ancient reservoirs, man-made tanks, and intricately carved stone pillars."
//         }
//     }
// }

//fetching and loading json content
fetchAndStoreJSON('pageData.json','websiteData');
fetchAndStoreJSON('user.json','userData');

//creating event listeners to control login popup box.
loginBtn.addEventListener('click', showLoginPage);
closePopupBtn.addEventListener('click', closeLoginPage);
loginSubmitBtn.addEventListener('click', authenticateUser);
logoutBtn.addEventListener('click', LogOutUser);
window.addEventListener('DOMContentLoaded', () => {   //arrow function allows many functios to be called for the same event.
    LoadContent();
    LoggedInStatus();
});

editIconBtn.addEventListener('click', () => {
    editPageContent();
});
saveIconBtn.addEventListener('click', () => {
    savePageContent();
});

//making a function for the table list of names and emails of users who have subscribed to the newsletter.
//this will be displayed when admin is authenticated and clicks on the viewSubBtn.
viewSubsBtn.addEventListener('click', ()=>{
    subsTablePopup.style.display = "block";
    updateSubscriptionTable();
});  //when 'view subscriptions list' button is clicked,open the table which retrieves data from the local storage.

// Add click event listener to the button
subscribePopupBtn.addEventListener('click', function() {
    subsPopup.style.display = 'block'; // Show the popup
});

submitSubsBtn.addEventListener('click', subscriptions);

closeSubsPopupBtn.addEventListener("click", function() {
    subsPopup.style.display = "none";
});

// Add click event listener to the close button
closeBtn.addEventListener('click', function() {
    const popup = document.getElementById('tablepopup');
    popup.style.display = 'none'; // Hide the popup
});

function fetchAndStoreJSON(JSONFile, storageKey) {
    fetch (JSONFile)
        .then(response => {
            if (!response.ok){
                throw new Error ('Network failure');
            } 
            return response.json();
        })
        .then(data => {
            localStorage.setItem(storageKey, JSON.stringify(data));
        })
        .catch(error => console.error("Error fetching JSON: " + error));
}   

function showLoginPage(){
    loginPopup.style.display="block";
}

function closeLoginPage(){
    loginPopup.style.display="none";
}

function LoggedInStatus(){
    let loggedIn = sessionStorage.getItem('LoggedIn');  //cant create const because the logged in values can change to either true or false
    loggedIn = JSON.parse(loggedIn);

    if (loggedIn === true) {
        editIconBtn.style.display="block";
        loginBtn.style.display="none";
        logoutBtn.style.display="block";
        viewSubsBtn.style.display = "block";
    } else {
        editIconBtn.style.display="none";
        loginBtn.style.display="block";
        logoutBtn.style.display="none";
        viewSubsBtn.style.display = "none";

    } //if user is logged in, they wll remain logged in even if they move between different pages.
}

function authenticateUser() {
    const username = userNameInput.value;
    const password = passwordInput.value;
    
    // Retrieving user data from localStorage(when dynamically loading content onto HTML.)
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    // // Checking if the username and password pair is correct for authenticating admin login
    if(userData && userData.users) {
        for(const user of userData.users) {
            if(user.username === username && user.password === password) {
                alert('Authentication successful');
                loginPopup.style.display="none";
                editIconBtn.style.display="block";
                loginBtn.style.display="none";
                logoutBtn.style.display="block";
                viewSubsBtn.style.display = "block";
                
                // Storing user data in sessionStorage to create a session.
                sessionStorage.setItem('LoggedIn', "true");

                return;
            }
        }
    }
    
    // If authentication failed
    display.textContent="Login error. Please check your username and password.";
    alert('Authentication failed. Invalid username or password.');
}

function LogOutUser() {
    editIconBtn.style.display="none";
    loginBtn.style.display="block";
    logoutBtn.style.display="none";
    viewSubsBtn.style.display = "none";
    sessionStorage.removeItem('LoggedIn');
}

function subsTable (){
    subsTablePopup.style.display = "flex";
}

function LoadContent() {
    const storedData = JSON.parse(localStorage.getItem('websiteData'));
    const currentPage = getCurrentPage();

    // Define page keys
    const pageKeys = Object.keys(storedData);

    // Define the current page based on the page keys
    const currentPageIndex = pageKeys.findIndex(key => key === currentPage);

    // Define the corresponding key from stored data
    const storedDataKey = Object.keys(storedData)[currentPageIndex];

    if (storedData) {
        if (storedDataKey === currentPage) {
            const pageData = storedData[storedDataKey];

            const main = pageData.maintopic;
            document.getElementById(`${currentPage}-main-topic`).textContent = main.topic;

            // Loop through sections
            for (let i = 1; i <= Object.keys(pageData).length - 1; i++) {
                const section = pageData[`section${i}`];
                if (section) {
                    // Check if title element exists
                    const sectionTitleElement = document.getElementById(`${currentPage}-section${i}-title`);
                    if (sectionTitleElement) {
                        sectionTitleElement.textContent = section.title;
                    }
                    // Check if content element exists
                    const sectionContentElement = document.getElementById(`${currentPage}-section${i}-content`);
                    if (sectionContentElement) {
                        sectionContentElement.textContent = section.content;
                    }
                    const sectionList = document.getElementById(`${currentPage}-section${i}-list`);
                    if (section.list && section.list.length > 0) {
                        section.list.forEach(item => {
                            if (item.trim() !== '') {
                                const listItem = document.createElement('li');
                                listItem.textContent = item;
                                sectionList.appendChild(listItem);
                            }
                        });
                    }
                }
            }
        } else {
            console.log('No data found for the current page in the local storage.');
        }
    }
}

function getCurrentPage() {
    // Get the current URL name
    const url = window.location.href;
    // Remove the .html extension from the url name
    const pageName = url.substring(url.lastIndexOf('/') + 1).replace('.html', '');
    return pageName;
}

function makeEditable(elementId) {
    const element = document.getElementById(elementId);
    
    // Check if the element exists
    if (element) {
        // Create a new editable element based on the type of the original element
        let editableElement;
        if (element.tagName.toLowerCase() === 'p' && element.classList.contains('firsttopic')) {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'h1') {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'h2') {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'h3') {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'h4') {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'h5') {
            editableElement = document.createElement('input');
            editableElement.type = 'text';
            editableElement.value = element.textContent;
        } else if (element.tagName.toLowerCase() === 'p') {
            editableElement = document.createElement('textarea');
            editableElement.textContent = element.textContent;
        } else if (element.tagName.toLowerCase() === 'ul') {
            // Convert each list item to a text input
            editableElement = document.createElement('ul');
            const listItems = element.querySelectorAll('li');
            if (listItems.length > 0) {
                listItems.forEach(li => {
                    const listItem = document.createElement('li');
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = li.textContent;
                    listItem.appendChild(input);
                    editableElement.appendChild(listItem);
                });
            } else {
                console.log('No list items found.');
            }
        } else {
            // If the element type is not supported for editing, return
            return;
        }

        // Copy attributes from the original element to the editable element
        Array.from(element.attributes).forEach(attr => {
            editableElement.setAttribute(attr.name, attr.value);
        });

        // Replace the original element with the editable one
        element.parentNode.replaceChild(editableElement, element);
    }
}

function editPageContent(){
    const storedData = JSON.parse(localStorage.getItem('websiteData'));
    const currentPage = getCurrentPage();
    editIconBtn.style.display = 'none';
    saveIconBtn.style.display = 'block';

    const indexPage = Object.keys(storedData)[0];
    const wildlifeintroductionPage = Object.keys(storedData)[1];
    const depwildlifeconPage = Object.keys(storedData)[2];
    const leopardPage=Object.keys(storedData)[3];
    const animalsInSriLankaPage=Object.keys(storedData)[4];
    const yalaParkPage=Object.keys(storedData)[5];
    const wilpattuParkPage=Object.keys(storedData)[6];

    if (currentPage == indexPage){
        makeEditable('index-main-topic');
        makeEditable('index-section1-title');
        makeEditable('index-section1-content');
        makeEditable('index-section1-list');
        makeEditable('index-section2-title');
        makeEditable('index-section2-content');
        makeEditable('index-section2-list');
        makeEditable('index-section3-title');
        makeEditable('index-section3-content');
    } else if (currentPage == wildlifeintroductionPage){
        makeEditable('wildlifeintroduction-main-topic');
        makeEditable('wildlifeintroduction-section1-title');
        makeEditable('wildlifeintroduction-section1-content');
        makeEditable('wildlifeintroduction-section2-title');
        makeEditable('wildlifeintroduction-section2-content');
        makeEditable('wildlifeintroduction-section3-title');
        makeEditable('wildlifeintroduction-section3-content');
        makeEditable('wildlifeintroduction-section4-title');
        makeEditable('wildlifeintroduction-section4-content');
        makeEditable('wildlifeintroduction-section5-title');
        makeEditable('wildlifeintroduction-section5-content');
        makeEditable('wildlifeintroduction-section6-title');
        makeEditable('wildlifeintroduction-section6-content');
    } else if (currentPage == depwildlifeconPage){
        makeEditable('depwildlifecon-main-topic');
        makeEditable('depwildlifecon-section1-title');
        makeEditable('depwildlifecon-section1-content');
        makeEditable('depwildlifecon-section2-title');
        makeEditable('depwildlifecon-section3-title');
    } else if (currentPage == leopardPage){
        makeEditable('leopard-main-topic');
        makeEditable('leopard-section1-title');
        makeEditable('leopard-section1-content');
        makeEditable('leopard-section2-title');
        makeEditable('leopard-section2-content');
        makeEditable('leopard-section3-title');
        makeEditable('leopard-section3-content');
        makeEditable('leopard-section4-title');
        makeEditable('leopard-section4-content');
        makeEditable('leopard-section5-title');
        makeEditable('leopard-section6-title');
        makeEditable('leopard-section6-content');
        makeEditable('leopard-section7-title');
        makeEditable('leopard-section7-content');
    } else if (currentPage == animalsInSriLankaPage){
        makeEditable('animalsinsrilanka-main-topic');
        makeEditable('animalsinsrilanka-section1-title');
        makeEditable('animalsinsrilanka-section1-content');
        makeEditable('animalsinsrilanka-section2-title');
        makeEditable('animalsinsrilanka-section2-content');
        makeEditable('animalsinsrilanka-section3-title');
        makeEditable('animalsinsrilanka-section3-content');
        makeEditable('animalsinsrilanka-section4-title');
        makeEditable('animalsinsrilanka-section4-content'); 
        makeEditable('animalsinsrilanka-section5-title');
        makeEditable('animalsinsrilanka-section5-content'); 
        makeEditable('animalsinsrilanka-section6-title');
        makeEditable('animalsinsrilanka-section6-content'); 
        makeEditable('animalsinsrilanka-section7-title');
    } else if (currentPage == yalaParkPage){
        makeEditable('yalapark-main-topic');
        makeEditable('yalapark-section1-title');
        makeEditable('yalapark-section1-content');
        makeEditable('yalapark-section2-title');
        makeEditable('yalapark-section2-content');
        makeEditable('yalapark-section3-title');
        makeEditable('yalapark-section3-content');
    } else if (currentPage == wilpattuParkPage){
        makeEditable('wilpattupark-main-topic');
        makeEditable('wilpattupark-section1-title');
        makeEditable('wilpattupark-section1-content');
        makeEditable('wilpattupark-section2-title');
        makeEditable('wilpattupark-section2-content');
        makeEditable('wilpattupark-section3-title');
        makeEditable('wilpattupark-section3-content');
    }
}

function revertEdits(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const parent = element.parentNode;
        let newElement;

        // Revert the element based on its tag name and class
        switch (element.tagName.toLowerCase()) {
            case 'input':
                if (element.classList.contains('editableHeading')) {
                    newElement = document.createElement('h1');
                } else if (element.classList.contains('editableHeading2')) {
                    newElement = document.createElement('h2');
                } else if (element.classList.contains('editableHeading3')) {
                    newElement = document.createElement('h3');
                } else if (element.classList.contains('editableHeading4')) {
                    newElement = document.createElement('h4');
                } else if (element.classList.contains('editableHeading5')) {
                    newElement = document.createElement('h5');
                } else if (element.classList.contains('editableList')) {
                    newElement = document.createElement('p');
                } else if (element.classList.contains('firsttopic')) {
                    newElement = document.createElement('p');
                }
                break;
            case 'textarea':
                newElement = document.createElement('p');
                break;
            case 'ul':
                case 'ul':
                newElement = document.createElement('ul');
                break;
        }

        // Copy attributes from the editable element to the new element
        Array.from(element.attributes).forEach(attr => {
            newElement.setAttribute(attr.name, attr.value);
        });

        // Replace the editable element with the new element
        parent.replaceChild(newElement, element);
    }
}

function savePageContent() {
    const currentPage = getCurrentPage();
    const storedData = JSON.parse(localStorage.getItem('websiteData'));
    editIconBtn.style.display = 'block';
    saveIconBtn.style.display = 'none';

    const indexPage = Object.keys(storedData)[0];
    const wildlifeintroductionPage = Object.keys(storedData)[1];
    const depwildlifeconPage = Object.keys(storedData)[2];
    const leopardPage=Object.keys(storedData)[3];
    const animalsInSriLankaPage=Object.keys(storedData)[4];
    const yalaParkPage=Object.keys(storedData)[5];
    const wilpattuParkPage=Object.keys(storedData)[6];

    if (currentPage == indexPage){
        // Main topic
        storedData.index.maintopic.topic = document.getElementById('index-main-topic').value;

        // Section 1
        storedData.index.section1.title = document.getElementById('index-section1-title').value;
        storedData.index.section1.content = document.getElementById('index-section1-content').value;
        const indexListItems = document.querySelectorAll('#index-section1-list input');
        storedData.index.section1.list = Array.from(indexListItems).map(item => item.value);
        
        // Section 2
        storedData.index.section2.title = document.getElementById('index-section2-title').value;
        storedData.index.section2.content = document.getElementById('index-section2-content').value;
        const indexSection2ListItems = document.querySelectorAll('#index-section2-list input');
        storedData.index.section2.list = Array.from(indexSection2ListItems).map(item => item.value);
        
        // Section 3
        storedData.index.section3.title = document.getElementById('index-section3-title').value;
        storedData.index.section3.content = document.getElementById('index-section3-content').value;

        // Reverting input boxes and text areas back to original html elements
        revertEdits('index-main-topic');
        revertEdits('index-section1-title');
        revertEdits('index-section1-content');
        revertEdits('index-section1-list');
        revertEdits('index-section2-title');
        revertEdits('index-section2-content');
        revertEdits('index-section2-list');
        revertEdits('index-section3-title');
        revertEdits('index-section3-content');
    } else if (currentPage == wildlifeintroductionPage){
        // Main topic
        storedData.wildlifeintroduction.maintopic.topic = document.getElementById('wildlifeintroduction-main-topic').value;

        // Section 1
        storedData.wildlifeintroduction.section1.title = document.getElementById('wildlifeintroduction-section1-title').value;
        storedData.wildlifeintroduction.section1.content = document.getElementById('wildlifeintroduction-section1-content').value;

        // Section 2
        storedData.wildlifeintroduction.section2.title = document.getElementById('wildlifeintroduction-section2-title').value;
        storedData.wildlifeintroduction.section2.content = document.getElementById('wildlifeintroduction-section2-content').value;

        // Section 3
        storedData.wildlifeintroduction.section3.title = document.getElementById('wildlifeintroduction-section3-title').value;
        storedData.wildlifeintroduction.section3.content = document.getElementById('wildlifeintroduction-section3-content').value;

        // Section 4
        storedData.wildlifeintroduction.section4.title = document.getElementById('wildlifeintroduction-section4-title').value;
        storedData.wildlifeintroduction.section4.content = document.getElementById('wildlifeintroduction-section4-content').value;

        // Section 5
        storedData.wildlifeintroduction.section5.title = document.getElementById('wildlifeintroduction-section5-title').value;
        storedData.wildlifeintroduction.section5.content = document.getElementById('wildlifeintroduction-section5-content').value;

        // Section 6
        storedData.wildlifeintroduction.section6.title = document.getElementById('wildlifeintroduction-section6-title').value;
        storedData.wildlifeintroduction.section6.content = document.getElementById('wildlifeintroduction-section6-content').value;

        // Reverting input boxes and text areas back to original html elements
        revertEdits('wildlifeintroduction-main-topic');
        revertEdits('wildlifeintroduction-section1-title');
        revertEdits('wildlifeintroduction-section1-content');
        revertEdits('wildlifeintroduction-section2-title');
        revertEdits('wildlifeintroduction-section2-content');
        revertEdits('wildlifeintroduction-section3-title');
        revertEdits('wildlifeintroduction-section3-content');
        revertEdits('wildlifeintroduction-section4-title');
        revertEdits('wildlifeintroduction-section4-content');
        revertEdits('wildlifeintroduction-section5-title');
        revertEdits('wildlifeintroduction-section5-content');
        revertEdits('wildlifeintroduction-section6-title');
        revertEdits('wildlifeintroduction-section6-content');
    } else if (currentPage == depwildlifeconPage){
        // Main topic
        storedData.depwildlifecon.maintopic.topic = document.getElementById('depwildlifecon-main-topic').value;

        // Section 1
        storedData.depwildlifecon.section1.title = document.getElementById('depwildlifecon-section1-title').value;
        storedData.depwildlifecon.section1.content = document.getElementById('depwildlifecon-section1-content').value;

        // Section 2
        storedData.depwildlifecon.section2.title = document.getElementById('depwildlifecon-section2-title').value;

        // Section 3
        storedData.depwildlifecon.section3.title = document.getElementById('depwildlifecon-section3-title').value;

        revertEdits('depwildlifecon-main-topic');
        revertEdits('depwildlifecon-section1-title');
        revertEdits('depwildlifecon-section1-content');
        revertEdits('depwildlifecon-section2-title');
        revertEdits('depwildlifecon-section3-title');
    } else if (currentPage == leopardPage){
        // Main topic
        storedData.leopard.maintopic.topic = document.getElementById('leopard-main-topic').value;

        // Section 1
        storedData.leopard.section1.title = document.getElementById('leopard-section1-title').value;
        storedData.leopard.section1.content = document.getElementById('leopard-section1-content').value;

        // Section 2
        storedData.leopard.section2.title = document.getElementById('leopard-section2-title').value;
        storedData.leopard.section2.content = document.getElementById('leopard-section2-content').value;

        // Section 3
        storedData.leopard.section3.title = document.getElementById('leopard-section3-title').value;
        storedData.leopard.section3.content = document.getElementById('leopard-section3-content').value;

        // Section 4
        storedData.leopard.section4.title = document.getElementById('leopard-section4-title').value;
        storedData.leopard.section4.content = document.getElementById('leopard-section4-content').value;

        // Section 5
        storedData.leopard.section5.title = document.getElementById('leopard-section5-title').value;

        // Section 6
        storedData.leopard.section6.title = document.getElementById('leopard-section6-title').value;
        storedData.leopard.section6.content = document.getElementById('leopard-section6-content').value;

        // Section 7
        storedData.leopard.section7.title = document.getElementById('leopard-section7-title').value;
        storedData.leopard.section7.content = document.getElementById('leopard-section7-content').value;

        revertEdits('leopard-main-topic');
        revertEdits('leopard-section1-title');
        revertEdits('leopard-section1-content');
        revertEdits('leopard-section2-title');
        revertEdits('leopard-section2-content');
        revertEdits('leopard-section3-title');
        revertEdits('leopard-section3-content');
        revertEdits('leopard-section4-title');
        revertEdits('leopard-section4-content');
        revertEdits('leopard-section5-title');
        revertEdits('leopard-section6-title');
        revertEdits('leopard-section6-content');
        revertEdits('leopard-section7-title');
        revertEdits('leopard-section7-content');

    } else if (currentPage == animalsInSriLankaPage){
        // Main topic
        storedData.animalsinsrilanka.maintopic.topic = document.getElementById('animalsinsrilanka-main-topic').value;

        // Section 1
        storedData.animalsinsrilanka.section1.title = document.getElementById('animalsinsrilanka-section1-title').value;
        storedData.animalsinsrilanka.section1.content = document.getElementById('animalsinsrilanka-section1-content').value;

        // Section 2
        storedData.animalsinsrilanka.section2.title = document.getElementById('animalsinsrilanka-section2-title').value;
        storedData.animalsinsrilanka.section2.content = document.getElementById('animalsinsrilanka-section2-content').value;

        // Section 3
        storedData.animalsinsrilanka.section3.title = document.getElementById('animalsinsrilanka-section3-title').value;
        storedData.animalsinsrilanka.section3.content = document.getElementById('animalsinsrilanka-section3-content').value;

        // Section 4
        storedData.animalsinsrilanka.section4.title = document.getElementById('animalsinsrilanka-section4-title').value;
        storedData.animalsinsrilanka.section4.content = document.getElementById('animalsinsrilanka-section4-content').value;

        // Section 5
        storedData.animalsinsrilanka.section5.title = document.getElementById('animalsinsrilanka-section5-title').value;
        storedData.animalsinsrilanka.section5.content = document.getElementById('animalsinsrilanka-section5-content').value;

        // Section 6
        storedData.animalsinsrilanka.section6.title = document.getElementById('animalsinsrilanka-section6-title').value;
        storedData.animalsinsrilanka.section6.content = document.getElementById('animalsinsrilanka-section6-content').value;

        // Section 7
        storedData.animalsinsrilanka.section7.title = document.getElementById('animalsinsrilanka-section7-title').value;

        revertEdits('animalsinsrilanka-main-topic');
        revertEdits('animalsinsrilanka-section1-title');
        revertEdits('animalsinsrilanka-section1-content');
        revertEdits('animalsinsrilanka-section2-title');
        revertEdits('animalsinsrilanka-section2-content');
        revertEdits('animalsinsrilanka-section3-title');
        revertEdits('animalsinsrilanka-section3-content');
        revertEdits('animalsinsrilanka-section4-title');
        revertEdits('animalsinsrilanka-section4-content'); 
        revertEdits('animalsinsrilanka-section5-title');
        revertEdits('animalsinsrilanka-section5-content'); 
        revertEdits('animalsinsrilanka-section6-title');
        revertEdits('animalsinsrilanka-section6-content'); 
        revertEdits('animalsinsrilanka-section7-title');
    } else if (currentPage == yalaParkPage){
        // Main topic
        storedData.yalapark.maintopic.topic = document.getElementById('yalapark-main-topic').value;

        // Section 1
        storedData.yalapark.section1.title = document.getElementById('yalapark-section1-title').value;
        storedData.yalapark.section1.content = document.getElementById('yalapark-section1-content').value;

        // Section 2
        storedData.yalapark.section2.title = document.getElementById('yalapark-section2-title').value;
        storedData.yalapark.section2.content = document.getElementById('yalapark-section2-content').value;

        // Section 3
        storedData.yalapark.section3.title = document.getElementById('yalapark-section3-title').value;
        storedData.yalapark.section3.content = document.getElementById('yalapark-section3-content').value;

        revertEdits('yalapark-main-topic');
        revertEdits('yalapark-section1-title');
        revertEdits('yalapark-section1-content');
        revertEdits('yalapark-section2-title');
        revertEdits('yalapark-section2-content');
        revertEdits('yalapark-section3-title');
        revertEdits('yalapark-section3-content');
    } else if (currentPage == wilpattuParkPage){
        // Main topic
        storedData.wilpattupark.maintopic.topic = document.getElementById('wilpattupark-main-topic').value;

        // Section 1
        storedData.wilpattupark.section1.title = document.getElementById('wilpattupark-section1-title').value;
        storedData.wilpattupark.section1.content = document.getElementById('wilpattupark-section1-content').value;

        // Section 2
        storedData.wilpattupark.section2.title = document.getElementById('wilpattupark-section2-title').value;
        storedData.wilpattupark.section2.content = document.getElementById('wilpattupark-section2-content').value;

        // Section 3
        storedData.wilpattupark.section3.title = document.getElementById('wilpattupark-section3-title').value;
        storedData.wilpattupark.section3.content = document.getElementById('wilpattupark-section3-content').value;

        revertEdits('wilpattupark-main-topic');
        revertEdits('wilpattupark-section1-title');
        revertEdits('wilpattupark-section1-content');
        revertEdits('wilpattupark-section2-title');
        revertEdits('wilpattupark-section2-content');
        revertEdits('wilpattupark-section3-title');
        revertEdits('wilpattupark-section3-content');
    }

    // Save the modified data back to local storage
    localStorage.setItem('websiteData', JSON.stringify(storedData));

    // Load content dynamically
    LoadContent();
}

//newsletter js
function subscriptions () {
    // Get the email input elements
    let form = document.getElementById('subscribeForm');
    let emailInput = document.getElementById("email_");
    let fullNameInput = document.querySelector('input[name="fullname"]');

    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();

    // Validate email format
    if (!isEmailValid(email)) {
        alert("Please enter a valid email address.");
        return; // Exit function if email format is invalid
    }

    // Store subscription data in localStorage
    let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
    subscriptions.push({ fullName: fullName, email: email });
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));

    // Handle form submission here, like sending data to server
    alert("Subscription successful!");
    subsPopup.style.display = "none"; // Close the popup after submission
    form.reset();
}

// Function to validate email format
function isEmailValid(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// all about the view subscription list table/dashboard

// Function to update the subscription table with the data from localStorage
function updateSubscriptionTable() {
    let subscriptionsData = JSON.parse(localStorage.getItem('newsletterSubscriptions'));
    let subscriptionTableBody = document.querySelector('#subscriptionTable tbody');

    // Clear existing table rows
    subscriptionTableBody.innerHTML = '';

    // Populate table with subscription data
    if (subscriptionsData) {
        subscriptionsData.forEach(function(subscription) {
            let row = document.createElement('tr');
            row.innerHTML = '<td>' + subscription.fullName + '</td><td>' + subscription.email + '</td>';
            subscriptionTableBody.appendChild(row);
        });
    }
}




