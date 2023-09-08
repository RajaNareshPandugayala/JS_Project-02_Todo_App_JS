
var cardcontainer = document.getElementById("cardcontainer");
var cardname = document.getElementById("cardname");
var addtaskpopup = document.getElementById('addtaskpopup');
var parent = document.getElementById('parent');
var addItemPopup = document.getElementById('addItemPopup');
var notask = document.getElementById('notask');
var singleCard = document.getElementById('singleCard');


// Define a variable to track the clicked card
var clickedCard = null;
var header1 = null;

var uniqueCardIdCounter = 0; // Counter for generating unique card IDs

// Add Task button
function showAddTask() {
    addtaskpopup.classList.remove('hide');
    parent.classList.add('blur');
}

// Hide Task button
function hideAddTask() {
    addtaskpopup.classList.add('hide');
    parent.classList.remove('blur');
}

function addCard() {
    notask.classList.add('hide');
    hideAddTask();

    // create card elements
    var card = document.createElement('div');
    var cardHeading = document.createElement('h3');
    var line = document.createElement('hr');
    var itemList = document.createElement('div');
    var inLine = document.createElement('div');
    var aDButton = document.createElement('div');
    var addItem = document.createElement('button');
    var deleteButton = document.createElement('button');

    var cardId = "card" + uniqueCardIdCounter++; // Generate a unique card ID

    // append elements
    cardcontainer.appendChild(card);
    card.appendChild(cardHeading);
    card.appendChild(line);
    inLine.appendChild(itemList);
    aDButton.appendChild(deleteButton);
    aDButton.appendChild(addItem);
    inLine.appendChild(aDButton);
    card.appendChild(inLine);

    // give values to elements
    cardHeading.innerText = cardname.value;
    cardname.value = ""; // clear the popup
    card.classList.add('card');
    itemList.classList.add('itemList');
    aDButton.classList.add('aDButton');
    inLine.classList.add('inLine');
    addItem.classList.add('addItem');
    addItem.innerText = "+";
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = '🗑️';

    // delete button logic
    deleteButton.addEventListener('click', function () {
        card.remove();
        if (cardcontainer.innerText === '') {
            notask.classList.remove('hide');
        }
    });

    // add item button
    addItem.addEventListener('click', function () {
        addItemPopup.classList.remove('hide');
        parent.classList.add('blur');

        // Create Item
        var itemPopupheading = document.createElement('h3');
        var itemName = document.createElement('input');
        var addButton = document.createElement('button');
        var closeButton = document.createElement('button');

        itemName.classList.add('cardname');

        addItemPopup.innerHTML = ""; // Clear the popup

        // append elements
        addItemPopup.appendChild(itemPopupheading);
        addItemPopup.appendChild(itemName);
        addItemPopup.appendChild(addButton);
        addItemPopup.appendChild(closeButton);

        // give element values
        itemPopupheading.innerText = "Add New Item";
        addButton.innerText = "Add";
        addButton.classList.add('addButton');
        closeButton.innerText = "Close";
        closeButton.classList.add('closeButton');

        // add Item
        addButton.addEventListener('click', function () {
            addItemPopup.classList.add('hide');
            parent.classList.remove('blur');

            // create item elements
            var item = document.createElement('div');
            var itemtext = document.createElement('span');
            var markdone = document.createElement('button');
            markdone.classList.add('markdone');

            // append
            item.appendChild(itemtext);
            item.appendChild(markdone);

            // values
            var itemNameValue = itemName.value;
            itemtext.innerText = itemNameValue;
            markdone.innerText = "Mark Done";

            markdone.addEventListener('click', function () {
                itemtext.classList.toggle('done');
                markdone.remove();
            });

            // appending the item to item list
            itemList.appendChild(item);

            addItemPopup.innerHTML = ""; // Clear the popup
        });

        closeButton.addEventListener('click', function () {
            addItemPopup.classList.add('hide');
            parent.classList.remove('blur');
        });
    });



    // Card heading click event
    cardHeading.addEventListener('click', function () {


        var cardHeadingValue = cardHeading.innerText;
        var header = document.querySelector('.dashboard-heading');
        header.innerText = cardHeadingValue;
        header.style.color = 'aliceblue';

        header1 = header;

        card.style.position = 'relative';
        card.style.top = '50%';
        card.style.left = '50%';
        card.style.transform = 'translate(-50%, 25%)';

        clickedCard = card;


        // Hide left side 'Tasks List' and replace with back button
        document.querySelector('.task-header').style.color = 'black';
        document.querySelector('.add-button-text').style.display = 'none';


        singleCard.classList.remove('hide');
        cardcontainer.classList.add('hide');
        var copycard = card.cloneNode(true);
        singleCard.innerHTML = ""; // Clear any existing content
        singleCard.appendChild(copycard);
        parent.firstElementChild.classList.remove('hide');

        // Hide all other cards
        var cards = document.querySelectorAll('.card');
        cards.forEach(function (c) {
            if (c !== card) {
                c.classList.add('hide');


            }


        });
    });
}

function back() {

    notask.classList.add('hide');

    header1.style.color = 'black';

    if (clickedCard) {
        clickedCard.style.position = 'initial';
        clickedCard.style.top = 'initial';
        clickedCard.style.left = 'initial';
        clickedCard.style.transform = 'initial';
    }

    document.querySelector('.add-button-text').style.display = 'initial';

    document.querySelector('.task-header').style.color = 'aliceblue';


    parent.firstElementChild.classList.add('hide');
    singleCard.classList.add('hide');
    cardcontainer.classList.remove('hide');

    // Show all cards again
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (c) {
        c.classList.remove('hide');
    });

    singleCard.innerHTML = '';
}





/*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */
