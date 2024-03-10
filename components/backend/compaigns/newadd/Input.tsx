import React from "react";

function Input({ onSubmit }: any) {
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <div className="my-3">
      <input
        type="text"
        className="border border-red-500 p-2 mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="border">
        Add
      </button>
    </div>
  );
}

export default Input;
