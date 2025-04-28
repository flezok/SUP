import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PopupConfirm from '../popupConfirm/PopupConfirm';
import axios from 'axios';

vi.mock('axios');

describe('PopupConfirm → handleProjectDelete', () => {
  it('выполняет axios.delete и переход на /boards', async () => {
    const navigateMock = vi.fn();

    vi.mocked(axios.delete).mockResolvedValue({ data: { success: true } });

    const mockDelete = () => {
      axios.delete('http://localhost:3000/project/test123', {
        withCredentials: true
      });
      navigateMock('/boards');
    };

    const { getByText } = render(
      <PopupConfirm
        handleProjectDelete={mockDelete}
        handleProjectComplete={() => {}}
        confirmTitle="удалить"
        onOpenConfirm={() => {}}
      />
    );

    fireEvent.click(getByText(/подтвердить/i));

    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith(
        'http://localhost:3000/project/test123',
        { withCredentials: true }
      );
    });

    expect(navigateMock).toHaveBeenCalledWith('/boards');
  });
});
