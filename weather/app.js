const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = '67e52e1f0ea885ce3d3a'

const api = 'https://api.wunderground.com/api/999e5d288437e353/conditions/lang:EN/q/'
	let city = document.getElementById('cityname') 
	let country = document.getElementById('countryname') 
	const cityData = []
     
	let form = document.getElementById('weather')

    form.addEventListener('submit', (e) => {
    e.preventDefault()
    let city1 = city.value
     let country1 = country.value
        fetch(`${uri}${apiKey}&format=json&city=${city1}&country=${country1}`)
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    fetch(`${api}${data[0].lat},${data[0].lon}.json`)
    .then((res) => res.json())
    .then((data) => 
    {
        console.log(data)
        const divw = document.getElementById('display')
        const parnt = document.createElement('ul')
        const child1 = document.createElement('li')
        const child2 = document.createElement('li')
        const child3 = document.createElement('li')
        const child4 = document.createElement('li')
        const imgchld = document.createElement('img')
        const imgchld1 = document.createElement('img')

        let condition = data.current_observation.temp_c
        let condition2 = data.current_observation.weather

        child3.textContent = 'Temp: ' + condition +'°c'
        child4.textContent = 'Weather: ' + condition2
        parnt.appendChild(child3)
        parnt.appendChild(child4)



        if(condition<0)
        {
            imgchld.src = 'images/cold.png'
            child1.appendChild(imgchld)
            parnt.appendChild(child1) 
        }
        else if(condition<0||condition<20)
        {
            imgchld.src = 'images/less.png'
            child1.appendChild(imgchld)
            parnt.appendChild(child1) 
        }

        else if(condition>21)
        {
           imgchld.src = 'images/hot.png'
            child1.appendChild(imgchld)
            parnt.appendChild(child1)   
        }

        if(condition2=='Clear')
        {
            imgchld1.src = 'images/sun.png'
            child2.appendChild(imgchld1)
            parnt.appendChild(child2) 
        }
        else if(condition2=='Cloud')
        {
            imgchld1.src = 'images/cloud+sun.png'
            child2.appendChild(imgchld1)
            parnt.appendChild(child2) 
        }

        else if(condition2=='Snow')
        {
           imgchld1.src = 'images/snow1.png'
            child2.appendChild(imgchld1)
            parnt.appendChild(child2)   
        }
        else if(condition2=='Rain')
        {
           imgchld1.src = 'images/rain.png'
            child2.appendChild(imgchld1)
            parnt.appendChild(child2)   
        }


        divw.appendChild(parnt)


})
	



   //  console.log(data[0].display_name)
   // console.log(`the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}`)
    // ...data is a rest operator
    
    })
    
    .catch((e) => console.log(e, "what's happening dave?"))
    console.log('city data array', cityData)
    })




    
