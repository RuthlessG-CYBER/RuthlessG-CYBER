import { 
  Folder, Layers, Bot, Terminal, Settings, 
  Puzzle, Blocks, TrendingUp, Briefcase, FileText, 
  Github, LogIn
} from 'lucide-react';

export default function SidebarLeft() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col h-[calc(100vh-53px)] overflow-y-auto">
      <div className="p-4 flex-1">
        
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Workplace</h3>
          <nav className="space-y-0.5">
            <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <Folder className="w-4 h-4" />
              My Components
            </a>
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Browse</h3>
          <nav className="space-y-0.5">
            {[
              { icon: Layers, label: 'Skills', count: 865 },
              { icon: Bot, label: 'Agents', count: 421 },
              { icon: Terminal, label: 'Commands', count: 286 },
              { icon: Settings, label: 'Settings', count: 69 },
              { icon: Puzzle, label: 'Hooks', count: 62 },
              { icon: Blocks, label: 'MCPs', count: 93 },
              { icon: Blocks, label: 'Plugins', count: 33 },
            ].map((item) => (
              <a key={item.label} href="#" className="flex items-center justify-between px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{item.count}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">Resources</h3>
          <nav className="space-y-0.5">
            <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <TrendingUp className="w-4 h-4" />
              Trending
            </a>
            <a href="#" className="flex items-center justify-between px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4" />
                Jobs
              </div>
              <span className="text-[10px] bg-cyan-100 text-cyan-600 font-medium px-1.5 py-0.5 rounded uppercase">New</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <FileText className="w-4 h-4" />
              Blog
            </a>
            <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <FileText className="w-4 h-4" />
              Docs
            </a>
            <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <a href="#" className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
          <LogIn className="w-4 h-4" />
          Sign In
        </a>
      </div>
    </aside>
  );
}
