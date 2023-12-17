 function checkbox2(){
    var selectAllCheckbox = document.getElementById("all_website");
    var checkboxes = document.querySelectorAll('.DropdownWebsiteBox input[type="checkbox"]');
    var dropdownToggle = document.getElementById("dropdownToggle");
  
    selectAllCheckbox.addEventListener('change', function() {
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
    updateButtonText();
    });
  
    checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateButtonText);
    });
  
    function updateButtonText() {
    var selectedItems = [];
    checkboxes.forEach(function(checkbox, index) {
        if (index !== 0 && checkbox.checked) {
        selectedItems.push(checkbox.parentElement.textContent.trim());
        }
    });

// time




  
    if (selectedItems.length === checkboxes.length - 1) {
        dropdownToggle.textContent = "All Selected";
    } else if (selectedItems.length == 1) {

        if (document.getElementById("web1").checked){dropdownToggle.textContent = document.getElementById('web1').value;}
        else if (document.getElementById("web2").checked){dropdownToggle.textContent = document.getElementById('web2').value;}
        else if (document.getElementById("web3").checked){dropdownToggle.textContent = document.getElementById('web3').value;}
        else if (document.getElementById("web4").checked){dropdownToggle.textContent = document.getElementById('web4').value;}
        else if (document.getElementById("web5").checked){dropdownToggle.textContent = document.getElementById('web5').value;}
        else if (document.getElementById("web6").checked){dropdownToggle.textContent = document.getElementById('web6').value;}
        else if (document.getElementById("web7").checked){dropdownToggle.textContent = document.getElementById('web7').value;}
        else if (document.getElementById("web8").checked){dropdownToggle.textContent = document.getElementById('web8').value;}
        else if (document.getElementById("web9").checked){dropdownToggle.textContent = document.getElementById('web9').value;}
        else if (document.getElementById("web10").checked){dropdownToggle.textContent = document.getElementById('web10').value;}
        else if (document.getElementById("web11").checked){dropdownToggle.textContent = document.getElementById('web11').value;}
        else if (document.getElementById("web12").checked){dropdownToggle.textContent = document.getElementById('web12').value;}
    
    } 
    
    else if (selectedItems.length == 0) {dropdownToggle.textContent = "Select websites" ;}

    else {dropdownToggle.textContent = "Search on " + selectedItems.length + " website " ;}
    }
  }

const toggleButton = document.querySelector('.toggleButton');
  const warp = document.querySelector('.warpOfBUT');
  const body = document.body;
toggleButton.addEventListener('click', () => {
body.classList.toggle('dark');
warp.classList.toggle('ACTIVE');

});


function parseCustomDate(dateString) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parts = dateString.split("-");
  const day = parseInt(parts[0], 10);
  const monthIndex = months.indexOf(parts[1]);
  const year = parseInt(parts[2], 10);
  return new Date(year, monthIndex, day);
}

function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate().toString().padStart(2, '0');  // Add leading zero if needed
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function checkCheckbox() {
    var jsonDataUrl=[];
    if (document.getElementById("web1").checked) {jsonDataUrl.push(document.getElementById('web1').getAttribute('data-json'));}
    if (document.getElementById("web2").checked) {jsonDataUrl.push(document.getElementById('web2').getAttribute('data-json'));}
    if (document.getElementById("web3").checked) {jsonDataUrl.push(document.getElementById('web3').getAttribute('data-json'));}
    if (document.getElementById("web4").checked) {jsonDataUrl.push(document.getElementById('web4').getAttribute('data-json'));}
    if (document.getElementById("web5").checked) {jsonDataUrl.push(document.getElementById('web5').getAttribute('data-json'));}
    if (document.getElementById("web6").checked) {jsonDataUrl.push(document.getElementById('web6').getAttribute('data-json'));}
    if (document.getElementById("web7").checked) {jsonDataUrl.push(document.getElementById('web7').getAttribute('data-json'));}
    if (document.getElementById("web8").checked) {jsonDataUrl.push(document.getElementById('web8').getAttribute('data-json'));}
    if (document.getElementById("web9").checked) {jsonDataUrl.push(document.getElementById('web9').getAttribute('data-json'));}
    if (document.getElementById("web10").checked) {jsonDataUrl.push(document.getElementById('web10').getAttribute('data-json'));}
    if (document.getElementById("web11").checked) {jsonDataUrl.push(document.getElementById('web11').getAttribute('data-json'));}
    if (document.getElementById("web12").checked) {jsonDataUrl.push(document.getElementById('web12').getAttribute('data-json'));}
    return jsonDataUrl;
}


var notostore=[];
const cardArray = [];
const selectedElements = [];


var page404erre = document.querySelector('.page404erre');

