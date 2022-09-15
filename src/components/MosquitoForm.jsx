import React from "react";

export default function MosquitoForm() {
  return (
    <form>
      <label>
        Price:
        <input type='text' />
      </label>
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
}
