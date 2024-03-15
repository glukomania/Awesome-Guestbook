import { render, screen } from '@testing-library/react'
import UsersTable from '../components/UsersTable'

describe('UsersTable Component', () => {
    test('renders without crashing', () => {
        render(<UsersTable />)
        })
      
    test('renders some basic table elements', () => {
        render(<UsersTable setUsers={() => {}} />)

        expect(screen.getByText(/Visitor management/i)).toBeInTheDocument()
  })

})