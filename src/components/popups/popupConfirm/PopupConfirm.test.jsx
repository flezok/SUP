import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PopupConfirm from './PopupConfirm';

describe('PopupConfirm', () => {
  it('вызывает handleProjectDelete при подтверждении удаления', async () => {
    const deleteMock = vi.fn();

    const { getByText } = render(
      <PopupConfirm
        handleProjectDelete={deleteMock}
        handleProjectComplete={() => {}}
        confirmTitle="удалить"
        onOpenConfirm={() => {}}
      />
    );

    const confirmBtn = getByText(/подтвердить/i);
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(deleteMock).toHaveBeenCalled();
    });
  });

  it('вызывает handleProjectComplete при подтверждении завершения', async () => {
    const completeMock = vi.fn();

    const { getByText } = render(
      <PopupConfirm
        handleProjectDelete={() => {}}
        handleProjectComplete={completeMock}
        confirmTitle="завершить"
        onOpenConfirm={() => {}}
      />
    );

    const confirmBtn = getByText(/подтвердить/i);
    fireEvent.click(confirmBtn);

    await waitFor(() => {
      expect(completeMock).toHaveBeenCalled();
    });
  });

  it('вызывает onOpenConfirm при отмене', async () => {
    const cancelMock = vi.fn();

    const { getByText } = render(
      <PopupConfirm
        handleProjectDelete={() => {}}
        handleProjectComplete={() => {}}
        confirmTitle="удалить"
        onOpenConfirm={cancelMock}
      />
    );

    const cancelBtn = getByText(/отменить/i);
    fireEvent.click(cancelBtn);

    await waitFor(() => {
      expect(cancelMock).toHaveBeenCalled();
    });
  });
});
