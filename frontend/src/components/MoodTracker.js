import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const MoodTracker = () => {
    const [data, setData] = useState([
        { name: "Day 1", mood: 3 },
        { name: "Day 2", mood: 4 },
        { name: "Day 3", mood: 5 },
    ]);

    return (
        <div>
            <h1>Mood Tracker</h1>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default MoodTracker;
