import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PopupCreateProject from './PopupCreateProject';
import axios from 'axios';

vi.mock('axios');

describe('PopupCreateProject', () => {
  beforeEach(() => {
    delete window.location;
    window.location = { href: '' };
  });

  const queryClient = new QueryClient();

  const renderWithClient = (ui) =>
    render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);

  it('должен отправить данные формы и выполнить редирект', async () => {
    axios.post.mockResolvedValue({
      data: {
        projectId: 'project123'
      }
    });

    const { getByLabelText, getByText } = renderWithClient(
      <PopupCreateProject
        onOpenCreateProject={() => {}}
        onOpenAddMember={() => {}}
        openAddMember={false}
      />
    );

    fireEvent.change(getByLabelText(/название/i), {
      target: { value: 'Проект ВКР' }
    });

    fireEvent.change(getByLabelText(/описание/i), {
      target: { value: 'Описание проекта' }
    });

    const createBtn = getByText(/создать/i);
    fireEvent.click(createBtn);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(window.location.href).toBe('/project/project123');
    });
  });
});
