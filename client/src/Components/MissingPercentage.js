import { ResponsivePie } from '@nivo/pie'

const MissingPercentage = () => {
    const data = [
        {
            "id": "Found Rate",
            "label": "Found Rate ",
            "value": 5
        },
        {
            "id": "Missing Rate",
            "label": "Missing Rate",
            "value": 7
        }
    ]
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 90, left: 80 }}
            startAngle={45}
            endAngle={405}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'paired' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '0.2'
                    ]
                ]
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={10}
            arcLinkLabelsTextColor={{ theme: 'labels.text.fill' }}
            arcLinkLabelsDiagonalLength={22}
            arcLinkLabelsStraightLength={27}
            arcLinkLabelsThickness={3}
            arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
            arcLabelsSkipAngle={15}
            arcLabelsTextColor="#ffffff"
            theme={{ fontSize: 15 }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 2,
                    padding: 4,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 2,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'Found Rate'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Missing Rate'
                    },
                    id: 'lines'
                },
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 30,
                    translateY: 50,
                    itemsSpacing: 5,
                    itemWidth: 200,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export default MissingPercentage;