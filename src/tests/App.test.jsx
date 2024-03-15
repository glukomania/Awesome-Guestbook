import { render, screen } from '@testing-library/react'
import App from '../App'
import * as utils from '../utils/localStorage'

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />)
  })

  test('displays key UI elements based on text', async () => {
    render(<App />);
    expect(screen.getByText('Application')).toBeInTheDocument()
    expect(screen.getAllByText('Add new visitor')[0]).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Reset form/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add new visitor/i })).toBeInTheDocument()
  })


  test('calls getTableData on mount', () => {
    const getTableDataMock = jest.spyOn(utils, 'getTableData').mockImplementation(() => [])
    render(<App />);
    expect(getTableDataMock).toHaveBeenCalled()
    getTableDataMock.mockRestore()
  })

})