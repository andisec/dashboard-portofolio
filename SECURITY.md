# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Mia's Portfolio seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### Reporting Process

1. **DO NOT** create a public GitHub issue for the vulnerability.
2. Send an email to [mia.chen@email.com](mailto:mia.chen@email.com) with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your report within 48 hours.
- **Assessment**: We will assess the vulnerability and determine its impact.
- **Updates**: We will keep you informed about the progress of fixing the vulnerability.
- **Disclosure**: We will coordinate with you on the public disclosure timeline.

### Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed. Users are encouraged to update to the latest version immediately.

## Security Best Practices

When contributing to this project, please follow these security best practices:

1. **Dependencies**: Keep all dependencies up to date
2. **Input Validation**: Always validate and sanitize user inputs
3. **Authentication**: Never expose sensitive information in client-side code
4. **HTTPS**: Use HTTPS for all API calls
5. **Environment Variables**: Never commit `.env` files or sensitive data
6. **Code Review**: All code changes must be reviewed before merging

## Security Checklist

Before submitting a pull request, ensure:

- [ ] No sensitive data is hardcoded
- [ ] All user inputs are validated
- [ ] Dependencies are up to date
- [ ] No console.log statements with sensitive data
- [ ] Environment variables are properly configured
- [ ] API keys are not exposed in client-side code

## Contact

For security concerns, please contact:
- **Email**: mia.chen@email.com
- **PGP Key**: Available upon request

---

Thank you for helping keep Mia's Portfolio secure!
