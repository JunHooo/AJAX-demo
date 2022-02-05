getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", './style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement("style");
            style.innerHTML = request.response;
            document.head.appendChild(style)
        }
    }
    request.send();
}
getJs.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "./2.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script");
            script.innerHTML = request.response;
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "./3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement("div");
            div.innerHTML = request.response;
            document.body.appendChild(div)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "./4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            console.log(dom.getElementsByTagName('warning')[0].textContent.trim())
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", './5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}
let n = 2;
nextPage.onclick = () => {
    const request = new XMLHttpRequest;
    if (n === 4) {
        alert("没有下一页")
    } else {
        request.open("GET", `/page${n}`)
        console.log(1)
        request.onreadystatechange = () => {
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    const array = JSON.parse(request.response)
                    array.forEach(item => {
                        const li = document.createElement("li")
                        li.textContent = item.id
                        xxx.appendChild(li)
                    });
                }
            }
        }
        n = n + 1;
        console.log("n的值是" + n)
        request.send()
    }

}
