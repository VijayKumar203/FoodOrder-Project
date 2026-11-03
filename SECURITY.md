# Security Policy

## 1. Supported Versions

The following version of FoodOrder-Project is currently supported for security updates.

| Version | Supported |
|---|---|
| Latest version (`main` branch) | Yes |
| Older versions | No |

Security updates will primarily be applied to the latest maintained version of the project.

## 2. Reporting a Vulnerability

If you discover a security vulnerability in FoodOrder-Project, please report it responsibly.

**Do not disclose security vulnerabilities through public GitHub Issues or public discussions.**

Instead, use GitHub's Private Vulnerability Reporting feature:

1. Open the FoodOrder-Project repository.
2. Navigate to the **Security** tab.
3. Select **Report a vulnerability**.
4. Submit a private security advisory with details about the issue.

If private vulnerability reporting is unavailable, contact the repository maintainer privately through GitHub.

## 3. Information to Include

Please include the following information when reporting a vulnerability:

- A clear description of the security issue.
- The affected component (frontend, backend, API, or dependency).
- Steps to reproduce the vulnerability.
- Potential security impact.
- Relevant error messages or screenshots, if applicable.
- Suggested mitigation or fix, if known.

Please do not include passwords, API keys, payment credentials, access tokens, or other confidential information in your report.

## 4. Security Areas

The project uses third-party technologies and services. Security issues related to the following areas are particularly important:

- User authentication and authorization.
- Password storage and account security.
- API endpoints and request validation.
- MongoDB database access and data protection.
- Payment processing and Stripe integration.
- Image uploads and Cloudinary integration.
- Email notifications and Nodemailer.
- Third-party npm dependencies.
- Environment variables and secret management.

## 5. Response and Resolution

The repository maintainer will review reported vulnerabilities and investigate their potential impact.

Depending on the severity and complexity of the issue, the maintainer will:

- Acknowledge the report when possible.
- Investigate and verify the reported issue.
- Determine the appropriate severity.
- Develop and test a security fix.
- Release the necessary updates.

Response and resolution times may vary depending on the nature and severity of the vulnerability.

## 6. Responsible Disclosure

Please allow the repository maintainer reasonable time to investigate and resolve a reported vulnerability before publicly disclosing it.

Do not exploit vulnerabilities to access, modify, or delete other users' data.

## 7. Security Best Practices

Contributors and users should follow these practices:

- Never commit `.env` files or secret credentials.
- Keep npm dependencies updated.
- Use strong authentication credentials.
- Validate and sanitize user input.
- Protect sensitive API endpoints.
- Never expose private API keys in frontend code.
- Use HTTPS when deploying the application.
- Review GitHub Dependabot security alerts regularly.

Thank you for helping keep Food Order Project secure.
