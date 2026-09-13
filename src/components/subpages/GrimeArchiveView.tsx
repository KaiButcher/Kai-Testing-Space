import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Music, 
  Video, 
  FileSpreadsheet, 
  FileText, 
  Image as ImageIcon, 
  Folder, 
  Download, 
  LayoutGrid, 
  List, 
  Radio, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import rawItems from '../../data/grimeItems.json';

export interface GrimeItem {
  id: string;
  title: string;
  folder: string;
  type: string;
  link: string;
  year?: string | null;
}

export const GrimeArchiveView: React.FC = () => {
  const [items] = useState<GrimeItem[]>(rawItems as GrimeItem[]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(60);
  const [jumpPageInput, setJumpPageInput] = useState<string>('1');

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
    setJumpPageInput('1');
  }, [searchQuery, selectedFolder, selectedType, selectedYear, pageSize]);

  // Available Folders with counts
  const folderCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      counts.set(item.folder, (counts.get(item.folder) || 0) + 1);
    }
    return counts;
  }, [items]);

  const folders = useMemo(() => {
    const sorted = Array.from(folderCounts.keys()).sort((a: string, b: string) => {
      // Sort alphabetically
      return a.localeCompare(b);
    });
    return ['ALL', ...sorted];
  }, [folderCounts]);

  // Available Years with counts
  const yearCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      if (item.year) {
        counts.set(item.year, (counts.get(item.year) || 0) + 1);
      }
    }
    return counts;
  }, [items]);

  const years = useMemo(() => {
    const sorted = Array.from(yearCounts.keys()).sort((a: string, b: string) => Number(b) - Number(a));
    return ['ALL', ...sorted];
  }, [yearCounts]);

  // Media types and counts
  const mediaTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Audio: 0,
      Video: 0,
      Image: 0,
      Spreadsheet: 0,
      Document: 0,
      Other: 0
    };
    for (const item of items) {
      const t = item.type.toLowerCase();
      if (t === 'audio') counts.Audio++;
      else if (t === 'video') counts.Video++;
      else if (t === 'image') counts.Image++;
      else if (t === 'spreadsheet') counts.Spreadsheet++;
      else if (t === 'document') counts.Document++;
      else counts.Other++;
    }
    return counts;
  }, [items]);

  const mediaTypes = [
    { label: 'All', value: 'ALL', count: items.length },
    { label: 'Audio', value: 'Audio', count: mediaTypeCounts.Audio },
    { label: 'Images', value: 'Image', count: mediaTypeCounts.Image },
    { label: 'Other / 7z', value: 'Other', count: mediaTypeCounts.Other },
    { label: 'Videos & DVDs', value: 'Video', count: mediaTypeCounts.Video },
    { label: 'Documents', value: 'Document', count: mediaTypeCounts.Document },
    { label: 'Spreadsheets', value: 'Spreadsheet', count: mediaTypeCounts.Spreadsheet }
  ];

  // Stats
  const stats = useMemo(() => {
    return {
      total: items.length,
      audio: mediaTypeCounts.Audio,
      video: mediaTypeCounts.Video,
      folders: folderCounts.size,
    };
  }, [items, mediaTypeCounts, folderCounts]);

  // Filtered items
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return items.filter(item => {
      if (selectedFolder !== 'ALL' && item.folder !== selectedFolder) return false;
      if (selectedType !== 'ALL') {
        const itemType = item.type.toLowerCase();
        const selType = selectedType.toLowerCase();
        if (selType === 'other') {
          if (['audio', 'video', 'image', 'spreadsheet', 'document'].includes(itemType)) {
            return false;
          }
        } else if (itemType !== selType) {
          return false;
        }
      }
      if (selectedYear !== 'ALL' && item.year !== selectedYear) return false;
      if (q) {
        const inTitle = item.title.toLowerCase().includes(q);
        const inFolder = item.folder.toLowerCase().includes(q);
        const inType = item.type.toLowerCase().includes(q);
        if (!inTitle && !inFolder && !inType) return false;
      }
      return true;
    });
  }, [items, searchQuery, selectedFolder, selectedType, selectedYear]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [filteredItems, safeCurrentPage, pageSize]);

  const startIdx = filteredItems.length === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1;
  const endIdx = Math.min(safeCurrentPage * pageSize, filteredItems.length);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(target);
    setJumpPageInput(String(target));
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(jumpPageInput, 10);
    if (!isNaN(p)) {
      goToPage(p);
    }
  };

  const handleCopyLink = (id: string, link: string) => {
    navigator.clipboard?.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportCSV = () => {
    const header = 'Title,Folder Name,File Type,Direct Link\n';
    const rows = filteredItems.map(i => 
      `"${i.title.replace(/"/g, '""')}","${i.folder.replace(/"/g, '""')}","${i.type}","${i.link}"`
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `my_grime_archive_${selectedFolder !== 'ALL' ? selectedFolder : '12603_records'}.csv`;
    a.click();
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'audio': return <Music className="w-3.5 h-3.5 text-amber-400" />;
      case 'video': return <Video className="w-3.5 h-3.5 text-rose-400" />;
      case 'spreadsheet': return <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />;
      case 'document': return <FileText className="w-3.5 h-3.5 text-blue-400" />;
      case 'image': return <ImageIcon className="w-3.5 h-3.5 text-purple-400" />;
      default: return <Folder className="w-3.5 h-3.5 text-zinc-400" />;
    }
  };

  // Generate pagination buttons window
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safeCurrentPage > 3) pages.push('...');
      const start = Math.max(2, safeCurrentPage - 1);
      const end = Math.min(totalPages - 1, safeCurrentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (safeCurrentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  }, [totalPages, safeCurrentPage]);

  return (
    <div className="space-y-6">
      {/* Top Banner & Launch Single-File App */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#13151b] to-zinc-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono text-amber-400 tracking-wider uppercase font-semibold">
              COMPLETE DIGITAL VAULT &bull; 12,603 PRESERVED FILES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            My Grime Archive
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-1">
            Exhaustive preservation repository of grime audio tracks, radio sets, video DVD rips, instrumental soundfonts, and historical session logs backed up to Google Drive.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <a
            href="/grime-archive/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/10"
          >
            <span>Open Standalone Web App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 font-mono text-xs transition-colors"
            title="Download CSV export"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV ({filteredItems.length.toLocaleString()})</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
          <div className="text-xs font-mono text-zinc-400 uppercase">Total Files</div>
          <div className="text-2xl font-bold font-mono text-white mt-1">{stats.total.toLocaleString()}</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
          <div className="text-xs font-mono text-amber-400 uppercase">Audio Tracks</div>
          <div className="text-2xl font-bold font-mono text-amber-400 mt-1">{stats.audio.toLocaleString()}</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
          <div className="text-xs font-mono text-purple-400 uppercase">Art &amp; Photos</div>
          <div className="text-2xl font-bold font-mono text-purple-400 mt-1">{mediaTypeCounts.Image.toLocaleString()}</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
          <div className="text-xs font-mono text-zinc-400 uppercase">Folders / Vaults</div>
          <div className="text-2xl font-bold font-mono text-white mt-1">{stats.folders.toLocaleString()}</div>
        </div>
      </div>

      {/* Controls & Search Bar */}
      <div className="p-5 rounded-xl bg-zinc-900/70 border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across 12,603 files: Wiley, Dizzee, Skepta, Silverdrizzle, sets, acapellas..."
              className="w-full bg-zinc-950 border border-white/10 focus:border-amber-400/70 rounded-lg pl-10 pr-16 py-2.5 text-sm text-white font-mono placeholder:text-zinc-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Folder Select */}
          <div className="w-full md:w-72">
            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 focus:border-amber-400/70 rounded-lg px-3 py-2.5 text-xs text-zinc-200 font-mono outline-none cursor-pointer"
            >
              {folders.map(f => (
                <option key={f} value={f}>
                  {f === 'ALL' 
                    ? `All Collections / Folders (${items.length.toLocaleString()})` 
                    : `${f} (${folderCounts.get(f) || 0})`}
                </option>
              ))}
            </select>
          </div>

          {/* Year Select */}
          <div className="w-full md:w-44">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 focus:border-amber-400/70 rounded-lg px-3 py-2.5 text-xs text-zinc-200 font-mono outline-none cursor-pointer"
            >
              {years.map(y => (
                <option key={y} value={y}>
                  {y === 'ALL' ? 'All Years' : `${y} (${yearCounts.get(y) || 0})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Media Pills & View Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-mono text-zinc-500 uppercase mr-1">Filter:</span>
            {mediaTypes.map(t => (
              <button
                key={t.value}
                onClick={() => setSelectedType(t.value)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  selectedType === t.value
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 border border-white/5'
                }`}
              >
                <span>{t.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedType === t.value ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
                }`}>
                  {t.count.toLocaleString()}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-zinc-950 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Grid layout"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded ${viewMode === 'table' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Table layout"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Sub-Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5 text-xs font-mono text-zinc-400">
          <div>
            Showing <strong className="text-white">{startIdx.toLocaleString()}–{endIdx.toLocaleString()}</strong> of <strong className="text-amber-400">{filteredItems.length.toLocaleString()}</strong> records
            {filteredItems.length !== items.length && (
              <span className="text-zinc-500 ml-1.5">
                (filtered from {items.length.toLocaleString()} total)
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Page Size Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500 text-[11px]">Per page:</span>
              {[30, 60, 120, 240].map(size => (
                <button
                  key={size}
                  onClick={() => setPageSize(size)}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    pageSize === size ? 'bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30' : 'bg-white/5 hover:bg-white/10 text-zinc-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Compact Prev/Next */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
                title="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] px-1.5">
                {safeCurrentPage} / {totalPages}
              </span>
              <button
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
                title="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Display */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-xl border border-white/5 bg-zinc-900/30">
          <Radio className="w-8 h-8 text-zinc-600 mx-auto mb-3 animate-pulse" />
          <p className="text-zinc-300 font-mono text-sm">No archive items matched your query in the 12,603 catalog.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedFolder('ALL'); setSelectedType('ALL'); setSelectedYear('ALL'); }}
            className="mt-3 text-xs font-mono text-amber-400 hover:underline"
          >
            Reset all filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedItems.map(item => (
            <div
              key={item.id}
              className="group p-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 hover:border-amber-400/30 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-amber-400/90 tracking-wider truncate font-medium max-w-[200px]">
                    {item.folder}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {item.year && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300">
                        {item.year}
                      </span>
                    )}
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400">
                      {getTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white line-clamp-2 mb-3 leading-snug">
                  {item.title}
                </h4>
              </div>

              <div className="pt-3 mt-1 border-t border-white/5 flex items-center gap-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-black text-zinc-200 font-mono text-xs transition-colors"
                >
                  <span>Open in Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleCopyLink(item.id, item.link)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors"
                  title="Copy Google Drive link"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-900/60">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-zinc-950/60 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Collection / Folder</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs font-mono">
              {paginatedItems.map(item => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 text-zinc-200 font-medium max-w-md truncate">
                    {item.title}
                  </td>
                  <td className="py-3 px-4 text-amber-400/90 whitespace-nowrap">
                    {item.folder}
                  </td>
                  <td className="py-3 px-4 text-zinc-400 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      {getTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400 whitespace-nowrap">
                    {item.year || '—'}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-amber-400 hover:text-black text-zinc-300 text-[11px] transition-colors"
                      >
                        <span>Drive</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item.id, item.link)}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                        title="Copy link"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Full Pagination Controls at Bottom */}
      {filteredItems.length > 0 && totalPages > 1 && (
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-300">
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Page</span>
            <strong className="text-white">{safeCurrentPage}</strong>
            <span>of</span>
            <strong className="text-white">{totalPages}</strong>
            <span className="text-zinc-500 ml-2">({filteredItems.length.toLocaleString()} items)</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {/* First */}
            <button
              onClick={() => goToPage(1)}
              disabled={safeCurrentPage <= 1}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="First page"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              onClick={() => goToPage(safeCurrentPage - 1)}
              disabled={safeCurrentPage <= 1}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page number buttons */}
            {pageNumbers.map((p, i) => {
              if (p === '...') {
                return (
                  <span key={`ellipsis-${i}`} className="px-2 py-1 text-zinc-500">
                    ...
                  </span>
                );
              }
              const pageNum = Number(p);
              const isActive = pageNum === safeCurrentPage;
              return (
                <button
                  key={`page-${pageNum}`}
                  onClick={() => goToPage(pageNum)}
                  className={`min-w-[32px] h-8 px-2 rounded font-mono text-xs transition-colors ${
                    isActive 
                      ? 'bg-amber-400 text-black font-bold shadow-sm' 
                      : 'bg-white/5 hover:bg-white/10 text-zinc-300'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => goToPage(safeCurrentPage + 1)}
              disabled={safeCurrentPage >= totalPages}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Last */}
            <button
              onClick={() => goToPage(totalPages)}
              disabled={safeCurrentPage >= totalPages}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="Last page"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>

          {/* Jump to Page Input */}
          <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
            <span className="text-zinc-500 text-[11px]">Go to:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpPageInput}
              onChange={(e) => setJumpPageInput(e.target.value)}
              className="w-14 bg-zinc-950 border border-white/10 focus:border-amber-400 rounded px-2 py-1 text-center font-mono text-xs text-white outline-none"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-xs text-zinc-200 border border-white/10"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
