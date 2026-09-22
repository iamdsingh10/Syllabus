import { useState } from "react";

export default function Fill({ onPersonAdd }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone) return;

        onPersonAdd?.({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
        });

        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input id="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}