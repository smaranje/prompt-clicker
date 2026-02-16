#!/usr/bin/env python3
"""
🎯 PRODUCTIVITY & PLANNING TEMPLATES GENERATOR
Agent Team 10-12 competing for jlopez's date! 💪
Generates 10 productivity templates
"""

import json

productivity_templates = [
    {
        "id": "project-plan-generator",
        "category": "productivity",
        "title": "Project Plan Generator",
        "icon": "Kanban",
        "description": "Create comprehensive project plans with milestones, tasks, and timelines",
        "fields": [
            {"name": "project_name", "label": "Project Name", "type": "text"},
            {"name": "project_goal", "label": "Project Goal", "type": "textarea", "placeholder": "What are you trying to achieve?"},
            {"name": "deadline", "label": "Deadline", "type": "text", "placeholder": "e.g., 3 months, Q2 2024"},
            {"name": "team_size", "label": "Team Size", "type": "select", "options": ["Solo", "2-5 people", "6-10 people", "10+ people"]}
        ],
        "promptTemplate": """Create a comprehensive project plan for: {project_name}

Goal: {project_goal}
Deadline: {deadline}
Team: {team_size}

Generate:

**1. PROJECT OVERVIEW**
- Objective (SMART goal)
- Success criteria
- Key stakeholders

**2. PHASES & MILESTONES**
Break into 4-6 phases:
- Phase name
- Duration
- Key deliverables
- Milestone criteria

**3. TASK BREAKDOWN** (for each phase)
- Task name
- Owner (role)
- Estimated hours
- Dependencies
- Priority (High/Medium/Low)

**4. TIMELINE**
- Gantt chart structure (text-based)
- Critical path
- Buffer time

**5. RESOURCES NEEDED**
- Team roles
- Tools/software
- Budget estimate

**6. RISK MANAGEMENT**
- Top 3 risks
- Mitigation strategies

**7. COMMUNICATION PLAN**
- Meeting cadence
- Status update frequency
- Reporting structure

Format as a structured document ready to share with the team."""
    },
    {
        "id": "daily-schedule-optimizer",
        "category": "productivity",
        "title": "Daily Schedule Optimizer",
        "icon": "Clock",
        "description": "Optimize your daily schedule based on energy levels and priorities",
        "fields": [
            {"name": "work_hours", "label": "Available Work Hours", "type": "text", "placeholder": "e.g., 9am-6pm"},
            {"name": "tasks", "label": "Tasks to Schedule", "type": "textarea", "placeholder": "List your tasks for the day"},
            {"name": "energy_pattern", "label": "Energy Pattern", "type": "select", "options": ["Morning person", "Night owl", "Consistent energy", "Afternoon peak"]},
            {"name": "meeting_blocks", "label": "Fixed Meetings", "type": "textarea", "placeholder": "List any scheduled meetings"}
        ],
        "promptTemplate": """Optimize my daily schedule for maximum productivity.

Available hours: {work_hours}
Tasks: {tasks}
Energy pattern: {energy_pattern}
Fixed meetings: {meeting_blocks}

Create an optimized schedule using:

**1. TIME BLOCKING**
- Deep work blocks (90-120 min)
- Shallow work blocks (30-60 min)
- Break times (Pomodoro technique)

**2. ENERGY ALIGNMENT**
Based on {energy_pattern}:
- Schedule high-cognitive tasks during peak energy
- Admin/email during low energy
- Creative work when fresh

**3. TASK PRIORITIZATION**
Use Eisenhower Matrix:
- Urgent & Important (do first)
- Important, not urgent (schedule)
- Urgent, not important (delegate/batch)
- Neither (eliminate)

**4. BUFFER TIME**
- 10-15 min between tasks
- Unexpected interruptions
- Transition time

**5. DAILY STRUCTURE**
Format:
```
9:00-9:30   Morning routine + planning
9:30-11:00  [DEEP WORK] Task X
11:00-11:15 Break
...
```

Include:
- Task batching opportunities
- Email/Slack check times (2-3x max)
- Lunch break
- End-of-day review (15 min)"""
    },
    {
        "id": "habit-building-plan",
        "category": "productivity",
        "title": "Habit Building Plan",
        "icon": "Target",
        "description": "Design a science-backed plan to build lasting habits",
        "fields": [
            {"name": "habit_goal", "label": "Habit to Build", "type": "text", "placeholder": "e.g., Exercise daily, read 30 min, meditate"},
            {"name": "current_frequency", "label": "Current Frequency", "type": "select", "options": ["Never", "Rarely", "Sometimes", "Often"]},
            {"name": "obstacles", "label": "Main Obstacles", "type": "textarea", "placeholder": "What stops you?"},
            {"name": "timeframe", "label": "Timeframe", "type": "select", "options": ["21 days", "30 days", "66 days", "90 days"]}
        ],
        "promptTemplate": """Create a habit-building plan to: {habit_goal}

Current state: {current_frequency}
Obstacles: {obstacles}
Timeframe: {timeframe}

Use James Clear's Atomic Habits framework:

**1. MAKE IT OBVIOUS**
- Implementation intention: "I will [BEHAVIOR] at [TIME] in [LOCATION]"
- Habit stacking: "After [CURRENT HABIT], I will [NEW HABIT]"
- Environment design: Visual cues to trigger the habit

**2. MAKE IT ATTRACTIVE**
- Temptation bundling: Pair with something you enjoy
- Join a culture where {habit_goal} is normal
- Reframe mindset: "I GET to" not "I HAVE to"

**3. MAKE IT EASY**
- 2-minute rule: Start with tiny version
- Reduce friction: Prepare environment night before
- Prime the environment: Lay out workout clothes, etc.

**4. MAKE IT SATISFYING**
- Immediate reward after completion
- Habit tracker (visual progress)
- Never miss twice rule

**WEEKLY PLAN** ({timeframe}):
Week 1: [Tiny habit version]
Week 2: [Slightly increased]
Week 3-4: [Full habit]
...

**OBSTACLE MITIGATION**:
For each obstacle in {obstacles}:
- If-then plan: "If [OBSTACLE], then I will [RESPONSE]"

**TRACKING METHOD**:
- Daily checkbox
- Streak counter
- Accountability partner

**IDENTITY SHIFT**:
- "I am someone who [habit_goal]"
- Evidence collection"""
    },
    {
        "id": "decision-matrix",
        "category": "productivity",
        "title": "Decision Matrix",
        "icon": "ChartBar",
        "description": "Make better decisions using weighted criteria analysis",
        "fields": [
            {"name": "decision", "label": "Decision to Make", "type": "text", "placeholder": "e.g., Choose between job offers, pick a vendor"},
            {"name": "options", "label": "Options", "type": "textarea", "placeholder": "List 2-5 options (one per line)"},
            {"name": "criteria", "label": "Decision Criteria", "type": "textarea", "placeholder": "What factors matter? (e.g., cost, time, quality)"},
            {"name": "decision_type", "label": "Decision Type", "type": "select", "options": ["Career", "Business", "Personal", "Purchase"]}
        ],
        "promptTemplate": """Help me decide: {decision}

Options:
{options}

Criteria to consider:
{criteria}

Create a decision matrix:

**1. WEIGHTED CRITERIA**
For each criterion in {criteria}:
- Importance weight (1-10)
- Why it matters for {decision_type} decisions

**2. SCORING MATRIX**
Table format:
| Criteria (Weight) | Option 1 | Option 2 | Option 3 |
|-------------------|----------|----------|----------|
| [Criterion] (8)   | 7/10     | 9/10     | 6/10     |
| [Criterion] (5)   | 8/10     | 6/10     | 9/10     |

**3. WEIGHTED SCORES**
Calculate: (Score × Weight) for each cell
Total for each option

**4. QUALITATIVE ANALYSIS**
Beyond numbers:
- Gut feeling check
- Reversibility (can you undo this?)
- Regret minimization: "Will I regret NOT choosing X?"

**5. SECOND-ORDER CONSEQUENCES**
- What happens after the decision?
- Opportunity cost
- Long-term vs short-term trade-offs

**6. RECOMMENDATION**
- Top choice with reasoning
- Runner-up
- Deal-breakers to watch for

**7. PRE-MORTEM**
"It's 6 months later and this decision failed. Why?"
- Identify risks for top choice"""
    },
    {
        "id": "weekly-review-template",
        "category": "productivity",
        "title": "Weekly Review Template",
        "icon": "CalendarCheck",
        "description": "Conduct effective weekly reviews to stay on track with goals",
        "fields": [
            {"name": "week_ending", "label": "Week Ending", "type": "text", "placeholder": "Date"},
            {"name": "goals", "label": "This Week's Goals", "type": "textarea", "placeholder": "What did you plan to accomplish?"},
            {"name": "focus_area", "label": "Focus Area", "type": "select", "options": ["Work", "Personal", "Health", "Learning", "All"]}
        ],
        "promptTemplate": """Create a weekly review template for the week ending: {week_ending}

Planned goals: {goals}
Focus: {focus_area}

**PART 1: LOOK BACK**

**1. Wins & Accomplishments**
- What went well?
- What am I proud of?
- Unexpected victories?

**2. Challenges & Obstacles**
- What didn't go as planned?
- Why? (root cause)
- What did I learn?

**3. Goal Progress**
For each goal in {goals}:
- ✅ Completed / ⏳ In Progress / ❌ Not Started
- % complete
- Blockers

**4. Time Audit**
- Where did time actually go?
- Time wasters identified
- Best use of time this week

**5. Energy Audit**
- What energized me?
- What drained me?
- Adjustments needed

**PART 2: LOOK AHEAD**

**6. Next Week's Priorities**
Using MITs (Most Important Tasks):
- MIT 1: [Must complete]
- MIT 2: [Must complete]
- MIT 3: [Must complete]
- Secondary tasks: [Nice to have]

**7. Calendar Review**
- Upcoming meetings/deadlines
- Time blocks needed
- Conflicts to resolve

**8. Habit Check**
- Habits maintained
- Habits to start/stop
- Streak status

**9. One Thing to Improve**
- Single focus for next week
- Specific action plan

**10. Gratitude & Mindset**
- 3 things I'm grateful for
- Affirmation for next week

**METRICS** (if applicable):
- Key numbers tracked
- Progress toward quarterly goals
- Health/fitness stats"""
    },
    {
        "id": "goal-breakdown",
        "category": "productivity",
        "title": "Goal Breakdown & Action Plan",
        "icon": "Crosshair",
        "description": "Break down big goals into actionable steps using SMART framework",
        "fields": [
            {"name": "big_goal", "label": "Big Goal", "type": "text", "placeholder": "Your ambitious goal"},
            {"name": "timeline", "label": "Timeline", "type": "select", "options": ["1 month", "3 months", "6 months", "1 year"]},
            {"name": "current_state", "label": "Current State", "type": "textarea", "placeholder": "Where are you now?"},
            {"name": "resources", "label": "Available Resources", "type": "textarea", "placeholder": "Time, money, skills, network"}
        ],
        "promptTemplate": """Break down this goal into an actionable plan: {big_goal}

Timeline: {timeline}
Current state: {current_state}
Resources: {resources}

**1. SMART GOAL REFINEMENT**
Make {big_goal} SMART:
- **S**pecific: Exactly what will be achieved?
- **M**easurable: How will you track progress?
- **A**chievable: Is it realistic given {resources}?
- **R**elevant: Why does this matter?
- **T**ime-bound: Deadline within {timeline}

**2. REVERSE ENGINEERING**
Work backwards from {big_goal}:
- End state (100%)
- 75% milestone
- 50% milestone
- 25% milestone
- Starting point (current state)

**3. QUARTERLY BREAKDOWN** (if timeline > 3 months)
Q1: [Focus & deliverables]
Q2: [Focus & deliverables]
...

**4. MONTHLY MILESTONES**
For each month in {timeline}:
- Month X objective
- Success criteria
- Key activities

**5. WEEKLY ACTIONS** (First 4 weeks)
Week 1:
- [ ] Action 1
- [ ] Action 2
- [ ] Action 3

**6. FIRST STEP** (Do this today)
- Specific action
- Takes < 30 minutes
- Builds momentum

**7. OBSTACLES & SOLUTIONS**
Likely obstacles:
- Obstacle 1 → Solution
- Obstacle 2 → Solution

**8. ACCOUNTABILITY**
- How will you track?
- Who will you report to?
- Review frequency

**9. RESOURCES NEEDED**
- Skills to learn
- Tools to acquire
- People to connect with
- Money to invest

**10. SUCCESS METRICS**
- Leading indicators (activity)
- Lagging indicators (results)
- Check-in schedule"""
    },
    {
        "id": "meeting-notes-template",
        "category": "productivity",
        "title": "Meeting Notes Template",
        "icon": "Note",
        "description": "Capture actionable meeting notes with clear next steps",
        "fields": [
            {"name": "meeting_title", "label": "Meeting Title", "type": "text"},
            {"name": "meeting_type", "label": "Meeting Type", "type": "select", "options": ["Standup", "Planning", "Retrospective", "1-on-1", "Client Call", "Brainstorm"]},
            {"name": "attendees", "label": "Attendees", "type": "text", "placeholder": "Names or roles"},
            {"name": "duration", "label": "Duration", "type": "select", "options": ["15 min", "30 min", "1 hour", "2+ hours"]}
        ],
        "promptTemplate": """Create a meeting notes template for: {meeting_title}

Type: {meeting_type}
Attendees: {attendees}
Duration: {duration}

**MEETING HEADER**
- Date: [Auto-fill]
- Time: [Auto-fill]
- Location/Link: [Fill in]
- Notetaker: [Fill in]

**AGENDA**
1. [Topic 1] - X min
2. [Topic 2] - X min
3. [Topic 3] - X min

**MEETING OBJECTIVE**
What we need to accomplish: [Fill in]

**DISCUSSION NOTES**

For each agenda item:

**[Topic Name]**
- Key points discussed:
  - Point 1
  - Point 2
- Decisions made:
  - ✅ Decision 1
  - ✅ Decision 2
- Questions raised:
  - ❓ Question 1
  - ❓ Question 2

**ACTION ITEMS** ⚡
Critical section - be specific!

| Action | Owner | Deadline | Priority |
|--------|-------|----------|----------|
| [Task] | @Name | MM/DD    | High     |
| [Task] | @Name | MM/DD    | Medium   |

**DECISIONS LOG** 📋
- Decision 1: [What was decided and why]
- Decision 2: [What was decided and why]

**PARKING LOT** 🅿️
Items to discuss later:
- Item 1
- Item 2

**NEXT STEPS**
- Next meeting: [Date/Time]
- Pre-work needed: [What to prepare]
- Follow-up: [Who sends what to whom]

**MEETING METRICS** (optional)
- Started on time: Y/N
- Ended on time: Y/N
- Agenda followed: Y/N
- Action items clear: Y/N

**NOTES FOR {meeting_type} MEETINGS:**
{meeting_type === 'Standup' ? '- Yesterday, Today, Blockers format' : ''}
{meeting_type === 'Retrospective' ? '- Start, Stop, Continue framework' : ''}
{meeting_type === '1-on-1' ? '- Career development, feedback, concerns' : ''}"""
    },
    {
        "id": "email-templates-library",
        "category": "productivity",
        "title": "Reusable Email Templates",
        "icon": "EnvelopeSimple",
        "description": "Create a library of email templates for common scenarios",
        "fields": [
            {"name": "scenario", "label": "Email Scenario", "type": "select", "options": ["Follow-up", "Introduction", "Request", "Decline", "Thank You", "Update", "Apology"]},
            {"name": "context", "label": "Context", "type": "textarea", "placeholder": "Provide context for the email"},
            {"name": "tone", "label": "Tone", "type": "select", "options": ["Formal", "Professional", "Friendly", "Casual"]}
        ],
        "promptTemplate": """Create reusable email templates for: {scenario}

Context: {context}
Tone: {tone}

Generate 3 variations for different situations:

**TEMPLATE 1: SHORT VERSION** (< 100 words)
Subject: [Template subject line]

Hi [Name],

[2-3 sentence body]

[CTA]

Best,
[Your name]

**When to use:** Quick touchpoints, busy recipients

---

**TEMPLATE 2: STANDARD VERSION** (100-200 words)
Subject: [Template subject line]

Hi [Name],

[Opening line - context/reference]

[2-3 paragraphs with details]

[Clear ask or next step]

[Closing]

Best regards,
[Your name]

**When to use:** Most common situations

---

**TEMPLATE 3: DETAILED VERSION** (200+ words)
Subject: [Template subject line]

Dear [Name],

[Formal opening]

[Background context]

[Main content - 3-4 paragraphs]

[Specific request with details]

[Timeline and expectations]

[Closing with appreciation]

Sincerely,
[Your name]

**When to use:** Important stakeholders, formal requests

---

**CUSTOMIZATION TIPS:**
- Placeholders to fill: [List them]
- Tone adjustments for different audiences
- Common mistakes to avoid

**FOLLOW-UP STRATEGY:**
- When to send: [Timing]
- If no response: [Next steps]
- Escalation path: [If needed]"""
    },
    {
        "id": "travel-itinerary",
        "category": "productivity",
        "title": "Travel Itinerary Planner",
        "icon": "Airplane",
        "description": "Plan detailed travel itineraries with logistics and backup plans",
        "fields": [
            {"name": "destination", "label": "Destination", "type": "text"},
            {"name": "duration", "label": "Trip Duration", "type": "text", "placeholder": "e.g., 5 days"},
            {"name": "trip_type", "label": "Trip Type", "type": "select", "options": ["Business", "Leisure", "Mixed", "Adventure"]},
            {"name": "priorities", "label": "Priorities", "type": "textarea", "placeholder": "What do you want to do/see?"}
        ],
        "promptTemplate": """Create a detailed travel itinerary for: {destination}

Duration: {duration}
Type: {trip_type}
Priorities: {priorities}

**TRIP OVERVIEW**
- Dates: [Fill in]
- Travelers: [Fill in]
- Budget: [Fill in]

**PRE-TRIP CHECKLIST** ✈️
- [ ] Flights booked
- [ ] Accommodation confirmed
- [ ] Travel insurance
- [ ] Visa/passport check
- [ ] Vaccinations (if needed)
- [ ] Currency exchange
- [ ] Phone/data plan
- [ ] Copies of documents

**DAY-BY-DAY ITINERARY**

For each day of {duration}:

**Day X - [Theme/Focus]**

*Morning (8am-12pm)*
- 8:00am: [Activity]
  - Location: [Address]
  - Cost: $X
  - Booking: [Link/confirmation]
  - Travel time: X min
  - Notes: [Tips]

*Afternoon (12pm-6pm)*
- 12:00pm: Lunch at [Restaurant]
- 2:00pm: [Activity]

*Evening (6pm-10pm)*
- 6:00pm: [Activity]
- 8:00pm: Dinner

*Backup Plan*: If weather is bad / attraction closed

**LOGISTICS**

**Transportation**
- Airport → Hotel: [Method, cost, time]
- Getting around: [Public transit, rental car, etc.]
- Key routes/apps

**Accommodation**
- Hotel: [Name, address, confirmation #]
- Check-in: [Time]
- Check-out: [Time]
- Amenities: [WiFi, breakfast, etc.]

**Dining Reservations**
| Restaurant | Date | Time | Confirmation |
|------------|------|------|--------------|
| [Name]     | Day 2| 7pm  | #12345       |

**BUDGET BREAKDOWN**
- Flights: $X
- Accommodation: $X
- Food: $X/day
- Activities: $X
- Transportation: $X
- Misc: $X
- **Total**: $X

**PACKING LIST** 🎒
*Essentials*
- [ ] Passport/ID
- [ ] Tickets/confirmations
- [ ] Chargers
- [ ] Medications

*Clothing* (based on weather)
- [ ] [Items]

*Tech*
- [ ] Phone + charger
- [ ] Camera
- [ ] Power adapter

**IMPORTANT CONTACTS**
- Embassy: [Phone]
- Hotel: [Phone]
- Emergency: [Local 911 equivalent]
- Travel insurance: [Phone, policy #]

**LOCAL INFO**
- Language: [Key phrases]
- Currency: [Exchange rate]
- Tipping: [Customs]
- Emergency numbers: [List]
- WiFi: [Where to find]

**BACKUP PLANS**
- Bad weather alternatives
- Closed attraction backups
- Restaurant alternatives"""
    },
    {
        "id": "event-planning-checklist",
        "category": "productivity",
        "title": "Event Planning Checklist",
        "icon": "Confetti",
        "description": "Plan and execute successful events with comprehensive checklists",
        "fields": [
            {"name": "event_name", "label": "Event Name", "type": "text"},
            {"name": "event_type", "label": "Event Type", "type": "select", "options": ["Conference", "Workshop", "Party", "Wedding", "Webinar", "Meetup"]},
            {"name": "attendee_count", "label": "Expected Attendees", "type": "select", "options": ["< 25", "25-50", "50-100", "100-500", "500+"]},
            {"name": "event_date", "label": "Event Date", "type": "text", "placeholder": "Target date"}
        ],
        "promptTemplate": """Create an event planning checklist for: {event_name}

Type: {event_type}
Attendees: {attendee_count}
Date: {event_date}

**EVENT OVERVIEW**
- Objective: [What's the goal?]
- Target audience: [Who's attending?]
- Budget: $[Amount]
- Theme/Vibe: [Description]

**TIMELINE CHECKLIST**

**3-6 MONTHS BEFORE** (if applicable)
- [ ] Define event goals and KPIs
- [ ] Set budget
- [ ] Choose date and time
- [ ] Book venue
- [ ] Create event team/assign roles
- [ ] Start speaker/entertainment outreach
- [ ] Create event website/landing page

**2-3 MONTHS BEFORE**
- [ ] Finalize venue contract
- [ ] Book caterer
- [ ] Confirm speakers/entertainment
- [ ] Design marketing materials
- [ ] Set up registration system
- [ ] Order supplies/swag
- [ ] Arrange AV equipment
- [ ] Plan event schedule/agenda

**1 MONTH BEFORE**
- [ ] Send invitations/announcements
- [ ] Confirm vendor contracts
- [ ] Create run-of-show document
- [ ] Assign volunteer/staff roles
- [ ] Test registration system
- [ ] Order signage
- [ ] Plan social media campaign
- [ ] Arrange parking/transportation

**2 WEEKS BEFORE**
- [ ] Send reminder emails
- [ ] Confirm final headcount with caterer
- [ ] Print materials (programs, name tags, etc.)
- [ ] Create attendee list
- [ ] Test AV equipment
- [ ] Prepare presenter materials
- [ ] Confirm vendor arrival times
- [ ] Create emergency contact list

**1 WEEK BEFORE**
- [ ] Final walkthrough of venue
- [ ] Confirm all vendor deliveries
- [ ] Prepare registration desk materials
- [ ] Test all technology
- [ ] Brief all staff/volunteers
- [ ] Prepare welcome bags/swag
- [ ] Create seating chart (if needed)
- [ ] Charge all devices

**DAY BEFORE**
- [ ] Venue setup
- [ ] Decor installation
- [ ] AV setup and testing
- [ ] Registration desk setup
- [ ] Signage placement
- [ ] Final vendor confirmations
- [ ] Prepare day-of timeline
- [ ] Charge phone/devices

**EVENT DAY** 🎉

**Setup (X hours before)**
- [ ] Arrive early
- [ ] Final venue check
- [ ] Set up registration
- [ ] Test all tech one more time
- [ ] Brief team on roles
- [ ] Prepare welcome area

**During Event**
- [ ] Welcome attendees
- [ ] Manage registration
- [ ] Stick to schedule
- [ ] Handle issues as they arise
- [ ] Take photos/videos
- [ ] Collect feedback
- [ ] Monitor social media

**Breakdown**
- [ ] Thank speakers/vendors
- [ ] Collect materials
- [ ] Venue cleanup
- [ ] Return rented items
- [ ] Secure valuables

**POST-EVENT** (1 week after)
- [ ] Send thank you emails
- [ ] Process feedback surveys
- [ ] Pay final invoices
- [ ] Share photos/highlights
- [ ] Write post-event report
- [ ] Calculate ROI
- [ ] Document lessons learned
- [ ] Update contact database

**VENDOR CONTACTS**
| Vendor | Contact | Phone | Email | Arrival Time |
|--------|---------|-------|-------|--------------|
| Venue  | [Name]  | [#]   | [@]   | [Time]       |
| Caterer| [Name]  | [#]   | [@]   | [Time]       |

**BUDGET TRACKER**
| Item | Estimated | Actual | Variance |
|------|-----------|--------|----------|
| Venue| $X        | $X     | $X       |
| Food | $X        | $X     | $X       |
| **Total** | $X   | $X     | $X       |

**EMERGENCY CONTACTS**
- Venue manager: [Phone]
- Caterer: [Phone]
- AV tech: [Phone]
- Security: [Phone]
- Your team: [Phones]

**CONTINGENCY PLANS**
- Bad weather: [Plan B]
- Speaker cancellation: [Backup]
- Tech failure: [Backup equipment]
- Low attendance: [Adjustments]"""
    }
]

