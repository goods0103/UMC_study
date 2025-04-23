import styled from "styled-components";
import { Card } from "../components/TodoCard";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodoList, postTodo, deleteTodo, patchTodo } from "../apis/todo";

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
`;

const MainPage = () => {
  const [todos, setTodos] = useState([]);

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

  const onSubmit = async (data) => {
    try {
      await postTodo(data);
      const update = await getTodoList();
      setTodos(update[0]);
    } catch (e) {
      console.error(e);
    }
  };

  const onDelete = async (id) => {
    try {
      //이부분이랍니다 규호군
      await deleteTodo({ id });
      const update = await getTodoList();
      setTodos(update[0]);
    } catch (e) {
      console.error(e);
    }
  };

  const onModify = async (id, title, conatent, checked) => {
    try {
      await patchTodo({ id, title, conatent, checked });
      const update = await getTodoList();
      setTodos(update[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getTodoList();
        setTodos(todos[0]);
        console.log(todos[0]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  //TODO: TODO 생성

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
        {todos?.map((todo, idx) => (
          <Card todo={todo} onDelete={onDelete} onModify={onModify} key={idx} />
        ))}
      </BottomWrapper>
    </MainWrapper>
  );
};

export { MainPage };
