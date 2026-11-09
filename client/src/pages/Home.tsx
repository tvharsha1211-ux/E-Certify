import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Copy,
  FileCheck2,
  FileKey2,
  FileText,
  Fingerprint,
  GraduationCap,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Network,
  QrCode,
  ScanLine,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";

type IconType = typeof ShieldCheck;

const palette = {
  navy: "#101B35",
  blue: "#315CF5",
  cyan: "#21C7D9",
};

function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="E-Verifi home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 50" fill="none">
          <path d="M22 2 39 8v15c0 11.5-6.8 20-17 25C11.8 43 5 34.5 5 23V8L22 2Z" stroke="currentColor" strokeWidth="2.5" />
          <path d="m13 24 6 6 12-13" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="39" cy="12" r="2.2" fill="currentColor" />
          <circle cx="43" cy="18" r="1.5" fill="currentColor" opacity=".7" />
        </svg>
      </span>
      {!compact && <span className="brand-word">E-Verifi</span>}
    </Link>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const className = `btn btn-${variant}`;
  if (href) return <Link href={href} className={className}>{children}</Link>;
  return <button type={type} className={className} onClick={onClick}>{children}</button>;
}

function TopNav() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Features", "/features"],
    ["How it works", "/how-it-works"],
    ["Security", "/security"],
    ["About", "/about"],
  ];
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />
        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link href="/login" className="nav-login">Log in</Link>
          <Button href="/verify" variant="primary">Verify a credential <ArrowRight size={15} /></Button>
        </div>
        <button className="nav-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function TrustPill({ icon: Icon, children }: { icon: IconType; children: React.ReactNode }) {
  return <div className="trust-pill"><Icon size={17} /> <span>{children}</span></div>;
}

function NetworkPreview() {
  return (
    <div className="hero-visual" aria-label="Sample credential verification preview">
      <div className="visual-topline"><span className="eyebrow-dot" /> Live verification layer <span className="visual-muted">Demo mode</span></div>
      <div className="network-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="certificate-mini">
        <div className="certificate-head"><span className="mini-seal">EV</span><span>Northbridge University</span><span className="mini-code">A-204</span></div>
        <div className="certificate-rule" />
        <div className="certificate-kicker">Certificate of achievement</div>
        <div className="certificate-name">Maya Chen</div>
        <div className="certificate-degree">Bachelor of Science · Computer Science</div>
        <div className="certificate-foot"><span>Issued 14 May 2026</span><span className="mini-sign">Registrar</span></div>
      </div>
      <div className="verify-badge"><CheckCircle2 size={18} /><div><strong>Credential verified</strong><span>Hash matches registered record</span></div></div>
      <div className="chain-badge"><Blocks size={17} /><span>Block <strong>#19,402,881</strong></span></div>
      <div className="qr-art"><div className="qr-grid">{Array.from({ length: 25 }).map((_, i) => <i key={i} className={i % 3 !== 1 ? "filled" : ""} />)}</div><span>Scan to verify</span></div>
      <div className="visual-note"><ShieldCheck size={15} /> Tamper-evident by design</div>
    </div>
  );
}

