const topics = {
    topic0: [0, 0, 0, 0, 0],
    topic1: [500, 1250, 1000, 850, 700],
    topic2: [600, 700, 800, 900, 750],
    topic3: [500, 600, 700, 1000, 300],
    topic4: [300, 400, 1000, 300, 400],
    topic5: [600, 700, 900, 1300, 500],
    topic6: [300, 450, 650, 300, 100],
    topic7: [400, 600, 900, 750, 650],
    topic8: [550, 800, 500, 600, 590],
    topic9: [400, 600, 900, 450, 400],
    topic10: [125, 325, 250, 100, 50],
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
