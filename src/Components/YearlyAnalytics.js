import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// const data = [
//     {
//         "Year": "2023",
//         "Found": 69,
//         "Not Found": 88,
//     },
//     {
//         "Year": "2022",
//         "Found": 26,
//         "Not Found": 67,
//     },
//     {
//         "Year": "2021",
//         "Found": 50,
//         "Not Found": 10,
//     },
//     {
//         "Year": "2020",
//         "Found": 80,
//         "Not Found": 100,
//     },
//     {
//         "Year": "2019",
//         "Found": 40,
//         "Not Found": 20,
//     },
//     {
//         "Year": "2018",
//         "Found": 26,
//         "Not Found": 67,
//     },
//     {
//         "Year": "2017",
//         "Found": 26,
//         "Not Found": 67,
//     },
//     {
//         "Year": "2016",
//         "Found": 26,
//         "Not Found": 67,
//     },
// ]
const YearlyStatistics = ({yearData}) => {
    return (

    <ResponsiveBar
        data={yearData}
        keys={[
            'Found','Not Found'
        ]}
        indexBy="Year"
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
                    id: 'found'
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
            legend: 'Year',
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
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in Year: " + e.indexValue }}
    />
)}
export default YearlyStatistics;