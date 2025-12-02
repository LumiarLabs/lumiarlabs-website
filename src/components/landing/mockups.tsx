"use client";

import { 
  BarChart3, 
  FileText, 
  Home, 
  PieChart, 
  Search, 
  Settings, 
  Users, 
  Bell,
  MoreHorizontal,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Split,
  Eye,
  Filter,
  Star,
  Clock,
  Plus,
  Sparkles,
  Download,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardMockup() {
  return (
    <div className="w-full h-full bg-background rounded-xl overflow-hidden flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r bg-muted/30 hidden md:flex flex-col p-4 gap-4">
          <div className="flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-primary" />
            </div>
            <span className="font-semibold">LumiPact</span>
          </div>
          
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="secondary" className="w-full justify-start gap-2" size="sm">
              <FileText className="h-4 w-4" />
              Contracts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
              <PieChart className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
              <Users className="h-4 w-4" />
              Team
            </Button>
          </div>
          <div className="mt-auto space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-background/50">
          {/* Header */}
          <div className="h-14 border-b flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-foreground font-medium">Contract Overview</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {/* Dashboard Content */}
          <div className="p-6 space-y-6 overflow-hidden">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Active Contracts", value: "124", change: "+12%", trend: "up" },
                { label: "Pending Review", value: "8", change: "-2", trend: "down" },
                { label: "Risk Score", value: "Low", change: "98/100", trend: "neutral" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card/50 space-y-2">
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className={`text-xs flex items-center gap-1 ${
                      stat.trend === 'up' ? 'text-green-500' : 
                      stat.trend === 'down' ? 'text-orange-500' : 'text-blue-500'
                    }`}>
                      {stat.change}
                      {stat.trend === 'up' && <ArrowUpRight className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Recent Contracts List */}
            <div className="rounded-lg border bg-card/50 overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <h3 className="font-semibold">Recent Activity</h3>
                <Button variant="outline" size="sm" className="h-8 text-xs">View All</Button>
              </div>
              <div className="divide-y">
                {[
                  { name: "Service Agreement - Acme Corp", status: "Analyzed", risk: "Low", date: "2h ago" },
                  { name: "NDA - TechStart Inc", status: "Pending", risk: "Medium", date: "5h ago" },
                  { name: "Partnership Deal - GlobalSoft", status: "Signed", risk: "None", date: "1d ago" },
                  { name: "Vendor Contract - SupplyCo", status: "Analyzed", risk: "High", date: "2d ago" },
                ].map((item, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        item.risk === 'High' ? 'bg-red-500/10 text-red-500' :
                        item.risk === 'Medium' ? 'bg-orange-500/10 text-orange-500' :
                        'bg-green-500/10 text-green-500'
                      }`}>
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={item.risk === 'High' ? 'destructive' : 'secondary'} className="capitalize">
                        {item.risk} Risk
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NegotiationMockupA() {
  return (
    <div className="w-full h-full bg-background rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="h-16 border-b flex items-center justify-between px-6 bg-muted/10">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Split className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">MSA Negotiation - Round 2</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>vs. Counterparty V2</span>
              <Badge variant="outline" className="h-5 px-1.5 text-[10px]">In Review</Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Preview PDF
          </Button>
          <Button size="sm">
            Submit Review
          </Button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Change List & Risks */}
        <div className="w-80 border-r bg-muted/5 flex flex-col">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-sm mb-1">Detected Changes</h3>
            <p className="text-xs text-muted-foreground">3 modifications requiring review</p>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg border bg-background shadow-sm border-l-4 border-l-red-500 cursor-pointer ring-1 ring-primary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">2.1 Payment Terms</span>
                  <AlertTriangle className="h-3 w-3 text-red-500" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Changed payment window from 30 to 60 days.
                </p>
              </div>
              <div className="p-3 rounded-lg border bg-background/50 hover:bg-background transition-colors cursor-pointer border-l-4 border-l-yellow-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">4.3 Indemnity</span>
                  <AlertTriangle className="h-3 w-3 text-yellow-500" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Added mutual indemnification clause.
                </p>
              </div>
              <div className="p-3 rounded-lg border bg-background/50 hover:bg-background transition-colors cursor-pointer border-l-4 border-l-green-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">8.1 Termination</span>
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Accepted our proposed termination notice period.
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
        {/* Main Panel: Split View Comparison */}
        <div className="flex-1 flex flex-col bg-background">
          {/* Comparison Header */}
          <div className="h-10 border-b flex items-center px-4 bg-muted/20 text-xs font-medium text-muted-foreground">
            <div className="flex-1 pl-4">Original (v1)</div>
            <div className="w-8 flex justify-center"><ArrowRight className="h-3 w-3" /></div>
            <div className="flex-1 pl-4">Counterparty (v2)</div>
          </div>
          {/* Comparison Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-8">
              {/* Clause 2.1 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">2.1 Payment Terms</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                      <XCircle className="mr-1.5 h-3 w-3" /> Reject
                    </Button>
                    <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">
                      <CheckCircle2 className="mr-1.5 h-3 w-3" /> Accept
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                  <div className="p-4 rounded-lg bg-muted/30 border text-sm text-muted-foreground">
                    Payment shall be made within <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium px-1 rounded">thirty (30)</span> days of the invoice date.
                  </div>
                  <div className="pt-4 text-muted-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-sm">
                    Payment shall be made within <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium px-1 rounded">sixty (60)</span> days of the invoice date.
                  </div>
                </div>
                <div className="p-3 rounded-md bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 flex gap-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-yellow-800 dark:text-yellow-500">Risk Alert: Cash Flow Impact</p>
                    <p className="text-xs text-yellow-700 dark:text-yellow-400/80">
                      Extending payment terms to 60 days significantly exceeds your standard 30-day policy. Consider countering with 45 days.
                    </p>
                    <div className="pt-1">
                      <Button variant="link" className="h-auto p-0 text-xs text-yellow-800 underline decoration-yellow-800/30">
                        Use AI Counter-Proposal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              {/* Clause 4.3 */}
              <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">4.3 Indemnification</h3>
                  <Badge variant="secondary" className="text-xs">Pending</Badge>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                  <div className="p-4 rounded-lg bg-muted/30 border text-sm text-muted-foreground">
                    [Clause Missing]
                  </div>
                  <div className="pt-4 text-muted-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-sm">
                    Each party shall indemnify, defend, and hold harmless the other party...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplatesMockup() {
  return (
    <div className="w-full h-full bg-background rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 border-b bg-muted/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Template Library</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Template
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search templates..." className="pl-9 bg-background/50" />
          </div>
          <Tabs defaultValue="all" className="w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Grid */}
      <div className="flex-1 p-6 overflow-y-auto bg-background/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Non-Disclosure Agreement", category: "Legal", popular: true, lastUsed: "2h ago" },
            { title: "Freelance Contract", category: "HR", popular: true, lastUsed: "1d ago" },
            { title: "SaaS Service Agreement", category: "Sales", popular: false, lastUsed: "3d ago" },
            { title: "Employment Offer Letter", category: "HR", popular: false, lastUsed: "1w ago" },
            { title: "Privacy Policy", category: "Legal", popular: false, lastUsed: "2w ago" },
            { title: "Partnership Agreement", category: "Business", popular: true, lastUsed: "1mo ago" },
          ].map((template, i) => (
            <div key={i} className="group relative rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] bg-muted/30 p-4 flex items-center justify-center relative">
                <div className="w-3/4 h-full bg-background shadow-sm border rounded-t-lg p-3 text-[8px] text-muted-foreground overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-1/2 h-2 bg-muted rounded mb-2" />
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-muted/50 rounded" />
                    <div className="w-full h-1 bg-muted/50 rounded" />
                    <div className="w-2/3 h-1 bg-muted/50 rounded" />
                  </div>
                </div>
                {template.popular && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600 text-white border-none shadow-sm">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{template.title}</h3>
                    <p className="text-xs text-muted-foreground">{template.category}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {template.lastUsed}
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-yellow-500">
                    <Star className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudioMockup() {
  return (
    <div className="w-full h-full bg-background rounded-xl overflow-hidden flex">
      {/* Main Content: Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Input Form */}
        <div className="w-1/2 border-r overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <div className="space-y-1.5">
                <h1 className="text-lg font-bold">Describe your deal</h1>
                <p className="text-xs text-muted-foreground">
                  Feed LumiPact a plain-language scenario or pick a template.
                </p>
              </div>

              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium">Parties Involved</label>
                  <div className="h-8 px-3 rounded-md border bg-background flex items-center">
                    <span className="text-xs text-muted-foreground">John Doe (Client), Jane Smith (Provider)</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium">Describe Contract</label>
                  <div className="h-20 px-3 py-2 rounded-md border bg-background">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Web development services for a landing page with two rounds of revisions, 
                      delivered by January 15th for $800.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium">Payment Terms</label>
                    <div className="h-16 px-2 py-1.5 rounded-md border bg-background">
                      <p className="text-[10px] text-muted-foreground">
                        50% upfront, 50% on completion
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium">Timeline</label>
                    <div className="h-16 px-2 py-1.5 rounded-md border bg-background">
                      <p className="text-[10px] text-muted-foreground">
                        4 weeks from kickoff
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  <FileText className="mr-2 h-3 w-3" />
                  Draft my contract
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Right: Preview */}
        <div className="w-1/2 flex flex-col bg-background/50">
          <div className="border-b p-3 bg-background/80 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <h2 className="font-semibold text-sm">Generated Contract</h2>
            </div>
            <div className="flex gap-1.5">
              <Button variant="outline" size="sm" className="h-7 px-2">
                <Copy className="h-3 w-3" />
              </Button>
              <Button variant="default" size="sm" className="h-7 px-2 text-xs">
                <Download className="mr-1.5 h-3 w-3" />
                Export PDF
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="flex border-b bg-muted/20 px-3">
              <button className="px-3 py-2 text-xs font-medium border-b-2 border-primary">
                Preview
              </button>
              <button className="px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                Insights & Risks
              </button>
              <button className="px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                Actions
              </button>
            </div>

            <ScrollArea className="h-full">
              <div className="p-4">
                <div className="rounded-lg border bg-background p-4 font-mono text-[10px] leading-relaxed space-y-3">
                  <h2 className="font-bold text-xs text-foreground">PROFESSIONAL SERVICES AGREEMENT</h2>
                  <p className="text-muted-foreground">
                    This Professional Services Agreement (the "Agreement") is entered into 
                    as of November 30, 2024, by and between:
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">John Doe</strong> ("Client"), and
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Jane Smith</strong> ("Provider").
                  </p>
                  <div className="pt-2">
                    <h3 className="font-bold text-[11px] text-foreground">1. SERVICES</h3>
                    <p className="text-muted-foreground mt-1">
                      Provider agrees to provide web development services for a landing page 
                      as described in Exhibit A. Services shall include up to two (2) rounds 
                      of revisions.
                    </p>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-[11px] text-foreground">2. COMPENSATION</h3>
                    <p className="text-muted-foreground mt-1">
                      Client shall pay Provider a total fee of $800. Payment terms: 50% ($400) 
                      due upon execution of this Agreement, and 50% ($400) due upon completion 
                      and acceptance of all deliverables.
                    </p>
                  </div>
                  <div className="p-2 border-l-2 border-primary bg-primary/5 my-2">
                    <div className="flex items-center gap-1 text-primary mb-0.5">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span className="text-[9px] font-bold">AI Insight</span>
                    </div>
                    <p className="text-[9px] text-muted-foreground">
                      This payment structure protects both parties - upfront deposit secures commitment, 
                      final payment upon delivery ensures satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}

