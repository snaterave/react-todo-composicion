import React from 'react';
 //import { TodoProvider } from '../TodoContext';
 //import { TodoContext } from './useTodos';
 //import { AppUI } from './AppUI';
 import { useTodos } from './useTodos';
 import { TodoCounter } from '../TodoCounter';
 import { TodoSearch } from '../TodoSearch';
 import { TodoList } from '../TodoList';
 import { TodoItem } from '../TodoItem';
 import { TodosError } from '../TodosError';
 import { TodosLoading } from '../TodosLoading';
 import { EmptyTodos } from '../EmptyTodos';
 import { TodoForm } from '../TodoForm';
 import { CreateTodoButton } from '../CreateTodoButton';
 import { Modal } from '../Modal';
 import { TodoHeader } from '../TodoHeader';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
 

 /*function App() {
   return (
     <TodoProvider>
       <AppUI />
     </TodoProvider>
   );
 }*/

 function App(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>
       
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={()=> <TodosError />}
        onLoading={()=> <TodosLoading />}
        onEmptyTodos={()=> <EmptyTodos />}
        onEmptySearchResults={(searchText)=> 
          <p>No hay resultados para {searchText}</p>
        }
        render={ todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />)}
      />

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
      />
    </>
  );
 }

export default App;
