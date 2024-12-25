console.log("content worker adsmanager-CPQC!!!")
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        for (var i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name.toLowerCase() == "origin") {
                details.requestHeaders[i].value = "https://business.facebook.com";
                break;
            }
            if (i == details.requestHeaders.length - 1) {
                details.requestHeaders.push({
                    name: "origin",
                    value: "https://business.facebook.com"
                });
            }
        }
        details.requestHeaders.push({
            name: "referer",
            value: "https://business.facebook.com"
        });
        return { requestHeaders: details.requestHeaders };
    },
    {
        urls: [
            "https://*.facebook.com/*/dialog/oauth/confirm*",
            "https://*.facebook.com/api/graphqlbatch*",
            "https://*.facebook.com/api/graphql*",
            "https://*.facebook.com/ajax/timeline/*"
        ]
    }, ["blocking", "requestHeaders", "extraHeaders"]
);
_CreateTabOrFocus = (e, t) => {
    if (!("undefined" != typeof chrome && "tabs" in chrome))
        return !1;
    var o = chrome.tabs;
    o.query({
        url: e
    },
        (n) => {
            n.length > 0 ? o.update(n[0].id, {
                active: !0
            },
                (e) => {
                    "function" == typeof t && t()
                }) : o.query({
                    url: "chrome://newtab/*",
                    status: "complete"
                }, (n) => {
                    n.length > 0 ? o.update(n[0].id, {
                        url: e,
                        active: !0
                    }, (e) => {
                        "function" == typeof t && t()
                    }) : o.create({
                        url: e,
                        active: !0
                    }, (e) => {
                        "function" == typeof t && t()
                    })
                })
        })
}
chrome.browserAction.onClicked.addListener(() => {
    _CreateTabOrFocus(chrome.extension.getURL("popup.html"));
});

function SetPause(pauseValue){
    chrome.storage.local.set({ ['pause']: pauseValue }, () => {console.log("SetPause : ", pauseValue) })
}

var optionsDateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }

var g_cookies = ""
var g_fbid = ""
var g_token = ""
var g_businessId = ""
var g_beginDataTKQC = ""
var g_dtsg = ""
var bChiendich = true;
var bHoaDon = true;
var g_lsTKQC = []
var g_URL = ""
b64DecodeUnicode = (str) => {
    return decodeURIComponent(
        atob(str)
            .split("")
            .map((c) => {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
};

// chrome.storage.local.get(["URL"]).then((result) => {
//     g_URL = result.URL
// })


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDtsqFromHtml(cookie, url) {
    var html = await getHtmlFromUrl(cookie, url);
    let start_idx = html.search('"token"');
    start_idx += 9;
    return html.substring(
        start_idx,
        start_idx + html.substring(start_idx).indexOf('"')
    );
}

async function getHtmlFromUrl(cookie, url) {
    var myHeaders = new Headers();
    myHeaders.append("authority", "www.facebook.com");
    myHeaders.append("cache-control", "max-age=0");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("upgrade-insecure-requests", "1");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
    );
    myHeaders.append(
        "accept",
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    );
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-user", "?1");
    myHeaders.append("sec-fetch-dest", "document");
    myHeaders.append("accept-language", "vi,en;q=0.9");
    myHeaders.append("cookie", cookie);

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error", error));
}

async function getDtsg(cookie) {
    var url = "https://business.facebook.com/";
    var html_dtsg = await getHtmlFromUrl(cookie, url);
    var temp = html_dtsg.split('["DTSGInitialData",[],{"token":"');
    var arDtsg = temp[1].split('"},');
    if (arDtsg[0].Length < 50) {
        arDtsg = temp[2].split('"},');
    }
    return arDtsg[0];
}

function getCookieFB() {
    chrome.cookies.getAll(
        { url: "https://www.facebook.com" },
        async function (cookie) {
            try {
                let lst_str = [];
                let actor_id = "";
                for (let i = 0; i < cookie.length; i++) {
                    if (cookie[i].name == "c_user") {
                        actor_id = cookie[i].value;
                    }
                    lst_str.push(cookie[i].name + "=" + cookie[i].value);
                }
                let cookies = lst_str.join("; ");
                g_cookies = cookies;
                g_fbid = actor_id;
            } catch {
                return;
            }
        }
    );
}

async function getCurentToken(cookie, url) {
    var str = await getHtmlFromUrl(cookie, url);
    index_token = str.indexOf('__accessToken="');
    substring = str.substring(index_token);
    words = substring.split('"');
    return words[3];
}

var main_function = async () => {
    getCookieFB();
    var tokenEAAB = getCurentToken(
        g_cookies,
        "https://www.facebook.com/adsmanager/manage/account"
    );
};

function send_data_to_server(data, url) {
    console.log("send_data_to_server: "+ new Date().toLocaleDateString("vi-VN", optionsDateFormat), data);
    var myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(new Date().toLocaleDateString("vi-VN", optionsDateFormat) +":"+ result);
        })
        .catch((error) => {
            console.log(new Date().toLocaleDateString("vi-VN", optionsDateFormat) + ":"+ error);
        });
}