const featureCards: { icon: IconType; title: string; copy: string; accent: string }[] = [
  { icon: Blocks, title: "Blockchain security", copy: "Create a tamper-evident fingerprint for every credential without exposing sensitive student data.", accent: "blue" },
  { icon: FileKey2, title: "Digital issuance", copy: "Issue structured, shareable records from one controlled academic workspace.", accent: "cyan" },
  { icon: ScanLine, title: "Instant verification", copy: "Give employers and institutions a fast answer backed by document integrity checks.", accent: "blue" },
  { icon: QrCode, title: "QR-ready records", copy: "Let anyone reach the public verification portal with a simple scan.", accent: "cyan" },
  { icon: LockKeyhole, title: "Secure storage", copy: "Keep documents and application metadata in the right layer, with access control at every step.", accent: "blue" },
  { icon: Users, title: "Role-based access", copy: "Keep administrators, faculty, students, and verifiers in their proper lanes.", accent: "cyan" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span /> {children}</div>;
}

function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo light /><p>The evidence layer for modern academic credentials.</p><span className="footer-meta">Trust Every Credential. Verify Every Achievement.</span></div>
        <div><div className="footer-title">Product</div><Link href="/features">Features</Link><Link href="/how-it-works">How it works</Link><Link href="/security">Security</Link></div>
        <div><div className="footer-title">Platform</div><Link href="/login">Sign in</Link><Link href="/verify">Verify a credential</Link><Link href="/contact">Contact</Link></div>
        <div><div className="footer-title">Built for trust</div><p className="footer-small">E-Verifi is a demonstration platform. Live issuer authentication and blockchain records require a connected deployment.</p><div className="footer-status"><span /> Demo environment</div></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 E-Verifi. Academic records, made verifiable.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="public-page">
      <TopNav />
      <main>
        <section className="hero-section"><div className="container hero-grid"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-icon"><ShieldCheck size={15} /></span> The academic trust layer</div><h1>Academic credentials.<br /><em>Secured by blockchain.</em></h1><p className="hero-lede">A smarter, more transparent way to issue, manage, and verify academic credentials. Built for universities, designed for the people who rely on them.</p><div className="hero-actions"><Button href="/login">Explore platform <ArrowRight size={16} /></Button><Button href="/verify" variant="secondary"><ScanLine size={16} /> Verify a certificate</Button></div><div className="trust-row"><TrustPill icon={BadgeCheck}>Tamper-evident records</TrustPill><TrustPill icon={Sparkles}>Privacy-first by design</TrustPill></div></div><NetworkPreview /></div></section>
        <section className="proof-strip"><div className="container proof-grid"><div className="proof-intro"><span className="micro-label">WHY E-VERIFI</span><strong>Trust, with receipts.</strong></div><div className="proof-item"><div className="proof-number">01</div><div><strong>Transparent</strong><span>Every record leaves an auditable trail.</span></div></div><div className="proof-item"><div className="proof-number">02</div><div><strong>Fast</strong><span>Verify a credential in seconds, not days.</span></div></div><div className="proof-item"><div className="proof-number">03</div><div><strong>Controlled</strong><span>Each role sees exactly what it needs.</span></div></div></div></section>
        <section className="section-block features-section"><div className="container"><div className="section-heading-row"><div><SectionLabel>THE PLATFORM</SectionLabel><h2>Everything a credential needs<br /><span>to be trusted.</span></h2></div><p>From issuance to verification, E-Verifi keeps the chain of evidence clear, secure, and easy to follow.</p></div><div className="feature-grid">{featureCards.map(({ icon: Icon, title, copy, accent }) => <div className="feature-card" key={title}><div className={`feature-icon ${accent}`}><Icon size={20} /></div><h3>{title}</h3><p>{copy}</p><Link href="/features" className="card-link">Explore feature <ChevronRight size={15} /></Link></div>)}</div></div></section>
        <section className="workflow-section"><div className="container workflow-grid"><div className="workflow-intro"><SectionLabel>THE WORKFLOW</SectionLabel><h2>Evidence from<br /><span>issue to answer.</span></h2><p>Every credential follows a deliberate path. Nothing gets marked “verified” just because an ID exists.</p><Link href="/how-it-works" className="text-link">See how it works <ArrowRight size={16} /></Link></div><div className="workflow-steps"><Step n="01" icon={GraduationCap} title="University issues" copy="Academic details are reviewed and a credential document is uploaded securely." /><Step n="02" icon={Fingerprint} title="Hash is generated" copy="SHA-256 creates a unique fingerprint for the document's exact contents." /><Step n="03" icon={Blocks} title="Record is anchored" copy="The minimum required reference is registered through a smart contract." /><Step n="04" icon={ScanLine} title="Anyone can verify" copy="Employers compare the document against the registered record and status." /></div></div></section>
        <section className="security-band"><div className="container security-grid"><div><SectionLabel>SECURITY, EXPLAINED</SectionLabel><h2>Technology that stays<br /><span>out of the way.</span></h2><p>E-Verifi uses each layer for what it does best: cryptography for integrity, smart contracts for shared state, and access control for privacy.</p><Button href="/security" variant="dark">Explore security <ArrowRight size={16} /></Button></div><div className="security-stack"><SecurityRow icon={Fingerprint} label="SHA-256" copy="A document fingerprint that changes when the file changes." /><SecurityRow icon={Blocks} label="Smart contracts" copy="A shared, append-only reference for credential state." /><SecurityRow icon={LockKeyhole} label="Access control" copy="Role-aware views for sensitive academic data." /><SecurityRow icon={Network} label="IPFS-ready" copy="Decentralized storage where the architecture calls for it." /></div></div></section>
        <section className="cta-section"><div className="container cta-inner"><div><SectionLabel>MAKE IT VERIFIABLE</SectionLabel><h2>Make academic credentials<br /><em>more trustworthy.</em></h2></div><div><p>Experience a smarter way to issue and verify educational credentials.</p><div className="cta-actions"><Button href="/login">Get started <ArrowRight size={16} /></Button><Button href="/verify" variant="secondary">Verify a certificate</Button></div></div></div></section>
      </main>
      <PublicFooter />
    </div>
  );
}

