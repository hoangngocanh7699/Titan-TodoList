import { Dropdown, Button, Input } from 'semantic-ui-react'
import '../todoActions/todoAction.scss'
import { useState } from 'react'

const TodoActions = () => {

	const [isShowModal, setIsShowModal] = useState(false)

	const options = [
		{ key: 1, text: 'Choice 1', value: 1 },
  	{ key: 2, text: 'Choice 2', value: 2 },
  	{ key: 3, text: 'Choice 3', value: 3 }
	]

	const handleAddTodos = () => {
		setIsShowModal(true)
	}
	const closeModal = () => {
		setIsShowModal(false)
	}
  
	return <>
		<form>
      <Input type="text" className="task-input" required />
      <Button className="button-search" type="submit">Tìm kiếm</Button>
			<Button.Group color='teal'>
    		<Button className='arrange'>Sắp xếp</Button>
    		<Dropdown
      		className='button icon'
      		floating
      		options={options}
      		trigger={<></>}
    		/>
  		</Button.Group>
    </form>
		<form>
			<Button className='btn-add' onClick={() => handleAddTodos()}><i class="fa-solid fa-plus"></i>Thêm công việc</Button>
			{isShowModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}></span>
            <p>Nội dung modal ở đây.</p>
          </div>
        </div>
      )}
			<Button className='btn-reset'><i class="fa-solid fa-arrows-rotate"></i>Reset</Button>
		</form>
	</>

}

export default TodoActions