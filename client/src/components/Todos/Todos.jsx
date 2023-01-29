import React from "react";
import { useState } from "react";
import "./todos.scss";

const colors = [
  {
    id: 1,
    color: "#fc9d9d",
  },
  {
    id: 1,
    color: "#fa0505",
  },

  {
    id: 1,
    color: "#fa05c5",
  },
  {
    id: 1,
    color: "#6f05fa",
  },
  {
    id: 1,
    color: "#4605fa",
  },
  {
    id: 1,
    color: "#7c90f7",
  },
  {
    id: 1,
    color: "#7ccaf7",
  },
  {
    id: 1,
    color: "#9ad9cd",
  },
  {
    id: 1,
    color: "#1b6b5c",
  },
  {
    id: 1,
    color: "#0dff15",
  },
];

const Todos = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [changeColor, setChangeColor] = useState({});

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!changeColor?.color || !text.trim()) {
      return alert("Выберите цвет и напишите что-то в инпуте");
    }

    const newItem = {
      id: Math.random(),
      text: text,
      isCompleted: false,
      color: changeColor?.color,
    };

    setItems([...items, newItem]);

    setText("");
  };

  const todoFinish = (id) => {
    const newData = items.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }

      return item;
    });

    setItems(newData);
  };

  const deleteTodo = (id) => {
    const newData = items.filter((item) => item.id !== id);
    setItems(newData);
  };

  const handleChangeColor = (item, index) => {
    const newItem = {
      color: item,
      idx: index,
    };

    setChangeColor(newItem);
  };

  return (
    <div className="todos">
      <div className="todos_box">
        <form>
          <input
            type="text"
            placeholder="Введите задачу"
            onChange={handleChange}
            value={text}
          />
          <button onClick={addTodo}>Добавить</button>
        </form>

        <div className="todos_colors">
          {colors.map((item, index) => (
            <div
              style={{
                background: item.color,
                border:
                  changeColor?.idx === index
                    ? "3px solid #000"
                    : "3px solid transparent",
              }}
              onClick={() => handleChangeColor(item.color, index)}
            ></div>
          ))}
        </div>

        <ul className="todos_list">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${item.isCompleted ? "completed" : ""}`}
                  style={{ background: item.color ? item.color : "" }}
                >
                  {item.text}
                  <div>
                    <button onClick={() => todoFinish(item.id)}>
                      {item.isCompleted ? "Вернуть" : "Завершить"}
                    </button>
                    <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                  </div>
                </li>
              );
            })
          ) : (
            <h1>Задач пока еще нет</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
