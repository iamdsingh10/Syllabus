
const cities = [
        { name: "New York", country: "USA" },
        { name: "Goa", country: "India" },
        {name: "Darjeeling", country: "India"},
        {name: "London", country: "UK"}
    ]

export default function HolidayList(){
    return<>
    <ol>
    {
        cities.sort((a,b)=>{
            return a.country === 'India' ? -1 : 1;
        }).map((city,index)=>{
            return <li  key={`location ${index}`}>{city.name}, {city.country}</li>
        })
    }
    </ol></>
   
}