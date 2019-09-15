document.querySelector('.marker').innerText = (new Date()).toLocaleTimeString();

document.querySelector('.get-ajax-html').addEventListener('click', getHtmlAjax);

function getHtmlAjax () {
    const XHR_STATE_FINISHED = 4;
    const HTTP_STATUS_OK = 200;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_FINISHED
            && xhr.status === HTTP_STATUS_OK) {
                document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container').innerHTML = html );
}



document.querySelector('.get-ajax-json').addEventListener('click', getJsonAjax);

function getJsonAjax () {
    const XHR_STATE_FINISHED = 4;
    const HTTP_STATUS_OK = 200;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_FINISHED
            && xhr.status === HTTP_STATUS_OK) {
                const clientData = JSON.parse(xhr.responseText);
                document.querySelector('.client-name').innerText = clientData.name;
                document.querySelector('.account').innerText = clientData.account;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

document.querySelector('.fetch-json').addEventListener('click', fetchJson);

function fetchJson() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData => { document.querySelector('.client-name').innerText = clientData.name;
                document.querySelector('.account').innerText = clientData.account;
         });
}