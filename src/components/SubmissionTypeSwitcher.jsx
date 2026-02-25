import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const SubmissionTypeSwitcher = ({ submissionType, setSubmissionType }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        type="button"
        variant={submissionType === 'email' ? 'default' : 'outline'}
        onClick={() => setSubmissionType('email')}
        className={cn("transition-all", submissionType === 'email' && "ring-2 ring-primary ring-offset-2")}
      >
        <Mail className="mr-2 h-4 w-4" />
        E-posta
      </Button>
      <Button
        type="button"
        variant={submissionType === 'whatsapp' ? 'default' : 'outline'}
        onClick={() => setSubmissionType('whatsapp')}
        className={cn("transition-all", submissionType === 'whatsapp' && "ring-2 ring-primary ring-offset-2")}
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        WhatsApp
      </Button>
    </div>
  );
};

export default SubmissionTypeSwitcher;