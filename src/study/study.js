const topics = {
    topic: [],
    topic1: [500,1250,1000,850,700],
    topic2: [600, 700, 800, 900, 750],
    topic3: [],
    // Add data arrays for more topics as needed
};

const topicsDropdown = document.getElementById("topics");
const lineChartCanvas = document.getElementById("lineChart");
let currentChart;

function drawLineChart(data) {
    // Check if a chart already exists, and if it does, destroy it
    if (currentChart) {
        currentChart.destroy();
    }

    const ctx = lineChartCanvas.getContext("2d");

    currentChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map((_, index) => `${index + 1 + 2018}`),
            datasets: [{
                label: "No. Of Dropouts",
                data: data,
                borderColor: "#007BFF",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: "#007BFF",
            }],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Years",
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "No. Of Students",
                    },
                },
            },
        },
    });
}

topicsDropdown.addEventListener("change", function () {
    const selectedTopic = topicsDropdown.value;
    const selectedData = topics[selectedTopic];
    drawLineChart(selectedData);
});

// Initial drawing with the first topic
drawLineChart(topics.topic1);