def generate_typescript_templates(templates, category_name):
    ts_code = f"\n// ========== {category_name.upper()} TEMPLATES ==========\n"
    for template in templates:
        ts_code += "  {\n"
        ts_code += f"    id: '{template['id']}',\n"
        ts_code += f"    category: '{template['category']}',\n"
        ts_code += f"    title: '{template['title']}',\n"
        ts_code += f"    icon: '{template['icon']}',\n"
        ts_code += f"    description: `{template['description']}`,\n"
        ts_code += f"    fields: {json.dumps(template['fields'], indent=6)},\n"
        ts_code += f"    promptTemplate: `{template['promptTemplate']}`\n"
        ts_code += "  },\n"
    return ts_code

output = generate_typescript_templates(productivity_templates, "Productivity & Planning")

print("=" * 80)
print("🎯 PRODUCTIVITY & PLANNING TEMPLATES GENERATED (10 templates)")
print("=" * 80)
print("Agent Teams 10-12 working hard for that jlopez date! 💪")
print("=" * 80)
print(output[:500] + "...")

with open("generated_productivity_templates.ts", "w") as f:
    f.write(output)

print("\n✅ Productivity templates saved to: generated_productivity_templates.ts")
print(f"✅ Generated {len(productivity_templates)} productivity templates")
print("\n🏆 MISSION STATUS: Templates complete! Now for the UI features...")
