import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { KanbanBoard } from "@/components/ui/kanban-board";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { BarChart3 } from "lucide-react";

interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high" | "urgent";
  assignee?: { name: string; avatar?: string; initials: string };
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

export default function KanbanBoardShowcase() {
  const { t } = useLanguage();

  const initialColumns: KanbanColumn[] = [
    {
      id: "backlog",
      title: "Unassigned",
      color: "#94a3b8",
      tasks: [
        {
          id: "T-1",
          title: "Profile Page Structure",
          description: "Public or guest accessible profile page base.",
          priority: "low",
          dueDate: "03 Jan, 2022",
          tags: ["admin"],
          comments: 4,
          attachments: 2,
        },
      ],
    },
    {
      id: "todo",
      title: "To Do",
      color: "#38bdf8",
      tasks: [
        {
          id: "T-2",
          title: "Admin Layout Design",
          description: "Clean and modern landing template.",
          priority: "high",
          assignee: { name: "Alex J.", initials: "AJ" },
          dueDate: "07 Jan, 2022",
          tags: ["design", "website"],
          comments: 12,
          attachments: 3,
        },
        {
          id: "T-3",
          title: "Marketing & Sales",
          description: "Two core business functions with alignment.",
          priority: "medium",
          assignee: { name: "Sarah Y.", initials: "SY" },
          dueDate: "27 Dec, 2021",
          tags: ["docs"],
          comments: 3,
        },
      ],
    },
    {
      id: "inprogress",
      title: "In Progress",
      color: "#f59e0b",
      tasks: [
        {
          id: "T-4",
          title: "Brand Logo Design",
          description: "Create/customize brand logo in minutes.",
          priority: "urgent",
          assignee: { name: "Mehmet D.", initials: "MD" },
          dueDate: "22 Dec, 2021",
          tags: ["design", "ui/ux"],
          comments: 10,
          attachments: 1,
        },
        {
          id: "T-5",
          title: "Change Old App Icon",
          description: "Android app icon update for a fresh look.",
          priority: "high",
          assignee: { name: "Fatma K.", initials: "FK" },
          dueDate: "24 Oct, 2021",
          tags: ["design"],
          comments: 8,
        },
      ],
    },
    {
      id: "review",
      title: "In Review",
      color: "#a78bfa",
      tasks: [
        {
          id: "T-6",
          title: "Product Animations",
          description: "Micro-interactions of product cards.",
          priority: "medium",
          assignee: { name: "Ayşe Ö.", initials: "AÖ" },
          dueDate: "Nov, 2021",
          comments: 6,
          attachments: 4,
        },
      ],
    },
    {
      id: "done",
      title: "Completed",
      color: "#22c55e",
      tasks: [
        {
          id: "T-7",
          title: "Create a Blog Template UI",
          priority: "low",
          dueDate: "—",
          tags: ["design", "marketing"],
          comments: 2,
        },
      ],
    },
    {
      id: "new",
      title: "New",
      color: "#ef4444",
      tasks: [
        {
          id: "T-8",
          title: "Banner Design for FB & Twitter",
          priority: "medium",
          assignee: { name: "Team", initials: "T" },
          dueDate: "07 Jan, 2022",
          tags: ["ui/ux", "graphic"],
          attachments: 1,
        },
      ],
    },
  ];

  const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);

  const moveTask = (taskId: string, from: string, to: string) => {
    if (from === to) return;
    setColumns((prev) => {
      const clone = prev.map((c) => ({ ...c, tasks: [...c.tasks] }));
      const fromCol = clone.find((c) => c.id === from)!;
      const toCol = clone.find((c) => c.id === to)!;
      const idx = fromCol.tasks.findIndex((t) => t.id === taskId);
      if (idx === -1) return prev;
      const [task] = fromCol.tasks.splice(idx, 1);
      toCol.tasks.unshift(task);
      return [...clone];
    });
  };

  const addTask = (columnId: string) => {
    setColumns((prev) =>
      prev.map((c) =>
        c.id === columnId
          ? {
              ...c,
              tasks: [
                {
                  id: `T-${Math.floor(Math.random() * 10000)}`,
                  title: "New Task",
                  description: "Quickly added from showcase.",
                  priority: "medium",
                  comments: 0,
                },
                ...c.tasks,
              ],
            }
          : c
      )
    );
  };

  return (
    <>
      <Helmet>
        <title>Kanban Board - Showcase</title>
        <meta name="description" content="Drag-and-drop Kanban board example" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Kanban Board</h1>
            <p className="text-muted-foreground">
              {t('showcase.index.features.hoverAnimations') || 'Interactive drag-and-drop example with priority, tags and avatars.'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="h-8">Demo</Badge>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-1" />
              Stats
            </Button>
          </div>
        </div>

        <KanbanBoard columns={columns} onTaskMove={moveTask} onAddTask={addTask} />
      </div>
    </>
  );
}
