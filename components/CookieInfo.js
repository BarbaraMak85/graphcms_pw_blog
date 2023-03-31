import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// import { getLocalStorage } from "../util";

const CookieInfo = () => {
  const getCookieFromLocalStorage = () => {
    let localStorageCookie;
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("cookieAccepted")
    ) {
      localStorageCookie = JSON.parse(localStorage.getItem("cookieAccepted"));
    } else {
      localStorageCookie = false;
    }
    return localStorageCookie;
  };

  const [cookies, setCookies] = useCookies(["user"]);
  const [cookieAccepted, setCookieAccepted] = useState(
    getCookieFromLocalStorage()
  );

  const setCookieToLocalStorage = () => {
    localStorage.setItem("cookieAccepted", JSON.stringify(cookieAccepted));
  };

  useEffect(() => {
    setCookieToLocalStorage();
  }, [cookieAccepted]);

  const handleCookie = () => {
    setCookies("user", "gowtham", {
      path: "/",
    });

    setCookieAccepted(true);
  };
  return (
    <>
      {cookieAccepted ? null : (
        <div className="fixed bottom-0  bg-red-600 p-4 opacity-90 text-center z-10 ">
          <p className="text-white mb-4">
            Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w
            celach funkcjonalnych. Dzięki nim możemy indywidualnie dostosować
            stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo
            ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą
            zbierane żadne informacje.
          </p>
          <button
            className="bg-white w-30 h-8 border-none text-red-600 uppercase px-1 py-1 text-xs font-bold rounded-full focus:outline-none bt-4"
            onClick={handleCookie}
          >
            Akceptuje cookies
          </button>
        </div>
      )}
    </>
  );
};

export default CookieInfo;
