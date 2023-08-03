/* ================================= 
  vairables
==================================== */
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-users-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

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