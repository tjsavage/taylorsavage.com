export default function getDate(date:string): string {
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    
    const writtenDate = new Date(date);
    const year = writtenDate.getFullYear();
    const day = writtenDate.getUTCDate();
    const monthIndex = writtenDate.getMonth();
    const monthName = months[monthIndex];

    const dateString = `${monthName} ${day}, ${year}`;

    return (dateString);

}