async function getBusinessId(token, stringCookie) {
    var url =
        "https://graph.facebook.com/v14.0/me/businesses?fields=business_users{id,name,role}&access_token=" +
        token;
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    var myHeaders = new Headers();
    myHeaders.append("authority", "www.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    myHeaders.append("viewport-width", "1920");
    myHeaders.append("x-fb-friendly-name", "ProfileCometTopAppSectionQuery");
    myHeaders.append("x-fb-lsd", "uTC1i5J1-1KWJCehIgHvP_");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("accept", "*/*");
    myHeaders.append("origin", "https://www.facebook.com");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("referer", "https://www.facebook.com");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", stringCookie);
    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            var businessId = result["data"][0]["id"];
            return businessId.toString();
        })
        .catch((error) => console.log("error getBusinessId: ", error));
}


async function RequestTTTKQCAsync(userId, token, stringCookie) {
    var url =
        "https://graph.facebook.com/v14.0/me/adaccounts?limit=1500&fields=name,account_id,account_status,userpermissions.user(" +
        userId +
        ")%7Brole%7D&access_token=" +
        token +
        "}&summary=1&locale=en_US";
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    var myHeaders = new Headers();
    myHeaders.append("authority", "business.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    myHeaders.append("viewport-width", "1920");
    myHeaders.append("x-fb-friendly-name", "ProfileCometTopAppSectionQuery");
    myHeaders.append("x-fb-lsd", "uTC1i5J1-1KWJCehIgHvP_");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("accept", "*/*");
    myHeaders.append("origin", "https://www.facebook.com");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("referer", "https://www.facebook.com");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", stringCookie);

    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error RequestTTTKQCAsync: ", error));
}

async function RequestFullInfoTTTKQCAsync(accId, token, stringCookie) {
    var url =
        "https://graph.facebook.com/v14.0/act_" +
        accId +
        "?fields=account_id,owner_business,created_time,next_bill_date,currency,adtrust_dsl,timezone_name,timezone_offset_hours_utc,business_country_code,disable_reason,adspaymentcycle{threshold_amount},balance,is_prepay_account,owner,all_payment_methods{pm_credit_card{display_string}},insights.date_preset(maximum){spend}&access_token=" +
        token +
        "&locale=en_US";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    var myHeaders = new Headers();
    myHeaders.append("authority", "business.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    //   myHeaders.append("viewport-width", "1920");
    //   myHeaders.append("x-fb-friendly-name", "ProfileCometTopAppSectionQuery");
    //   myHeaders.append("x-fb-lsd", "uTC1i5J1-1KWJCehIgHvP_");
    //   myHeaders.append("content-type", "application/x-www-form-urlencoded");
    //   myHeaders.append("sec-ch-ua-platform", '"Windows"');
    //   myHeaders.append("accept", "*/*");
    //   myHeaders.append("origin", "https://www.facebook.com");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    //   myHeaders.append("referer", "https://www.facebook.com");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", stringCookie);

    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.log("error RequestFullInfoTTTKQCAsync 1: ", error);
            var url =
                "https://graph.facebook.com/v14.0/act_" +
                accId +
                "?fields=account_id,owner_business,created_time,next_bill_date,currency,adtrust_dsl,timezone_name,timezone_offset_hours_utc,business_country_code,disable_reason,adspaymentcycle{threshold_amount},balance,insights.date_preset(maximum){spend},owner&access_token=" +
                token +
                "&locale=en_US";

            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
            var myHeaders = new Headers();
            myHeaders.append("authority", "business.facebook.com");
            myHeaders.append(
                "sec-ch-ua",
                '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
            );
            myHeaders.append("sec-ch-ua-mobile", "?0");
            myHeaders.append(
                "user-agent",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            );
            myHeaders.append("viewport-width", "1920");
            myHeaders.append("x-fb-friendly-name", "ProfileCometTopAppSectionQuery");
            myHeaders.append("x-fb-lsd", "uTC1i5J1-1KWJCehIgHvP_");
            myHeaders.append("content-type", "application/x-www-form-urlencoded");
            myHeaders.append("sec-ch-ua-platform", '"Windows"');
            myHeaders.append("accept", "*/*");
            myHeaders.append("origin", "https://www.facebook.com");
            myHeaders.append("sec-fetch-site", "same-origin");
            myHeaders.append("sec-fetch-mode", "navigate");
            myHeaders.append("sec-fetch-dest", "empty");
            myHeaders.append("referer", "https://www.facebook.com");
            myHeaders.append(
                "accept-language",
                "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7"
            );
            myHeaders.append("cookie", stringCookie);

            return fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    return result;
                })
                .catch((error) => {
                    console.log("error RequestFullInfoTTTKQCAsync 2: ", error);
                });
        });
}

