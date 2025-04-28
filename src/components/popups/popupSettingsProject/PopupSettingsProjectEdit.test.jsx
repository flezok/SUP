import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PopupSettingsProject from './PopupSettingsProject';
import axios from 'axios';

vi.mock('axios');
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  useRevalidator: () => ({ revalidate: vi.fn() }),
  useRouteLoaderData: () => ({
    id: 'test123',
    title: 'Тестовый проект',
    description: 'Описание проекта',
    dates: [null, null],
    projectAvatar: '/images/avatar.png',
    complete: false
  })
}));

describe('handleProjectEdit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отправляет обновлённые данные проекта и выполняет переход', async () => {
    axios.post.mockResolvedValue({ data: { success: true } });

    const { getByText } = render(
      <PopupSettingsProject
        onOpenSettingsProject={() => {}}
        onOpenConfirm={() => {}}
        openConfirm={false}
      />
    );

    fireEvent.click(getByText(/сохранить/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/project/test123/edit',
        expect.any(Object),
        { withCredentials: true }
      );
    });
  });
});
