import { useState } from "react";

export const MainPage = () => {
 const [email, setEmail] = useState("");

 const onClickConfirm = () => {
  localStorage.setItem("email", email);
  window.location.href = "/produtos";
 };

 return (
  <div className="flex flex-col items-center">
   <div className="mt-56 w-full flex flex-col items-center gap-10">
    <div className="font-bold text-lg">Nicolly & Cleber</div>
    <div className="bg-neutral-500 rounded-md w-4/12 flex flex-col items-center gap-5">
     <div className="mt-5">Insira seu e-mail</div>
     <input
      onChange={(e) => setEmail(e.target.value)}
      className="bg-white rounded-sm border-none w-9/12 font-serif"
     ></input>
     <div
      onClick={() => onClickConfirm()}
      className="rounded cursor-pointer active:bg-pink-500 bg-pink-300 w-40 mb-5"
     >
      OK
     </div>
    </div>
   </div>
  </div>
 );
};
