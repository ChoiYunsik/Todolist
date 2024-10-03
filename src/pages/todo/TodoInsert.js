import React from 'react';
import S from './style'
import useInput from './../../hooks/useInput';
const TodoInsert = ({isTodoUpdate, setIsTodoUpdate, todos}) => {
    const [value, onChangeValue, setValue] = useInput();

    const onPressAddTodo = async (e) => {
      if(e.key === 'Enter'){
        if(!window.confirm("Would you like to go ahead and add it as it is")) return;
        // 추가 하는 로직
        await fetch("http://localhost:4000/todo", {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            id : todos.length + 1,
            title : value,
            isChecked : false
          })
        }).then((response) => {
          console.log("리스폰스", response)
          if(!response.ok) return console.log(`Error ${response}`)
          setIsTodoUpdate(!isTodoUpdate);
          setValue("");
        })
  
      }
    }
  
    return (
      <S.Input type='text' placeholder='Would you like to add any additional tasks?' value={value} onChange={onChangeValue} onKeyPress={onPressAddTodo}/>
    );
  
};

export default TodoInsert;