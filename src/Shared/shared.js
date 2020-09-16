export const  kFormatter = (num) =>{
    return Math.abs(num) > 9999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}
// value: number
// array of 3 string: should contain className for neutral positive or negative value
export const defineStyle = (value, classes) => {
    const trend = Math.sign(value) // 1:positive -1:negative 0: 0
    switch (trend) {
        case 0: return classes[0];
        case 1: return classes[1];
        case -1: return classes[2];
        default: return null;
    }
}