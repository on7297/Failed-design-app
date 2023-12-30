const currentDate = new Date();

function formatDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year} ${month} ${day} ${dayOfWeek}`;
}

// HTML에 날짜 정보를 표시하는 부분 가져오기
const dateElement = document.getElementById("current-date");

// 현재 날짜를 가져와서 HTML에 표시
dateElement.textContent = formatDate(currentDate);

