import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodo } from "../apis/todo";
import { useQuery } from "@tanstack/react-query";

const AboutPage = () => {
  // const [todo, setTodo] = useState();
  const params = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const todo = await getTodo({ id: params.id });
  //       setTodo(todo);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { data: todo } = useQuery({
    queryFn: () => getTodo({ id: params.id }),
    queryKey: ["todos", params.id],
  });

  return (
    <>
      <div>{todo?.id}</div>
      <div>{todo?.title}</div>
      <div>{todo?.content}</div>
      <div>{todo?.checked ? "✅" : "❌"}</div>
    </>
  );
};

export { AboutPage };
