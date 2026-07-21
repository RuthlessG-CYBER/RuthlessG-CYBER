import { Search, Github, Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-cyan-50 text-cyan-500 font-bold">
          {">_"}
        </div>
        <span className="font-bold text-gray-800">AI Templates</span>
      </div>
      
      <div className="flex-1 max-w-xl px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search components..." 
            className="w-full pl-9 pr-12 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
             <kbd className="px-1.5 py-0.5 text-xs text-gray-500 bg-white border border-gray-200 rounded">⌘ K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Sun className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
