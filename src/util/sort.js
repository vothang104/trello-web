
export const mapOrder = (array, order, key) => {
    array.sort((a, b) => {
        return order.indexOf(a[key]) - order.indexOf(b[key]);
    })
    return array;
}