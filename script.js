class Node {
    constructor(date, info) {
        this.date = date; // Expects an object: { day: X, month: Y }
        this.info = info;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(date, info) {
        const newNode = new Node(date, info);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    findNext(day, month) {
        let current = this.head;
        while (current) {
            if (current.date.month === month && current.date.day > day) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    findPrev(day, month) {
        let current = this.tail;
        while (current) {
            if (current.date.month === month && current.date.day < day) {
                return current;
            }
            current = current.prev;
        }
        return null;
    }
}
const holidayList = new DoublyLinkedList();
Object.keys(festivalData).forEach(monthStr => {
    const month = parseInt(monthStr);
    Object.keys(festivalData[month]).forEach(dayStr => {
        const day = parseInt(dayStr);
        const info = festivalData[month][day];
        
        if (info["National Holiday"]) {
            holidayList.append({ day: day, month: month }, info);
        }
    });
});

function checkDate() {
    const dateInput = document.getElementById('calendarInput').value;
    const resultBox = document.getElementById('resultDisplay');

    if (!dateInput) {
        resultBox.innerText = "Please select a date.";
        return;
    }
    const splitDate = dateInput.split('-');
    const day = parseInt(splitDate[2], 10);
    const month = parseInt(splitDate[1], 10);
    let output = "";
    const monthData = festivalData[month] || {};
    const info = monthData[day];

    if (info) {
        if (info["National Holiday"]) {
            output += `${padZero(day)}/${padZero(month)}\n\nNational Holiday!\n\n`;
            output += `Festival: ${info['Festival']}\nEvent: ${info['Event']}\n\n`;
        } else {
            output += `${padZero(day)}/${padZero(month)}\n\nNot a National Holiday\n\n`;
            output += `Festival: ${info['Festival']}\nEvent: ${info['Event']}\n\n`;
        }
    } else {
        output += `No data available for ${padZero(day)}/${padZero(month)}.\n\n`;
    }
    const nextHoliday = holidayList.findNext(day, month);
    const prevHoliday = holidayList.findPrev(day, month);

    if (nextHoliday) {
        output += `Next National Holiday: ${padZero(nextHoliday.date.day)}/${padZero(nextHoliday.date.month)}\n`;
        output += `Festival: ${nextHoliday.info['Festival']}\n`;
        output += `Event: ${nextHoliday.info['Event']}\n\n`;
    } else {
        output += `No more national holidays this month.\n\n`;
    }

    if (prevHoliday) {
        output += `Previous National Holiday: ${padZero(prevHoliday.date.day)}/${padZero(prevHoliday.date.month)}\n`;
        output += `Festival: ${prevHoliday.info['Festival']}\n`;
        output += `Event: ${prevHoliday.info['Event']}`;
    } else {
        output += `No previous national holidays this month.`;
    }
    resultBox.innerText = output;
}
function padZero(num) {
    return num.toString().padStart(2, '0');
}
