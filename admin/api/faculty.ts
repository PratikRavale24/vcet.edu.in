import type { ListResponse, ItemResponse, DeleteResponse, Faculty, FacultyPayload } from '../types';
import { mockFacultyApi } from './mockStore';



/**
 * Custom request helper for Faculty API since it's a different backend than Laravel.
 */
async function facultyRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${FACULTY_API_BASE}${path}`;
  const res = await fetch(url, options);
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || json.message || `HTTP ${res.status}`);
  return json as T;
}

const realFacultyApi = {
  list: () => facultyRequest<ListResponse<Faculty>>('/'),
  get: (id: string) => facultyRequest<ItemResponse<Faculty>>(`/${id}`),
  create: (payload: FacultyPayload) => {
    const formData = new FormData();
    if (payload.profileImage) {
      formData.append('profileImage', payload.profileImage);
      delete payload.profileImage;
    }
    formData.append('data', JSON.stringify(payload));
    return facultyRequest<ItemResponse<Faculty>>('/', { method: 'POST', body: formData });
  },
  update: (id: string, payload: FacultyPayload) => {
    const formData = new FormData();
    if (payload.profileImage) {
      formData.append('profileImage', payload.profileImage);
      delete payload.profileImage;
    }
    formData.append('data', JSON.stringify(payload));
    return facultyRequest<ItemResponse<Faculty>>(`/${id}`, { method: 'PUT', body: formData });
  },
  delete: (id: string) => facultyRequest<DeleteResponse>(`/${id}`, { method: 'DELETE' }),
};

export const facultyApi = import.meta.env.VITE_USE_MOCK_FACULTY === 'true' 
  ? mockFacultyApi 
  : realFacultyApi;
