import { CardWithTitle } from "./Card";

export default function CardContainer({persons,isLoading}){
    return <div>
        <h2>List of Person</h2>
       {isloading && <div>Loading Persons data...</div>}
       {isLoading && <div>
        {persons.map(({id,items,status})=>(
            <CardWithTitle key={id} title={items}>
                <div>id:{id}</div>
                <div>status:{status}</div>
            </CardWithTitle>
        ))
        }</div>}
    </div>

}