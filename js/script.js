let popup = () => {
    document.querySelector('.opacity').setAttribute('style', 'display: block;');
    document.querySelector('#popup').setAttribute('style', 'left: 0;');
    document.querySelector('#subject').focus();
}

let popupHide = () => {
    document.querySelector('.opacity').setAttribute('style', 'display: none;');
    document.querySelector('#popup').removeAttribute('style');
    document.querySelector('.popupinput').value = "";
}

let load = () => {
    let todo = JSON.parse(localStorage.getItem('todo'));
    document.querySelector('#contents').innerHTML = '';
    if(todo != null){
        for(let i = 0; i < Number(Object.keys(todo).length); i++){
            let insertHtml =    '<label id="' + i + '">' + 
                                '<input type="checkbox" class="cardInput">' + 
                                '<div class="card">' + 
                                '<div class="top">' +
                                '<h2>' + todo[i].subject + '</h2>' +
                                '</div>' +
                                '<div class="down">' + 
                                '<h2>' + todo[i].time + '</h2>' + 
                                '<div class="buttons">' + 
                                '<button class="mdc-button done" onclick="done(' + i + ');">完了</button>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</label>';
            document.querySelector('#contents').innerHTML += insertHtml;
        }
    }
}

let add = () => {
    let subject = document.querySelector('#subject');
    let time = document.querySelector('#time');

    if(localStorage.getItem('todo') == null){
        let todo = {
            0: {
                subject: subject.value,
                time: time.value  
            }
        };
        localStorage.setItem('todo', JSON.stringify(todo));
    }else{
        let todo = JSON.parse(localStorage.getItem('todo'));
        todo[Number(Object.keys(todo).length)] = {
            subject: subject.value,
            time: time.value
        };
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    load();
    popupHide();
}

let done = (id) => {
    let todo = JSON.parse(localStorage.getItem('todo'));
    let length = Number(Object.keys(todo).length);
    for(let i = 0; i < length; i++){
        if(i == id){
            delete todo[i];
        }
    }
    for(let i = 0; i < length; i++){
        if(i > id){
            todo[i - 1] = todo[i];
        }
        if(i == length - 1){
            delete todo[i];
        }
    }
    
    localStorage.setItem('todo', JSON.stringify(todo));
    load();
}

window.addEventListener('load', load);