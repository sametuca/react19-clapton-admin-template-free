'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchResult = {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'document' | 'user' | 'action';
  url?: string;
  icon?: React.ReactNode;
  score?: number;
};

type SearchSuggestion = {
  id: string;
  query: string;
  timestamp?: number;
};

export function AISearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock data - replace with actual API calls
  const mockSearch = async (q: string): Promise<SearchResult[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (!q.trim()) return [];
    
    // Mock results based on query
    return [
      {
        id: '1',
        title: `Search for "${q}" in Dashboard`,
        description: 'View dashboard with filtered results',
        type: 'page',
        url: `/dashboard?q=${encodeURIComponent(q)}`,
        score: 0.95,
      },
      {
        id: '2',
        title: `User "${q}" Profile`,
        description: 'View user profile and settings',
        type: 'user',
        url: `/users?q=${encodeURIComponent(q)}`,
        score: 0.87,
      },
      {
        id: '3',
        title: `Document: "${q}" Guide`,
        description: 'Read documentation and guides',
        type: 'document',
        url: `/docs/${encodeURIComponent(q)}`,
        score: 0.82,
      },
      {
        id: '4',
        title: `Action: ${q}`,
        description: 'Execute action or command',
        type: 'action',
        score: 0.78,
      },
    ];
  };

  const mockSuggestions = (q: string): SearchSuggestion[] => {
    if (!q.trim()) return [];
    
    return [
      { id: '1', query: `${q} dashboard` },
      { id: '2', query: `${q} settings` },
      { id: '3', query: `${q} analytics` },
      { id: '4', query: `${q} users` },
    ];
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      setSuggestions(mockSuggestions(query));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const searchResults = await mockSearch(query);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.query);
    setSuggestions([]);
    handleSearch();
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      window.location.href = result.url;
    }
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-64 items-center justify-between rounded-lg border border-border bg-background/80 px-3 py-2 text-sm text-muted-foreground placeholder:text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background transition-all"
      >
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Search...</span>
        </div>
        <div className="flex items-center space-x-1">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-accent px-1.5 font-mono text-xs font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
        onClick={closeSearch}
      />
      
      {/* Search Modal */}
      <div 
        ref={containerRef}
        className="relative z-[9999] w-full max-w-2xl transform rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all"
      >
        {/* Search Input */}
        <div className="relative p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for anything..."
              className="h-12 w-full rounded-xl border-0 bg-foreground/5 pl-10 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background"
            />
            <button
              onClick={closeSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="border-t border-border px-4 pb-2">
            <div className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Suggestions
            </div>
            <div className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={cn(
                    'flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                    index === selectedIndex
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-foreground border border-purple-500/30'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{suggestion.query}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {results.length > 0 && (
          <div className="border-t border-border px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Results ({results.length})
              </div>
              {isLoading && (
                <div className="flex items-center space-x-1">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.3s]" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500" />
                </div>
              )}
            </div>
            <div className="space-y-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="flex w-full items-start space-x-3 rounded-xl p-3 text-left transition-all hover:bg-accent hover:scale-[1.02] group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                    {result.type === 'page' && <Command className="h-5 w-5 text-purple-400" />}
                    {result.type === 'user' && <div className="h-5 w-5 rounded-full bg-blue-500" />}
                    {result.type === 'document' && <div className="h-5 w-5 rounded bg-green-500" />}
                    {result.type === 'action' && <div className="h-5 w-5 rounded bg-yellow-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-purple-300 transition-colors">
                      {result.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {result.description}
                    </div>
                    {result.score && (
                      <div className="mt-1 text-xs text-muted-foreground/80">
                        Relevance: {Math.round(result.score * 100)}%
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!suggestions.length && !results.length && query && !isLoading && (
          <div className="border-t border-border px-4 py-8 text-center">
            <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-2 text-sm font-medium text-muted-foreground">No results found</h3>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Try adjusting your search terms or browse our categories
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && !results.length && (
          <div className="border-t border-border px-4 py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-purple-500" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-muted-foreground">Searching...</h3>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Looking for the best matches
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-border px-4 py-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground/80">
            <div className="flex items-center space-x-4">
              <span>Press ⌘K to search</span>
              <span>•</span>
              <span>ESC to close</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
