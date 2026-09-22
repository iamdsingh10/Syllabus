import Fill from "../components/Fill";
import { Link, useOutletContext } from "react-router-dom";

export default function AddUsers() {
    const { addUser } = useOutletContext();

    const handlePersonAdd = (user) => {
        addUser(user);
    };

    return (
        <div className="text-center" style={{ marginTop: "20px" }}>
            <Link to="/users">Go back to users list</Link>
            <Fill onPersonAdd={handlePersonAdd} />
        </div>
    );
}