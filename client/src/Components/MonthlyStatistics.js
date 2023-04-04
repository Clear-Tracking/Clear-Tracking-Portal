import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "Month": "Jan 2022",
        "Found": 26,
        "Not Found": 67,
    },
    {
        "Month": "Feb 2022",
        "Found": 50,
        "Not Found": 10,
    },
    {
        "Month": "Mar 2022",
        "Found": 80,
        "Not Found": 100,
    }
]
const MonthlyStatistics = () => (

    <ResponsiveBar
        data={data}
        keys={[
            'Found','Not Found'
        ]}
        indexBy="Month"
        margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 2,
                padding: 4,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 1,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Found'
                },
                id: 'dots'
            },
            // {
            //     match: {
            //         id: 'Not Found'
            //     },
            //     id: 'dots'
            // }
        ]}
        borderRadius={5}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendPosition: 'middle',
            legendOffset: 40
        }}
        // axisLeft={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'Count',
        //     legendPosition: 'middle',
        //     legendOffset: -40
        // }}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={20}
        labelTextColor="white"
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in month: " + e.indexValue }}
    />
)
export default MonthlyStatistics;