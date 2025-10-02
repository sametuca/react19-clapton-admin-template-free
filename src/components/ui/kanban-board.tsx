import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip, Flag } from 'lucide-react';

interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: {
    name: string;
    avatar?: string;
    initials: string;
  };
  dueDate?: string;
  tags?: string[];
  comments?: number;
  attachments?: number;
}

interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
  color?: string;
  limit?: number;
}

interface KanbanBoardProps {
  columns: KanbanColumn[];
  onTaskMove?: (taskId: string, fromColumn: string, toColumn: string) => void;
  onTaskClick?: (task: KanbanTask) => void;
  onAddTask?: (columnId: string) => void;
  className?: string;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  urgent: 'bg-red-100 text-red-800 border-red-200'
};

const priorityIcons = {
  low: '🟢',
  medium: '🟡',
  high: '🟠',
  urgent: '🔴'
};

export function KanbanBoard({ 
  columns, 
  onTaskMove, 
  onTaskClick, 
  onAddTask,
  className 
}: KanbanBoardProps) {
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [draggedFrom, setDraggedFrom] = useState<string | null>(null);

  const handleDragStart = (taskId: string, columnId: string) => {
    setDraggedTask(taskId);
    setDraggedFrom(columnId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    if (draggedTask && draggedFrom && draggedFrom !== columnId) {
      onTaskMove?.(draggedTask, draggedFrom, columnId);
    }
    setDraggedTask(null);
    setDraggedFrom(null);
  };

  const TaskCard = ({ task, columnId }: { task: KanbanTask; columnId: string }) => (
    <Card
      draggable
      onDragStart={() => handleDragStart(task.id, columnId)}
      onClick={() => onTaskClick?.(task)}
      className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] group"
    >
      <CardContent className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
            {task.title}
          </h4>
          <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </div>
        
        {/* Description */}
        {task.description && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {task.description}
          </p>
        )}
        
        {/* Tags */}
        {task.tags && task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {task.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs h-5">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Priority */}
            <Badge 
              variant="outline" 
              className={cn("text-xs h-5 px-1.5", priorityColors[task.priority])}
            >
              {priorityIcons[task.priority]} {task.priority}
            </Badge>
            
            {/* Due Date */}
            {task.dueDate && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {task.dueDate}
              </div>
            )}
          </div>
          
          {/* Assignee */}
          {task.assignee && (
            <Avatar className="h-6 w-6">
              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
              <AvatarFallback className="text-xs">{task.assignee.initials}</AvatarFallback>
            </Avatar>
          )}
        </div>
        
        {/* Meta Info */}
        {(task.comments || task.attachments) && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {task.comments && (
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                {task.comments}
              </div>
            )}
            {task.attachments && (
              <div className="flex items-center gap-1">
                <Paperclip className="h-3 w-3" />
                {task.attachments}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className={cn("flex gap-6 overflow-x-auto pb-4", className)}>
      {columns.map((column) => (
        <div
          key={column.id}
          className="flex-shrink-0 w-80"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
        >
          <Card className="h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {column.color && (
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: column.color }}
                    />
                  )}
                  <CardTitle className="text-lg">{column.title}</CardTitle>
                  <Badge variant="secondary" className="h-5 px-2 text-xs">
                    {column.tasks.length}
                    {column.limit && `/${column.limit}`}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onAddTask?.(column.id)}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} columnId={column.id} />
              ))}
              
              {column.tasks.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Flag className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Görev bulunamadı</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}