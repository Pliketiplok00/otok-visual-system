/**
 * Templates Index Page
 * 
 * Lists all available template examples with descriptions
 */

import AppHeader from '@/components/layout/AppHeader';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Settings, 
  Image, 
  Search, 
  FileText, 
  Info, 
  Grid,
  Palette
} from 'lucide-react';

interface Template {
  id: string;
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
}

const templates: Template[] = [
  {
    id: 'a',
    path: '/templates/simple',
    title: 'Template A: Simple Header',
    description: 'Settings, configuration, list pages without images',
    icon: <Settings className="w-5 h-5" />,
    color: 'bg-vis-yellow',
    shadowColor: 'hsl(var(--vis-green))',
  },
  {
    id: 'b',
    path: '/templates/image',
    title: 'Template B: Image Header',
    description: 'Feature pages, detail pages with hero imagery',
    icon: <Image className="w-5 h-5" />,
    color: 'bg-vis-green',
    shadowColor: 'hsl(var(--vis-blue))',
  },
  {
    id: 'c',
    path: '/templates/list',
    title: 'Template C: List with Search',
    description: 'Directories, contacts, searchable content',
    icon: <Search className="w-5 h-5" />,
    color: 'bg-vis-blue',
    shadowColor: 'hsl(var(--vis-yellow))',
  },
  {
    id: 'd',
    path: '/templates/form',
    title: 'Template D: Form Page',
    description: 'Feedback forms, contact forms, report submission',
    icon: <FileText className="w-5 h-5" />,
    color: 'bg-vis-cyan',
    shadowColor: 'hsl(var(--vis-violet))',
  },
  {
    id: 'e',
    path: '/templates/detail',
    title: 'Template E: Detail Page',
    description: 'Event details, item details, article pages',
    icon: <Info className="w-5 h-5" />,
    color: 'bg-vis-purple',
    shadowColor: 'hsl(var(--vis-deep-blue))',
  },
  {
    id: 'f',
    path: '/templates/grid',
    title: 'Template F: Grid Page',
    description: 'Home pages, selection screens, menus',
    icon: <Grid className="w-5 h-5" />,
    color: 'bg-vis-amber',
    shadowColor: 'hsl(var(--vis-orange))',
  },
];

const TemplatesIndex = () => {
  const navigate = useNavigate();

  const getTextColor = (color: string) => {
    return color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground';
  };

  return (
    <div className="min-h-screen bg-vis-blue">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          >
            <Palette className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Page Templates</h1>
            <p className="text-sm opacity-80">Reference implementations</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        
        {/* Intro */}
        <div 
          className="p-4 border-[3px] border-foreground bg-vis-yellow mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <p className="text-sm">
            <span className="font-bold">These are working template examples.</span> Each template 
            demonstrates a common page pattern with full code comments. Use them as starting points 
            for new pages.
          </p>
        </div>

        {/* Template List */}
        <div className="space-y-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => navigate(template.path)}
              className="
                w-full text-left p-4 
                border-[3px] border-foreground bg-card
                flex items-center gap-4
                hover:translate-x-[2px] hover:translate-y-[2px]
                transition-all
              "
              style={{ boxShadow: `4px 4px 0 ${template.shadowColor}` }}
            >
              {/* Icon box */}
              <div className={`
                w-12 h-12 ${template.color} ${getTextColor(template.color)}
                border-[3px] border-foreground 
                flex items-center justify-center shrink-0
              `}>
                {template.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">{template.title}</p>
                <p className="text-xs text-muted-foreground">{template.description}</p>
              </div>
              
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
            </button>
          ))}
        </div>

        {/* Link to Style Guide */}
        <div className="mt-6 pt-6 border-t-2 border-muted-foreground/30">
          <button
            onClick={() => navigate('/style-guide')}
            className="
              w-full p-4 
              border-[3px] border-foreground bg-vis-green
              flex items-center justify-between
              hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all
            "
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="flex items-center gap-3">
              <Palette className="w-6 h-6" />
              <div className="text-left">
                <p className="font-bold uppercase">Style Guide</p>
                <p className="text-xs opacity-80">View all components</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Back to Menu */}
        <button
          onClick={() => navigate('/menu')}
          className="
            w-full mt-4 p-3
            text-center text-sm text-muted-foreground
            hover:text-foreground transition-colors
          "
        >
          ← Back to Menu
        </button>

        {/* Decorative footer */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-purple border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-amber border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default TemplatesIndex;
