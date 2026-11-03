# Contributing to Mia's Portfolio

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Style Guides](#style-guides)

## Code of Conduct

This project and everyone participating in it is governed by good practices. By participating, you are expected to uphold this code.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](README.md).

Before you ask a question, it is best to search for existing [Issues](/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](/issues/new).
- Provide as much context as you can about what you're running into.

## I Want To Contribute

> ### Legal Notice
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report.

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead, please send an email to the maintainer.

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](/issues/new).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the *reproduction steps*.
- Provide information about OS, Browser, Node.js version, etc.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, **including completely new features and minor improvements to existing functionality**.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](README.md) carefully and find out if the functionality is already covered.
- Perform a [search](/issues) to see if the enhancement has already been suggested.
- Find out whether your idea fits with the scope and aims of the project.

#### How Do I Submit a Good Enhancement Suggestion?

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Explain why this enhancement would be useful** to most users.

### Your First Code Contribution

#### Step 1: Fork the Repository

Fork the repository to your own GitHub account.

#### Step 2: Clone the Repository

```bash
git clone https://github.com/yourusername/mia-portfolio.git
cd mia-portfolio
```

#### Step 3: Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

#### Step 4: Make Your Changes

Make your changes and test them thoroughly.

#### Step 5: Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

#### Step 6: Push to GitHub

```bash
git push origin feature/your-feature-name
```

#### Step 7: Submit a Pull Request

Go to the original repository on GitHub and click "New Pull Request". Fill in the PR template with details about your changes.

## Style Guides

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting (Prettier)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Component Structure

```typescript
// Good component structure
export default function ComponentName() {
  // 1. State & refs
  const [state, setState] = useState();
  
  // 2. Effects
  useEffect(() => {}, []);
  
  // 3. Helper functions
  const handleClick = () => {};
  
  // 4. Render
  return <div>...</div>;
}
```

### CSS/Styling

- Use Tailwind CSS classes
- Follow the existing color scheme
- Maintain responsive design
- Test on multiple screen sizes

### File Naming

- Components: `PascalCase.tsx` (e.g., `ProjectModal.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Data: `data.ts`
- Styles: `index.css`

## Pull Request Process

1. Update the README.md with details of changes if applicable.
2. Update the version numbers following [SemVer](http://semver.org/).
3. Your PR will be merged once approved by a maintainer.

## Community

- Be respectful and constructive
- Help others learn and grow
- Share knowledge and experiences

---

Thank you for contributing to Mia's Portfolio! 🎉
