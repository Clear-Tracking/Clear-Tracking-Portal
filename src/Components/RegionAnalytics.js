import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "Region": "Mumbai",
        "Missing": 26
        
    },
    {
        "Region": "Delhi",
        "Missing": 50
    },
    {
        "Region": "Chennai",
        "Missing": 80
    },
    {
        "Region": "Kolkata",
        "Missing": 40
    }
]
const RegionAnalytics = ({regionData}) => (

    <ResponsiveBar
        data={regionData}
        keys={[
            'missing'
        ]}
        indexBy="region"
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
        // fill={[
        //     {
        //         match: {
        //             id: 'Missing'
        //         },
        //         id: 'dots'
        //     },
        //     // {
        //     //     match: {
        //     //         id: 'Not Missing'
        //     //     },
        //     //     id: 'dots'
        //     // }
        // ]}
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
            legend: 'Region',
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
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in Region: " + e.indexValue }}
    />
)
export default RegionAnalytics;