function Step({ n, icon: Icon, title, copy }: { n: string; icon: IconType; title: string; copy: string }) { return <div className="workflow-step"><div className="step-number">{n}</div><div className="step-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{copy}</p></div></div>; }
function SecurityRow({ icon: Icon, label, copy }: { icon: IconType; label: string; copy: string }) { return <div className="security-row"><div className="security-row-icon"><Icon size={18} /></div><div><strong>{label}</strong><span>{copy}</span></div><CheckCircle2 size={17} className="security-check" /></div>; }

function SectionPage() {
  const [location] = useLocation();
  const content: Record<string, { kicker: string; title: string; lead: string; icon: IconType }> = {
    "/features": { kicker: "THE PLATFORM", title: "A clearer chain of trust.", lead: "E-Verifi gives every role a precise place in the credential lifecycle — from the registrar's desk to the employer's browser.", icon: LayoutDashboard },
    "/how-it-works": { kicker: "THE WORKFLOW", title: "From issue to answer, without the black box.", lead: "A credential is only useful when the path behind it is understandable. E-Verifi makes each verification step visible.", icon: Activity },
    "/security": { kicker: "SECURITY", title: "Integrity is not the same as identity.", lead: "A valid hash proves a document matches a registered document. It does not independently prove that the issuing university is legitimate — and E-Verifi is designed to keep that distinction clear.", icon: LockKeyhole },
    "/about": { kicker: "ABOUT E-VERIFI", title: "The evidence layer for education.", lead: "E-Verifi is a product concept for universities and institutions that want academic records to be easier to trust, easier to share, and harder to tamper with.", icon: GraduationCap },
    "/contact": { kicker: "CONTACT", title: "Bring a clearer answer to your credential workflow.", lead: "This prototype is ready for a product walkthrough. Connect a university identity, storage provider, and blockchain network when you are ready to move beyond demo mode.", icon: Users },
  };
  const page = content[location] ?? content["/features"];
  return <div className="public-page"><TopNav /><main className="subpage-main"><div className="container subpage-hero"><div className="subpage-copy"><SectionLabel>{page.kicker}</SectionLabel><h1>{page.title}</h1><p>{page.lead}</p><div className="hero-actions"><Button href={location === "/contact" ? "/login" : "/verify"}>{location === "/contact" ? "Explore the demo" : "Try verification"} <ArrowRight size={16} /></Button><Button href="/" variant="secondary">Back to overview</Button></div></div><div className="subpage-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><page.icon size={38} /></div><div className="art-chip chip-a">{location === "/security" ? "SHA-256" : "Credential layer"}</div><div className="art-chip chip-b">{location === "/how-it-works" ? "4 verified steps" : "Role-aware"}</div></div></div><div className="container detail-grid"><div className="detail-card"><div className="detail-index">01</div><h3>Evidence-first product design</h3><p>Strong product surfaces should make the important state obvious. Status, ownership, and next actions are always visible before the decorative layer.</p></div><div className="detail-card"><div className="detail-index">02</div><h3>Technology in the right layer</h3><p>Cryptography protects document integrity. Smart contracts preserve shared references. Access control protects private academic context.</p></div><div className="detail-card"><div className="detail-index">03</div><h3>Demo mode, clearly labeled</h3><p>Sample data is shown as sample data. Real blockchain confirmations, issuer identity, and storage integrations are never implied by the interface.</p></div></div></main><PublicFooter /></div>;
}

export default function Home() {
  const [location] = useLocation();
  return location === "/" ? <HomePage /> : <SectionPage />;
}

const demoRecords = {
  "EVF-2026-00914": { status: "verified", name: "Maya Chen", university: "Northbridge University", degree: "B.Sc. Computer Science", issued: "14 May 2026", type: "Degree certificate", tx: "Demo reference · 0x8f2…91c" },
  "EVF-2026-00402": { status: "revoked", name: "Jordan Ellis", university: "Northbridge University", degree: "B.A. Economics", issued: "22 Feb 2026", type: "Degree certificate", tx: "Demo reference · 0x2aa…77d" },
};

export function VerifyPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<keyof typeof demoRecords | "not-found" | null>(null);
  const record = result && result !== "not-found" ? demoRecords[result] : null;
  const verify = (event: React.FormEvent) => { event.preventDefault(); const normalized = id.trim().toUpperCase(); if (normalized in demoRecords) setResult(normalized as keyof typeof demoRecords); else setResult("not-found"); };
  return <div className="public-page"><TopNav /><main className="verify-main"><div className="container verify-layout"><div className="verify-intro"><SectionLabel>PUBLIC VERIFICATION PORTAL</SectionLabel><h1>Verify an<br /><em>academic credential.</em></h1><p>Verify the authenticity and integrity of academic certificates using a clear, evidence-based workflow.</p><div className="verify-note"><ShieldCheck size={19} /><span><strong>Privacy by default.</strong> Public results show only what the issuer has authorized.</span></div><div className="verify-help"><span className="micro-label">TRY THE DEMO</span><button onClick={() => setId("EVF-2026-00914")}>EVF-2026-00914</button><button onClick={() => setId("EVF-2026-00402")}>EVF-2026-00402</button></div></div><div className="verify-card"><div className="verify-card-top"><div><span className="micro-label">CREDENTIAL CHECK</span><h2>Enter a credential ID</h2></div><div className="verify-card-icon"><ScanLine size={22} /></div></div><form onSubmit={verify}><label htmlFor="credential-id">Credential ID</label><div className="input-with-icon"><FileCheck2 size={18} /><input id="credential-id" value={id} onChange={(e) => setId(e.target.value)} placeholder="e.g. EVF-2026-00914" /></div><div className="verify-form-actions"><Button type="submit">Verify credential <ArrowRight size={16} /></Button><button type="button" className="upload-button" onClick={() => setId("EVF-2026-00914")}><QrCode size={16} /> Use QR code</button></div></form><div className="verify-divider"><span>or upload a QR image</span></div><button className="dropzone" onClick={() => setId("EVF-2026-00914")}><QrCode size={22} /><strong>Drop a QR image here</strong><span>PNG or JPG · demo scanner</span></button>{result && <VerificationResult record={record} failed={result === "not-found"} />}</div></div></main><section className="verification-steps"><div className="container"><div className="section-heading-row compact"><div><SectionLabel>WHAT WE CHECK</SectionLabel><h2>Not just an ID lookup.</h2></div><p>The demo flow mirrors the real verification logic: retrieve, hash, compare, and check status.</p></div><div className="check-grid"><CheckItem n="01" icon={Search} title="Find the reference" copy="The credential ID locates the authorized record." /><CheckItem n="02" icon={Fingerprint} title="Compare hashes" copy="The document fingerprint is compared with the registered hash." /><CheckItem n="03" icon={ClipboardCheck} title="Check current status" copy="Revocation state is checked before a result is shown." /></div></div></section><PublicFooter /></div>;
}

