export function getDeliveryDate() {
    const today = new Date();

    const threeDaysLater = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);

    const day = threeDaysLater.getDate();
    const month = threeDaysLater.getMonth() + 1;
    const year = threeDaysLater.getFullYear();

    const deliveryDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    return deliveryDate;
}