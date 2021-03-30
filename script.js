let myChart = document.getElementById('myChart').getContext('2d');

// global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


let populationChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617.594,
                181.045,
                153.060,
                106.519,
                105.162,
                95.072
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: { 
        title: {
            display: true,
            text: 'Largest cities in Massachusetts',
            fontSize: 25
        },
        legend: {
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        }

    }
})