import React from "react";


function Liste(props) {
  const { kisi } = props;
  console.log(props);
  console.log(kisi);
  return (
    <div>
      {kisi.map((k) => {
        const { id,isim, resim, yas } = k;
        return (
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <h4>{isim}</h4>
            <p>{yas} yasinda</p>
          </div>
        );
      })}
    </div>
  );
}
export default Liste;