function CheckItem({ n, icon: Icon, title, copy }: { n: string; icon: IconType; title: string; copy: string }) { return <div className="check-item"><div className="detail-index">{n}</div><div className="check-item-icon"><Icon size={18} /></div><div><h3>{title}</h3><p>{copy}</p></div></div>; }
function VerificationResult({ record, failed }: { record: typeof demoRecords[keyof typeof demoRecords] | null; failed: boolean }) { return <div className={`verification-result ${failed ? "failed" : record?.status === "revoked" ? "revoked" : "verified"}`}><div className="result-top"><div className="result-status-icon">{failed ? <XCircle size={21} /> : record?.status === "revoked" ? <Activity size={21} /> : <CheckCircle2 size={21} />}</div><div><span className="micro-label">DEMO RESULT</span><h3>{failed ? "Credential not found" : record?.status === "revoked" ? "Credential revoked" : "Verified credential"}</h3></div><span className="result-pill">{failed ? "Failed" : record?.status === "revoked" ? "Revoked" : "Verified"}</span></div>{failed ? <p>No demo record matched this credential ID. A real deployment would stop here without claiming verification.</p> : <><div className="result-details"><div><span>Credential ID</span><strong>{record && Object.keys(demoRecords).find((key) => demoRecords[key as keyof typeof demoRecords] === record)}</strong></div><div><span>University</span><strong>{record?.university}</strong></div><div><span>Certificate</span><strong>{record?.type}</strong></div><div><span>Issue date</span><strong>{record?.issued}</strong></div></div><div className="result-proof"><Check size={15} /> {record?.status === "revoked" ? "Revocation state returned by demo record" : "Document integrity matches registered demo hash"}<span>{record?.tx}</span></div></>}</div>; }

