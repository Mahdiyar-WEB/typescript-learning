"use client";
import React, { useState } from "react";

const Note = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    setNote("");
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="border flex flex-col justify-center items-center gap-5 w-fit px-5 py-3 mx-auto mt-5 rounded-md">
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <input
        type="text"
        value={note}
        className="border border-gray-300 rounded-md outline-0 focus:border-gray-500 px-2 py-1"
        placeholder="add your note"
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="border border-gray-400 px-3 py-2 rounded-md"
        onClick={() => handleAddNote()}
      >
        add note
      </button>
    </div>
  );
};

export default Note;
