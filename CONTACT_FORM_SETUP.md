# Contact Form Setup Instructions

The contact form is configured to use **Formspree** for handling form submissions. Follow these steps to activate it:

## Steps to Set Up Formspree:

### 1. Create a Formspree Account
- Go to [https://formspree.io/](https://formspree.io/)
- Sign up for a free account (no credit card required)
- Free tier includes 50 submissions/month

### 2. Create a New Form
- After logging in, click "New Project" or "New Form"
- Give your form a name (e.g., "Portfolio Contact Form")
- Formspree will generate a unique Form ID for you

### 3. Get Your Form ID
- Your Form ID will look something like: `xyzabc123`
- The full endpoint URL will be: `https://formspree.io/f/xyzabc123`

### 4. Update the Code
- Open `src/pages/Contact.jsx`
- Find line 30 where it says: `'https://formspree.io/f/YOUR_FORM_ID'`
- Replace `YOUR_FORM_ID` with your actual Form ID
- Example: `'https://formspree.io/f/xyzabc123'`

### 5. Set Email Destination
- In your Formspree dashboard, configure where you want to receive emails
- You can set it to forward to your preferred email address

### 6. Deploy
- Commit your changes
- Run `npm run deploy` to publish to GitHub Pages
- Test the form on your live site!

## Alternative Option: EmailJS

If you prefer EmailJS instead:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Install the package: `npm install @emailjs/browser`
3. Follow their React integration guide
4. Update the `handleSubmit` function in `Contact.jsx`

## Testing

Once deployed, you can test the form by:
1. Visiting your live site
2. Filling out the contact form
3. Submitting it
4. Checking your configured email inbox

---

**Current Status:** Form code is ready, just needs a valid Formspree Form ID to be activated.

