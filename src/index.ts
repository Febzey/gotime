
/**
 * Converts milliseconds to # of days, hours, minutes, seconds since the given time.
 * @param time (milliseconds)
 * @returns "#Days, #Hours, #Minutes, #Seconds"
 */
export function dhms(time: number) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

/**
 * 
 * Takes a unix timestamp (milliseconds) and converts it to a readable format
 * example: 
 * `Apr 22 2022 13:15:12`
 * @param time 
 * @returns string
 */
export function unixToFormat(time: number) {
    const date = new Date(time);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = 0 + date.getMinutes();
    const seconds = 0 + date.getSeconds();
    return `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
}