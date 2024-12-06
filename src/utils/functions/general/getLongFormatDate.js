export default function getLongFormatDate(dateString) {

  const date = new Date(dateString);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  let hours = date.getHours();
  const minutes = date.getMinutes();
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  
  const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
  
  const formattedDate = `${month} ${day}, ${year} @ ${hours}:${minutesFormatted} ${ampm}`;

  return formattedDate;
}