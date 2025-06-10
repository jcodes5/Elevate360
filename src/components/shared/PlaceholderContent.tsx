import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type React from "react";

interface PlaceholderContentProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function PlaceholderContent({ title, description, icon, children, className }: PlaceholderContentProps) {
  return (
    <div className={`flex flex-col items-center justify-center h-full p-4 ${className}`}>
      <Card className="w-full max-w-2xl text-center shadow-xl">
        <CardHeader>
          {icon && <div className="mx-auto mb-4 text-primary scale-150 [&>svg]:stroke-primary">{icon}</div>}
          <CardTitle className="text-3xl font-headline text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {description && <CardDescription className="text-lg text-foreground/80 mb-6">{description}</CardDescription>}
          {children}
          <p className="mt-8 text-sm text-muted-foreground">
            This section is under development. Exciting features are coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
