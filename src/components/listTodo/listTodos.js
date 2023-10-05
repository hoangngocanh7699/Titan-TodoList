import React, { useState } from "react";
import { Table, Input, Dropdown, Button } from "semantic-ui-react";
import "../listTodo/listTodos.scss";
import { enum_language } from "../constant/enum";

const options = [
  { text: "Tất cả", value: 1 },
  { text: "Hoạt động", value: 2 },
  { text: "Ẩn", value: 3 },
];

const ListTodos = ({handleOpenModalEdit, todos, setTodos}) => {

  const [isActive, setIsActive] = useState(true)
  const [searchValue, setSearchValue] = useState('');

  const buttonClassName = isActive ? 'active' : 'hidden';

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleDeleteTodo = ({id}) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <>
      <Table className="todos-list">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{enum_language.STT}</Table.HeaderCell>
            <Table.HeaderCell>{enum_language.ID}</Table.HeaderCell>
            <Table.HeaderCell>{enum_language.NAME}</Table.HeaderCell>
            <Table.HeaderCell>{enum_language.BUTTON_STATUS}</Table.HeaderCell>
            <Table.HeaderCell>{enum_language.ACTION}</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>
              <Input icon="search" placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Dropdown text="Tất cả" options={options} simple item />
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {todos.filter((item) => item.value.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => 
            <Table.Row key={index}>
            <Table.Cell>{item.stt}</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.value}</Table.Cell>
            <Table.Cell className="status">
              <Button className={buttonClassName} onClick={() => handleClick()}>
                {isActive ? 'Hoạt động' : 'Ẩn'}
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={handleOpenModalEdit} className="btn-edit"><i class="fa-regular fa-pen-to-square"></i>
                {enum_language.BUTTON_EDIT}
              </Button>
              <Button className="btn-delete" onClick={() => handleDeleteTodo(item)}><i class="fa-solid fa-trash"></i>
                {enum_language.BUTTON_DELETE}
              </Button>
            </Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};

export default ListTodos;
