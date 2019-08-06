import * as React from 'react'
import EmployeeCard from './EmployeeCard'
import { Divider, Header } from '@stardust-ui/react'
import AvatarEmployeeCard from './AvatarEmployeeCard'

class EmployeeCardPrototype extends React.Component<any, { popupOpen: boolean }> {
  render() {
    const employee = {
      firstName: 'John',
      lastName: 'Doe',
      position: 'SR. SOFTWARE ENGINEER',
      location: 'Prague, Czech Republic',
      status: 'Avaiable',
      team: 'Stardust UI Engineering',
      email: 'John.Doe@company.com',
      avatar: {
        label: { variables: { backgroundColor: '#00b5ad', color: 'white' } },
        status: { color: 'green', icon: 'stardust-checkmark', title: 'Available' },
      },
    }
    return (
      <div style={{ margin: '20px' }}>
        <Header
          as="h3"
          content="Employee Card"
          description={{ content: 'Simple employee card component.', styles: { fontSize: '16px' } }}
        />
        <EmployeeCard {...employee} />
        <Divider variables={{ dividerColor: 'transparent' }} />
        <Header
          as="h3"
          content="Avatar Employee Card"
          description={{
            content: "Avatar component that show's the employee's card on hovering.",
            styles: { fontSize: '16px' },
          }}
        />
        <AvatarEmployeeCard {...employee} />
      </div>
    )
  }
}

export default EmployeeCardPrototype
