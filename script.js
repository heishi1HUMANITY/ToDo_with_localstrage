let update = () => {
    let day = document.querySelector('#date').value;
    let time = document.querySelector('#time').value;
    let subject = document.querySelector('#subject').value;
    let date =  day + "-" + time;

    if(localStorage.getItem('todo') == null){
        let info = {
            0:{
                date: date,
                subject: subject
            }    
        };
        console.log(JSON.stringify(info).length);
        localStorage.setItem('todo', JSON.stringify(info));
    }else{
        let strage = JSON.parse(localStorage.getItem('todo'));
        strage[(Number(Object.keys(strage)) + 1)] = {
            date: date,
            subject: subject
        };    
        localStorage.setItem('todo', JSON.stringify(strage));
    }
};

let show = () => {
    let todo = JSON.parse(localStorage.getItem('todo'));
    let target = document.querySelector('div');
    if(todo != null){
        for(let i = 0; i < Object.keys(todo).length; i++){
            target.innerHTML += todo[i].date + " " + todo[i].subject + "<br>";
            console.log(todo[i]);
        }
    }
    if(todo != null) console.log(Object.keys(todo));  
}

window.addEventListener('load', show);

document.querySelector('#clear').addEventListener('click', function(){
    localStorage.removeItem('todo');
})