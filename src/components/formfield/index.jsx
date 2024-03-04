import React from "react";

function FormField({ label, placeholder, type = "text" }) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <label className="text-xs text-slate-200 mt-2">{label}</label>
      <input
        placeholder={`Enter ${placeholder.toLowerCase()}...`}
        autoComplete="false"
        type={type}
        className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
      />
    </div>
  );
}

export default FormField;