function parseStringDateToFilter2(date) {
    var newStringDate = "";
    var month =
        date.split("/")[0].Length < 2
            ? "0" + date.split("/")[0]
            : date.split("/")[0];
    var day =
        date.split("/")[1].Length < 2
            ? "0" + date.split("/")[1]
            : date.split("/")[1];
    var year = date.split("/")[2];
    newStringDate = newStringDate + year + "-" + month + "-" + day; //
    return newStringDate;
}

async function GetDataFilterTime(
    token,
    stringCookie,
    timeSince,
    timeUntil,
    TKQC
) {
    var url =
        "https://graph.facebook.com/v14.0/?access_token=" + token + "&locale=en_US";

    var myHeaders = new Headers();

    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("accept", "*/*");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("cookie", stringCookie);

    var bodyBatch = "[";
    bodyBatch +=
        '{"relative_url":"/act_' +
        TKQC.ID +
        "?fields=account_id,insights.time_range({since: '" +
        timeSince +
        "',until:'" +
        timeUntil +
        '\'}){spend}","method":"GET"}]';

    const urlencoded = new URLSearchParams();
    urlencoded.append("batch", bodyBatch);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    return fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error GetDataFilterTime: ", error));
}

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}

async function buildFullTKQC(TKQC, jObjectMoreInfo, dateObj, bLastDay) {
    TKQC.tienTe = jObjectMoreInfo["currency"];
    try {
        if (!TKQC.tienTe.includes("VND")) {
            TKQC.Nguong = (
                parseFloat(
                    jObjectMoreInfo["adspaymentcycle"]["data"][0][
                        "threshold_amount"
                    ].toString()
                ) / 100
            ).toString();
            try {
                TKQC.soDu = (
                    parseFloat(jObjectMoreInfo["balance"].toString()) / 100
                ).toString();
            } catch (Exception) {
                TKQC.soDu = "0";
            }
        } else {
            TKQC.Nguong =
                parseFloat(jObjectMoreInfo["adspaymentcycle"]["data"][0][
                    "threshold_amount"
                ]).toFixed(2).toString();
            try {
                TKQC.soDu = parseFloat(jObjectMoreInfo["balance"]).toFixed(2).toString();
            } catch (Exception) {
                TKQC.soDu = "0";
            }
        }
    } catch {
        TKQC.Nguong = "0";
    }

    if (TKQC.soDu == null) TKQC.soDu = "0";

    try {
        TKQC.Limit = parseFloat(jObjectMoreInfo["adtrust_dsl"]).toFixed(2).toString();
    } catch (Exception) {
        TKQC.Limit = "0";
    }
    if (TKQC.Limit == "-1") TKQC.Limit = "NoLimit";
    //try { TKQC.tongTieu = jObjectMoreInfo["insights"]["data"][0]["spend"].ToString(); }
    //catch (Exception) { TKQC.tongTieu = "0"; }

    //TKQC.slThe = jObjectMoreInfo[""];//
    try {
        TKQC.role = item["userpermissions"]["data"][0]["role"].toString();
    } catch (Exception) {
        TKQC.role = "UNKNOWN";
    }
    try {
        TKQC.ngayLapHoaDon = jObjectMoreInfo["next_bill_date"].toString()
    }
    catch (error) {
        TKQC.ngayLapHoaDon = ""
    }
    try {
        TKQC.ngayTaoTK = jObjectMoreInfo["created_time"].toString()
    }
    catch (error) {
        TKQC.ngayTaoTK = ""
    }
    if (jObjectMoreInfo.hasOwnProperty("owner_business")) {
        TKQC.loaiTK = "Business";
    } else {
        TKQC.loaiTK = "Cá nhân thường";
    }
    try {
        TKQC.duoiThe =
            jObjectMoreInfo["all_payment_methods"]["pm_credit_card"]["data"][0][
                "display_string"
            ].toString()
        TKQC.slThe =
            jObjectMoreInfo["all_payment_methods"]["pm_credit_card"][
                "data"
            ].length.toString();
    } catch {
        TKQC.duoiThe = "-";
    }
    try {
        TKQC.nguongConLai = (parseFloat(TKQC.Nguong) - parseFloat(TKQC.soDu))
            .toFixed(2)
            .toString();
    } catch {
        TKQC.nguongConLai = "0";
    }
    try {
        TKQC.soNgayDenKyTT = jObjectMoreInfo["next_bill_date"].toString(); //today - nextbill
    }
    catch (er) {
        TKQC.soNgayDenKyTT = ""
    }
    try {


        TKQC.liDoDisable =
            jObjectMoreInfo["disable_reason"].toString() == "1"
                ? "ADS_INTEGRITY_POLICY"
                : jObjectMoreInfo["disable_reason"].toString() == "3"
                    ? "RISK_PAYMENT"
                    : jObjectMoreInfo["disable_reason"].toString() == "6"
                        ? "BUSINESS_INTEGRITY_RAR"
                        : "";
    } catch {
        TKQC.liDoDisable = ""
    }
    try {
        var utc = jObjectMoreInfo["timezone_offset_hours_utc"]
            .toString()
            .includes("-")
            ? jObjectMoreInfo["timezone_offset_hours_utc"].toString()
            : "+" + jObjectMoreInfo["timezone_offset_hours_utc"].toString();

        dateObj = convertTZ(dateObj, jObjectMoreInfo["timezone_name"].toString())
        TKQC.dateObj = dateObj
        TKQC.timeZone = jObjectMoreInfo["timezone_name"].toString() + "/ " + utc;
        TKQC.soTimeZone = parseInt(utc);
    }
    catch {

    }
    try {
        TKQC.taoTuBM = jObjectMoreInfo["owner_business"]["id"].toString();
        //TKQC.taoTuBM = jObjectMoreInfo["owner"].ToString();
    } catch {
        TKQC.taoTuBM = "";
    }
    try {
        TKQC.quocGiaTKQC = jObjectMoreInfo["business_country_code"].toString();
    } catch {
        TKQC.quocGiaTKQC = "-";
    }

    var month = dateObj.getMonth() + 1; // months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var timeSince = year + "-" + month + "-" + day;

    TKQC.dayOfData = dateObj.getDate() + "/" + parseInt(dateObj.getMonth() + 1) + "/" + dateObj.getFullYear();

    month = dateObj.getMonth() + 1; // months from 1-12
    day = dateObj.getDate() + 1;
    if (bLastDay) {
        day = dateObj.getDate()
    }
    year = dateObj.getFullYear();
    timeUntil = year + "-" + month + "-" + day;

    var dataFilterTime = await GetDataFilterTime(
        g_token,
        g_cookies,
        timeSince,
        timeUntil,
        TKQC
    );

    dataFilterTime = '{"data":' + dataFilterTime + "}";
    dataFilter = JSON.parse(dataFilterTime);
    if (dataFilter != null) {
        var itemBody = dataFilter["data"][0]["body"].toString();
        if (itemBody.includes("spend")) {
            try {
                var dataFilterItem = JSON.parse(itemBody);
                var tempTongTieu =
                    dataFilterItem["insights"]["data"][0]["spend"].toString();

                var tongTieu = "0";
                try {
                    tongTieu =
                        tempTongTieu != null
                            ? parseFloat(tempTongTieu).toFixed(2).toString()
                            : "0";
                } catch {
                    tongTieu = "0";

                }
                TKQC.tongTieu = tongTieu == "" ? "0" : tongTieu;
            } catch {
                TKQC.tongTieu = "0";

            }
        }
    } else {
        TKQC.tongTieu = "0";

    }
}

