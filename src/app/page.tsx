'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import TodoInput from '@/components/todo/TodoInput';
import TodoList from '@/components/todo/TodoList';

export default function Home() {
  const { filter } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>
        {filter === 'all'
          ? '전체 할 일'
          : filter === '진행 중'
            ? '진행 중인 할 일'
            : '완료된 할 일'}
      </h1>
      <TodoInput />
      <TodoList />
    </>
  );
}
