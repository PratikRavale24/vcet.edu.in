import { get, resolveApiUrl } from './api';

export interface NoticeRecord {
  id: number;
  title: string;
  body: string;
  type: 'general' | 'info' | 'warning' | 'urgent';
  link_url: string | null;
  link_label: string | null;
  pdf_name: string | null;
  pdf_mime_type: string | null;
  pdf_size: number | null;
  has_pdf: boolean;
  pdf_url: string | null;
  is_active: boolean;
  deactivates_at: string | null;
  created_at: string;
  updated_at: string;
}

function normalizeNotice(notice: NoticeRecord): NoticeRecord {
  return {
    ...notice,
    pdf_url: resolveApiUrl(notice.pdf_url),
  };
}

function isNoticeVisible(notice: NoticeRecord): boolean {
  if (!notice.is_active) return false;
  if (!notice.deactivates_at) return true;

  const deactivatesAt = new Date(notice.deactivates_at);
  if (Number.isNaN(deactivatesAt.getTime())) return true;

  return deactivatesAt.getTime() > Date.now();
}

export const noticesService = {
  list: async () => {
    const notices = await get<NoticeRecord[]>('/notices');
    return notices.map(normalizeNotice).filter(isNoticeVisible);
  },
};