async function GetDataHoaDon(accId, startTime, endTime) {
    var url = "https://business.facebook.com/api/graphql/";

    var myHeaders = new Headers();

    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("accept", "*/*");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );
    myHeaders.append("origin", "https://business.facebook.com");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("cookie", g_cookies);

    var variables =
        // '{"count":20,"cursor":null,"end_time":' +
        // endTime +
        // ',"filters":[{"field":"PAYMENT_STATUS","operator":"IS_ANY","value":["Đã thanh toán"]}],"start_time":' +
        // startTime +
        // ',"paymentAccountID":"' +
        // accId +
        // '"}';


        variables = '{"paymentAccountID":"' + accId + '","count":10,"cursor":null,"filters":[{"field":"PAYMENT_STATUS","operator":"IS_ANY","value":["Đã thanh toán"]}],"start_time":' + startTime + ',"end_time":' + endTime + '}'

    const urlencoded = new URLSearchParams();
    urlencoded.append("variables", variables);
    urlencoded.append("server_timestamps", "true");
    urlencoded.append("doc_id", "7936089513168748");
    urlencoded.append("fb_api_caller_class", "RelayModern");
    urlencoded.append(
        "fb_api_req_friendly_name",
        "BillingHubTransactionsTableQuery"
    );
    urlencoded.append("fb_dtsg", g_dtsg);
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };
    return fetch(url, requestOptions)
        .then((response) =>
            response.text())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error GetDataHoaDon: ", error));
}

async function RequestGetListAds(
    accId,
    dateSince,
    dateUntil
) {
    var url =
        "https://adsmanager-graph.facebook.com/v18.0/act_" +
        accId +
        "/lightads?access_token=" +
        g_token +
        '&fields=id,name,adset_id&filtering=[{"field":"ad.delivery_status","operator":"IN","value":["active","inactive","deleted","error"]},{"field":"ad.impressions","operator":"GREATER_THAN","value":0},{"field":"draft_action","operator":"NOT_IN","value":["add"]}]&limit=20000&time_range={"since":"' +
        dateSince +
        '","until":"' +
        dateUntil +
        '"}';
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    var myHeaders = new Headers();
    myHeaders.append("authority", "business.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("accept", "*/*");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", g_cookies);
    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error RequestGetListAds: ", error));
}
async function getCostAds(IdTKQC, dateSince, dateUntil) {
    var url =
        "https://adsmanager-graph.facebook.com/v11.0/act_" +
        IdTKQC +
        "/insights?fields=ad_id,clicks,cost_per_outbound_click,cpc,cpm,cpp,ctr,frequency,impressions,reach,spend,results,actions,cost_per_action_type,mobile_app_purchase_roas,outbound_clicks,outbound_clicks_ctr,purchase_roas,website_purchase_roas&level=ad&time_range[since]=" +
        dateSince +
        "&time_range[until]=" +
        dateUntil +
        "&access_token=" +
        g_token +
        "&limit=1000";
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    var myHeaders = new Headers();
    myHeaders.append("authority", "business.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("accept", "*/*");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", g_cookies);
    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error getCostAds: ", error));
}
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

