import { Dropdown, Button, Input, Form } from "semantic-ui-react";
import "../todoActions/todoAction.scss";
import { useState } from "react";
import { enum_language } from "../constant/enum";

const TodoActions = ({editTodo, setEditTodo, handleEditTodo, input, setInput}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  const optionStatus = [
    { key: 'active', text: 'Hoạt động', value: 'active' },
    { key: 'hide', text: 'Ẩn', value: 'hide' },
  ]

  const handleAddTodos = () => {
    setIsShowModal(!isShowModal);
  };

  const closeModal = () => {
    if (isShowModal) {
      setIsShowModal(false);
    } else if (editTodo) {
      setEditTodo(false);
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value)
  }


  return (
    <>
      <form>
        <Input type="text" className="task-input" required />
        <Button className="button-search" type="submit">
          {enum_language.BUTTON_SEARCH}
        </Button>
        <Button.Group color="teal">
          <Button className="arrange">{enum_language.BUTTON_ARRANGE}</Button>
          <Dropdown
            className="button icon"
            floating
            options={options}
            trigger={<></>}
          />
        </Button.Group>
      </form>
			<div className="modal-edit-todo">
        {editTodo && (
          <Form>
					<Form.Field className="panel-heading">
						<div>{enum_language.EDIT_TODO}</div>
					</Form.Field>
					<Form.Field>
						<label>{enum_language.TODO_NAME}</label>
						<input placeholder='Nhập vào tên công việc' />
					</Form.Field>
					<Form.Field>
						<label>Trạng thái</label>
            <Dropdown placeholder='Hoạt động' fluid selection options={optionStatus} />
					</Form.Field>
					<Form.Field>
						<Button className='btn-confirm' type='submit'>{enum_language.BUTTON_CONFIRM}</Button>
						<Button className='btn-cancel' onClick={() => closeModal()}>{enum_language.BUTTON_CANCEL}</Button>
					</Form.Field>
				</Form>
        )}
      </div>
      <div className="modal-add-todos">
        {isShowModal && (
          <Form>
					<Form.Field className="panel-heading">
						<div>{enum_language.HEADER_TODO}</div>
					</Form.Field>
					<Form.Field>
						<label>{enum_language.TODO_NAME}</label>
						<input value={input} onChange={handleInput} placeholder='Nhập vào tên công việc' />
					</Form.Field>
					<Form.Field>
						<label>{enum_language.BUTTON_STATUS}</label>
            <Dropdown placeholder='Hoạt động' fluid selection options={optionStatus} />
					</Form.Field>
					<Form.Field>
						<Button className='btn-confirm' type='submit'>{enum_language.BUTTON_CONFIRM}</Button>
						<Button className='btn-cancel' onClick={() => closeModal()}>{enum_language.BUTTON_CANCEL}</Button>
					</Form.Field>
				</Form>
        )}
        <Button className="btn-add" onClick={() => handleAddTodos()}>
          <i class="fa-solid fa-plus"></i>{enum_language.BUTTON_ADD}
        </Button>
        <Button className="btn-reset">
          <i class="fa-solid fa-arrows-rotate"></i>{enum_language.BUTTON_RESET}
        </Button>
      </div>
    </>
  );
};

export default TodoActions