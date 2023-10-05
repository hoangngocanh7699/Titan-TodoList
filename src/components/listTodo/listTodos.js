import React, { useState } from "react";
import { Table, Input, Dropdown, Button } from "semantic-ui-react";
import "../listTodo/listTodos.scss";
import { enum_language } from "../constant/enum";

const options = [
  { key: 1, id:1, text: "Tất cả", value: 1 },
  { key: 2, id:2, text: "Hoạt động", value: 2 },
  { key: 3, id:3, text: "Ẩn", value: 3 },
];

const ListTodos = ({handleEditTodo}) => {

  const [isActive, setIsActive] = useState(true)
  const buttonClassName = isActive ? 'active' : 'hidden';

  const handleClick = () => {
    setIsActive(!isActive)
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
              <Input icon="search" placeholder="Search..." />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Dropdown text="Tất cả" options={options} simple item />
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {options.map((item, index) => 
            <Table.Row key={index}>
            <Table.Cell>{item.key}</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.text}</Table.Cell>
            <Table.Cell className="status">
              <Button className={buttonClassName} onClick={handleClick}>
                {isActive ? 'Hoạt động' : 'Ẩn'}
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={handleEditTodo} className="btn-edit"><i class="fa-regular fa-pen-to-square"></i>
                {enum_language.BUTTON_EDIT}
              </Button>
              <Button className="btn-delete"><i class="fa-solid fa-trash"></i>
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
