import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PopupCreateTask from './PopupCreateTask';
import axios from 'axios';

vi.mock('axios');

describe('handleSubmit (PopupCreateTask)', () => {
  const queryClient = new QueryClient();

  const renderWithClient = (ui) =>
    render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);

  it('отправляет данные формы и выполняет post-запрос', async () => {
    const onOpenCreateTaskMock = vi.fn();

    axios.post.mockResolvedValue({ data: { success: true } });

    const { getByText, getByLabelText } = renderWithClient(
      <PopupCreateTask
        onOpenCreateTask={onOpenCreateTaskMock}
        projectId="project456"
        lastClickedStage="stage789"
      />
    );

    // Вводим данные
    fireEvent.change(getByLabelText(/название/i), {
      target: { value: 'Новая задача' }
    });

    fireEvent.change(getByLabelText(/описание/i), {
      target: { value: 'Описание задачи' }
    });

    // Кликаем по "Создать"
    const createBtn = getByText(/создать/i);
    fireEvent.click(createBtn);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/task/create',
        expect.objectContaining({
          projectId: 'project456',
          stageId: 'stage789',
          title: 'Новая задача',
          description: 'Описание задачи',
          priority: expect.any(Number),
          dates: expect.any(Array)
        }),
        { withCredentials: true }
      );

      // Проверяем вызов закрытия попапа
      expect(onOpenCreateTaskMock).toHaveBeenCalled();
    });
  });
});
