import React, { useState } from "react";
import data from "./data.js";
import Liste from "./Liste"

function App() {
  const [kisiler,setKisiler] = useState(data)
  console.log (data);
  console.log (kisiler);
  function temizle () {
    setKisiler ([]);
  }
 
  return (
    <main>
      <section className="container">
      <h4>Bugun {kisiler.length} dogumgunu bulunmaktadir</h4>
       <Liste kisi= {kisiler} />
       
       <button onClick={temizle}>Temizle</button>
       
      </section>
    </main>
  );
}

export default App;
