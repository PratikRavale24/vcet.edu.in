import { get } from './api';
import { Gallery } from '../admin/types';

interface GalleryResponse {
  success: boolean;
  data: Gallery[];
}

export const getGalleries = async (): Promise<Gallery[]> => {
  const result = await get<GalleryResponse>('/galleries?active=true');
  return result.data || [];
};
