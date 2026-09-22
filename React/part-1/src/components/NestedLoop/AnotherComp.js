import { useContext } from "react"
import { PersonContext } from "../PersonContext"


export default function AnotherComp(){

    // Read the current value from PersonContext.
    // This value can be either:
    // - a flat object like { firstName, lastName }
    // - or a nested object like { name: { firstName, lastName }, updateName }
    const contextValue = useContext(PersonContext);

    // If the context value has a `name` field, use it.
    // Otherwise use the context value directly.
    const person = contextValue?.name ?? contextValue;

    // Safely extract firstName and lastName.
    // If those fields are missing, default to empty strings.
    const { firstName , lastName  } = person ;

    return <div>
        Hi I am from Another Component--- {firstName}{lastName}
    </div>;
}