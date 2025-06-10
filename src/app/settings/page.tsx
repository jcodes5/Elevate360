'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Globe, DollarSign } from 'lucide-react';
import React from 'react';

export default function SettingsPage() {
  const [language, setLanguage] = React.useState('en');
  const [currency, setCurrency] = React.useState('ngn');

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 text-primary">
            <SettingsIcon size={48} />
          </div>
          <CardTitle className="text-3xl font-headline text-primary">Application Settings</CardTitle>
          <CardDescription className="text-lg">
            Manage your preferences for language and currency.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <div className="space-y-2">
            <Label htmlFor="language-select" className="text-lg flex items-center">
              <Globe size={20} className="mr-2 text-primary" /> Language
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language-select" className="w-full text-base">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ha" disabled>Hausa (Coming Soon)</SelectItem>
                <SelectItem value="ig" disabled>Igbo (Coming Soon)</SelectItem>
                <SelectItem value="yo" disabled>Yoruba (Coming Soon)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Support for Nigerian languages is under development.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency-select" className="text-lg flex items-center">
              <DollarSign size={20} className="mr-2 text-primary" /> Currency
            </Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger id="currency-select" className="w-full text-base">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ngn">NGN (Nigerian Naira)</SelectItem>
                <SelectItem value="usd" disabled>USD (US Dollar)</SelectItem>
              </SelectContent>
            </Select>
             <p className="text-sm text-muted-foreground">
              Currently supporting Nigerian Naira (NGN).
            </p>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button size="lg">Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
