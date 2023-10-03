import React from 'react'
import { Table, Input, Dropdown } from 'semantic-ui-react'
import '../listTodo/listTodos.scss'

const options = [
      { key: 1, text: 'Tất cả', value: 1 },
  		{ key: 2, text: 'Hoạt động', value: 2 },
  		{ key: 3, text: 'Ẩn', value: 3 }
    ]

const ListTodos = () => (
  <Table className='todos-list'>
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell>STT</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Tên</Table.HeaderCell>
        <Table.HeaderCell>Trạng Thái</Table.HeaderCell>
        <Table.HeaderCell>Hành Động</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>
          <Input icon='search' placeholder='Search...' />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Dropdown text='Hello Anh' options={options} simple item/>
        </Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    {/* <div>
        <Menu pointing>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
						<Menu.Item compact>
							<Dropdown text='Hello Anh' options={options} simple item/>
						</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div> */}

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>Male</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ListTodos