async function RequestGetDetailAds(Ids) {
    var url = "https://adsmanager-graph.facebook.com/v15.0/?access_token=" + g_token + "&method=get";
    var myHeaders = new Headers();
    myHeaders.append("authority", "business.facebook.com");
    myHeaders.append("origin", "https://business.facebook.com");
    myHeaders.append("referer", "https://business.facebook.com");
    myHeaders.append(
        "sec-ch-ua",
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("accept", "*/*");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("accept-language", "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7");
    myHeaders.append("cookie", g_cookies);
    const urlencoded = new URLSearchParams();
    urlencoded.append("__business_id", g_businessId);
    urlencoded.append("am_call_tags", "{\"data_manager\":\"AdsPEAdObjectTableDataManager\"}");
    urlencoded.append("fields", "[\"account_id\",\"adset_id\",\"campaign_id\",\"effective_status\",\"id\",\"name\",\"status\",\"ad_review_feedback\",\"bid_amount\",\"bid_info\",\"bid_type\",\"adset{name}\",\"campaign{name}\",\"conversion_domain\",\"conversion_specs\",\"created_time\",\"creative_history\",\"creative_link_url\",\"demolink_hash\",\"display_sequence\",\"engagement_audience\",\"naming_template_custom_fields\",\"metadata\",\"priority\",\"source_app_id\",\"tracking_and_conversion_with_defaults\",\"tracking_specs\",\"updated_time\",\"can_aggregate_social_feedback_on_edit\"]");
    urlencoded.append("ids", Ids);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    }
    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log("error RequestGetDetailAds: ", error));
}



