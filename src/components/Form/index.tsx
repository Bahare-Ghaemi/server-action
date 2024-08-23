"use client";

import { useState } from "react";
import addPostAction from "./action";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button className="bg-blue-500">
      {pending ? "loading..." : "submit form"}
    </button>
  );
};

const Form = () => {
  const [res, setRes] = useState();
  return (
    <form
      action={async (formState) => {
        const data = await addPostAction(formState);
        console.log(data, "***********");
        setRes(data);
      }}
      className="text-black"
    >
      <br />
      <input type="text" name="title" />
      <br />
      <br />
      <textarea name="body" id="body"></textarea>
      <br />
      <Button />
      <br />
      <div className="text-white">
        <span>Results : </span>
        <div className="">{JSON.stringify(res)}</div>
      </div>
    </form>
  );
};

export default Form;
