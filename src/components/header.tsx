import Button from "@mui/material/Button";

export const Header = () => {
 return (
  <div className="bg-pink-500/50 h-10 w-full flex flex-row items-center justify-center text-white">
   <div className="flex justify-center w-8/12 ml-72">Cleber & Nicolly</div>
   <div className="flex w-4/12 justify-end gap-3 px-2 items-center">
    <Button color="primary">Meus produtos</Button>
    <div>{localStorage.getItem("email")}</div>
   </div>
  </div>
 );
};
