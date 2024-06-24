
const fetchData = async () => {
    const data = await fetch("https://ibapi.in/Sale_Info_Home.aspx/Button_search_Click", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json; charset:utf8",
        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "TS01211a4c=01e1feefeab2a54adfc76fbd4584478fe6cab89e8ffb9ec114b82bc181cf84721be8c33851c8abbfeb434c2432750f1349dece1f15; ASP.NET_SessionId=lmnvyeokdluuv2hzrrn51r2r; TS0118b6c0=01e1feefea7d383dcc7e79ad7622805663f7133109db46e3ab2c996ce6ac956d59135060512921319f0e9bf408d7f4edb964f8770ba5993d54259d536894dfecccbaf2ff2b",
        "Referer": "https://ibapi.in/sale_info_home.aspx",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"key_val\":[[\"State\",\"'UP'\"],[\"District\",\"'140'\"]]}",
      "method": "POST"
    }).then(res => res.json());
    console.log(data);
}

fetchData();