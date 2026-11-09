import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home, { DashboardPage, LoginPage, VerifyPage } from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Home} />
      <Route path="/how-it-works" component={Home} />
      <Route path="/security" component={Home} />
      <Route path="/about" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/verify" component={VerifyPage} />
      <Route path="/app/admin" component={DashboardPage} />
      <Route path="/app/faculty" component={DashboardPage} />
      <Route path="/app/student" component={DashboardPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
