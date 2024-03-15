import { render, screen, fireEvent } from '@testing-library/react'
import UserForm from '../components/UserForm'

describe('UserForm Component', () => {
    test('renders without crashing', () => {
        render(<UserForm />)
        })
      
    test('renders all form elements', () => {
        render(<UserForm setUsers={() => {}} />)

        expect(screen.getAllByText('Add new visitor')[0]).toBeInTheDocument()
        expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email address \*/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/I agree to be added to the table/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Add new visitor/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Reset form/i })).toBeInTheDocument()
  })

    test('displays warning when submitted with invalid data', () => {
        render(<UserForm setUsers={() => {}} />)
        
        fireEvent.click(screen.getByRole('button', { name: /Add new visitor/i }))
        expect(screen.getByText(/Please check/i)).toBeInTheDocument()
    })

})