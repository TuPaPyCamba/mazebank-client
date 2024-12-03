import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts}) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [12344,123344,554444,77555,42334],
                backgroundColor: ['#F11135','#960920','#960920','#E10D30','#F44864']
            }
        ],
        labels: ['credito', 'credito Platinum', 'credito Plus','debito plus', 'debito platino']
    }
    return <Doughnut options={{ cutout: '50%', plugins: {
        legend: { display: false}
    }}} data={data} />
}

export default DoughnutChart
