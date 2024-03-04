import React from "react";

function Button({ btnname }) {
  return (
    <div>
      <div>
        <button
          className="w-full mt-5 mb-2
       bg-[#ae7aff] p-3 
       text-center font-bold
        text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all 
        duration-150 ease-in-out active:translate-x-[5px] 
        active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
        >
          {btnname}
        </button>
      </div>
    </div>
  );
}

export default Button;
