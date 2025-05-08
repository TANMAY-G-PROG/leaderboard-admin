import React, { useState } from "react";
import api from "../api";

function EditTeam({ team, onUpdated }) {
  const [points, setPoints] = useState(team.points);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await api.put(`/teams/${team._id}`, { points });
    onUpdated();
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
        required
      />
      <button type="submit">Update Points</button>
    </form>
  );
}

export default EditTeam;
