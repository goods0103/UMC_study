import styled from "styled-components";
import { Card } from "../components/TodoCard";
import { get, useForm } from "react-hook-form";
import { useEffect, useState, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodoList, postTodo, deleteTodo, patchTodo } from "../apis/todo";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const MainWrapper = styled.div`
  display: flex; // 🔥 flex 레이아웃 적용
  flex-direction: column; // 세로로 정렬
  gap: 10px; // 이제 gap 적용됨
`;

const TopWrapper = styled.div`
  height: 20vh;
  display: flex; // 👉 flex 컨테이너 설정
  justify-content: center; // 👉 가로 중앙
  align-items: center; // 👉 세로 중앙
`;

const BottomWrapper = styled.div`
  flex: 1;
  gap: 5px;
  width: 100%;
  height: 20vh;
  display: flex; // 👉 flex 컨테이너 설정
  flex-direction: column; // 세로로 정렬
  justify-content: center; // 👉 가로 중앙
  align-items: center; // 👉 세로 중앙
`;

const FormStyle = styled.form`
  width: 40vh;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  button {
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  button:hover {
    background-color: #2779bd;
  }
  button:active {
    transform: scale(0.95);
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  // const [todos, setTodos] = useState([]);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const todos = await getTodoList();
  //       setTodos(todos[0]);
  //       console.log(todos[0]);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { data: todos, refetch } = useQuery({
    queryFn: () => getTodoList(),
    queryKey: ["getTodoList", "all"],
    select: (d) => d[0],
  });

  // const onSubmit = async (data) => {
  //   try {
  //     await postTodo(data);
  //     const update = await getTodoList();
  //     setTodos(update[0]);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const onSubmit = (data) => {
    postData.mutate(data);
  };

  const postData = useMutation({
    mutationFn: (data) => postTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodoList", "all"]);
      refetch();
    },
  });

  // const onDelete = async (id) => {
  //   try {
  //     await deleteTodo({ id });
  //     const update = await getTodoList();
  //     setTodos(update[0]);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const onDelete = useMutation({
    mutationFn: (id) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodoList", "all"]);
      refetch();
    },
  });

  // const onModify = async (id, title, content, checked) => {
  //   try {
  //     await patchTodo({ id, title, content, checked });
  //     const update = await getTodoList();
  //     console.log(update);
  //     setTodos(update[0]);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const onModify = useMutation({
    mutationFn: ({ id, title, content, checked }) =>
      patchTodo({ id, title, content, checked }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodoList", "all"]);
      refetch();
    },
  });

  const handleSearch = _.debounce(async (e) => {
    // if (e.key === "Enter") {
    // console.log(e.target.value);
    navigate(`/?title=${e.target.value}`, { replace: true });
    const searchData = await getTodoList({ title: e.target.value });
    setTodos(searchData[0]);
    console.log("debounce search");
    // }
  }, 500);

  return (
    <MainWrapper>
      <TopWrapper>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            {...register("title")}
          ></input>
          <input
            type="text"
            placeholder="내용을 입력해주세요"
            {...register("content")}
          ></input>
          <button type="submit">Todo생성</button>
        </FormStyle>
      </TopWrapper>
      <BottomWrapper>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onChange={handleSearch}
        ></input>
        {todos?.map((todo, idx) => (
          <Card
            todo={todo}
            onDelete={onDelete.mutate}
            onModify={onModify.mutate}
            key={idx}
          />
        ))}
      </BottomWrapper>
    </MainWrapper>
  );
};

export { MainPage };
