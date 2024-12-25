function encode(recent_day) {
    var d = Date.now();
    var endDayFull = new Date(d)

    var startDayMS = d - recent_day * 86400 * 1000;
    var startDayFull = new Date(startDayMS);
    var getendMonth = parseInt(endDayFull.getMonth())+1
    var getstartMonth = parseInt( startDayFull.getMonth())+1
    var endDay = endDayFull.getFullYear() + '-' + getendMonth + '-' + endDayFull.getDate()
    var startDay = startDayFull.getFullYear() + '-' + getstartMonth + '-' + startDayFull.getDate()

    var endMonth = endDayFull.getFullYear() + '-' + endDayFull.getMonth()
    var startMonth = startDayFull.getFullYear() + '-' + startDayFull.getMonth()

    var endYear = endDayFull.getFullYear()
    var startYear = startDayFull.getFullYear()

    var JsonString = {
        "rp_creation_time:0": "{\"name\":\"creation_time\",\"args\":\"{\\\"start_year\\\":\\\"" + startYear
            + "\\\",\\\"start_month\\\":\\\"" + startMonth
            + "\\\",\\\"end_year\\\":\\\"" + endYear
            + "\\\",\\\"end_month\\\":\\\"" + endMonth
            + "\\\",\\\"start_day\\\":\\\"" + startDay
            + "\\\",\\\"end_day\\\":\\\"" + endDay + "\\\"}\"}","recent_posts:0":"{\"name\":\"recent_posts\",\"args\":\"\"}"
    }
    var myJSON = JSON.stringify(JsonString);
    let encodedStringBtoA = btoa(myJSON);
    console.log(encodedStringBtoA);
    return encodedStringBtoA;
}
function encodePage(recent_day) {
    var d = Date.now();
    var endDayFull = new Date(d)

    var startDayMS = d - recent_day * 86400 * 1000;
    var startDayFull = new Date(startDayMS);
    var getendMonth = parseInt(endDayFull.getMonth()) + 1
    var getstartMonth = parseInt(startDayFull.getMonth()) + 1
    var endDay = endDayFull.getFullYear() + '-' + getendMonth + '-' + endDayFull.getDate()
    var startDay = startDayFull.getFullYear() + '-' + getstartMonth + '-' + startDayFull.getDate()

    var endMonth = endDayFull.getFullYear() + '-' + endDayFull.getMonth()
    var startMonth = startDayFull.getFullYear() + '-' + startDayFull.getMonth()

    var endYear = endDayFull.getFullYear()
    var startYear = startDayFull.getFullYear()

    var JsonString = {
        "rp_creation_time:0": "{\"name\":\"creation_time\",\"args\":\"{\\\"start_year\\\":\\\"" + startYear
            + "\\\",\\\"start_month\\\":\\\"" + startMonth
            + "\\\",\\\"end_year\\\":\\\"" + endYear
            + "\\\",\\\"end_month\\\":\\\"" + endMonth
            + "\\\",\\\"start_day\\\":\\\"" + startDay
            + "\\\",\\\"end_day\\\":\\\"" + endDay + "\\\"}\"}", "rp_author:0": "{\"name\":\"my_groups_and_pages_posts\",\"args\":\"\"}","recent_posts:0":"{\"name\":\"recent_posts\",\"args\":\"\"}"
}
    var myJSON = JSON.stringify(JsonString);
    let encodedStringBtoA = btoa(myJSON);
    console.log(encodedStringBtoA);
    return encodedStringBtoA;
}
