import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Upload, X, File, Image, Video, Music, FileText, Check, AlertTriangle } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  url?: string;
}

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  maxFiles?: number;
  onUpload?: (files: File[]) => void;
  onRemove?: (fileId: string) => void;
  className?: string;
  variant?: 'default' | 'compact' | 'grid';
  showPreview?: boolean;
}

export function FileUpload({
  accept = "*/*",
  multiple = true,
  maxSize = 10,
  maxFiles = 5,
  onUpload,
  onRemove,
  className,
  variant = 'default',
  showPreview = true
}: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.startsWith('video/')) return Video;
    if (type.startsWith('audio/')) return Music;
    if (type.includes('text') || type.includes('document')) return FileText;
    return File;
  };

  const getFileTypeColor = (type: string) => {
    if (type.startsWith('image/')) return 'text-blue-500';
    if (type.startsWith('video/')) return 'text-red-500';
    if (type.startsWith('audio/')) return 'text-green-500';
    if (type.includes('text') || type.includes('document')) return 'text-purple-500';
    return 'text-gray-500';
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`Dosya boyutu ${maxSize}MB'dan büyük olamaz`);
        return false;
      }
      return true;
    });

    if (uploadedFiles.length + validFiles.length > maxFiles) {
      alert(`En fazla ${maxFiles} dosya yükleyebilirsiniz`);
      return;
    }

    const newFiles: UploadedFile[] = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'uploading'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    onUpload?.(validFiles);

    // Simulate upload progress
    newFiles.forEach(file => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === file.id && f.progress < 100
              ? { ...f, progress: f.progress + 10 }
              : f.id === file.id && f.progress >= 100
                ? { ...f, status: 'completed' }
                : f
          )
        );
      }, 200);

      setTimeout(() => clearInterval(interval), 2000);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    onRemove?.(fileId);
  };

  const DropZone = () => (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => fileInputRef.current?.click()}
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300",
        dragActive 
          ? "border-primary bg-primary/5 scale-105" 
          : "border-border hover:border-primary/50 hover:bg-muted/50"
      )}
    >
      <Upload className={cn(
        "h-12 w-12 mx-auto mb-4 transition-colors",
        dragActive ? "text-primary" : "text-muted-foreground"
      )} />
      <h3 className="text-lg font-semibold mb-2">
        {dragActive ? "Dosyaları bırakın" : "Dosyaları buraya sürükleyin"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        veya dosya seçmek için tıklayın
      </p>
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Maksimum {maxSize}MB</span>
        <span>•</span>
        <span>{maxFiles} dosyaya kadar</span>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />
    </div>
  );

  const FileList = () => (
    <div className="space-y-3">
      {uploadedFiles.map((file) => {
        const FileIcon = getFileIcon(file.type);
        const iconColor = getFileTypeColor(file.type);
        
        return (
          <Card key={file.id} className="group hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-lg bg-muted", iconColor)}>
                  <FileIcon className="h-5 w-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm truncate">{file.name}</h4>
                    <div className="flex items-center gap-2">
                      {file.status === 'completed' && (
                        <Badge variant="default" className="h-5 px-2 text-xs bg-green-100 text-green-800">
                          <Check className="h-3 w-3 mr-1" />
                          Tamamlandı
                        </Badge>
                      )}
                      {file.status === 'error' && (
                        <Badge variant="destructive" className="h-5 px-2 text-xs">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Hata
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(file.id)}
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>{formatFileSize(file.size)}</span>
                    <span>{file.progress}%</span>
                  </div>
                  
                  {file.status === 'uploading' && (
                    <Progress value={file.progress} className="h-1" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  if (variant === 'compact') {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Dosya Seç
          </Button>
          <span className="text-sm text-muted-foreground">
            veya sürükleyip bırakın
          </span>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        
        {uploadedFiles.length > 0 && <FileList />}
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <DropZone />
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Yüklenen Dosyalar ({uploadedFiles.length})</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setUploadedFiles([])}
            >
              Tümünü Temizle
            </Button>
          </div>
          <FileList />
        </div>
      )}
    </div>
  );
}