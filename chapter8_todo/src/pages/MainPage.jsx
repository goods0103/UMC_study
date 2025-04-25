import styled from "styled-components";
import { Card } from "../components/TodoCard";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodoList, postTodo, deleteTodo, patchTodo } from "../apis/todo";
import _ from "lodash";
import { useDebounce } from "../hooks/customDebounce";

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
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 1000);

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

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ title: debouncedSearch }),
    queryKey: ["todos", debouncedSearch],
    select: (d) => d[0],
  });

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      // refetch();
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      // console.log("항상실행됨");
    },
  });

  const onSubmit = (data) => {
    postTodoMutation({ title: data.title, content: data.content });
  };

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      // refetch();
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      // console.log("항상실행됨");
    },
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      // refetch();
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      // console.log("항상실행됨");
    },
  });

  // const handleSearch = _.debounce(async (e) => {
  //   // if (e.key === "Enter") {
  //   // console.log(e.target.value);
  //   navigate(`/?title=${e.target.value}`, { replace: true });
  //   const searchData = await getTodoList({ title: e.target.value });
  //   console.log("debounce search");
  //   // }
  // }, 500);

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
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        {isPending ? (
          <div>로딩중</div>
        ) : (
          todos?.map((todo) => (
            <Card
              todo={todo}
              onDelete={deleteTodoMutation}
              onModify={patchTodoMutation}
              key={todo.id}
            />
          ))
        )}
      </BottomWrapper>
    </MainWrapper>
  );
};

export { MainPage };
