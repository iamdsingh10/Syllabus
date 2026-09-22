import { useLocation, useParams, Link } from "react-router-dom";

export default function GetUserDetails() {
    const { userId } = useParams();
    const location = useLocation();
    const user = location.state?.user;

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
            <h2>User Details</h2>
            <p><strong>User ID:</strong> {userId}</p>
            {user ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                </>
            ) : (
                <p>No user data was passed. Use the users list to navigate here.</p>
            )}
            <Link to="/users">Back to user list</Link>
        </div>
    );
}