async function GetDataTTCD(tkqc, dateObj, bLastDay) {


    var month = dateObj.getMonth() + 1; // months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var timeSince = year + "-" + month + "-" + day;

    var month = dateObj.getMonth() + 1; // months from 1-12
    var day = dateObj.getDate() + 1;
    if (bLastDay) {
        day = dateObj.getDate()
    }
    var year = dateObj.getFullYear();
    var timeUntil = year + "-" + month + "-" + day;
    var objectLsAds = await RequestGetListAds(
        tkqc.ID,
        timeSince,
        timeUntil
    );
    var lsAds = [];
    for (let k = 0; k < objectLsAds["data"].length; k++) {
        try {
            var ads = objectLsAds["data"][k]["id"].toString().trim();
            lsAds.push(ads);
        } catch { return }
    }

    if (lsAds.length == 0) return

    var objectresultCostAds = await getCostAds(
        tkqc.ID,
        timeSince,
        timeUntil
    );
    var costAds = {};
    var cpmAds = {};
    var ctrAds = {};
    var commentAds = {};
    var messAds = {};
    var chuyenDoiAds = {};
    for (let h = 0; h < objectresultCostAds["data"].length; h++) {
        try {
            var id = objectresultCostAds["data"][h]["ad_id"].toString();
            var impression = objectresultCostAds["data"][h]["impressions"].toString();
            var cpm = objectresultCostAds["data"][h]["cpm"].toString();
            var ctr = objectresultCostAds["data"][h]["ctr"].toString();
            var cost = (parseFloat(impression) * parseFloat(cpm)) / 1000;
            costAds[id] = cost.toString();
            cpmAds[id] = cpm;
            ctrAds[id] = ctr;
            for (
                let l = 0;
                l < objectresultCostAds["data"][h]["actions"].length;
                l++
            ) {
                if (
                    objectresultCostAds["data"][h]["actions"][l][
                        "action_type"
                    ].toString() == "comment"
                ) {
                    commentAds[id] =
                        objectresultCostAds["data"][h]["actions"][l]["value"].toString();
                }
                if (
                    objectresultCostAds["data"][h]["actions"][l][
                        "action_type"
                    ].toString() == "onsite_conversion.messaging_conversation_started_7d"
                ) {
                    messAds[id] =
                        objectresultCostAds["data"][h]["actions"][l]["value"].toString();
                }
                if (
                    objectresultCostAds["data"][h]["actions"][l][
                        "action_type"
                    ].toString() == "omni_complete_registration"
                ) {
                    chuyenDoiAds[id] =
                        objectresultCostAds["data"][h]["actions"][l]["value"].toString();
                }
            }
        } catch {
            continue;
        }
    }

    try {
        lsAds.forEach(async (AdsId) => {
            try {
                var TTCD = {};
                TTCD.dayOfData = dateObj.getDate() + "/" + parseInt(dateObj.getMonth() + 1) + "/" + dateObj.getFullYear();
                var tempObject = await RequestGetDetailAds(AdsId)
                TTCD.IdQC = AdsId;
                TTCD.TenQC = tempObject[AdsId]["name"].toString()
                TTCD.IdNhomQC = tempObject[AdsId]["adset_id"].toString()
                TTCD.TenNhomQC = tempObject[AdsId]["adset"]["name"].toString()
                TTCD.IdChienDich = tempObject[AdsId]["campaign_id"].toString()
                TTCD.TrangThai = tempObject[AdsId]["status"].toString()
                TTCD.ngayTaoQC = tempObject[AdsId]["created_time"].toString().split(" ")[0]
                TTCD.TenChienDich = tempObject[AdsId]["campaign"]["name"].toString()
                TTCD.IdTKQC = tkqc.ID
                TTCD.TenTKQC = tkqc.tenTK
                TTCD.tienTe = tkqc.tienTe

                dateNgayTaoQC = new Date(TTCD.ngayTaoQC)
                var month = dateNgayTaoQC.getUTCMonth() + 1 // months from 1-12
                var day = dateNgayTaoQC.getUTCDate()
                var year = dateNgayTaoQC.getUTCFullYear()
                TTCD.ngayTaoQC = month + "/" + day + "/" + year
                try {
                    var temp =
                        tempObject[AdsId]["tracking_and_conversion_with_defaults"][
                        "default_tracking"
                        ];
                    var lsIdPost = [];
                    for (let i = 0; i < temp.length; i++) {
                        try {
                            if (temp[i]["post"] != null) {
                                temp[i]["post"].forEach((id) => {
                                    var idPost = id.toString() ?? "";
                                    if (idPost != "") {
                                        if (!lsIdPost.includes(idPost)) lsIdPost.push(idPost);
                                    }
                                }
                                )
                            }
                        } catch { }
                    }

                    if (lsIdPost.length > 0) {
                        TTCD.xemQC = "https://fb.com/" + lsIdPost[0];
                        TTCD.lsLinkQC = [];
                        TTCD.lsLinkQC.push(TTCD.xemQC);
                        if (LinkQCInstance.Links == null) {
                            LinkQCInstance.Links = [];
                        }
                        LinkQCInstance.Links.push(TTCD.xemQC);
                        LinkQCInstance.Links = LinkQCInstance.Links.filter(onlyUnique);
                    }
                } catch {
                    TTCD.xemQC = "";
                }

                if (costAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.chiPhiQC = parseFloat(costAds[TTCD.IdQC]).toFixed(2).toString();
                } else {
                    TTCD.chiPhiQC = "0";
                    return
                }
                if (TTCD.chiPhiQC == "0") return

                if (cpmAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.cpm = parseFloat(cpmAds[TTCD.IdQC]).toFixed(2).toString();
                } else {
                    TTCD.cpm = "0";
                }
                if (ctrAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.ctr = parseFloat(ctrAds[TTCD.IdQC]).toFixed(2).toString();
                } else {
                    TTCD.ctr = "0";
                }
                if (messAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.mess = messAds[TTCD.IdQC];
                } else {
                    TTCD.mess = "0";
                }
                if (commentAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.comment = commentAds[TTCD.IdQC];
                } else {
                    TTCD.comment = "0";
                }
                if (chuyenDoiAds.hasOwnProperty(TTCD.IdQC)) {
                    TTCD.chuyenDoi = chuyenDoiAds[TTCD.IdQC];
                } else {
                    TTCD.chuyenDoi = "0";
                }

                TTCD.timeZone = tkqc.timeZone

                var dataTTCD = {};
                dataTTCD.tkqc = tkqc;
                dataTTCD.ttcd = TTCD;
                // send_data_to_server(
                //     dataTTCD,
                //     "http://103.162.14.172:5000/api/Q8/chiendich"
                // )
                send_data_to_server(
                    dataTTCD,
                    g_URL + "/api/Q8/chiendich"
                );
            } catch (error) {
                console.log("error TTCD 2:" + error);
            }
        })
    } catch (error) {
        console.log("error TTCD 1: " + error);
    }
}


