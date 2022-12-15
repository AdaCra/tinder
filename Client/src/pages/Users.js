import React, { useState, useEffect } from "react";

export default function Users() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/message")
          .then((res) => res.json())
          .then((data) => setMessage(data.message));
      }, []);

    return (
      <div>Users {message}</div>
    )
  }
  