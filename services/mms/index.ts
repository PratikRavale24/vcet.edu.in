import { get, post } from '../api';
import { MMS_ENDPOINTS, type MmsEndpointKey } from './endpoints';
import {
  fallbackEvents,
  fallbackFaqs,
  fallbackFaculty,
  fallbackHomeData,
  fallbackPlacements,
} from './fallbackData';
import type {
  MmsEnquiryPayload,
  MmsEventItem,
  MmsFaqItem,
  MmsFacultyMember,
  MmsHomeData,
  MmsPlacementsData,
} from './types';

async function getWithFallback<T>(endpoint: MmsEndpointKey, fallback: T): Promise<T> {
  try {
    return await get<T>(MMS_ENDPOINTS[endpoint]);
  } catch {
    return fallback;
  }
}

export function getMmsHomeData(): Promise<MmsHomeData> {
  return getWithFallback('home', fallbackHomeData);
}

export function getMmsFaculty(): Promise<MmsFacultyMember[]> {
  return getWithFallback('faculty', fallbackFaculty);
}

export function getMmsEvents(): Promise<MmsEventItem[]> {
  return getWithFallback('training', fallbackEvents);
}

export function getMmsPlacements(): Promise<MmsPlacementsData> {
  return getWithFallback('placement', fallbackPlacements);
}

export function getMmsFaqs(): Promise<MmsFaqItem[]> {
  return getWithFallback('faqs', fallbackFaqs);
}

export async function submitMmsEnquiry(payload: MmsEnquiryPayload): Promise<{ message: string }> {
  return post<{ message: string }>(MMS_ENDPOINTS.enquiries, payload);
}