export function LoginPage() {
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [location, navigate] = useLocation();
  const labels: Record<string, string> = { admin: "University administrator", faculty: "Faculty member", student: "Student" };
  const submit = (e: React.FormEvent) => { e.preventDefault(); navigate(`/app/${role}`); };
  return <div className="login-page"><div className="login-aside"><div className="login-aside-inner"><Logo light /><div className="login-aside-copy"><div className="hero-kicker"><span className="kicker-icon"><ShieldCheck size={15} /></span> Secure academic records</div><h1>Trust every credential.<br /><em>Verify every achievement.</em></h1><p>E-Verifi gives universities and the people they serve a clearer, more secure way to manage academic proof.</p><div className="login-art"><div className="login-art-line line-one" /><div className="login-art-line line-two" /><div className="login-art-card"><FileCheck2 size={19} /><span>Credential integrity</span><strong>SHA-256 matched</strong></div><div className="login-art-node"><ShieldCheck size={22} /></div></div></div><span className="footer-meta">E-Verifi · Demo environment</span></div></div><div className="login-form-side"><Link href="/" className="mobile-login-logo"><Logo /></Link><div className="login-form-wrap"><div className="login-heading"><span className="micro-label">SIGN IN TO E-VERIFI</span><h2>Pick up where<br />trust begins.</h2><p>Use the demo role selector to explore each workspace.</p></div><div className="role-tabs">{Object.entries(labels).map(([key, label]) => <button key={key} className={role === key ? "active" : ""} onClick={() => setRole(key)}>{label}</button>)}</div><form onSubmit={submit} className="login-form"><label>Email address<input type="email" defaultValue={role === "admin" ? "admin@northbridge.edu" : role === "faculty" ? "faculty@northbridge.edu" : "student@northbridge.edu"} /></label><label>Password<div className="password-input"><input type={showPassword ? "text" : "password"} defaultValue="demo-password" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></label><div className="login-options"><label className="checkbox-label"><input type="checkbox" defaultChecked /> Remember me</label><button type="button" className="forgot">Forgot password?</button></div><Button type="submit">Continue as {labels[role]} <ArrowRight size={16} /></Button><div className="demo-callout"><Sparkles size={16} /><span><strong>Demo mode.</strong> No real account or password is created.</span></div></form></div><div className="login-bottom"><Link href="/verify">Public verification portal <ArrowRight size={14} /></Link><span>Need help? <Link href="/contact">Contact the team</Link></span></div></div></div>;
}

