/* ================================= 
  vairables
==================================== */
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-users-chart');
let user = document.getElementById('user-field');
const message = document.getElementById('message-field');
const send = document.getElementById('send');
const notifications = document.getElementById('notifications');
const trafficUl = document.querySelector('.traffic-header ul');
const bellNotification = document.querySelector('.bell');
const userField = document.getElementById('user-field');

/* ================================= 
  bell notifications
==================================== */
bellNotification.addEventListener('click', (e) => {
    const notificationsBadge = document.getElementById('notifications-badge');
    const notification = document.querySelectorAll('.notification');
    const bell = document.querySelector('.bell-svg');
    const visibility = notifications.getAttribute('data-visible');
    notificationsBadge.style.display = 'none';
    if (visibility === 'false' && e.target === bell) {
        notifications.setAttribute('data-visible', true);
    } else if (visibility === 'true' && e.target === bell) {
        notifications.setAttribute('data-visible', false);
    }
    for (let i = 0; i < notification.length; i++) {
        if (e.target === notification[i].querySelector('.close-icon')) {
           notification[i].remove();
        }
    }
});

/* ================================= 
  banner
==================================== */
// alert banner
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>    
    </div>
`;
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";    
    }     
});

/* ================================= 
  traffic chart
==================================== */
// traffic data advent listener
trafficUl.addEventListener('click', (e) => {
    for (let i = 0; i < trafficUl.children.length; i++) {
        if (e.target === trafficUl.children[0]) {
            trafficData.labels = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
            trafficData.datasets[0].data = [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
            trafficChart.update();
        } else if (e.target === trafficUl.children[1]) {
            trafficData.labels = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            trafficData.datasets[0].data = [220, 340, 300, 180, 240, 450, 300, 240, 400, 330, 200];
            trafficChart.update();
        } else if (e.target === trafficUl.children[2]) {
            trafficData.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
            trafficData.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
            trafficChart.update();
        } else if (e.target === trafficUl.children[3]) {
            trafficData.labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
            trafficData.datasets[0].data = [5000, 6340, 8300, 7180, 8240, 6450, 5300, 7240, 8400, 9330, 6200];
            trafficChart.update();
        }
        if (e.target === trafficUl.children[i]) {
            trafficUl.children[i].className = 'active';
        } else if (trafficUl.children[i].className === 'active' && trafficUl.children[i] !== e.target) {
            trafficUl.children[i].className = '';
        }
    }
});

// traffic data
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{ 
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]  
}

// traffic options
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }    
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

// traffic chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions    
});

/* ================================= 
  bar graph
==================================== */
// bar data
let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        labels: '# of Hits',
        data: [75, 115, 175, 125, 225, 200,100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

// bar options
let dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// bar chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/* ================================= 
  donut graph
==================================== */
// mobile data
let mobileData = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [{
        label: "# of Users",
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'    
        ]
    }]     
}

//mobile options
let mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            } 
        }     
    }
};

// mobile chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/* ================================= 
  message field
==================================== */
// search bar unable to complete at the time of submission
// const members = [
//     'Victoria Chambers',
//     'Dale Byrd',
//     'Dawn Wood',
//     'Dan Oliver'
// ];
// function autoComplete() {
//     let searchResult = document.querySelector('.search-result');
//     let li = document.createElement('li');
//     let userValue = user.value;
//     for (let i = 0; i < members.length; i++) {
//         if (members[i].toLowerCase().includes(userValue)) {
//             console.log(members[i])
//             li.innerHTML = members[i];
//             searchResult.appendChild(li);
//         }
//     }
// }

// send button
send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert("Please fill out user and message fields before sending");        
    } else if (user.value === '') {
        alert("Please fill out user field before sending");
    } else if (message.value === '') {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});