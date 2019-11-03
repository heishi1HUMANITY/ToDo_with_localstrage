let update = () => {
    let day = document.querySelector('#date').value;
    let time = document.querySelector('#time').value;
    let subject = document.querySelector('#subject').value;

    if(localStorage.getItem('todo') == null){
        let info = {
            0:{
                day: day,
                time: time,
                subject: subject
            }    
        };
        localStorage.setItem('todo', JSON.stringify(info));
    }else{
        let strage = JSON.parse(localStorage.getItem('todo'));
        strage[Number(Object.keys(strage).length)] = {
            day: day,
            time: time,
            subject: subject
        };    
        localStorage.setItem('todo', JSON.stringify(strage));
    }

    show();
};

let show = () => {
    let todo = JSON.parse(localStorage.getItem('todo'));
    let target = document.querySelector('div');
    target.innerHTML = "";
    if(todo != null){
        console.log(todo);
        for(let i = 0; i < Object.keys(todo).length; i++){
            target.innerHTML += todo[i].day + " " + todo[i].time + " " + todo[i].subject + "<br>";
            console.log(todo[i]);
        }
    }
}

window.addEventListener('load', show);

/*document.querySelector('#clear').addEventListener('click', function(){
    localStorage.removeItem('todo');
    show();
})*/