const dashboardData = {
  admin: { role: "University administrator", name: "Dr. Avery Morgan", institution: "Northbridge University", title: "Good morning, Avery.", sub: "Here’s what’s happening across your credential network.", stats: [["Total students", "12,480", "+8.2%", Users], ["Credentials issued", "8,942", "+12.4%", FileCheck2], ["Verified this month", "2,184", "+18.7%", BadgeCheck], ["Revoked", "14", "Needs review", XCircle]] },
  faculty: { role: "Faculty member", name: "Prof. Elena Ruiz", institution: "School of Computing", title: "Good morning, Elena.", sub: "You have 6 credentials waiting for your review.", stats: [["Assigned students", "184", "+12 this term", Users], ["Credentials issued", "76", "+9 this month", FileCheck2], ["Pending review", "6", "Needs action", Activity], ["Uploaded certificates", "71", "98.4% complete", ClipboardCheck]] },
  student: { role: "Student", name: "Maya Chen", institution: "Northbridge University", title: "Your credential workspace.", sub: "Everything you need to access and share your academic proof.", stats: [["Total credentials", "4", "All records", FileCheck2], ["Verified credentials", "4", "Integrity confirmed", BadgeCheck], ["Pending credentials", "0", "Up to date", Activity], ["Profile status", "Complete", "Ready to share", ClipboardCheck]] },
} as const;

