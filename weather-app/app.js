const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = '67e52e1f0ea885ce3d3a'
	let city = document.getElementById('city').value 
	let country = document.getElementById('country').value 
	const cityData = []
	fetch(`${uri}${apiKey}&format=json&city=${city}&country=${country}`)
	.then((res) => res.json())
    .then((data) => {
    console.log(data)
    //console.log(data[0].display_name)
   // console.log(`the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}`)
    //...data is a rest operator
    let lonlat = {lat:data[0].lat, lon: data[0].lon};
    para = document.createElement("p")
    para.innerHTML=lonlat.value
    cityData.push(...data)
    })
    
    .catch((e) => console.log(e, "what's happening dave?"))
    console.log('city data array', cityData)