function fetchcard() {
    let c= true;
    jsonDataUrl = checkCheckbox()

    var arrayLength = jsonDataUrl.length;
    if (notostore !== arrayLength) {
    
    for (let linksForBr = 0; linksForBr < jsonDataUrl.length; linksForBr++) {
        const elementlink = jsonDataUrl[linksForBr];

    const cardContainer = document.getElementById('card-container');
    // Remove existing cards
    cardContainer.innerHTML = '';

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayDayFormattedDate = formatDate(yesterdayDate);
    
    const dayBeforeYesterdayDate = new Date(currentDate);
    dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2);
    const datbeforyesterdayDayFormattedDate = formatDate(dayBeforeYesterdayDate);


    fetch(elementlink)
        .then(res => res.json())
        .then(data => {

            data.forEach(post => {
                console,console.log(post.dateOfSearch);
                console,console.log(formattedDate);
                console,console.log(yesterdayDayFormattedDate);
                
                if (document.getElementById("Recent").checked) {
                    if (post.dateOfSearch === formattedDate || post.dateOfSearch === yesterdayDayFormattedDate  || post.dateOfSearch === datbeforyesterdayDayFormattedDate){} 
                else {return;}
                }

                else if (document.getElementById("Today").checked){
                    if (post.dateOfSearch===formattedDate){}
                    else {return;}
                }

                else if (document.getElementById("date").checked==true){
                    const selectedDate = document.getElementById('date1').value;
                    const dateObject = new Date(selectedDate);
                    const day1 = dateObject.getDate();
                    const monthIndex = dateObject.getMonth();
                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    const year1 = dateObject.getFullYear();
                    const formattedDate1 = day1 + '-' + months[monthIndex] + '-' + year1;
                    if (post.dateOfSearch===formattedDate1){}
                    else {return;}}

                else if (document.getElementById("All_time").checked){}
                else {return;}

                // black_list
                const elementPut = post.bid_title;
                if (document.getElementById("black_list").checked && selectedElements.includes(elementPut)) {return;}

                // close
                const closingDate = parseCustomDate(post.DateClosing);
                if (document.getElementById("close").checked && closingDate > currentDate || closingDate === currentDate){}
                else if (document.getElementById("close").checked == false){}
                else{return;}
                
                if(c){
                    try{page404erre.classList.remove('ACTIVE');}
                    catch{}
                    let c1=false; 
                    c = c1;
                }

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';
                const openingDate = parseCustomDate(post.OpeningDate);
                const totalDays = (closingDate - openingDate) / (1000 * 3600 * 24);
                const daysPassed = (currentDate - openingDate) / (1000 * 3600 * 24);
                const progressPercentage = (daysPassed / totalDays * 100);
                if(progressPercentage <= 60){var backcolor = 'green' }
                else if(progressPercentage <= 80){var backcolor = '#2d682f' }
                else if(progressPercentage <= 100){var backcolor = '#4caf4f' }
                else{var backcolor = 'red' }

                const modifiedTitle = post.title.replace(/Repairing/g, '<span class="red-text">Repairing</span>');

                cardDiv.innerHTML = `
                    <div class="card-UrlName">
                        <div class="card-UrlNameTextbox">${post.UrlName}</div>
                    </div>
                    <div class="card-lastDate">${post.DateClosing}</div>
                    <div class="progress-container"> 
                        <div class="progress-bar" style="background-color: ${backcolor};  width: ${progressPercentage}%;"></div>
                    </div>
                    <div id="cardleftbox">
                        <div class="card-element"></div>
                        
                        <div class="card-tile"><p class="card-tile_date">${post.dateOfSearch}</p><p>${post.elementPut} - <h8>${post.bid_title}</h8></p>${modifiedTitle}</div>
                    </div>
                    <div class="remove-card-button"><div class="INremove-card-button"></div></div>
                `;

                // Add the elementPut value to the selectedElements array and store it in a cookie
                cardDiv.querySelector('.remove-card-button').addEventListener('click', () => {
                    const index = cardArray.indexOf(cardDiv);
                    if (index !== -1) {
                        cardArray.splice(index, 1);
                        cardContainer.removeChild(cardDiv);
                        if (!selectedElements.includes(elementPut)) {
                            selectedElements.push(elementPut);
                            setArrayCookie(selectedElements);
                        }
                    }
                });

                cardDiv.addEventListener('dblclick', () => {if (post.link) {window.open(post.link, '_blank');}});
                    cardArray.push(cardDiv);cardContainer.appendChild(cardDiv);
                });
            });
        }

        if(c){
            try{page404erre.classList.add('ACTIVE');}
            catch{}}
        }

}

function spacesetArrayCookie(array) {document.cookie = `selectedElements=${JSON.stringify(array)}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;`;}

function getArrayCookie() {
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)selectedElements\s*=\s*([^;]*).*$)|^.*$/, '$1');
  return cookieValue ? JSON.parse(cookieValue) : [];
}

const retrievedElements = getArrayCookie();
selectedElements.push(...retrievedElements);

function deleteArrayCookie() {
  document.cookie = 'selectedElements=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

var button = document.getElementById("SearchBut");
button.addEventListener("click", fetchcard);

function checkbox_date() {
if (document.getElementById("date").checked==true) {document.getElementById('date1').disabled = false;}
else{document.getElementById('date1').disabled = true;}
}

setInterval(checkbox_date, 1000);
setInterval(checkbox2, 1000);



function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Determine AM or PM
    var meridiem = (hours < 12) ? "AM" : "PM";

    // Convert to 12-hour format
    hours = (hours % 12 === 0) ? 12 : hours % 12;
    
    // Add leading zero if the values are less than 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Display the current time in the specified paragraph
    document.getElementById('current-time').innerHTML = hours + ":" + minutes + " " + meridiem;


}



// Call updateTime function every second
setInterval(updateTime, 1000);
