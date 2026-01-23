# PromptCraft - AI Prompt Generator Made Simple

<div align="center">

**Create perfect AI prompts in 30 seconds with ClickOps-first design. No prompt engineering knowledge required.**

[Report Bug](https://github.com/yourusername/prompt-clicker/issues) • [Request Feature](https://github.com/yourusername/prompt-clicker/issues)

</div>

---

## 📖 Table of Contents

- [What is PromptCraft?](#what-is-promptcraft)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Data Privacy & Transparency](#data-privacy--transparency)
- [Enterprise Considerations](#enterprise-considerations)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 What is PromptCraft?

**PromptCraft** is an AI prompt generator that helps anyone create expert-quality prompts for ChatGPT and Claude **without needing prompt engineering knowledge**. It transforms hours of prompt optimization into 30 seconds of point-and-click simplicity.

### The Problem We Solve

Most people struggle to write effective AI prompts, leading to:
- ❌ Vague or incomplete AI responses
- ❌ Multiple iterations to get the right output
- ❌ 15+ minutes wasted per AI interaction
- ❌ Inconsistent quality across team members

### Our Solution

PromptCraft provides **two powerful modes**:

#### 🪄 Magic Mode (AI-Powered)
- Describe what you want in plain English
- AI instantly generates an expert-level prompt
- Auto-copies to clipboard
- One-click open in ChatGPT or Claude

#### 🎨 Studio Mode (Template-Based)
- Browse 100+ pre-built prompt templates across 7 categories
- Customize with dropdowns, checkboxes, and text fields
- Templates include expert frameworks (STAR method, Hook-Context-Insight-CTA, etc.)
- Save favorites for reuse

---

## ✨ Key Features

✅ **100+ Expert Prompt Templates** - Professional, technical, and creative use cases  
✅ **Zero Learning Curve** - Point-and-click interface, no typing required  
✅ **AI-Powered Magic Mode** - Instant prompt generation from natural language  
✅ **Auto-Copy to Clipboard** - Seamless workflow integration  
✅ **One-Click ChatGPT/Claude Integration** - Direct links to AI services  
✅ **Save Favorites** - Reuse successful prompts  
✅ **Fully Responsive** - Works on mobile, tablet, and desktop  
✅ **Dark/Light Mode** - Eye-friendly UI with theme toggle  
✅ **No Signup Required** - Instant access, privacy-first design  
✅ **SEO Optimized** - Discoverable and shareable  

### Template Categories

1. **Writing & Content** - Professional emails, social media posts, articles, product descriptions
2. **Coding** - Debug, explain, review, optimize, convert code across 15+ languages
3. **Business** - Meeting agendas, reports, proposals, presentations
4. **Learning** - Explanations, study guides, tutoring, concept breakdowns
5. **Marketing** - SEO content, ad copy, landing pages, campaigns
6. **Creative** - Stories, scripts, brainstorming, creative writing
7. **Personal** - Resumes, cover letters, career advice, personal projects

---

## 🛠️ How It Works

### Magic Mode Workflow
```
User Input → Supabase Edge Function → AI API Gateway → Google Gemini 2.5 Flash → Expert Prompt → Clipboard
```

### Studio Mode Workflow
```
Browse Categories → Select Template → Customize Fields → Generate Prompt → Copy/Use
```

**No AI involved in Studio Mode** - All processing happens client-side using pre-built templates.

---

## 🔧 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **TypeScript** | 5.8 | Type safety |
| **Vite** | 5.4.19 | Build tool & dev server |
| **TailwindCSS** | 3.4.17 | Utility-first styling |
| **shadcn/ui** | Latest | Premium component library (40+ components) |
| **Radix UI** | Latest | Accessible primitives |
| **React Router** | 6.30.1 | Client-side routing |
| **TanStack Query** | 5.83.0 | Server state management |
| **Next Themes** | 0.3.0 | Dark/light mode support |

### Backend & Services
| Service | Purpose | Usage |
|---------|---------|-------|
| **Supabase** | Backend-as-a-Service | Edge functions, API gateway |
| **AI API Gateway** | AI API intermediary | Routes requests to AI models |
| **Google Gemini 2.5 Flash** | AI model | Powers Magic Mode prompt generation |

### Development Tools
- **ESLint** - Code quality & linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS processing

---

## 🔒 Data Privacy & Transparency

### What Data We Collect

#### ✅ Data Stored Locally (Browser Only)
- **Saved Favorites** - Stored in browser's localStorage
- **Tutorial Preferences** - First-time user tutorial status
- **Theme Settings** - Dark/light mode preference

**Important:** This data **never leaves your device** and is deleted when you clear browser data.

#### ⚠️ Data Sent to Third Parties (Magic Mode Only)

When you use **Magic Mode**, the following happens:

1. **Your Input** → Sent to Supabase Edge Function (our serverless backend)
2. **Edge Function** → Forwards to AI API Gateway
3. **AI API Gateway** → Sends to Google Gemini 2.5 Flash
4. **Response** → Returns through the same chain
5. **No Permanent Storage** - Your input is processed and discarded

**Third-Party Services:**
- ✅ **AI API Gateway** - Intermediary API service
- ✅ **Google Gemini** - AI model provider ([Privacy Policy](https://policies.google.com/privacy))

### What We DO NOT Collect

❌ **No User Accounts** - No registration, no login  
❌ **No Email Addresses** - No contact information stored  
❌ **No Analytics/Tracking** - No Google Analytics, no cookies  
❌ **No Form Data Logging** - Studio Mode inputs stay in your browser  
❌ **No IP Address Logging** - No server-side logs  
❌ **No Session Recording** - No Hotjar, FullStory, etc.  

### Data Retention

- **LocalStorage Data:** Stored indefinitely until you clear browser data
- **Magic Mode Inputs:** Processed in real-time, **not stored** on our servers
- **Third-Party Retention:** Subject to our AI provider's data retention policies

### GDPR & Privacy Compliance

- ✅ **No Personal Data Collected** - Compliant with GDPR Article 6
- ✅ **Right to Erasure** - Clear browser localStorage to delete all data
- ⚠️ **Third-Party Processing** - Magic Mode uses external AI services (see above)

### Recommendations for Sensitive Data

**🚨 DO NOT enter sensitive information in Magic Mode:**
- ❌ Customer names, addresses, or contact information
- ❌ Financial data (account numbers, credit cards, SSNs)
- ❌ Health information (HIPAA-protected data)
- ❌ Proprietary business secrets or confidential information
- ❌ Passwords or authentication credentials

**✅ Safe to use Studio Mode for sensitive workflows:**
- Studio Mode processes everything client-side (in your browser)
- No data is sent to external services
- Safe for general business use (emails, content, etc.)

---

## 🏢 Enterprise Considerations

### Current Limitations for Enterprise Use

PromptCraft in its current form is designed for **individual users and small teams**. It is **NOT recommended** for:

❌ **Regulated Industries** (banking, healthcare, government)  
❌ **Enterprises with strict data governance** (SOC 2, ISO 27001 requirements)  
❌ **Organizations handling sensitive customer data**  

### Why Not Enterprise-Ready (Yet)?

| Requirement | Current Status | Solution |
|-------------|----------------|----------|
| **Data Sovereignty** | Data sent to Google/Lovable | Self-host AI model (Azure OpenAI, AWS Bedrock) |
| **Audit Trail** | No logging or monitoring | Add enterprise logging & SIEM integration |
| **Authentication** | No user accounts | Add SSO (Okta, Azure AD) + MFA |
| **Authorization** | No access controls | Implement RBAC (role-based access control) |
| **Compliance Certs** | None | Obtain SOC 2 Type II, ISO 27001, FedRAMP |
| **Data Encryption** | HTTPS only | Add end-to-end encryption |
| **DLP (Data Loss Prevention)** | No PII detection | Integrate DLP to block sensitive data |

### Enterprise Migration Path

To make PromptCraft enterprise-ready, we recommend:

1. **Phase 1 (Security):** Self-hosted backend, authentication, audit logging
2. **Phase 2 (Compliance):** DLP integration, encryption, access controls
3. **Phase 3 (Scale):** Admin dashboard, SSO, compliance certifications

**Estimated Timeline:** 3-6 months for full enterprise hardening

**Contact:** For enterprise licensing and migration support, please reach out.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (or use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **bun** package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/prompt-clicker.git
cd prompt-clicker
```

2. **Install dependencies:**
```bash
npm install
# or
bun install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

**Note:** Magic Mode requires Supabase Edge Functions and AI API credentials. Studio Mode works without any backend setup.

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser:**
```
http://localhost:5173
```

---

## 💻 Development

### Project Structure

```
prompt-clicker/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── MagicMode.tsx # AI-powered mode
│   │   └── StudioMode.tsx # Template-based mode
│   ├── pages/            # Route pages
│   ├── data/             # Template definitions
│   │   ├── categories.ts # Category data
│   │   └── templates.ts  # 100+ prompt templates
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   └── types/            # TypeScript type definitions
├── supabase/
│   └── functions/        # Edge functions
│       └── magic-prompt/ # AI prompt generator
├── public/               # Static assets
└── index.html           # Entry point
```

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Templates

1. Open `src/data/templates.ts`
2. Add your template object:

```typescript
{
  id: 'your_template',
  category: 'writing',
  title: 'Your Template Title',
  icon: '📝',
  description: 'Brief description',
  fields: [
    {
      name: 'field_name',
      label: 'Field Label',
      type: 'text', // or 'dropdown', 'checkbox'
      placeholder: 'Example value'
    }
  ],
  promptTemplate: `Your prompt template with {field_name} placeholders`
}
```

3. Test your template in Studio Mode

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow TypeScript best practices
- Use existing component patterns (shadcn/ui)
- Add JSDoc comments for complex functions
- Test on mobile and desktop
- Update README if adding new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Built by Smaran**

- GitHub: [@yourusername](https://github.com/smaranje)

---

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
- Hosted on [Supabase](https://supabase.com/)
- AI powered by [Google Gemini](https://deepmind.google/technologies/gemini/)

---

## 📊 Project Stats

- **100+ Prompt Templates** across 7 categories
- **Zero dependencies** on user authentication
- **Privacy-first** design with local storage
- **Mobile-optimized** responsive interface
- **Open Source** and free to use

---

## 🔮 Roadmap

- [ ] Add more prompt templates (200+ goal)
- [ ] Offline mode (PWA support)
- [ ] Multi-language support
- [ ] Browser extension (Chrome/Firefox)
- [ ] Team collaboration features
- [ ] Prompt version history
- [ ] Template marketplace
- [ ] Enterprise self-hosted version

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Smaran

</div>
