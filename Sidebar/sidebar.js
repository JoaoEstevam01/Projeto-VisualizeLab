//Efeito SiderBar-Open
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

//Efeito do Gráfico 
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Vendas',
                data: [1200, 3000, 2000, 2300, 1500, 1000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

//Gráfico 2

var ctx = document.getElementById('rendimentoChart').getContext('2d');
var vendasChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Edu Bambu', 'Isaque Linux', 'João Bomba', 'Léo do Coque', 'Will Caça Rato'],
        datasets: [{
            label: 'Vendas 2023',
            data: [25000, 30000, 20000, 35000, 40000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Vendas por Pessoa em 2023'
        },
        legend: {
            position: 'right'
        }
    }
});



