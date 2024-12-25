console.log("content script adsmanager-CPQC!!!");

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
    var temp = html_dtsg.split(',{"token":"');
    var arDtsg = temp[1].split('"},');
    if (arDtsg[0].Length < 50) {
        arDtsg = temp[2].split('"},');
    }
    return arDtsg[0];
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

$(document).ready(() => {
  setTimeout(async (actor_id) => {
    var cookies = document.cookie;
    var actor_id = cookies.substring(cookies.indexOf("c_user=")).split(';')[0].replace("c_user=","")
    var data = document.documentElement.innerHTML;
    index_token = data.indexOf("__accessToken=");
    substring = data.substring(index_token);
    words = substring.split('"');

    chrome.storage.local.set({ cookies: cookies }).then(() => { })
    chrome.storage.local.set({ actor_id: actor_id }).then(() => { })
    chrome.storage.local.set({ token:  words[1] }).then(() => { })
    chrome.runtime.sendMessage({
      action: "GET_TOKEN",
       data: { cookie: cookies, fbid: actor_id, token: words[1] },
    }, ()=>{});
    //window.close()
  }, 3 * 1000);


  setInterval(()=>{
    chrome.runtime.sendMessage(
        {
            action: "DONT_SLEEP"
        },
        function (dataResponse) {
        }
    )
  }, 20000)

});

function getFBId(cookie) {
  var actor_id;
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i].name == "c_user") {
      actor_id = cookie[i].value;
      break;
    }
  }
  return actor_id;
}
