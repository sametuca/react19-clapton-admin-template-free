import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  MoreHorizontal,
  ThumbsUp,
  Eye,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostCardProps {
  author: {
    name: string;
    username?: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  views?: number;
  isLiked?: boolean;
  className?: string;
}

export function PostCard({
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  shares,
  views,
  isLiked = false,
  className
}: PostCardProps) {
  return (
    <Card className={cn("transition-all duration-300 hover:shadow-md", className)}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{author.name}</h4>
                {author.verified && (
                  <Badge variant="secondary" className="h-5 px-2 text-xs">
                    ✓ Doğrulanmış
                  </Badge>
                )}
              </div>
              {author.username && (
                <p className="text-sm text-muted-foreground">@{author.username}</p>
              )}
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="h-3 w-3" />
                {timestamp}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-sm leading-relaxed">{content}</p>
        </div>

        {/* Image */}
        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Stats */}
        {views && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <Eye className="h-3 w-3" />
            <span>{views.toLocaleString()} görüntülenme</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors",
                isLiked && "text-red-500"
              )}
            >
              <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
              <span className="text-sm font-medium">{likes.toLocaleString()}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">{comments}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">{shares}</span>
            </Button>
          </div>
          
          <Button variant="outline" size="sm">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Beğen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
