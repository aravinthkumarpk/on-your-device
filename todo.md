# OnYourDevice - Technical Roadmap & Todo

## 🚨 Critical UI/UX Issues

- [x] **Double Scrollbar Issue**: Two scrollbars appear when chat gets too long 
  - Fixed: Removed `overflow-hidden` from main container
  
- [x] **Chat Input Integration**: Input area has separate background
  - Fixed: Removed border, added glassmorphism effect

## 🎨 UI/UX Improvements

### High Priority

- [ ] **Responsive Design**
  - [ ] Test header layout on mobile (title might wrap)
  - [ ] ModelSelector badge text might overflow on small screens
  - [ ] Suggestion buttons need mobile-friendly spacing
  - [ ] Test chat input on mobile keyboards

- [ ] **Empty State Improvements**
  - [ ] Add app logo/icon to empty state
  - [ ] Consider adding quick tips for first-time users
  - [ ] Make suggestions more discoverable

- [ ] **Message Display**
  - [ ] Add timestamps to messages (optional toggle)
  - [ ] Add message status indicators (sending/sent/error)
  - [ ] Consider message grouping for better readability

- [ ] **Accessibility**
  - [ ] Add proper ARIA labels to all interactive elements
  - [ ] Add keyboard navigation for suggestions
  - [ ] Improve focus states for better keyboard navigation
  - [ ] Test screen reader compatibility
  - [ ] Add skip-to-content link

### Medium Priority

- [ ] **Theme Enhancements**
  - [ ] Add system theme auto-detection
  - [ ] Consider additional color themes
  - [ ] Improve dark mode contrast ratios

- [ ] **User Preferences**
  - [ ] Add option to customize suggestion prompts
  - [ ] Add option to toggle thinking/reasoning display
  - [ ] Persist user preferences in localStorage

- [ ] **Chat History**
  - [ ] Add export conversation feature (JSON/Markdown)
  - [ ] Add search within conversation
  - [ ] Add conversation history persistence (localStorage)

## ⚡ Performance & Technical Debt

### High Priority

- [ ] **Code Quality**
  - [ ] Remove eslint-disable comments in `message.tsx` and `prompt-input.tsx`
  - [ ] Fix TypeScript `any` types in prompt-input component
  - [ ] Remove unused imports and variables
  - [ ] Add proper error boundaries for all async operations

- [ ] **Bundle Size Optimization**
  - [ ] Analyze bundle size with `@next/bundle-analyzer`
  - [ ] Consider code splitting for heavy components
  - [ ] Lazy load `react-markdown` and dependencies
  - [ ] Tree-shake unused Lucide icons

- [ ] **Worker Communication**
  - [ ] Add retry logic for worker failures
  - [ ] Implement worker timeout handling
  - [ ] Add worker state recovery mechanism
  - [ ] Consider using SharedArrayBuffer for better performance

### Medium Priority

- [ ] **State Management**
  - [ ] Consider using Context API or Zustand for global state
  - [ ] Refactor message state to avoid prop drilling
  - [ ] Add state persistence layer

- [ ] **Component Architecture**
  - [ ] Split ChatContainer into smaller components
  - [ ] Create reusable hooks for common patterns
  - [ ] Standardize component naming convention
  - [ ] Add component documentation with JSDoc

- [ ] **Type Safety**
  - [ ] Create shared type definitions file
  - [ ] Add stricter TypeScript config options
  - [ ] Remove type assertions where possible

## 🧪 Testing & Quality Assurance

### High Priority

- [ ] **Add Testing Framework**
  - [ ] Set up Vitest or Jest
  - [ ] Add React Testing Library
  - [ ] Create test utilities and fixtures

- [ ] **Unit Tests**
  - [ ] Test hooks (useWorker, useWebGPU)
  - [ ] Test message parsing utilities
  - [ ] Test theme switching logic

- [ ] **Integration Tests**
  - [ ] Test chat flow end-to-end
  - [ ] Test worker communication
  - [ ] Test error handling flows

### Medium Priority

- [ ] **E2E Tests**
  - [ ] Set up Playwright or Cypress
  - [ ] Test critical user journeys
  - [ ] Test cross-browser compatibility

- [ ] **Performance Testing**
  - [ ] Measure and track bundle size
  - [ ] Test with long conversation histories
  - [ ] Profile WebGPU memory usage

## 📚 Documentation

### High Priority

- [ ] **Developer Documentation**
  - [ ] Add architecture overview diagram
  - [ ] Document component APIs
  - [ ] Add contributing guidelines
  - [ ] Document build and deployment process

- [ ] **User Documentation**
  - [ ] Add FAQ section
  - [ ] Create troubleshooting guide
  - [ ] Document browser compatibility requirements
  - [ ] Add privacy and data handling info

### Medium Priority

- [ ] **Code Documentation**
  - [ ] Add JSDoc to all public components
  - [ ] Document complex utility functions
  - [ ] Add inline comments for complex logic

- [ ] **API Documentation**
  - [ ] Document worker message protocol
  - [ ] Document custom hooks API
  - [ ] Add examples for common use cases

## 🔧 Infrastructure & DevOps

### High Priority

- [ ] **Build & Deploy**
  - [ ] Add GitHub Actions CI/CD
  - [ ] Add automated testing in CI
  - [ ] Add bundle size monitoring
  - [ ] Set up staging environment

- [ ] **Error Monitoring**
  - [ ] Add Sentry or similar error tracking
  - [ ] Add analytics (privacy-friendly)
  - [ ] Add performance monitoring

### Medium Priority

- [ ] **Development Experience**
  - [ ] Add pre-commit hooks (Husky)
  - [ ] Add commit message linting
  - [ ] Improve hot reload performance
  - [ ] Add VS Code recommended extensions

- [ ] **Environment Configuration**
  - [ ] Document all environment variables
  - [ ] Add development/production config separation
  - [ ] Add feature flags system

## 🚀 Feature Enhancements

### Future Considerations

- [ ] **Multi-Model Support**
  - [ ] Allow users to switch between models
  - [ ] Add model download management UI
  - [ ] Show model info and capabilities

- [ ] **Advanced Features**
  - [ ] Add voice input support
  - [ ] Add file/image upload support
  - [ ] Add conversation branching
  - [ ] Add prompt templates

- [ ] **Collaboration**
  - [ ] Add share conversation link
  - [ ] Add conversation embedding
  - [ ] Consider multi-user features

## 🐛 Known Issues

- [ ] **Browser Compatibility**
  - WebGPU support warning could be more informative
  - Safari WebGPU support needs testing
  - Firefox WebGPU support needs verification

- [ ] **Hydration Warnings**
  - Browser extension conflicts (Bitwarden, etc.)
  - Consider suppression or user education

---

## 📊 Metrics to Track

- Bundle size (target: < 500KB initial)
- First contentful paint (target: < 1.5s)
- Time to interactive (target: < 3s)
- Model load time
- Average tokens per second
- Error rates by category

## 🎯 Current Sprint Focus

Focus on:
1. Fix remaining UI responsive issues
2. Add comprehensive testing
3. Improve documentation
4. Set up CI/CD pipeline
