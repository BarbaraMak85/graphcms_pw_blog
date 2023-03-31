import React from "react";

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="mx-10 container mx-auto bg-white shadow-md rounded-lg mb-10">
      <p className="flex justify-center pt-12 text-4xl font-bold text-red-600">
        Kontakt
      </p>
      <span className="flex justify-center pt-4 pb-4">
        Jeżeli chcesz się skontaktować to napisz na poniższy adres:
      </span>
      <span className="flex justify-center pt-4 pb-4">
        potegawizualizacji@gmail.com
      </span>
    </div>
  );
}
Contact.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};
