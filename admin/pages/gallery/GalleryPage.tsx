import React, { useEffect, useRef, useState } from 'react';
import { galleryApi } from '../../api/gallery';
import type { GalleryImage } from '../../types';

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchImages = () => {
    setLoading(true);
    galleryApi.list()
      .then((r) => setImages(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!file) { setError('Please select an image.'); return; }
    setUploading(true);
    try {
      await galleryApi.upload({ image: file, caption: caption.trim() || undefined });
      setFile(null);
      setCaption('');
      if (fileRef.current) fileRef.current.value = '';
      fetchImages();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (img: GalleryImage) => {
    if (!window.confirm(`Delete this image${img.caption ? ` (${img.caption})` : ''}?`)) return;
    setDeletingId(img.id);
    try { await galleryApi.delete(img.id); fetchImages(); }
    catch (e) { alert(e instanceof Error ? e.message : 'Delete failed'); setDeletingId(null); }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Gallery</h1>
        <p className="text-white/40 text-sm mt-1">{images.length} image{images.length !== 1 ? 's' : ''} — upload new photos below.</p>
      </div>

      {/* Upload form */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5">
        <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Upload Image</h2>
        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400 mb-4">{error}</div>}
        <style>{`.ai{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.ai:focus{border-color:rgba(250,204,21,.4)}.ai::placeholder{color:rgba(255,255,255,.2)}`}</style>
        <form onSubmit={handleUpload} className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-48">
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Image *</label>
            <input ref={fileRef} type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="ai cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1" />
          </div>
          <div className="flex-1 min-w-48">
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Caption (optional)</label>
            <input value={caption} onChange={(e) => setCaption(e.target.value)} className="ai" placeholder="Describe the photo" />
          </div>
          <button type="submit" disabled={uploading || !file} className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0">
            {uploading ? 'Uploading…' : 'Upload'}
          </button>
        </form>
      </div>

      {/* Image grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16"><div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" /></div>
      ) : images.length === 0 ? (
        <div className="text-center py-16 text-white/30 bg-white/[0.03] border border-white/8 rounded-2xl">No images yet. Upload one above.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {images.map((img) => (
            <div key={img.id} className="group relative rounded-xl overflow-hidden bg-white/5 aspect-square">
              <img src={img.image} alt={img.caption ?? 'Gallery image'} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              {img.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 py-2 text-xs text-white/80 truncate translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  {img.caption}
                </div>
              )}
              <button
                onClick={() => handleDelete(img)}
                disabled={deletingId === img.id}
                className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/60 text-red-400 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all disabled:opacity-50 flex items-center justify-center"
                title="Delete"
              >
                {deletingId === img.id
                  ? <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                  : <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
                }
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