async function GetHoaDon(tkqc) {
    var sinceDateObj = new Date();
    sinceDateObj.setDate(sinceDateObj.getDate() - 2)
    var timeSince = (Date.parse(sinceDateObj) / 1000).toFixed(0);
    UltilDateObj = new Date()
    var timeUntil = (Date.parse(UltilDateObj) / 1000).toFixed(0);
    var hoaDonData = await GetDataHoaDon(
        tkqc.ID,
        timeSince,
        timeUntil
    );
    hoaDonData = JSON.parse(hoaDonData)
    //console.log("hoadon: " + JSON.stringify(hoaDonData))
    try {
        for (
            let j = 0;
            j < hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"].length;
            j++
        ) {
            try {
                if (hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["formatted_payment_status"].toString().includes("Không")) {
                    continue;
                }
                var HoaDon = {};
                HoaDon.TrangThaiTKQC = tkqc.trangThai;
                HoaDon.TenTaiKhoan = tkqc.tenTK;
                HoaDon.IDTKQC = tkqc.ID;
                try{
                HoaDon.IDGiaoDich = hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["id"].toString();
                }catch{HoaDon.IDGiaoDich = ""}

                try{
                HoaDon.Ngay =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["transaction_time"].toString(); //transaction_time
                }catch{HoaDon.Ngay=new Date()}

                try{
                HoaDon.SoTien =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["total_amount"]["formatted_amount"].toString();
                }catch{HoaDon.SoTien = ""}
                try{
                HoaDon.PTThanhToan =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["payment_method_label"].toString();
                }catch{HoaDon.PTThanhToan =""}
                try{
                HoaDon.TrangThaiThanhToan =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["formatted_payment_status"].toString();
                }catch{HoaDon.TrangThaiThanhToan=""}
                try{
                HoaDon.IDHoaDonVAT =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["vat_invoice_id"];
                }catch{HoaDon.IDHoaDonVAT=""}
                try{
                HoaDon.MaThamChieu =hoaDonData["data"]["billable_account_by_payment_account"]["billing_payment_account"]["billing_txns"]["edges"][j]["node"]["tracking_id"].toString();
                }catch{HoaDon.MaThamChieu =""}
                try{
                HoaDon.Ngay = new Date(
                    Date.parse(
                        new Date(HoaDon.Ngay * 1000 + tkqc.soTimeZone * 60 * 60)
                    )
                ).toString();
            }catch{}

                var tempNgay = new Date(HoaDon.Ngay)

                var thang = ""
                var ngay = ""
                var nam = ""
                var gio = ""
                var phut = ""
                var giay = ""
                tempNgay.getMonth() + 1 < 10 ? thang = "0" + (tempNgay.getMonth() + 1).toString() : thang = (tempNgay.getMonth() + 1).toString()
                tempNgay.getDate() < 10 ? ngay = "0" + tempNgay.getDate().toString() : ngay = tempNgay.getDate().toString()
                nam = tempNgay.getFullYear().toString()
                tempNgay.getHours() < 10 ? gio = "0" + tempNgay.getHours().toString() : gio = tempNgay.getHours().toString()
                tempNgay.getMinutes() < 10 ? phut = "0" + tempNgay.getMinutes().toString() : phut = tempNgay.getMinutes().toString()
                tempNgay.getSeconds() < 10 ? giay = "0" + tempNgay.getSeconds().toString() : giay = tempNgay.getSeconds().toString()


                HoaDon.Ngay = thang + "/" + ngay + "/" + nam + " " + gio +
                    ":" + phut + ":" + giay
                var dataHoaDon = {};
                dataHoaDon.tkqc = tkqc;
                dataHoaDon.hoadon = HoaDon;
                console.log("guiHoadon");
                send_data_to_server(
                    dataHoaDon,
                    g_URL + "/api/Q8/hoadon"
                );
            } catch (error) {
                console.log("loi hoa don2: " + error);
            }
        }
    } catch (error) {
        console.log("loi hoa don1: " + error);
    }
}

