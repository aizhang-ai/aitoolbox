// Curated AI Prompt Library - 30 prompts
const PROMPTS = [
    {
        category: 'coding',
        title: 'Code Review Assistant',
        description: 'Get detailed code review with best practices',
        text: `You are a senior software engineer doing a code review. Review the following code for:
1. Bugs and potential issues
2. Performance improvements
3. Security concerns
4. Code style and readability
5. Best practices for the language/framework

Provide specific, actionable feedback with code examples where relevant.

Code to review:
[PASTE YOUR CODE HERE]`
    },
    {
        category: 'coding',
        title: 'Debug Helper',
        description: 'Systematic debugging approach for any error',
        text: `I'm getting this error:

[ERROR MESSAGE]

Here's my code:
[PASTE CODE]

Context: [WHAT YOU'RE TRYING TO DO]

Help me:
1. Identify the root cause
2. Explain why it's happening
3. Provide a fix with code
4. Suggest how to prevent similar issues`
    },
    {
        category: 'coding',
        title: 'API Design Consultant',
        description: 'Design clean, RESTful API endpoints',
        text: `Design a RESTful API for: [DESCRIBE YOUR APP/SERVICE]

Requirements:
- List all endpoints with HTTP methods
- Include request/response JSON schemas
- Add authentication strategy
- Include error response format
- Add rate limiting recommendations
- Suggest status codes for each endpoint`
    },
    {
        category: 'writing',
        title: 'Blog Post Generator',
        description: 'SEO-optimized long-form blog post',
        text: `Write a blog post about: [TOPIC]

Requirements:
- 1500-2000 words
- SEO-optimized for the keyword: [KEYWORD]
- Include a compelling title (under 60 chars)
- Meta description (under 160 chars)
- Introduction with a hook
- Use H2 and H3 headings
- Include actionable takeaways
- Conversational but professional tone
- End with a CTA`
    },
    {
        category: 'writing',
        title: 'Email Writer Pro',
        description: 'Professional emails for any situation',
        text: `Write a professional email with these details:

Purpose: [WHAT'S THE EMAIL ABOUT]
Recipient: [WHO - boss, client, team, etc.]
Tone: [formal, friendly, urgent, apologetic]
Key points to include:
- [POINT 1]
- [POINT 2]
- [POINT 3]

Keep it concise. Include a clear subject line. End with a specific call to action.`
    },
    {
        category: 'writing',
        title: 'Story Outline Builder',
        description: 'Structured novel/story outline',
        text: `Create a detailed story outline for:

Genre: [GENRE]
Premise: [ONE-SENTENCE SUMMARY]
Target length: [SHORT STORY / NOVELLA / NOVEL]

Include:
- Three-act structure breakdown
- Character profiles (protagonist, antagonist, key supporting)
- Setting/world details
- Key plot points and turning points
- Theme and central conflict
- Chapter-by-chapter summary`
    },
    {
        category: 'marketing',
        title: 'Landing Page Copywriter',
        description: 'High-converting landing page copy',
        text: `Write landing page copy for: [PRODUCT/SERVICE]

Target audience: [DESCRIBE]
Main value proposition: [WHAT MAKES IT SPECIAL]

Include:
- Headline (compelling, benefit-driven)
- Subheadline
- 3 key benefits with descriptions
- Social proof section placeholder
- Feature breakdown
- Pricing section
- FAQ section (5 questions)
- Strong CTA button text

Tone: [PROFESSIONAL / CASUAL / BOLD]`
    },
    {
        category: 'marketing',
        title: 'Social Media Content Calendar',
        description: '30-day content plan for any platform',
        text: `Create a 30-day social media content calendar for:

Platform: [INSTAGRAM / LINKEDIN / TWITTER / TIKTOK]
Niche: [YOUR NICHE]
Brand voice: [DESCRIBE]
Goal: [ENGAGEMENT / LEADS / AWARENESS]

For each day provide:
1. Content type (educational, entertaining, promotional, engagement)
2. Post topic/title
3. Caption (with hashtags)
4. Best posting time
5. Visual suggestion`
    },
    {
        category: 'marketing',
        title: 'Ad Copy Generator',
        description: 'Multi-platform ad copy that converts',
        text: `Write ad copy for: [PRODUCT/SERVICE]

Platforms needed: Google Ads, Facebook Ads, LinkedIn Ads

For each platform provide:
- 3 headline variations
- 2 description variations
- CTA options
- Target audience recommendations
- Budget allocation suggestion

Key selling points:
1. [SELLING POINT 1]
2. [SELLING POINT 2]
3. [SELLING POINT 3]`
    },
    {
        category: 'analysis',
        title: 'Data Analysis Assistant',
        description: 'Analyze data and generate insights',
        text: `Analyze the following data and provide insights:

[PASTE DATA OR DESCRIBE DATASET]

Please provide:
1. Summary statistics (mean, median, range, outliers)
2. Key trends and patterns
3. Anomalies or unexpected findings
4. Correlations between variables
5. Actionable recommendations
6. Suggested visualizations

Format as a clear executive summary followed by detailed analysis.`
    },
    {
        category: 'analysis',
        title: 'Competitor Analysis Framework',
        description: 'Deep-dive competitor research',
        text: `Conduct a competitor analysis for: [COMPANY NAME]

Competitors to analyze:
1. [COMPETITOR 1]
2. [COMPETITOR 2]
3. [COMPETITOR 3]

For each competitor, analyze:
- Product/service comparison
- Pricing strategy
- Target market
- Marketing channels
- Strengths and weaknesses
- Market position

Provide a strategic recommendation for differentiation.`
    },
    {
        category: 'productivity',
        title: 'Daily Planner AI',
        description: 'Optimize your day with AI scheduling',
        text: `Help me plan my day optimally.

Current time: [TIME]
Working hours available: [HOURS]
Energy level: [HIGH/MEDIUM/LOW]

Tasks to complete (with priority and estimated time):
1. [TASK 1] - Priority: [HIGH/MED/LOW] - Time: [X hrs]
2. [TASK 2] - Priority: [HIGH/MED/LOW] - Time: [X hrs]
3. [TASK 3] - Priority: [HIGH/MED/LOW] - Time: [X hrs]

Create a schedule that:
- Groups similar tasks (context switching minimization)
- Schedules high-energy tasks during peak energy
- Includes breaks (Pomodoro or 90-min blocks)
- Leaves buffer time for unexpected issues
- Prioritizes correctly`
    },
    {
        category: 'productivity',
        title: 'Meeting Notes Summarizer',
        description: 'Turn messy meeting notes into action items',
        text: `Here are my raw meeting notes:

[PASTE NOTES]

Please structure them into:
1. Meeting summary (3-5 sentences)
2. Key decisions made
3. Action items (with owner and deadline)
4. Open questions/parking lot items
5. Next steps

Format as a professional email I can send to attendees.`
    },
    {
        category: 'productivity',
        title: 'Project Breakdown',
        description: 'Break big projects into manageable tasks',
        text: `Break down this project into actionable tasks:

Project: [DESCRIBE PROJECT]
Deadline: [DATE]
Team size: [NUMBER]
Budget: [AMOUNT]

For each task provide:
- Task description
- Estimated time
- Dependencies
- Required skills
- Risk assessment

Create a Gantt-chart-style timeline and identify the critical path.`
    },
    {
        category: 'coding',
        title: 'Test Case Generator',
        description: 'Generate comprehensive test suites',
        text: `Generate test cases for this function/code:

[PASTE CODE]

Provide tests for:
1. Normal/expected inputs
2. Edge cases
3. Error/exception cases
4. Performance tests
5. Integration test scenarios

Use the appropriate testing framework for the language. 
Include test descriptions and assertions.`
    },
    {
        category: 'coding',
        title: 'Git Commit Message Writer',
        description: 'Write clear, conventional commit messages',
        text: `Write a git commit message for these changes:

[DESCRIBE CHANGES OR PASTE GIT DIFF]

Follow Conventional Commits format:
- type(scope): description
- Types: feat, fix, docs, style, refactor, test, chore, perf
- Keep subject line under 50 characters
- Add body explaining what and why (not how)
- Add footer with breaking changes if any`
    },
    {
        category: 'coding',
        title: 'Regex Generator',
        description: 'Generate regex from plain English',
        text: `Generate a regular expression for:

[DESCRIBE WHAT YOU WANT TO MATCH IN PLAIN ENGLISH]

Provide:
1. The regex pattern
2. Explanation of each component
3. Test cases (matching and non-matching)
4. Language-specific syntax (Python, JavaScript, etc.) if relevant
5. Common pitfalls to avoid`
    },
    {
        category: 'coding',
        title: 'SQL Query Builder',
        description: 'Build complex SQL from requirements',
        text: `Write a SQL query for:

[DESCRIBE WHAT YOU NEED]

Database schema:
[PASTE SCHEMA OR DESCRIBE TABLES]

Requirements:
- Optimize for performance
- Add comments explaining each part
- Provide alternative approaches if applicable
- Include indexes recommendations
- Handle edge cases (NULLs, duplicates)`
    },
    {
        category: 'writing',
        title: 'Product Description Writer',
        description: 'E-commerce product descriptions that sell',
        text: `Write product descriptions for:

Product: [NAME]
Category: [CATEGORY]
Key features:
1. [FEATURE 1]
2. [FEATURE 2]
3. [FEATURE 3]
Target audience: [DESCRIBE]
Tone: [PROFESSIONAL / CASUAL / LUXURY]

Write:
- Short description (50 words for listing)
- Full description (200+ words for product page)
- 5 bullet points for quick scan
- Meta title and description for SEO
- 3 social media captions for promotion`
    },
    {
        category: 'writing',
        title: 'Press Release Generator',
        description: 'Professional press releases for any announcement',
        text: `Write a press release for:

Announcement: [WHAT'S HAPPENING]
Company: [COMPANY NAME]
Date: [DATE]
Key quotes from: [NAME, TITLE]

Format:
- FOR IMMEDIATE RELEASE
- Compelling headline
- Dateline
- 2-3 paragraphs covering who, what, when, where, why
- Quote from leadership
- Boilerplate about company
- Media contact section
Keep under 500 words.`
    },
    {
        category: 'marketing',
        title: 'SEO Keyword Research',
        description: 'Find keywords that actually convert',
        text: `Generate an SEO keyword strategy for:

Topic: [YOUR TOPIC]
Business type: [SAAS / ECOMMERCE / BLOG / LOCAL]
Target audience: [DESCRIBE]
Current traffic: [MONTHLY VISITORS]

Provide:
1. 20 primary keywords (with search intent: informational/transactional/navigational)
2. 10 long-tail keywords (low competition, high intent)
3. 5 question-based keywords (for FAQ/schema markup)
4. Content cluster suggestions (pillar + supporting pages)
5. Quick-win keywords (low difficulty, decent volume)`
    },
    {
        category: 'marketing',
        title: 'Email Sequence Builder',
        description: '5-7 email autoresponder sequence',
        text: `Create an email sequence for:

Product/Service: [DESCRIBE]
Goal: [WELCOME SERIES / ABANDONED CART / LEAD NURTURE / ONBOARDING]
Sequence length: [5-7 EMAILS]

For each email provide:
1. Email number and purpose
2. Subject line (2 variations)
3. Preview text
4. Body copy (300-500 words)
5. CTA
6. Send timing (e.g., Day 0, Day 2, Day 5)

Tone: [DESCRIBE]`
    },
    {
        category: 'marketing',
        title: 'Brand Voice Guide',
        description: 'Define your brand personality',
        text: `Create a brand voice guide for:

Brand name: [NAME]
Industry: [INDUSTRY]
Target audience: [DESCRIBE]
Brand personality: [DESCRIBE IN 3 WORDS]

Define:
1. Voice characteristics (what we are / what we're NOT)
2. Vocabulary do's and don'ts (10 examples each)
3. Sample sentences in our voice
4. Social media tone vs. email tone vs. blog tone
5. How to handle: complaints, praise, questions, humor`
    },
    {
        category: 'analysis',
        title: 'SWOT Analysis Generator',
        description: 'Structured strategic analysis',
        text: `Conduct a SWOT analysis for:

Company/Project: [NAME]
Industry: [INDUSTRY]
Current situation: [DESCRIBE]

Provide:
1. Strengths (5, with evidence)
2. Weaknesses (5, with impact assessment)
3. Opportunities (5, with potential)
4. Threats (5, with likelihood)
5. Strategic recommendations (prioritized)
6. 90-day action plan based on analysis`
    },
    {
        category: 'analysis',
        title: 'Survey Question Designer',
        description: 'Design surveys that get useful data',
        text: `Design a survey for:

Research goal: [WHAT YOU WANT TO LEARN]
Target respondents: [WHO]
Distribution method: [EMAIL / WEB / IN-APP]
Expected responses: [NUMBER]

Provide:
1. 10-15 questions (mix of types: multiple choice, Likert, open-ended)
2. Question order and logic
3. Demographic questions
4. Skip logic recommendations
5. How to analyze each question's results
6. Estimated completion time`
    },
    {
        category: 'productivity',
        title: 'Decision Matrix Builder',
        description: 'Make hard decisions with data',
        text: `Help me make a decision using a weighted decision matrix.

Decision: [DESCRIBE THE CHOICE YOU NEED TO MAKE]

Options I'm considering:
1. [OPTION 1]
2. [OPTION 2]
3. [OPTION 3]

My priorities/criteria (weight 1-10):
- [CRITERION 1]: [WEIGHT]
- [CRITERION 2]: [WEIGHT]
- [CRITERION 3]: [WEIGHT]

Create the matrix, score each option, and recommend the best choice with reasoning.`
    },
    {
        category: 'productivity',
        title: 'Learning Roadmap',
        description: 'Structured learning plan for any skill',
        text: `Create a learning roadmap for:

Skill: [WHAT TO LEARN]
Current level: [BEGINNER / INTERMEDIATE / ADVANCED]
Time available: [HOURS PER WEEK]
Goal: [WHAT YOU WANT TO ACHIEVE]
Deadline: [WHEN]

Provide:
1. Week-by-week curriculum
2. Free resources (courses, books, videos)
3. Practice projects for each phase
4. Milestones and checkpoints
5. Common mistakes to avoid
6. Community/resources for support`
    },
    {
        category: 'productivity',
        title: 'Habit Tracker Designer',
        description: 'Build a system that sticks',
        text: `Design a habit-building system for:

Habit to build: [DESCRIBE]
Current routine: [DESCRIBE]
Biggest obstacle: [DESCRIBE]
Motivation: [WHY THIS MATTERS]

Create:
1. Habit stacking plan (attach to existing routine)
2. Minimum viable habit (tiny version for bad days)
3. Environment design (what to change)
4. Accountability system
5. Reward system
6. 30-day progression plan
7. Failure recovery protocol`
    },
    {
        category: 'writing',
        title: 'Technical Documentation Writer',
        description: 'Clear, professional technical docs',
        text: `Write technical documentation for: [FEATURE/API/PRODUCT]

Audience: [DEVELOPERS / END USERS / MIXED]

Include:
1. Overview and purpose
2. Quick start guide
3. Installation/Setup
4. Configuration options
5. Usage examples (with code)
6. Troubleshooting
7. FAQ

Use clear, concise language. Include code blocks where relevant.`
    }
];