export function DashboardPage() {
  const [location, navigate] = useLocation();
  const role = location.split("/").pop() as keyof typeof dashboardData;
  const data = dashboardData[role] ?? dashboardData.admin;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState("");
  const nav = role === "admin" ? ["Overview", "Students", "Faculty", "Credentials", "Issue certificate", "Verification history", "Blockchain activity", "Settings"] : role === "faculty" ? ["Dashboard", "My students", "Issue credentials", "Uploaded certificates", "Credential history", "Profile"] : ["Overview", "My credentials", "My certificates", "Verification status", "Profile"];
  const showToast = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 2600); };
  return <div className="dashboard-page"><aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}><div className="sidebar-top"><Logo /><button className="sidebar-close" onClick={() => setSidebarOpen(false)}><X size={18} /></button></div><div className="workspace-switcher"><div className="workspace-avatar">{role === "student" ? "MC" : role === "faculty" ? "ER" : "NB"}</div><div><strong>{data.institution}</strong><span>{data.role}</span></div><ChevronRight size={15} /></div><nav className="dashboard-nav">{nav.map((item, i) => <button key={item} className={i === 0 ? "active" : ""} onClick={() => showToast(`${item} view is available in the prototype shell.`)}>{i === 0 ? <LayoutDashboard size={17} /> : i === 1 ? <Users size={17} /> : i === 2 ? <FileCheck2 size={17} /> : i === 3 ? <FileText size={17} /> : i === 4 ? <Sparkles size={17} /> : i === 5 ? <Activity size={17} /> : i === 6 ? <Blocks size={17} /> : <Settings2 size={17} />}{item}</button>)}</nav><div className="sidebar-bottom"><button onClick={() => navigate("/")}><XCircle size={17} /> Sign out</button><div className="sidebar-demo"><span /> Sample data only</div></div></aside><div className="dashboard-main"><header className="dashboard-header"><button className="dashboard-menu" onClick={() => setSidebarOpen(true)}><Menu size={21} /></button><div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><strong>{nav[0]}</strong></div><div className="dashboard-header-actions"><button className="icon-button" onClick={() => showToast("No new notifications in demo mode.")}><Activity size={18} /><i /></button><div className="user-chip"><div className="user-initials">{role === "student" ? "MC" : role === "faculty" ? "ER" : "AM"}</div><div><strong>{data.name}</strong><span>{data.role}</span></div><ChevronRight size={15} /></div></div></header><main className="dashboard-content"><div className="dashboard-heading"><div><span className="micro-label">{role === "student" ? "STUDENT PORTAL" : "{SAMPLE DATA} · 09 NOV 2026"}</span><h1>{data.title}</h1><p>{data.sub}</p></div><Button onClick={() => showToast(role === "student" ? "Share flow opened in demo mode." : "New credential workflow opened in demo mode.")}>{role === "student" ? "Share a credential" : "Issue a credential"} <ArrowRight size={15} /></Button></div><div className="sample-banner"><Sparkles size={16} /><span><strong>Demo environment.</strong> Metrics and records below are illustrative. Real blockchain confirmations are not connected.</span><button onClick={() => showToast("Demo mode details: connect your provider credentials to enable live records.")}>Learn more</button></div><div className="stats-grid">{data.stats.map(([label, value, delta, Icon]) => <div className="dash-stat" key={label as string}><div className="dash-stat-top"><span>{label as string}</span><div><Icon size={17} /></div></div><strong>{value as string}</strong><span className={(delta as string).includes("Needs") ? "stat-warning" : "stat-positive"}>{delta as string}</span></div>)}</div><div className="dashboard-grid"><div className="panel panel-chart"><div className="panel-heading"><div><span className="micro-label">CREDENTIAL ACTIVITY</span><h2>{role === "student" ? "Your verification history" : "Issuance overview"}</h2></div><button onClick={() => showToast("Date range picker is available in the full app.")}>Last 6 months <ChevronRight size={14} /></button></div><div className="chart-area"><div className="chart-y"><span>400</span><span>300</span><span>200</span><span>100</span><span>0</span></div><div className="chart-plot"><div className="chart-lines"><i /><i /><i /><i /><i /></div><svg viewBox="0 0 600 190" preserveAspectRatio="none" className="chart-svg"><path d="M0 158 C45 148 63 132 104 139 S157 107 201 119 S250 84 300 101 S344 74 390 82 S435 58 482 70 S538 29 600 38" fill="none" stroke={palette.blue} strokeWidth="3" strokeLinecap="round" /><path d="M0 180 C45 170 63 161 104 168 S157 145 201 157 S250 134 300 146 S344 119 390 132 S435 114 482 119 S538 91 600 97" fill="none" stroke={palette.cyan} strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round" /></svg><div className="chart-x"><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div></div></div><div className="chart-legend"><span><i className="legend-blue" /> Issued</span><span><i className="legend-cyan" /> Verified</span></div></div><div className="panel panel-activity"><div className="panel-heading"><div><span className="micro-label">RECENT ACTIVITY</span><h2>Latest records</h2></div><button onClick={() => showToast("Activity history is available in the prototype shell.")}>View all <ArrowRight size={14} /></button></div><div className="activity-list"><ActivityRow icon={CheckCircle2} color="green" title="Credential verified" detail="EVF-2026-00914 · Maya Chen" time="2m ago" /><ActivityRow icon={FileCheck2} color="blue" title="Credential issued" detail="EVF-2026-00913 · Jordan Ellis" time="1h ago" /><ActivityRow icon={Blocks} color="cyan" title="Demo reference created" detail="Block #19,402,881" time="3h ago" /><ActivityRow icon={ScanLine} color="amber" title="Verification request" detail="External verifier · B.Sc. CS" time="Yesterday" /></div></div></div><div className="dashboard-bottom-grid"><div className="panel quick-panel"><div className="panel-heading"><div><span className="micro-label">QUICK ACTIONS</span><h2>Move the workflow forward</h2></div></div><div className="quick-actions"><button onClick={() => showToast("Credential issuance form opened in demo mode.")}><FileCheck2 size={18} /><span><strong>Issue a credential</strong><small>Create a new academic record</small></span><ArrowRight size={15} /></button><button onClick={() => navigate("/verify")}><ScanLine size={18} /><span><strong>Verify a record</strong><small>Open the public portal</small></span><ArrowRight size={15} /></button><button onClick={() => showToast("Export prepared in demo mode.")}><Copy size={18} /><span><strong>Export activity</strong><small>Download an audit-ready log</small></span><ArrowRight size={15} /></button></div></div><div className="panel status-panel"><div className="panel-heading"><div><span className="micro-label">NETWORK STATUS</span><h2>System layers</h2></div><div className="live-status"><span /> Demo</div></div><div className="layer-list"><Layer name="Application access" value="Operational" /><Layer name="Document hashing" value="Demo mode" /><Layer name="Blockchain anchor" value="Not connected" /></div></div></div></main></div>{toast && <div className="toast"><CheckCircle2 size={16} /> {toast}</div>}</div>;
}

function ActivityRow({ icon: Icon, color, title, detail, time }: { icon: IconType; color: string; title: string; detail: string; time: string }) { return <div className="activity-row"><div className={`activity-icon ${color}`}><Icon size={16} /></div><div><strong>{title}</strong><span>{detail}</span></div><time>{time}</time></div>; }
function Layer({ name, value }: { name: string; value: string }) { return <div className="layer-row"><span><i />{name}</span><strong>{value}</strong></div>; }
