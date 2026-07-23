import { Search, SlidersHorizontal, LayoutGrid, List, ArrowDownToLine, ChevronDown } from 'lucide-react';

const componentsList = [
  {
    title: 'Frontend Design',
    desc: 'Create distinctive, production-grade frontend interfaces with high design quality. Use this skill...',
    tag: 'creative-design',
    downloads: 7127,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Code Reviewer',
    desc: 'Comprehensive code review skill for TypeScript, JavaScript, Python, Swift, Kotlin, Go. Includes...',
    tag: 'development',
    downloads: 4808,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Senior Frontend',
    desc: 'Comprehensive frontend development skill for building modern, performant web applications...',
    tag: 'development',
    downloads: 4323,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Ui Ux Pro Max',
    desc: 'UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks (React,...',
    tag: 'creative-design',
    downloads: 3796,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Senior Backend',
    desc: 'Comprehensive backend development skill for building scalable backend systems using...',
    tag: 'development',
    downloads: 3793,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Senior Architect',
    desc: 'Comprehensive software architecture skill for designing scalable, maintainable systems using...',
    tag: 'development',
    downloads: 3095,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'Skill Creator',
    desc: 'Create new skills, modify and improve existing skills to share with the world...',
    tag: 'development',
    downloads: 3000,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'UI Design System',
    desc: 'UI design system toolkit for Senior UI Designer ...',
    tag: 'creative-design',
    downloads: 2500,
    iconColor: 'text-cyan-500 bg-cyan-50'
  },
  {
    title: 'React Best Practices',
    desc: 'Comprehensive React and Next.js performance optimization skill...',
    tag: 'development',
    downloads: 2100,
    iconColor: 'text-cyan-500 bg-cyan-50'
  }
];

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#0f0f11] p-8 h-[calc(100vh-53px)]">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-6xl md:text-7xl font-black text-[#06b6d4] tracking-tighter" style={{ fontFamily: 'monospace' }}>
               AI TEMPLATES
            </h1>
            <div className="w-16 h-12 bg-[#06b6d4] rounded-sm relative">
                {/* Basic pixel alien shape simulation */}
                <div className="absolute top-2 left-3 w-2 h-2 bg-[#0f0f11]"></div>
                <div className="absolute top-2 right-3 w-2 h-2 bg-[#0f0f11]"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#0f0f11]"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#0f0f11]"></div>
                <div className="absolute bottom-0 left-4 w-8 h-2 bg-[#0f0f11]"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p>Ready-to-use configurations for your Claude Code projects</p>
          </div>
        </div>

        {/* Featured Integrations */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
               <span className="text-cyan-500">*</span> FEATURED INTEGRATIONS
             </div>
             <button className="text-sm text-cyan-600 border border-cyan-200 px-3 py-1.5 rounded-md font-medium hover:bg-cyan-50 transition-colors flex items-center gap-1">
               Promote your component →
             </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Bright Data', type: 'Web Data', desc: 'Complete Web Data Template', icon: 'bg-blue-500' },
              { name: 'ClaudeKit', type: 'Toolkit', desc: 'AI Agents & Skills', icon: 'bg-cyan-500' },
              { name: 'BrainGrid', type: 'Planning', desc: 'Plan. Build. Verify. Repeat.', icon: 'bg-green-500' },
            ].map(integration => (
               <div key={integration.name} className="border border-white/10 rounded-xl p-4 flex gap-4 hover:border-cyan-300 transition-colors cursor-pointer shadow-sm">
                 <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${integration.name === 'Bright Data' ? 'bg-blue-50' : integration.name === 'ClaudeKit' ? 'bg-cyan-50' : 'bg-green-50'}`}>
                    <div className={`w-6 h-6 rounded ${integration.icon}`}></div>
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <h3 className="font-semibold text-white">{integration.name}</h3>
                       <span className="text-[10px] bg-white/10 text-gray-400 px-1.5 py-0.5 rounded border border-white/10">{integration.type}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{integration.desc}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
           <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search components..." 
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
           </div>
           <button className="flex items-center justify-between gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 min-w-[140px]">
              All categories
              <ChevronDown className="w-4 h-4 text-gray-400" />
           </button>
           <button className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
           </button>
           <div className="flex bg-white/5 border border-white/10 rounded-md p-0.5">
              <button className="p-1.5 bg-[#0f0f11] shadow-sm rounded-sm text-gray-200">
                 <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-200">
                 <List className="w-4 h-4" />
              </button>
           </div>
           
           <div className="ml-auto flex items-center gap-2">
             <span className="text-sm text-gray-400">Sort by</span>
             <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10">
                Most Popular
                <ChevronDown className="w-4 h-4 text-gray-400" />
             </button>
           </div>
        </div>

        {/* List Header */}
        <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
             <span className="text-sm font-semibold text-gray-300">865 components</span>
             <button className="text-xs font-medium bg-white/10 hover:bg-gray-200 text-gray-300 px-3 py-1.5 rounded-full transition-colors">
               + Add Page to Stack
             </button>
           </div>
           <div className="flex items-center gap-2 text-xs text-gray-400">
             <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400 font-sans">⌘K</kbd> to search
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {componentsList.map((comp, i) => (
             <div key={i} className="border border-white/10 rounded-xl p-5 hover:border-white/20 hover:shadow-md transition-all cursor-pointer flex flex-col bg-[#0f0f11]">
                <div className="flex items-start gap-4 mb-3">
                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${comp.iconColor}`}>
                      {/* Using a generic icon for all cards for simplicity, resembling the stack icon in the screenshot */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                         <path d="M2 12l10-5 10 5-10 5-10-5z"></path>
                         <path d="M2 17l10 5 10-5"></path>
                         <path d="M2 7l10 5 10-5"></path>
                      </svg>
                   </div>
                   <div className="flex-1">
                      <h3 className="font-semibold text-white leading-tight">{comp.title}</h3>
                   </div>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">{comp.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                   <span className="text-xs font-medium text-gray-400 bg-white/10 px-2 py-1 rounded">
                     {comp.tag}
                   </span>
                   <div className="flex items-center gap-1 text-green-600 text-xs font-medium px-2 py-1 bg-green-50 rounded border border-green-100">
                      <ArrowDownToLine className="w-3 h-3" />
                      {comp.downloads.toLocaleString()}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
