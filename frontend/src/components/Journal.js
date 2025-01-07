import React, { useState } from "react";

const Journal = () => {
    const [entry, setEntry] = useState("");

    const saveEntry = () => {
        alert("Journal entry saved!");
        setEntry("");
    };

    return (
        <div>
            <h1>Journaling</h1>
            <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
            <button onClick={saveEntry}>Save</button>
        </div>
    );
};

export default Journal;