async function GetTKQC(dateObj, bLastDay) {
    var g_beginDataTKQC = await RequestTTTKQCAsync(g_fbid, g_token, g_cookies);
    console.log(g_beginDataTKQC["data"].length);
    for (let i = 0; i < g_beginDataTKQC["data"].length; i++) {
        var tkqc = {};
        var item = g_beginDataTKQC["data"][i];
        tkqc.userId = g_fbid;
        tkqc.cookie = g_cookies;
        tkqc.token = g_token;
        tkqc.dtsg = g_dtsg;
        tkqc.tenTK = item["name"];
        tkqc.ID = item["account_id"];
        console.log(tkqc.ID);
        var status = item["account_status"];
        if (status == 2) tkqc.trangThai = "Vô hiệu hóa";
        else if (status == 3) tkqc.trangThai = "Cần thanh toán";
        else tkqc.trangThai = "Hoạt động";
        var moreInfo = await RequestFullInfoTTTKQCAsync(
            tkqc.ID,
            g_token,
            g_cookies
        );
        await buildFullTKQC(tkqc, moreInfo, dateObj, bLastDay);
        if (tkqc.tongTieu == null || tkqc.tongTieu == "" || tkqc.tongTieu == "0") continue
        g_lsTKQC.push(tkqc)
        send_data_to_server(tkqc, g_URL + "/api/Q8/tkqc");
    }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if("DONT_SLEEP"== request.action){
        sendResponse("DONT_SLEEP response")
        console.log("dont sleep");
    }
    else if ("AUTO_START_RUN" == request.action) {
        sendResponse("AUTO_START_RUN response")

        g_cookies = request.g_cookies
        g_token = request.g_token
        g_fbid = request.g_fbid
        g_dtsg = request.g_dtsg
        g_businessId = request.g_businessId
        g_URL = request.g_URL
        bRunHoaDon = request.bRunHoaDon

        g_lsTKQC = []
        var dateObj = new Date()
        await GetTKQC(dateObj, false)
        //if (request.checkHoaDon == true && bRunHoaDon) {
        if (request.checkHoaDon == true) {
            if(bHoaDon == true){
                bHoaDon = false
            
                g_lsTKQC.forEach((tkqc) => {
                    GetHoaDon(tkqc)
                })
            }
            else{
                bHoaDon = true
            }
        }
        
        if (request.checkCD == true) {
            bChiendich = true
            g_lsTKQC.forEach((tkqc) => {
                GetDataTTCD(tkqc, tkqc.dateObj, false)
            })
        }
        else {
            bChiendich = false
        }
        chrome.storage.local.set({ ['notification']: ["Đã chạy xong phiên lúc: " + new Date().toString()] },() => {
            chrome.storage.local.set({ ['status']: "chạy xong, chờ phiên tiếp theo" },() => { });
        });
        SetPause(false)
    }
    else if ("AUTO_START_RUN_LAST_DAY" == request.action) {
        sendResponse("AUTO_START_RUN_LAST_DAY response")
        g_cookies = request.g_cookies
        g_token = request.g_token
        g_fbid = request.g_fbid
        g_dtsg = request.g_dtsg
        g_businessId = request.g_businessId
        g_URL = request.g_URL

        g_lsTKQC = []
        var dateObj = new Date()
        dateObj.setDate(dateObj.getDate() - 1)
        await GetTKQC(dateObj, true)
        if (request.checkCD == true) {
            bChiendich = true
            g_lsTKQC.forEach((tkqc) => {
                GetDataTTCD(tkqc, tkqc.dateObj, true)
            })
        }
        else {
            bChiendich = false
        }
        chrome.storage.local.set({ ['notification']: ["Đã chạy xong phiên 13h lúc: " + new Date().toString()] },() => {
            chrome.storage.local.set({ ['status']: "chạy xong 13h hàng ngày, chờ phiên tiếp theo" },() => { });
        });
        SetPause(false)
    } else if (request.action == "GET_TOKEN") {
        sendResponse("GET_TOKEN response")
        g_cookies = request.data["cookie"];
        g_token = request.data["token"];
        g_fbid = request.data["fbid"];
        g_dtsg = await getDtsg(g_cookies);
        chrome.storage.local.set({ ['g_dtsg']: g_dtsg },() => { })
        g_businessId = await getBusinessId(g_token, g_cookies);
        chrome.storage.local.set({ ['g_businessId']: g_businessId },() => { })
 
        //chrome.tabs.remove(sender.tab.id);
        chrome.storage.local.set({ ['notification']: ["Lấy xong token lúc: " + new Date().toLocaleDateString("vi-VN", optionsDateFormat)] },() => { })
        chrome.storage.local.set({ ['status']: "lấy token xong" },() => { })
        //SetPause(false)
    }
    return true
});


// function _CreateTabOrFocus(e, t) {
//     if (!("undefined" != typeof chrome && "tabs" in chrome))
//         return !1;
//     var o = chrome.tabs;
//     o.query({
//         url: e
//     },
//         (n) => {
//             n.length > 0 ? o.update(n[0].id, {
//                 active: !0
//             },
//                 (e) => {
//                     "function" == typeof t && t()
//                 }) : o.query({
//                     url: "chrome://newtab/*",
//                     status: "complete"
//                 }, (n) => {
//                     n.length > 0 ? o.update(n[0].id, {
//                         url: e,
//                         active: !0
//                     }, (e) => {
//                         "function" == typeof t && t()
//                     }) : o.create({
//                         url: e,
//                         active: !0
//                     }, (e) => {
//                         "function" == typeof t && t()
//                     })
//                 })
//         })
// }
// chrome.browserAction.onClicked.addListener(() => {
//     _CreateTabOrFocus(chrome.extension.getURL("popup.html"));
// });


chrome.runtime.onInstalled.addListener(
    async (info, tab) => {
        chrome.tabs.create({
            'url': chrome.runtime.getURL("popup.html")
        });
    }
)

chrome.runtime.onStartup.addListener( () => {
    console.log(`onStartup()`);
});

chrome.runtime.onConnect.addListener(port => {
    if (port.name !== 'foo') return;
    port.onMessage.addListener(onMessage);
    port.onDisconnect.addListener(deleteTimer);
    port._timer = setTimeout(forceReconnect, 250e3, port);
  });
  function onMessage(msg, port) {
    console.log('received', msg, 'from', port.sender);
  }
  function forceReconnect(port) {
    deleteTimer(port);
    port.disconnect();
  }
  function deleteTimer(port) {
    if (port._timer) {
      clearTimeout(port._timer);
      delete port._timer;
    }
  }