import React from "react";
import "./singleCast.css";

const SingleCast = () => {
  return (
    <div className="cast-container d-flex gap-20 justify-content-center align-items-start py-5 px-4">
      <div className="img-part">
        <img
          style={{ border: "1px solid #777", padding: "10px" }}
          src="/cast.jpeg"
          alt=""
          width="300px"
          height="300px"
        />
      </div>
      <div className="bio-part d-flex flex-column">
        <strong>Biography of</strong>
        <h4>Dwayne Johnson</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure expedita
          eum nulla, delectus, neque exercitationem quisquam earum voluptatem
          adipisci consequatur illo similique sequi, doloribus fugit nostrum
          iste? Optio corporis perferendis excepturi pariatur! Expedita dolore
          fuga ipsa repudiandae, labore omnis illo autem, dolorum maxime eveniet
          dolores, sunt alias quo optio recusandae?
        </span>
      </div>
      <div className="desc-part align-items-start justify-content-end d-flex flex-column gap-10">
        <strong>
          <p className="mb-0">Birthdate: </p>
        </strong>
        <p className="mb-0">12/05/1977</p>

        <strong>
          <p className="mb-0">Father name: </p>
        </strong>
        <p className="mb-0">Rocky Johnson</p>

        <strong>
          <p className="mb-0">Country: </p>
        </strong>
        <p className="mb-0">America</p>

        <strong>
          <p className="mb-0">Gender:</p>
        </strong>
        <p className="mb-0">male</p>
      </div>
    </div>
  );
};

export default SingleCast;
