export default function SidebarRight() {
  const jobs = [
    { title: 'Presentation Designer', company: 'INFUSE', tags: ['Remote', 'RemoteOK'] },
    { title: 'React Native Engineer', company: 'HelpBnk', tags: ['Remote', 'RemoteOK'] },
    { title: 'Finance Systems Engineer, Revenue', company: 'Anthropic', tags: ['Anthropic'] },
    { title: 'AI Engineer', company: 'Portless', tags: ['Remote', '$180k-$230k', 'HackerNews'] },
    { title: 'AI Engineer', company: 'Namecoach/Euphonia', tags: ['Remote', 'HackerNews'] },
    { title: 'Staff+ Software Engineer, Safeguards Review Tooling', company: 'Anthropic', tags: ['Anthropic'] },
    { title: 'Technical Enablement Lead, Claude Platform', company: 'Anthropic', tags: ['Anthropic'] },
    { title: 'Engineering Manager, Connectivity - London', company: 'Anthropic', tags: ['Anthropic'] },
  ];

  return (
    <aside className="w-80 border-l border-gray-200 bg-gray-50/50 flex flex-col h-[calc(100vh-53px)] overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-gray-900">JOBS</h3>
            <span className="text-xs bg-cyan-100 text-cyan-600 font-medium px-1.5 py-0.5 rounded">103</span>
          </div>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-900">view all →</a>
        </div>
        <p className="text-xs text-gray-500 mb-4">Using Claude Code</p>

        <div className="space-y-3">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
               <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 font-bold text-gray-400 text-sm">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 leading-tight">{job.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{job.company}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {job.tags.map(tag => (
                        <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          tag === 'Anthropic' ? 'bg-purple-50 text-purple-600' :
                          tag === 'HackerNews' ? 'bg-cyan-50 text-cyan-600' :
                          tag.includes('$') ? 'bg-green-50 text-green-600' :
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
