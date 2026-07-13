import { render, screen, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import SidebarAccountItems from './SidebarAccountItems';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('SidebarAccountItems', () => {
  it('renders theme toggle and support links', () => {
    useTheme.mockReturnValue({ theme: 'light', setTheme: jest.fn() });
    render(<SidebarAccountItems />);
    
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('toggles theme on click', () => {
    const mockSetTheme = jest.fn();
    useTheme.mockReturnValue({ theme: 'light', setTheme: mockSetTheme });
    render(<SidebarAccountItems />);
    
    const themeButton = screen.getByText('Theme').closest('button');
    fireEvent.click(themeButton);
    
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('toggles theme to light if currently dark', () => {
    const mockSetTheme = jest.fn();
    useTheme.mockReturnValue({ theme: 'dark', setTheme: mockSetTheme });
    render(<SidebarAccountItems />);
    
    const themeButton = screen.getByText('Theme').closest('button');
    fireEvent.click(themeButton);
    
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
