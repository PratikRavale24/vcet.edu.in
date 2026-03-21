import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Gallery, GalleryPayload } from '../types';
// We simply point mock handling minimally since real API is used
const USE_MOCK = false;

function toFormData(payload: GalleryPayload): FormData {
  const form = new FormData();
  (Object.entries(payload) as [string, unknown][]).forEach(([key, val]) => {
    if (val === undefined || val === null) return;
    if (val instanceof File) form.append(key, val);
    else if (typeof val === 'boolean') form.append(key, val ? '1' : '0');
    else form.append(key, String(val));
  });
  return form;
}

export const galleriesApi = {
  list: () => client.request<ListResponse<Gallery>>('/galleries'),
  get: (id: number) => client.request<ItemResponse<Gallery>>(`/galleries/${id}`),
  create: (payload: GalleryPayload) => client.requestForm<ItemResponse<Gallery>>('/galleries', toFormData(payload)),
  update: (id: number, payload: GalleryPayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<Gallery>>(`/galleries/${id}`, form);
  },
  delete: (id: number) => client.request<DeleteResponse>(`/galleries/${id}`, { method: 'DELETE' }),
};
