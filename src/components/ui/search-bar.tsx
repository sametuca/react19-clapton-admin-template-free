import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Search, X, Clock, TrendingUp, Filter, Command } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'user' | 'document' | 'action';
  url?: string;
  icon?: React.ReactNode;
  category?: string;
}

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onResultClick?: (result: SearchResult) => void;
  results?: SearchResult[];
  suggestions?: string[];
  showFilters?: boolean;
  showShortcut?: boolean;
  className?: string;
  variant?: 'default' | 'minimal' | 'floating';
}

export function SearchBar({
  placeholder = "Ara...",
  onSearch,
  onResultClick,
  results = [],
  suggestions = [],
  showFilters = true,
  showShortcut = true,
  className,
  variant = 'default'
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const allItems = [...results];
  const hasResults = allItems.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setSelectedIndex(-1);
    onSearch?.(value);
    setIsOpen(value.length > 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, allItems.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && allItems[selectedIndex]) {
          onResultClick?.(allItems[selectedIndex]);
          setIsOpen(false);
          setQuery('');
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    onResultClick?.(result);
    setIsOpen(false);
    setQuery('');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'user': return '👤';
      case 'document': return '📋';
      case 'action': return '⚡';
      default: return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800';
      case 'user': return 'bg-green-100 text-green-800';
      case 'document': return 'bg-purple-100 text-purple-800';
      case 'action': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'floating') {
    return (
      <div ref={containerRef} className={cn("relative", className)}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(query.length > 0)}
            placeholder={placeholder}
            className="pl-10 pr-20 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:bg-background"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            {query && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setQuery('');
                  setIsOpen(false);
                }}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            {showShortcut && !query && (
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted rounded border">⌘</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted rounded border">K</kbd>
              </div>
            )}
          </div>
        </div>

        {/* Results Dropdown */}
        {isOpen && (
          <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-xl border-border/50 bg-background/95 backdrop-blur-md">
            <CardContent className="p-0 max-h-80 overflow-y-auto">
              {hasResults ? (
                <div className="py-2">
                  {allItems.map((result, index) => (
                    <div
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
                        selectedIndex === index ? "bg-primary/10" : "hover:bg-muted/50"
                      )}
                    >
                      <div className="text-lg">{getTypeIcon(result.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-sm truncate">{result.title}</h4>
                          <Badge variant="outline" className={cn("text-xs", getTypeColor(result.type))}>
                            {result.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <div className="py-8 text-center text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Sonuç bulunamadı</p>
                </div>
              ) : suggestions.length > 0 && (
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Öneriler
                  </div>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleInputChange(suggestion)}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Default and minimal variants
  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(query.length > 0)}
            placeholder={placeholder}
            className={cn(
              "pl-10",
              variant === 'minimal' ? "border-0 bg-muted/50 focus:bg-background" : ""
            )}
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {showFilters && (
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Results */}
      {isOpen && hasResults && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-xl">
          <CardContent className="p-0 max-h-80 overflow-y-auto">
            <div className="py-2">
              {allItems.map((result, index) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
                    selectedIndex === index ? "bg-primary/10" : "hover:bg-muted/50"
                  )}
                >
                  <div className="text-lg">{getTypeIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{result.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                  </div>
                  <Badge variant="outline" className={cn("text-xs", getTypeColor(result.type))}>
                    {result.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}