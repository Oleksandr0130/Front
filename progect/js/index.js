const urlApp = 'http://api.weatherapi.com/v1/forecast.json?key=b4c49f13db80473bba1160232242904&q=Berlin&days=7&aqi=no&alerts=no'
const NameParameter = document.querySelector('#name')
const LocalTimeParameter = document.querySelector('#local-time')
const ImageParameter = document.querySelector('.image')
const descriptionParameter = document.querySelector('#description')
const tmpParameter = document.querySelector('#temp_c')
const rowWithWetherIcon = document.querySelector('.icon')
const actuelTemp = document.querySelector('.tempActuel')

let dataResponse

const getData = async (api) => {
    const serverResponse = await fetch(api)
    dataResponse = await serverResponse.json()
    pushData(dataResponse)
}
getData(urlApp)

function pushData (dataObject) {
    NameParameter.innerText = dataObject.location.name
    LocalTimeParameter.innerText = dataObject.location.localtime
    ImageParameter.src = dataObject.current.condition.icon
    descriptionParameter.innerText = dataObject.current.condition.text
    tmpParameter.innerText = dataObject.current.temp_c
    for (i = 1; i <= 6; i++){
        callBackArray(dataObject.forecast.forecastday[i].day.condition.icon);
            daysTemperature(dataObject.forecast.forecastday[i].hour[12].temp_c)
    }
}

const callBackArray = (imgSrc) => {
    const htmlNode = document.createElement('td')
    htmlNode.classList.add('icon1')
    const imgElement = document.createElement('img')
    imgElement.src = imgSrc
    htmlNode.append(imgElement)
    rowWithWetherIcon.append(htmlNode)
}
const daysTemperature = (temp) => {
    const htmlNode = document.createElement('td')
    htmlNode.classList.add('tempActuel1')
    const pElement = document.createElement('p')
    pElement.innerText = temp 
    htmlNode.append(pElement)
    rowWithWetherIcon.append(htmlNode)
}