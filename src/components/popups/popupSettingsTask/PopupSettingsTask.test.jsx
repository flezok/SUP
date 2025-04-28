import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PopupSettingsTask from './PopupSettingsTask';
import axios from 'axios';

// Моки
vi.mock('axios');
vi.mock('react-router-dom', () => ({
  useParams: () => ({ taskId: 'task123' }),
  useNavigate: () => vi.fn()
}));

// Утилита для обёртки с QueryClientProvider
const renderWithClient = (ui) => {
  const queryClient = new QueryClient();
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

describe('PopupSettingsTask', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('удаляет задачу при клике по кнопке "Удалить задачу"', async () => {
    axios.get.mockResolvedValueOnce({
      data: { id: 'task123', title: 'Test Task', description: 'Desc', priority: 2, subTasks: [] }
    });
    axios.get.mockResolvedValueOnce({ data: [] }); // комментарии
    axios.delete.mockResolvedValueOnce({ data: { success: true } });

    const { getByText } = renderWithClient(
      <PopupSettingsTask
        onOpenSettingsTask={() => {}}
        onOpenAddMember={() => {}}
        openAddMember={false}
      />
    );

    const deleteBtn = await waitFor(() => getByText(/удалить задачу/i));
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith(
        'http://localhost:3000/task/task123',
        { withCredentials: true }
      );
    });
  });

  it('отправляет POST-запрос при редактировании названия задачи', async () => {
    axios.get.mockResolvedValueOnce({
      data: { id: 'task123', title: 'Старая задача', description: 'Описание', priority: 2, subTasks: [] }
    });
    axios.get.mockResolvedValueOnce({ data: [] });
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByLabelText } = renderWithClient(
      <PopupSettingsTask
        onOpenSettingsTask={() => {}}
        onOpenAddMember={() => {}}
        openAddMember={false}
      />
    );

    const titleInput = await waitFor(() => getByLabelText(/название/i));
    fireEvent.change(titleInput, { target: { value: 'Новая задача' } });
    fireEvent.blur(titleInput);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/task/task123/update/title',
        { value: 'Новая задача' },
        { withCredentials: true }
      );
    });
  });

  it('отправляет POST-запрос и вызывает refetch при изменении приоритета', async () => {
    axios.get.mockResolvedValueOnce({
      data: { id: 'task123', title: 'Task', description: '...', priority: 2, subTasks: [] }
    });
    axios.get.mockResolvedValueOnce({ data: [] });
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByText } = renderWithClient(
      <PopupSettingsTask
        onOpenSettingsTask={() => {}}
        onOpenAddMember={() => {}}
        openAddMember={false}
      />
    );

    const priorityBtn = await waitFor(() => getByText('3'));
    fireEvent.click(priorityBtn);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/task/task123/update/priority',
        { value: 3 },
        { withCredentials: true }
      );
    });
  });

  it('отправляет комментарий и очищает поле', async () => {
    axios.get
      .mockResolvedValueOnce({
        data: { id: 'task123', title: 'Task', description: '...', priority: 2, subTasks: [] }
      })
      .mockResolvedValueOnce({ data: [] }); // comments
  
    axios.post.mockResolvedValueOnce({ data: { success: true } });
  
    const { getByPlaceholderText, getByText } = renderWithClient(
      <PopupSettingsTask
        onOpenSettingsTask={() => {}}
        onOpenAddMember={() => {}}
        openAddMember={false}
      />
    );
  
    const commentInput = await waitFor(() => getByPlaceholderText(/напишите комментарий/i));
    fireEvent.change(commentInput, { target: { value: 'Это мой комментарий' } });
  
    const sendButton = getByText(/отправить/i);
    fireEvent.click(sendButton);
  
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/task/task123/comment',
        expect.objectContaining({
          text: 'Это мой комментарий',
          date: expect.any(Date)
        }),
        { withCredentials: true }
      );
  
      // Проверка, что поле очистилось
      expect(commentInput.value).toBe('');
    });
  });

});
