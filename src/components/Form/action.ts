"use server"

const addPostAction = async (formData: FormData) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 8,
      id: 55,
      title: formData.get("title"),
      body: formData.get("body"),
    }),
  });
  const data = await res.json();
  return data;
};

export default addPostAction;
