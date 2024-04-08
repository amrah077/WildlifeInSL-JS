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

//These are for admin to be able to view the subscription list.
const subscribePopupBtn = document.getElementById("subscribebutton");
const viewSubsBtn = document.getElementById('subsbtn');
const submitSubsBtn = document.getElementById('submitstyle');
const closeBtn = document.getElementById('closebtnsub');
const subsTablePopup = document.getElementById("tablepopup");
const closeSubsPopupBtn = document.getElementById("closebox");
const subsPopup = document.getElementById('nsPopup');


//fetching and loading the JSON content
fetchAndStoreJSON('pageData.json','websiteData');  //all the html pages
fetchAndStoreJSON('user.json','userData');  //login data


//creating event listeners to control the logging in functions.
loginBtn.addEventListener('click', showLoginPage);
closePopupBtn.addEventListener('click', closeLoginPage);
loginSubmitBtn.addEventListener('click', authenticateUser);
logoutBtn.addEventListener('click', LogOutUser);
//event listeners for loading JSON content on the browser and to check user's login/out sessions status.
window.addEventListener('DOMContentLoaded', () => {   //arrow function allowing to call many functions for the same event(browser window).
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

// when subscribe button is clicked, popup appears for details to be filled.
subscribePopupBtn.addEventListener('click', function() {
    subsPopup.style.display = 'block'; // Show the popup
});

//Once details(email/name) are filled, user clicks submit button. popop disappears.
submitSubsBtn.addEventListener('click', subscriptions);

//if user clicks on the 'close', popup closes. (SUBSCRIBE POPUP)
closeSubsPopupBtn.addEventListener("click", function() {
    subsPopup.style.display = "none";
});

// closing the table popup when 'x' is clicked on.(VIEW SUBSCRIPTION POPUP)
closeBtn.addEventListener('click', function() {
    const popup = document.getElementById('tablepopup');
    popup.style.display = 'none'; // Hide the popup
});

//'storageKey' is the name given to the KEY in which the JSON data will be stored in the local storage of the browser.
function fetchAndStoreJSON(JSONFile, storageKey) { 
    fetch (JSONFile) //data is fetched(request) from the particular URL(i have used functions below to retriieve the correct data for each webpage.)
        .then(response => {
            if (!response.ok){
                throw new Error ('Network failure');
            } 
            return response.json(); //if response is okay, the JSON data is parsed, converted to JS objects 
        })
        .then(data => { //"data" is a variable which holds the parsed JSON data retrieved from the JSONFile (parameter) URL.
            localStorage.setItem(storageKey, JSON.stringify(data)); //stringify converts JS object to JSON strings which will then be stored in the browser's local storage using the created storageKey. 
        })
        .catch(error => console.error("Error fetching JSON: " + error));
}   

function showLoginPage(){
    loginPopup.style.display="block";
}

function closeLoginPage(){
    loginPopup.style.display="none";
}

//login sessions are stored in the session storage(so everytime user leaves the page, the session will be terminated).
//if the user is logged in, they wll remain logged in even if they move between different pages.
function LoggedInStatus(){
    let loggedIn = sessionStorage.getItem('LoggedIn'); //SETTING THIS STRING VALUE TO THE SESSION STORAGE(JSON only stores strings).
    loggedIn = JSON.parse(loggedIn); //converting it to JS object so it csn be used as a boolean variable(true/false).

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

    } 
}

function authenticateUser() {
    const username = userNameInput.value; //.value to retrieve the input entered by the user.
    const password = passwordInput.value;
    
    // Retrieving the user data from localStorage(when dynamically loading content onto HTML.)
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
                
                // Storing the user data in sessionStorage to create a session.
                sessionStorage.setItem('LoggedIn', "true");

                return; //to exit function if the login was successful. Prevents repetitiom of the loop.
            }
        }
    }
    
    // If authentication failed
    display.textContent="Login error. Please check your username and password."; //.textcontent. Basically I am adding this error message inside the HTML tag created (display variable).
    alert('Authentication failed. Invalid username or password.');
}

//Occurs when you click the logout button.
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

// newsletter js
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




