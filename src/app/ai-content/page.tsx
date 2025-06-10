'use client';

import { useState, type FormEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';
import { generateSuggestions } from './actions';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  prompt: z.string().min(10, { message: 'Prompt must be at least 10 characters.' }).max(500, { message: 'Prompt must be at most 500 characters.' }),
});

type FormData = z.infer<typeof FormSchema>;

export default function AiContentPage() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await generateSuggestions(data);
      if (result.suggestions) {
        setSuggestions(result.suggestions);
        toast({
          title: "Suggestions Generated!",
          description: "AI has provided some content ideas.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to generate suggestions.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 text-primary">
            <Sparkles size={48} />
          </div>
          <CardTitle className="text-3xl font-headline text-primary">AI Content Suggester</CardTitle>
          <CardDescription className="text-lg">
            Get intelligent suggestions for your marketing content. Enter a topic or prompt below.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="prompt" className="text-lg">Your Topic/Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        id="prompt"
                        placeholder="e.g., 'Eco-friendly packaging solutions for small businesses in Nigeria'"
                        rows={4}
                        {...field}
                        className="text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {suggestions.length > 0 && (
        <Card className="max-w-2xl mx-auto mt-8 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Generated Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="p-4 border rounded-md bg-background hover:bg-accent/50 transition-colors">
                  <p className="text-foreground">{suggestion}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
