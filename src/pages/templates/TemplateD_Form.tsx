/**
 * TEMPLATE D: Form Page
 * 
 * Use for: Feedback forms, contact forms, report submission
 * 
 * Structure:
 * - Colored header with icon
 * - Form fields with labels
 * - Submit button
 * - Optional helper text
 */

import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import { MessageSquare, Send, Camera, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TemplateD_Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // SUCCESS STATE - Show after form submission
  // ═══════════════════════════════════════════════════════════════════════════
  if (submitted) {
    return (
      <div className="min-h-screen bg-vis-green flex flex-col items-center justify-center px-6 py-12">
        {/* Success icon */}
        <div 
          className="w-24 h-24 bg-card border-[3px] border-foreground flex items-center justify-center mb-8"
          style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
        >
          <CheckCircle className="w-12 h-12" strokeWidth={2} />
        </div>
        
        {/* Success message */}
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-center mb-4">
          Success!
        </h1>
        <p className="text-center text-foreground/80 mb-8 max-w-sm">
          Your message has been sent. We will respond within 24-48 hours.
        </p>
        
        {/* Back button */}
        <button 
          onClick={() => navigate('/templates')}
          className="
            px-6 py-3
            bg-card text-foreground
            border-[3px] border-foreground
            font-bold uppercase
            hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all
          "
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          Back to Templates
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vis-cyan">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* APP HEADER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AppHeader />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PAGE HEADER                                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <MessageSquare className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Contact Form</h1>
            <p className="text-sm opacity-80">Send us your feedback</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CONTENT CARD                                                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* TEXT INPUT FIELD                                                   */}
          {/* Structure: label + input with shadow                               */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="
                w-full px-4 py-3 h-12
                border-[3px] border-foreground bg-background
                rounded-none
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* EMAIL INPUT FIELD                                                  */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="
                w-full px-4 py-3 h-12
                border-[3px] border-foreground bg-background
                rounded-none
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* SELECT/DROPDOWN FIELD                                              */}
          {/* Note: appearance-none removes default browser styling              */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full px-4 py-3 h-12
                border-[3px] border-foreground bg-background
                rounded-none appearance-none cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            >
              <option value="">Select a category...</option>
              <option value="feedback">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* TEXTAREA FIELD                                                     */}
          {/* resize-none prevents user resizing                                 */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={5}
              className="
                w-full px-4 py-3
                border-[3px] border-foreground bg-background
                rounded-none resize-none
                focus:outline-none focus:ring-2 focus:ring-vis-blue
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* FILE UPLOAD BUTTON (optional)                                      */}
          {/* Style as a regular button that triggers hidden input               */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide">
              Attachment (optional)
            </label>
            <button
              type="button"
              className="
                w-full px-4 py-3 h-12
                border-[3px] border-foreground bg-muted
                rounded-none
                flex items-center justify-center gap-2
                hover:bg-muted/80 transition-colors
              "
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
            >
              <Camera className="w-5 h-5" />
              <span className="font-medium">Add Photo</span>
            </button>
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* SUBMIT BUTTON                                                      */}
          {/* Full-width, primary color, with icon                               */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          <button
            type="submit"
            className="
              w-full px-6 py-4 min-h-touch
              bg-vis-blue text-primary-foreground
              border-[3px] border-foreground
              font-bold uppercase
              flex items-center justify-center gap-2
              hover:translate-x-[2px] hover:translate-y-[2px]
              active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* HELPER TEXT                                                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          We will respond within 24-48 hours
        </p>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* BACK LINK                                                          */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <button
          type="button"
          onClick={() => navigate('/templates')}
          className="
            w-full mt-4 p-3
            text-center text-sm text-muted-foreground
            hover:text-foreground transition-colors
          "
        >
          ← Back to Templates
        </button>
      </div>
    </div>
  );
};

export default TemplateD_Form;
