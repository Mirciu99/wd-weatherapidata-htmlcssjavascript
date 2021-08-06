 var inputValue = document.querySelector('.inputValue');
 var button = document.querySelector('.button');
 var namee = document.querySelector('.name');
 var description = document.querySelector('.description');
 var temperature = document.querySelector('.temperature');


 button.addEventListener('click', ()=>{
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=73406279946109bfde1ba05026188e7c')
    .then(function(response){
        return response.json();   
    }).then(function(data){
        //console.log(data);
        var nameValue = data['name'];
        var tempValue = data.main['temp'];
        var descValue = data.weather[0].description;
        var tempValueAdv = Math.floor(tempValue);
        //console.log(descValue);
        namee.innerHTML = nameValue;
        description.innerHTML = descValue;
        temperature.innerHTML = tempValueAdv;
    })

    .catch(function(err){
        return alert('Wrong city name!');
    })
 });

