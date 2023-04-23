export const getChartData = (select: number) => {
  switch (select) {
    case 0:
      return {
        datasets: [
          {
            data: [64, 143, 161, 126, 137, 111, 143, 251, 383, 278, 783, 783],
            label: 'All',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      }
    case 1:
      return {
        datasets: [
          {
            data: [282, 350, 411, 502, 635, 800, 647, 142, 370, 527],
            label: 'All',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      }
    case 2:
      return {
        datasets: [
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 800],
            label: 'All',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      }
    case 3:
      return {
        datasets: [
          {
            data: [40, 20, 100, 160, 240, 38, 574, 167, 800, 784],
            label: 'All',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      }
    case 4:
      return {
        datasets: [
          {
            data: [40, 270, 10, 190, 234, 16, 240, 38, 74, 167, 508, 800],
            label: 'All',
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      }
    default:
      return {
        datasets: [
          {
            data: [],
            label: '',
            borderColor: '',
            fill: false
          }
        ]
      }
  }
}
