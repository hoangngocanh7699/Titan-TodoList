import { Dropdown, Button, Input, Form } from "semantic-ui-react";
import "../todoActions/todoAction.scss";
import { useState } from "react";
import { enum_language } from "../constant/enum";

const TodoActions = ({openModalEdit, setOpenModalEdit, setTodos, input, handleInput, handleAddTodos, setCounter}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  const optionStatus = [
    { key: 'active', text: 'Hoạt động', value: 'Hoạt động' },
    { key: 'hide', text: 'Ẩn', value: 'Ẩn' },
  ]

  const handleOpenModal = () => {
    setIsShowModal(!isShowModal);
  };

  const closeModal = () => {
    if (isShowModal) {
      setIsShowModal(false);
    } else if (openModalEdit) {
      setOpenModalEdit(false);
    }
  }

  const handleResetTodos = () => {
    setTodos([])
    setCounter(1)
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
        {openModalEdit && (
          <Form>
					<Form.Field className="panel-heading">
						<div>{enum_language.EDIT_TODO}</div>
					</Form.Field>
					<Form.Field>
						<label>{enum_language.TODO_NAME}</label>
						<input placeholder='Nhập vào tên công việc' />
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
              <Dropdown placeholder='Hoạt động' fluid selection options={optionStatus}/>
					  </Form.Field>
					  <Form.Field>
						  <Button className='btn-confirm' type='submit' onClick={handleAddTodos}>{enum_language.BUTTON_CONFIRM}</Button>
						  <Button className='btn-cancel' onClick={() => closeModal()}>{enum_language.BUTTON_CANCEL}</Button>
					  </Form.Field>
				  </Form>
        )}
        <Button className="btn-add" onClick={() => handleOpenModal()}>
          <i class="fa-solid fa-plus"></i>{enum_language.BUTTON_ADD}
        </Button>
        <Button className="btn-reset" onClick={() => {handleResetTodos()}}>
          <i class="fa-solid fa-arrows-rotate"></i>{enum_language.BUTTON_RESET}
        </Button>
      </div>
    </>
  );
};

export default TodoActions