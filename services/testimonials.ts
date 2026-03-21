import { get } from './api';

export interface TestimonialDTO {
  id: number;
  name: string;
  role: string | null;
  text: string;
  photo: string | null;
  rating: number | null;
  is_active: boolean;
  created_at: string;
}

interface TestimonialResponse {
  data: TestimonialDTO[];
  message: string;
}

export const getTestimonials = async (): Promise<TestimonialDTO[]> => {
  try {
    const response = await get<TestimonialResponse>('/testimonials?active=true');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};
