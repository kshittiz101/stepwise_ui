# StepWise: AI Learning Planner - Product Requirements Document

## Executive Summary

**StepWise** is an AI-powered learning platform designed specifically for Nepali students, transforming their educational goals into personalized learning roadmaps with daily tasks, curated resources, quizzes, and mindmaps. Targeting medical entrance aspirants, Lok Sewa candidates, coding learners, and skill upgraders, StepWise addresses the core problem of learning path ambiguity and resource discovery in the Nepali context.

**Key Metrics for Success:**
- Plan generation in < 10 seconds
- Day-7 retention > 40%
- Daily task completion rate > 60%

---

## 1. Product Vision

> "Empower every Nepali student to ace their medical entrance, Lok Sewa, coding, or skill upgrade goals with a clear, actionable daily plan tailored to their needs."

### Value Proposition
- **Nepal-Specific Content**: Resources tailored for NEET-like medical entrance, Lok Sewa exams, and local job market skills
- **Structured Learning**: Eliminate guesswork in what to learn and when for competitive exams
- **Time Optimization**: Efficient use of limited learning time for busy students and job seekers
- **Resource Curation**: Hand-picked free resources including Nepali YouTube channels, PDFs, and government publications
- **Adaptive Progress**: Plans that adjust based on performance and exam patterns
- **Zero Cost**: Free-first approach to democratize education for Nepali students
- **Local Language Support**: Resources in Nepali and English for better comprehension

---

## 2. User Personas

### Primary Personas

#### 1. The Medical Entrance Aspirant
- **Age**: 16-20
- **Goal**: Crack MBBS/BDS entrance (CEE, NEET, Indian medical entrance)
- **Pain Points**: Vast syllabus (Physics, Chemistry, Biology/Zoology), limited time, high competition, coaching expenses
- **Preferences**: Quiz-heavy, MCQ practice, previous year questions, chapter-wise tests
- **Daily Availability**: 2-4 hours for +2 students, 6-8 hours for gap year students

#### 2. The Lok Sewa Candidate
- **Age**: 18-45
- **Goal**: Pass Public Service Commission exams (Kharidar, NaSu, Section Officer, Naib-Suba)
- **Pain Points**: Vast GK syllabus, nepali language paper, general knowledge, mental ability test, interview preparation
- **Preferences**: Daily current affairs, government policies, past question papers, essay writing practice
- **Daily Availability**: 1-3 hours (working professionals), 4-6 hours (full-time aspirants)

#### 3. The Coding Learner
- **Age**: 16-30
- **Goal**: Learn programming skills for career (Python, JavaScript, Web Development, Data Science)
- **Pain Points**: Confusion about where to start, lack of Nepali resources, fear of complex topics
- **Preferences**: Video tutorials, project-based learning, code exercises, local job market focus
- **Daily Availability**: 30-120 minutes

#### 4. The Skill Upgrader
- **Age**: 20-35
- **Goal**: Learn new skills for better job opportunities (English, Communication, Digital Marketing, Design)
- **Pain Points**: Limited access to quality courses, language barriers, expensive training centers
- **Preferences**: Practical exercises, real-world projects, bilingual resources (Nepali/English)
- **Daily Availability**: 30-60 minutes

---

## 3. Core Features

### 3.1 Goal Setup & Onboarding

**User Inputs:**
- Goal text (free-form): "Prepare for MBBS entrance", "Crack Lok Sewa Kharidar", "Learn Python for job", "Improve English speaking"
- Goal type selection: Medical Entrance | Lok Sewa | Coding | Skill Building | Language
- Deadline: Target exam date OR number of days/weeks
- Daily availability: 30/60/90/120/180/240/480 minutes per day (varied for different goals)
- Current level: Beginner | Intermediate | Advanced (optional)
- Learning style: Video-heavy | Reading-heavy | Practice-heavy | Balanced (optional)
- Constraints: "Only free resources", "Nepali language", "No paid courses", "Past papers only" (optional)
- Exam-specific inputs (for medical/Lok Sewa):
  - Target exam: CEE, NEET, Indian State Exams, Kharidar, NaSu, Section Officer, Naib-Suba
  - Previous score/attempts (optional)
  - Focus subjects: All subjects or specific weak areas

**AI Classification:**
- Auto-detect goal type and specific exam if not specified
- Infer difficulty level from goal description and exam pattern
- Estimate total duration required based on exam dates
- Validate feasibility of deadline vs time availability
- Suggest recommended daily hours based on goal type

**Output:**
- Plan summary: "Your MBBS entrance plan will cover Physics, Chemistry, and Biology over 90 days with 4 hours daily. Expected outcome: Complete syllabus revision, 2000+ MCQs, 10 full mock tests."

- Lok Sewa example: "Your Kharidar Lok Sewa plan covers all subjects over 60 days with 3 hours daily. Expected outcome: GK mastery, 1500+ MCQs, previous 10 years papers practice, Nepali writing practice."

---

### 3.2 Roadmap Generator

**Structure:**
- **Modules**: 3-7 logical phases (e.g., Basics → Intermediate → Projects → Review)
- **Topics**: 5-10 topics per module
- **Prerequisites**: Explicit dependencies between modules
- **Checkpoints**: End-of-module assessments
- **Revision Days**: Built-in review periods

**Module Example (Medical Entrance - Physics):**
```
Module 1: Mechanics (Week 1-2)
  - Units and Dimensions
  - Kinematics (1D and 2D)
  - Newton's Laws of Motion
  - Work, Energy, and Power
  - Rotational Motion
  - Practice: 100 MCQs
  - Quiz: 3 tests (20 questions each)
  - Checkpoint: Previous 5 years CEE questions on Mechanics

Module 2: Thermodynamics & Waves (Week 3-4)
  - Heat and Thermodynamics
  - Kinetic Theory of Gases
  - Oscillations and Waves
  - Sound Waves
  - Practice: 80 MCQs
  - Quiz: 2 tests (25 questions each)
  - Checkpoint: NEET practice questions on Thermodynamics
```

**Module Example (Lok Sewa - Kharidar):**
```
Module 1: General Knowledge (Week 1-2)
  - Nepal's Geography (Physical, Political)
  - History of Nepal (Ancient to Modern)
  - Nepal's Constitution
  - Government System of Nepal
  - Practice: 150 MCQs
  - Quiz: Daily 10 questions (14 days)
  - Checkpoint: Previous 5 years Kharidar GK section analysis

Module 2: Nepali Language (Week 3-4)
  - Grammar (Byakaran)
  - Essay Writing (Nibandha)
  - Letter Writing (Patra)
  - Vocabulary Expansion
  - Practice: 20 essays, 10 letters
  - Quiz: Grammar exercises daily
  - Checkpoint: Mock Nepali paper (2 hours)
```

**Module Example (Coding):**
```
Module 1: Foundations (Week 1)
  - Setup & Environment
  - Variables & Data Types
  - Control Flow
  - Functions Basics
  - Practice: 5 coding exercises
  - Quiz: 10 questions
  - Checkpoint: Mini calculator app

Module 2: Core Concepts (Week 2)
  - Data Structures (Lists, Dicts)
  - File Handling
  - Error Handling
  - Object-Oriented Basics
  - Practice: 10 coding exercises
  - Quiz: 15 questions
  - Checkpoint: Todo list app
```

**Rules:**
- Each module has 3-7 topics
- Topics build on previous ones
- Include 1 project/checkpoint per module
- Cap module duration to 1-2 weeks (adjustable based on goal)
- For Medical/Lok Sewa: Include chapter-wise previous year questions
- For Lok Sewa: Include current affairs updates weekly

---

### 3.3 Day-by-Day Task Builder

**Daily Structure:**
- 2-5 tasks per day (maximum)
- Time distribution: Learn (40%) | Practice (40%) | Recall (20%)
- Minimum viable version for busy days
- Time estimates per task

**Example Day - Medical Entrance (240 mins/4 hours):**
```
Day 1: Mechanics - Units & Dimensions
  ✅ Task 1: Watch video (45 min)
     Resource: YouTube - Physics Galaxy - Units and Dimensions
  ✅ Task 2: Read notes (30 min)
     Resource: HC Verma Concepts of Physics - Chapter 1 notes
  ✅ Task 3: Practice MCQs (60 min)
     Exercise: Complete 50 MCQs from previous year CEE papers
  ✅ Task 4: Chemistry revision (60 min)
     Resource: NCERT Chemistry - Mole Concept (20 pages)
  ✅ Task 5: Daily quiz (45 min)
     Quiz: 20 MCQs (10 Physics + 10 Chemistry)
  ⏱️ Total: 240 minutes
```

**Example Day - Lok Sewa Kharidar (180 mins/3 hours):**
```
Day 1: General Knowledge - Nepal's Geography
  ✅ Task 1: Watch video (30 min)
     Resource: YouTube - Nepal Geography in Nepali
  ✅ Task 2: Read notes (40 min)
     Resource: Lok Sewa Guide - Chapter 1: Nepal's Physical Features
  ✅ Task 3: Practice MCQs (50 min)
     Exercise: Complete 60 MCQs from previous Kharidar papers
  ✅ Task 4: Current Affairs (30 min)
     Resource: Today's news summary from Nepali news portals
  ✅ Task 5: Daily quiz (30 min)
     Quiz: 25 MCQs (20 GK + 5 Current Affairs)
  ⏱️ Total: 180 minutes
```

**Example Day - Coding (60 mins total):**
```
Day 1: Python Setup & Variables
  ✅ Task 1: Watch video (15 min)
     Resource: YouTube - Python Setup for Beginners
  ✅ Task 2: Read documentation (10 min)
     Resource: Official Python Docs - Variables
  ✅ Task 3: Practice exercises (25 min)
     Exercise: Complete 5 variable problems
  ✅ Task 4: Daily quiz (10 min)
     Quiz: 5 MCQ questions on variables
  ⏱️ Total: 60 minutes
```

**Task Types:**
1. **Watch**: Video content with timestamps
2. **Read**: Article, blog post, documentation, PDF notes
3. **Practice**: Coding exercises, problem sets, MCQs, essays
4. **Quiz**: Multiple choice, fill-in-the-blank
5. **Project**: Build small deliverables
6. **Review**: Spaced repetition flashcards
7. **Current Affairs**: Daily news updates (Lok Sewa specific)

---

### 3.4 Resource Finder

**Sources (Priority Order):**
1. **YouTube**: Nepali educational channels, Medical entrance channels, Lok Sewa preparation channels, Coding tutorials
2. **Documentation & Notes**: NCERT textbooks, HC Verma, RD Sharma, Lok Sewa guide books, Official government publications
3. **Previous Year Papers**: CEE, NEET, Lok Sewa question banks (10+ years)
4. **Articles**: Nepali educational blogs, Government websites, Wikipedia
5. **Practice Sites**: Previous year MCQ compilations, Online quiz platforms
6. **Free Courses**: Khan Academy, freeCodeCamp, NPTEL, Coursera audits

**Nepal-Specific Resources:**

**Medical Entrance:**
- Physics Galaxy, MK Sir (YouTube)
- NCERT textbooks (Class 11 & 12)
- HC Verma Concepts of Physics
- Biology NCERT, Trueman's Biology
- Previous year CEE papers (2015-2025)
- NEET solved papers

**Lok Sewa:**
- Lok Sewa Aayog official publications
- Kharidar Guide (various publishers)
- Current Affairs: Onlinekhabar, The Himalayan Times, Gorkhapatra
- Nepal Government Gazette
- Lok Sewa MCQ compilations
- Constitution of Nepal PDF

**Coding:**
- Nepali coding YouTube channels (e.g., Nepal Coding Academy)
- freeCodeCamp (English)
- W3Schools
- LeetCode free tier
- HackerRank free problems

**Resource Metadata:**
```json
{
  "id": "res_123",
  "title": "Python for Beginners - Full Course",
  "url": "youtube.com/watch?v=...",
  "type": "video",
  "format": "playlist",
  "duration": "4h 26m",
  "difficulty": "beginner",
  "language": "English/Nepali",
  "free": true,
  "source": "youtube",
  "tags": ["python", "basics", "video", "nepali"],
  "popularity_score": 4.8,
  "nepal_specific": true
}
```

**Ranking Algorithm:**
1. Relevance to topic (AI similarity score)
2. Beginner friendliness (difficulty match)
3. Duration fit (matches user's time slot)
4. Popularity (views, ratings)
5. Free vs paid (prefer free)
6. Language match (prioritize Nepali for Lok Sewa)
7. Nepal-specific vs generic content

**Deduplication:**
- Group similar resources
- Show top 3 options per topic
- Allow user to "swap resources"
- Mark Nepal-specific resources prominently

---

### 3.5 Quiz & Exercise Generator

**Question Types:**
- Multiple Choice (Single/Select)
- True/False
- Fill in the Blank
- Short Answer
- Code Completion (for coding goals)
- Essay Writing (for Lok Sewa Nepali paper)
- Drag and Drop (later version)

**Quiz Generation:**
- 5-15 questions per topic (Coding: 5-10)
- 20-50 MCQs per day (Medical: 30-50, Lok Sewa: 20-40)
- Mix of difficulty (60% easy, 30% medium, 10% hard)
- Include explanations for each answer
- Track incorrect answers for spaced repetition
- Previous year question integration

**Example Quiz - Medical Entrance (Physics):**
```json
{
  "id": "quiz_001",
  "topic": "Units and Dimensions",
  "questions": [
    {
      "id": "q1",
      "type": "mcq",
      "question": "The SI unit of Planck's constant is:",
      "options": ["Js", "J/s", "J/K", "Jm"],
      "correct": 0,
      "explanation": "Planck's constant h has dimensions of energy × time, so SI unit is Joule-second (Js)",
      "previous_year": "CEE 2021"
    },
    {
      "id": "q2",
      "type": "mcq",
      "question": "Which of the following is a derived unit?",
      "options": ["Metre", "Kilogram", "Second", "Newton"],
      "correct": 3,
      "explanation": "Newton is derived from kg·m/s², while metre, kilogram, and second are base SI units",
      "previous_year": "NEET 2020"
    }
  ],
  "passing_score": 70
}
```

**Example Quiz - Lok Sewa (General Knowledge):**
```json
{
  "id": "quiz_002",
  "topic": "Nepal's Constitution",
  "questions": [
    {
      "id": "q1",
      "type": "mcq",
      "question": "वर्तमान नेपालको संविधान कहिले जारी भयो?",
      "options": ["2063 BS", "2065 BS", "2072 BS", "2070 BS"],
      "correct": 2,
      "explanation": "नेपालको वर्तमान संविधान विसं २०७२ साल मंसिर ३ गते जारी भएको हो",
      "previous_year": "Kharidar 2022"
    },
    {
      "id": "q2",
      "type": "mcq",
      "question": "नेपालको राष्ट्रिय जनावर के हो?",
      "options": ["गाई", "चरी", "लोखोर्के", "हात्ती"],
      "correct": 0,
      "explanation": "नेपालको राष्ट्रिय जनावर गाई हो जबकि लोखोर्के राष्ट्रिय पोथी हो",
      "previous_year": "NaSu 2023"
    }
  ],
  "passing_score": 60
}
```

**Example Quiz - Coding (Python):**
```json
{
  "id": "quiz_003",
  "topic": "Python Variables",
  "questions": [
    {
      "id": "q1",
      "type": "mcq",
      "question": "Which variable name is valid in Python?",
      "options": ["2variable", "my_var", "class", "var!"],
      "correct": 1,
      "explanation": "Variable names cannot start with numbers or be Python keywords"
    }
  ],
  "passing_score": 70
}
```

**Spaced Repetition:**
- Missed questions reappear after 1 day, 3 days, 7 days
- Incorrect answers moved to "Review Deck"
- Dashboard shows weak areas
- Previous year questions prioritized for exams

**Essay Writing Practice (Lok Sewa):**
- Daily essay prompts (5-10 topics)
- Model essays with structure guidelines
- Vocabulary improvement exercises
- Letter writing practice (formal/informal)

---

### 3.6 Mindmap Generator

**Structure:**
- Topic node at center
- Subtopics as branches
- Examples and common mistakes as leaves
- Export options: Image, PDF, Text outline

**Example Mindmap (Medical Entrance - Physics - Mechanics):**
```
Mechanics
├── Kinematics
│   ├── 1D Motion
│   ├── 2D Motion
│   │   ├── Projectile Motion
│   │   └── Relative Velocity
│   └── Circular Motion
├── Newton's Laws
│   ├── First Law (Inertia)
│   ├── Second Law (F=ma)
│   ├── Third Law (Action-Reaction)
│   └── Applications
├── Work, Energy & Power
│   ├── Work (W = F·d·cosθ)
│   ├── Kinetic Energy
│   ├── Potential Energy
│   └── Conservation of Energy
└── CEE Frequently Asked Topics
    ├── Tension in strings
    ├── Inclined plane problems
    ├── Banking of roads
    └── Collision problems
```

**Example Mindmap (Lok Sewa - Nepal's Constitution):**
```
Constitution of Nepal (2072)
├── Preamble (उद्देश्यिका)
├── Fundamental Rights (मौलिक हक)
│   ├── Right to Life
│   ├── Right to Freedom
│   ├── Right to Equality
│   └── Right to Social Justice
├── Government Structure
│   ├── Legislature (संसद)
│   ├── Executive (प्रधानमन्त्री तथा मन्त्रिपरिषद)
│   └── Judiciary (अदालत)
├── Federalism (संघीयता)
│   ├── 7 Provinces
│   ├── Local Levels
│   └── Power Division
└── Important Articles for Exam
    ├── Article 3 (Sovereignty)
    ├── Article 16 (Right to Equality)
    ├── Article 46 (Right to Social Justice)
    └── Article 57 (Removal of Prime Minister)
```

**Example Mindmap (Python Basics):**
```
Python Basics
├── Setup
│   ├── Installation
│   ├── IDE/Editor
│   └── Virtual Environment
├── Variables
│   ├── String
│   ├── Integer
│   ├── Float
│   └── Boolean
├── Operators
│   ├── Arithmetic
│   ├── Comparison
│   └── Logical
└── Common Mistakes
    ├── Using 'var' as name
    ├── Forgetting colons
    └── Indentation errors
```

**Implementation:**
- Generate markdown outline from AI
- Convert to visual mindmap (use library like markmap.js)
- Store as JSON for re-editing
- Support Nepali text rendering for Lok Sewa topics

---

### 3.7 Progress Tracking

**Metrics Tracked:**
- Streak (consecutive days active)
- Completion % per module
- Daily task completion rate
- Quiz scores over time
- Time spent per task (actual vs estimated)
- Weak areas (topics with low quiz scores)

**Dashboard Views:**

1. **Today View**: Current day's tasks, resources, quiz
2. **Roadmap View**: Module timeline, completion status
3. **Progress View**: Charts, streaks, weak areas
4. **Resource Library**: Saved resources, favorites
5. **Calendar View**: Past/future plans, missed days

**Notifications (Optional in MVP):**
- Daily reminder at user's preferred time
- Streak celebration
- "You're falling behind" alert after 3 missed days

---

### 3.8 Adaptive Re-planning

**Triggers for Re-plan:**
- User misses 3+ consecutive days
- Quiz scores consistently below 60%
- User requests deadline change
- User changes daily time availability

**Re-plan Options:**
1. **Compress**: Fit remaining content into shorter timeline
2. **Extend**: Push deadline to accommodate slower pace
3. **Prioritize**: Focus on core topics only
4. **Restart**: Begin fresh with adjusted parameters

**Example Message:**
"You've missed 3 days of your Python plan. Options:
1. Extend deadline by 3 days (recommended)
2. Increase daily time to 90 mins
3. Skip advanced topics (complete in 22 days)
4. Restart with new plan"

---

## 4. Technical Architecture

### 4.1 Tech Stack

**Backend:**
- Framework: Django 4.2+ with Django REST Framework
- Database: PostgreSQL (production), SQLite (development)
- API: RESTful API with JWT authentication
- Task Queue: Celery + Redis (for async AI operations)

**AI/ML:**
- LLM Integration: OpenAI GPT-4 / Anthropic Claude / Local LLaMA
- Embeddings: OpenAI Embeddings / Sentence Transformers
- Vector Search: Pinecone / Weaviate (for resource matching)

**Frontend (V1):**
- Framework: Vue 3 + TypeScript
- State Management: Pinia
- UI Library: Element Plus / Headless UI
- Build Tool: Vite

**Infrastructure:**
- Hosting: DigitalOcean / AWS
- CI/CD: GitHub Actions
- Monitoring: Sentry (error tracking)

---

### 4.2 API Endpoints

### Authentication
```
POST   /api/auth/register/         # User registration
POST   /api/auth/login/            # User login
POST   /api/auth/logout/           # User logout
POST   /api/auth/refresh/          # Refresh JWT token
```

### Goals
```
GET    /api/goals/                 # List user's goals
POST   /api/goals/                 # Create new goal
GET    /api/goals/{id}/            # Get goal details
PUT    /api/goals/{id}/            # Update goal
DELETE /api/goals/{id}/            # Delete goal
POST   /api/goals/{id}/regenerate/ # Re-generate plan
```

### Roadmaps
```
GET    /api/goals/{id}/roadmap/    # Get roadmap
GET    /api/goals/{id}/modules/    # List modules
GET    /api/modules/{id}/          # Get module details
GET    /api/modules/{id}/topics/   # Get topics in module
```

### Daily Plans
```
GET    /api/goals/{id}/days/       # List all daily plans
GET    /api/goals/{id}/today/      # Get today's plan
GET    /api/days/{id}/             # Get specific day plan
PUT    /api/days/{id}/             # Update day progress
```

### Tasks
```
GET    /api/days/{day_id}/tasks/   # Get tasks for day
PUT    /api/tasks/{id}/            # Mark task complete
PUT    /api/tasks/{id}/skip/       # Skip task
```

### Resources
```
GET    /api/resources/             # Browse resource library
GET    /api/resources/{id}/        # Get resource details
POST   /api/tasks/{task_id}/resources/ # Replace task resource
GET    /api/goals/{id}/resources/  # Get resources for goal
```

### Quizzes
```
GET    /api/quizzes/{id}/          # Get quiz
POST   /api/quizzes/{id}/submit/   # Submit quiz answers
GET    /api/goals/{id}/quizzes/    # Get quiz history
GET    /api/review/deck/           # Get spaced repetition deck
```

### Progress
```
GET    /api/goals/{id}/progress/   # Get progress summary
GET    /api/goals/{id}/streak/     # Get streak information
GET    /api/goals/{id}/weak-areas/ # Get weak topics
```

### Mindmaps
```
GET    /api/modules/{id}/mindmap/   # Get mindmap outline
GET    /api/mindmaps/{id}/image/   # Export as image
```

### Users
```
GET    /api/users/me/              # Get current user profile
PUT    /api/users/me/              # Update profile
GET    /api/users/me/statistics/   # User statistics
```

---

### 4.3 Database Schema

```sql
-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Goals Table
CREATE TABLE goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    goal_type VARCHAR(50) NOT NULL, -- 'medical_entrance', 'lok_sewa', 'coding', 'skill', 'language'
    current_level VARCHAR(20), -- 'beginner', 'intermediate', 'advanced'
    target_level VARCHAR(20),
    deadline DATE NOT NULL,
    daily_minutes INTEGER NOT NULL, -- 30, 60, 90, 120, 180, 240, 480
    learning_style VARCHAR(20), -- 'video', 'reading', 'practice', 'balanced'
    preferences JSONB, -- {'language': 'Nepali/English', 'free_only': true, 'exam': 'CEE'}
    exam_specific JSONB, -- {'target_exam': 'CEE', 'previous_attempts': 0, 'focus_subjects': []}
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'completed', 'paused'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Roadmaps Table
CREATE TABLE roadmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID REFERENCES goals(id) ON DELETE CASCADE,
    total_modules INTEGER NOT NULL,
    total_days INTEGER NOT NULL,
    summary TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Modules Table
CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    roadmap_id UUID REFERENCES roadmaps(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    order INTEGER NOT NULL,
    estimated_days INTEGER NOT NULL,
    checkpoint_task TEXT, -- mini-project description
    prerequisites JSONB, -- list of module IDs
    status VARCHAR(20) DEFAULT 'not_started',
    completion_percentage INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Topics Table
CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    order INTEGER NOT NULL,
    estimated_minutes INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Day Plans Table
CREATE TABLE day_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID REFERENCES goals(id) ON DELETE CASCADE,
    day_number INTEGER NOT NULL,
    planned_date DATE,
    total_estimated_minutes INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'upcoming', -- 'upcoming', 'today', 'completed', 'missed'
    created_at TIMESTAMP DEFAULT NOW(),
    completed_at TIMESTAMP
);

-- Tasks Table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    day_plan_id UUID REFERENCES day_plans(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id),
    type VARCHAR(50) NOT NULL, -- 'watch', 'read', 'practice', 'quiz', 'project', 'review'
    title VARCHAR(200) NOT NULL,
    description TEXT,
    instructions TEXT,
    estimated_minutes INTEGER NOT NULL,
    resource_id UUID REFERENCES resources(id),
    order INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'skipped'
    completed_at TIMESTAMP,
    actual_minutes INTEGER
);

-- Resources Table
CREATE TABLE resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    url TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'video', 'article', 'documentation', 'book', 'practice'
    format VARCHAR(50), -- 'playlist', 'single_video', 'pdf', 'html'
    duration_minutes INTEGER,
    difficulty VARCHAR(20), -- 'beginner', 'intermediate', 'advanced'
    language VARCHAR(20) DEFAULT 'English',
    is_free BOOLEAN DEFAULT true,
    source VARCHAR(50), -- 'youtube', 'official_docs', 'medium', etc.
    tags JSONB,
    popularity_score DECIMAL(3, 2),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Quizzes Table
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID REFERENCES topics(id),
    task_id UUID REFERENCES tasks(id),
    title VARCHAR(200) NOT NULL,
    passing_score INTEGER DEFAULT 70,
    total_questions INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Questions Table
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type VARCHAR(20) NOT NULL, -- 'mcq', 'true_false', 'fill_blank', 'short_answer'
    options JSONB, -- for mcq: ['A', 'B', 'C', 'D']
    correct_answer TEXT NOT NULL,
    explanation TEXT,
    difficulty VARCHAR(20) DEFAULT 'medium',
    order INTEGER NOT NULL
);

-- Quiz Attempts Table
CREATE TABLE quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID REFERENCES quizzes(id),
    user_id UUID REFERENCES users(id),
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    answers JSONB, -- {question_id: user_answer}
    attempted_at TIMESTAMP DEFAULT NOW()
);

-- Incorrect Answers Table (for spaced repetition)
CREATE TABLE incorrect_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    question_id UUID REFERENCES questions(id),
    topic_id UUID REFERENCES topics(id),
    next_review_date DATE NOT NULL,
    review_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Progress Tracking Table
CREATE TABLE progress_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    goal_id UUID REFERENCES goals(id),
    streak_current INTEGER DEFAULT 0,
    streak_longest INTEGER DEFAULT 0,
    last_active_date DATE,
    total_tasks_completed INTEGER DEFAULT 0,
    total_quizzes_completed INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Mindmaps Table
CREATE TABLE mindmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id UUID REFERENCES modules(id),
    title VARCHAR(200) NOT NULL,
    structure JSONB NOT NULL, -- nested JSON structure
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_goals_user ON goals(user_id);
CREATE INDEX idx_day_plans_goal ON day_plans(goal_id);
CREATE INDEX idx_tasks_day_plan ON tasks(day_plan_id);
CREATE INDEX idx_resources_tags ON resources USING gin(tags);
CREATE INDEX idx_incorrect_answers_user ON incorrect_answers(user_id);
CREATE INDEX idx_incorrect_answers_next_review ON incorrect_answers(next_review_date);
```

---

### 4.4 AI Pipeline Architecture

```
User Input
    ↓
[1] Goal Classifier
    → Detect goal type, difficulty, estimated duration
    ↓
[2] Syllabus Builder
    → Generate modules, topics, prerequisites
    ↓
[3] Scheduler
    → Map topics to days based on time & deadline
    ↓
[4] Resource Retriever
    → Fetch relevant resources from knowledge base
    → Rank by relevance, difficulty, duration
    ↓
[5] Content Generator
    → Generate quizzes, exercises
    → Create mindmap outline
    ↓
[6] Validation & Optimizer
    → Verify time estimates
    → Balance task types
    ↓
[7] Response Formatter
    → Return structured plan to user
```

**AI Prompts Structure:**

```python
SYLLABUS_PROMPT = """
You are a curriculum designer. Create a learning path for:
- Goal: {goal_title}
- Type: {goal_type}
- Target Exam: {target_exam} (if applicable)
- Current Level: {current_level}
- Target Level: {target_level}
- Duration: {total_days} days
- Daily Time: {daily_minutes} minutes

Return JSON with:
{
  "modules": [
    {
      "title": "Module 1",
      "description": "Brief description",
      "estimated_days": 7,
      "topics": [
        {"title": "Topic 1", "description": "...", "estimated_minutes": 45}
      ]
    }
  ]
}
"""

MEDICAL_ENTRANCE_SYLLABUS_PROMPT = """
You are a medical entrance exam expert. Create a comprehensive study plan for:
- Goal: {goal_title} (e.g., MBBS entrance preparation)
- Target Exam: {target_exam} (CEE, NEET, etc.)
- Subjects: Physics, Chemistry, Biology/Zoology
- Duration: {total_days} days
- Daily Time: {daily_minutes} minutes
- Focus: Previous year questions, important topics for exam

Include:
- Chapter-wise breakdown for each subject
- Daily MCQ targets (30-50 questions)
- Previous year question integration
- Revision days
- Full mock test schedule

Return JSON with medical entrance specific structure.
"""

LOK_SEWA_SYLLABUS_PROMPT = """
You are a Lok Sewa exam expert. Create a comprehensive study plan for:
- Goal: {goal_title} (e.g., Kharidar Lok Sewa preparation)
- Target Exam: {target_exam} (Kharidar, NaSu, Section Officer, etc.)
- Subjects: General Knowledge, Nepali, Mental Ability, Office Management
- Duration: {total_days} days
- Daily Time: {daily_minutes} minutes
- Focus: Previous year questions, current affairs, government policies

Include:
- Subject-wise module breakdown
- Daily MCQ targets (20-40 questions)
- Essay/letter writing practice schedule
- Current affairs integration (weekly updates)
- Previous 10 years question practice
- Full mock test schedule

Return JSON with Lok Sewa specific structure.
"""

QUIZ_PROMPT = """
Generate a quiz for topic: {topic_title}
Difficulty: {difficulty}
Question types: MCQ, True/False
Questions: {num_questions}
Goal Type: {goal_type} (medical_entrance, lok_sewa, coding)

For medical_entrance: Include previous year question references if possible
For lok_sewa: Support Nepali language questions

Return JSON with:
{
  "questions": [
    {
      "question": "...",
      "type": "mcq",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "explanation": "...",
      "previous_year": "CEE 2021" (if applicable)
    }
  ]
}
"""
```

---

### 4.5 Resource Knowledge Base

**Sources:**
1. **YouTube API**: Search for videos/playlists by topic (Nepali educational channels, medical entrance, Lok Sewa)
2. **Nepal Government Websites**: Lok Sewa Aayog, Official Gazette, Educational portals
3. **Previous Year Question Banks**: CEE, NEET, Lok Sewa papers (10+ years)
4. **Open Source Documentation**: Python, JavaScript, etc.
5. **Educational Platforms**: Khan Academy, freeCodeCamp APIs
6. **Custom Database**: Curated resources manually added (Nepali textbooks, guide books)
7. **Nepali News Portals**: Current affairs for Lok Sewa

**Nepal-Specific Resource Categories:**
- **Medical Entrance**: Physics Galaxy, MK Sir, NCERT, HC Verma, Trueman's Biology, CEE papers
- **Lok Sewa**: Lok Sewa Aayog publications, Kharidar guides, Current affairs updates, Constitution PDF
- **Coding**: Nepali coding channels, freeCodeCamp, W3Schools, LeetCode free tier

**Crawling Strategy:**
- Initial bulk crawl: 1000+ resources per category
- Update frequency: Weekly
- Quality checks: User ratings, usage statistics, year of previous questions
- Language detection: Support Nepali and English content
- Previous year paper integration: CEE (2015-2025), Lok Sewa (2015-2025)

---

## 5. MVP Feature Priorities

### Phase 1 (Week 1-4): Core MVP
- ✅ User registration & authentication
- ✅ Goal creation with basic inputs
- ✅ Roadmap generation (static templates + AI enhancement)
- ✅ Day-by-day plans for first 2 weeks
- ✅ Basic resource linking (YouTube + documentation)
- ✅ Simple MCQ quizzes
- ✅ Task completion tracking

### Phase 2 (Week 5-8): Enhanced Experience
- ✅ Dynamic resource search & ranking
- ✅ Quiz generation from AI
- ✅ Progress dashboard
- ✅ Streak tracking
- ✅ Spaced repetition review deck
- ✅ Resource replacement feature

### Phase 3 (Week 9-12): Advanced Features
- ✅ Adaptive re-planning
- ✅ Mindmap generation
- ✅ Multiple goal support
- ✅ Learning style preferences
- ✅ Daily reminders (email/push)
- ✅ Export plans (PDF/CSV)

### Phase 4 (Week 13-16): Polish & Scale
- ✅ Performance optimization
- ✅ UI/UX improvements
- ✅ Mobile responsive design
- ✅ Analytics & metrics dashboard
- ✅ A/B testing on AI prompts
- ✅ Resource feedback system

---

## 6. Non-Functional Requirements

### Performance
- Plan generation: < 10 seconds for initial plan
- API response time: < 200ms for cached data
- Page load time: < 2 seconds
- Support 1000 concurrent users in MVP

### Reliability
- 99.5% uptime target for MVP
- Automated backups daily
- Graceful degradation if AI services are down
- Plan state saved to prevent data loss

### Security
- Password hashing with bcrypt
- JWT token authentication
- HTTPS for all API calls
- Rate limiting on public endpoints
- Input validation & sanitization

### Scalability
- Horizontal scaling ready (load balancer + multiple workers)
- Database connection pooling
- CDN for static assets
- Redis for caching

---

## 7. Success Metrics (KPIs)

### Product Metrics
1. **Activation Rate**: % users who create a goal after signup (> 40%)
2. **Day-1 Retention**: % users who complete tasks on day 1 (> 60%)
3. **Day-7 Retention**: % users still active after 7 days (> 40%)
4. **Task Completion Rate**: % daily tasks marked complete (> 60%)
5. **Quiz Completion Rate**: % quizzes attempted (> 70%)

### Engagement Metrics
1. **Average Session Duration**: Time spent per session (> 15 mins)
2. **Weekly Active Users (WAU)**: Users active in last 7 days
3. **Streak Achievement**: % users with 7+ day streak (> 20%)
4. **Resource Click-Through**: % resources actually accessed (> 50%)

### Business Metrics
1. **Cost Per User**: API costs per active user (< $0.50/month)
2. **User Satisfaction**: Net Promoter Score (> 40)
3. **Support Requests**: Issues per 100 users (< 5)

---

## 8. Risks & Mitigations

### Technical Risks

**Risk 1: AI Hallucinations (Fake Resources)**
- *Mitigation*: Prefer API-based retrieval (YouTube, official docs), mark AI-suggested resources as "unverified", user feedback loop

**Risk 2: Slow Plan Generation**
- *Mitigation*: Cache common goal templates, use faster LLM (GPT-3.5) for initial draft, GPT-4 for refinement, async processing

**Risk 3: Resource Links Broken**
- *Mitigation*: Weekly link validation, fallback resources, user "report broken link" feature

### Product Risks

**Risk 1: Plans Overwhelming Users**
- *Mitigation*: Cap daily tasks to 5, offer "minimum plan" mode, A/B test optimal task count

**Risk 2: Wrong Difficulty Level**
- *Mitigation*: Initial diagnostic quiz, ask user level, quick feedback option to adjust difficulty

**Risk 3: Low Retention**
- *Mitigation*: Gamification (streaks), reminders, social proof ("500 others learning Python"), clear progress visualization

### Business Risks

**Risk 1: High API Costs**
- *Mitigation*: Cache all AI responses, use efficient prompts, batch requests, consider local LLM options

**Risk 2: Competition**
- *Mitigation*: Focus on free-first, unique AI-generated plans, tight integration of resources + tasks

---

## 9. Future Visions (Post-MVP)

### V2 Features
1. **Interactive Mindmaps**: Clickable nodes with notes
2. **Community Roadmaps**: Share & clone public plans
3. **Browser Extension**: Save resources directly from web
4. **Multi-Language Support**: Nepali, Spanish, Hindi resources
5. **Team Learning**: Study groups, shared goals
6. **Integration APIs**: Connect to Notion, Google Calendar
7. **Voice Explanations**: AI audio for complex topics
8. **Project Templates**: Ready-to-use coding projects

### Monetization (Long-term)
1. **Premium AI**: Advanced LLMs (GPT-4) for complex topics
2. **Personal Tutor**: 1-on-1 AI chat sessions
3. **Certificate Verification**: Issue certificates for completed paths
4. **Team Plans**: Pricing for schools/organizations
5. **Paid Resources Marketplace**: Affiliate partnerships

---

## 10. Development Roadmap

### Sprint 1 (Week 1-2): Foundation
- Django project setup
- User authentication
- Database models (Goals, Roadmaps, Modules)
- Basic API endpoints

### Sprint 2 (Week 3-4): Core Functionality
- Syllabus builder (AI integration)
- Scheduler (map topics to days)
- Resource retrieval (YouTube API)
- Basic plan generation

### Sprint 3 (Week 5-6): User Experience
- Vue.js frontend setup
- Goal creation UI
- Roadmap view
- Daily task view
- Task completion flow

### Sprint 4 (Week 7-8): Content Generation
- Quiz generator
- Quiz taking UI
- Progress dashboard
- Streak tracking

### Sprint 5 (Week 9-10): Polish
- Bug fixes
- Performance optimization
- UI/UX improvements
- Mobile responsiveness

### Sprint 6 (Week 11-12): Beta Launch
- User testing (20-50 beta users)
- Feedback collection
- Critical bug fixes
- Documentation

### Sprint 7-8 (Week 13-16): Public Launch
- Marketing preparation
- Final polish
- Launch to public
- Monitor metrics
- Iterate based on feedback

---

## 11. Appendices

### A. Sample User Journey

**User 1: Suman, wants to prepare for MBBS entrance (CEE)**

**Day 0 - Onboarding**
1. Suman signs up
2. Enters goal: "Prepare for MBBS entrance exam"
3. Selects: Medical Entrance, CEE exam, 240 mins/day, 90-day deadline
4. Clicks "Generate Plan"

**Day 0 - Plan Generated (10 seconds)**
- Roadmap: 6 modules (Physics Mechanics, Thermodynamics, Chemistry Organic, Biology Cell, Genetics, Revision)
- Total: 85 learning days + 5 mock test days
- Resources: 40 YouTube videos (Physics Galaxy, MK Sir), NCERT textbooks, previous 10 years CEE papers
- Quizzes: 2000+ MCQs, daily 30-50 questions, full mock tests

**Day 1 - First Learning Session**
1. Suman opens app, sees "Today's Tasks"
2. Completes Task 1: 45-min YouTube video - Units & Dimensions ✓
3. Completes Task 2: 60-min MCQ practice from previous year CEE papers ✓
4. Completes Task 3: 45-min Chemistry - Mole Concept revision ✓
5. Takes Daily Quiz: 18/20 MCQs correct ✓
6. Marks all tasks complete

**Day 30 - End of Module 1 (Physics Mechanics)**
1. Suman completes Module 1 checkpoint: 100 MCQs from Mechanics (previous 5 years)
2. Quiz score: 88% (pass)
3. Module marked complete, Module 2 unlocked
4. Weak areas identified: Circular Motion (72%)

**Day 45 - Mid-Plan Review**
- Streak: 45 days
- Task completion: 92%
- MCQ average score: 82%
- Weak areas: Thermodynamics (75%), Organic Chemistry (70%)
- Current Affairs: Updated daily for Lok Sewa side goals

**Day 90 - Goal Complete**
- All modules completed
- 10 full mock tests taken
- Final mock test score: 85% (top 10% percentile)
- Ready for CEE exam!

---

**User 2: Anjali, wants to crack Lok Sewa Kharidar**

**Day 0 - Onboarding**
1. Anjali signs up
2. Enters goal: "Crack Lok Sewa Kharidar exam"
3. Selects: Lok Sewa, Kharidar exam, 180 mins/day, 60-day deadline
4. Clicks "Generate Plan"

**Day 0 - Plan Generated (10 seconds)**
- Roadmap: 5 modules (Nepal GK, Constitution, Nepali Language, Mental Ability, Office Management)
- Total: 55 learning days + 5 mock test days
- Resources: Lok Sewa guide books, Constitution PDF, previous 10 years Kharidar papers, daily current affairs
- Quizzes: 1500+ MCQs, daily essay/letter writing practice, full mock tests

**Day 1 - First Learning Session**
1. Anjali opens app, sees "Today's Tasks"
2. Completes Task 1: 30-min YouTube video - Nepal's Geography (in Nepali) ✓
3. Completes Task 2: 40-min MCQ practice from previous Kharidar GK papers ✓
4. Completes Task 3: 30-min Current Affairs from Nepali news portals ✓
5. Takes Daily Quiz: 22/25 MCQs correct ✓
6. Writes one essay practice: "नेपालको विकासमा पर्यटनको भूमिका" ✓

**Day 20 - End of Module 1 (General Knowledge)**
1. Anjali completes Module 1 checkpoint: 100 MCQs from GK (previous 5 years)
2. Quiz score: 80% (pass)
3. Module marked complete, Module 2 unlocked
4. Weak areas identified: Nepal's Constitution articles (72%)

**Day 30 - Mid-Plan Review**
- Streak: 30 days
- Task completion: 90%
- MCQ average score: 78%
- Essay writing: Improved structure and vocabulary
- Current Affairs: Consistently up to date

**Day 60 - Goal Complete**
- All modules completed
- 8 full mock tests taken
- Final mock test score: 82% (passed cutoff)
- Ready for Kharidar written exam!

---

**User 3: Ram, wants to learn Python in 30 days**

**Day 0 - Onboarding**
1. Ram signs up
2. Enters goal: "Learn Python basics"
3. Selects: Coding, Beginner level, 60 mins/day, 30-day deadline
4. Clicks "Generate Plan"

**Day 0 - Plan Generated (8 seconds)**
- Roadmap: 4 modules (Foundations, Core Concepts, OOP, Projects)
- Total: 28 learning days + 2 review days
- Resources: 15 YouTube videos (including Nepali coding channels), 8 documentation pages, 5 practice sites
- Quizzes: 1 quiz per topic (28 total)

**Day 1 - First Learning Session**
1. Ram opens app, sees "Today's Tasks"
2. Completes Task 1: 15-min YouTube video (Nepal Coding Academy) ✓
3. Completes Task 2: 20-min practice exercises ✓
4. Takes Quiz: 4/5 correct ✓
5. Marks all tasks complete

**Day 7 - End of Module 1**
1. Ram completes Module 1 checkpoint: Build calculator app
2. Quiz score: 85% (pass)
3. Module marked complete, Module 2 unlocked

**Day 14 - Mid-Plan Review**
- Streak: 14 days
- Task completion: 85%
- Quiz average: 78%
- Weak areas: Error handling (62%)

**Day 30 - Goal Complete**
- All modules completed
- Final project: Todo list app
- Certificate generated (V2 feature)
- Ram prompted: "What's your next goal?"

---

### B. API Response Examples

**Goal Creation Response - Medical Entrance**
```json
{
  "goal": {
    "id": "goal_abc123",
    "title": "MBBS Entrance Preparation",
    "goal_type": "medical_entrance",
    "target_exam": "CEE",
    "deadline": "2026-04-15",
    "daily_minutes": 240,
    "status": "active"
  },
  "roadmap": {
    "total_modules": 6,
    "total_days": 90,
    "summary": "Comprehensive MBBS entrance preparation covering Physics, Chemistry, and Biology with 2000+ MCQs, previous year papers, and 10 full mock tests."
  },
  "today": {
    "day_number": 1,
    "tasks": [
      {
        "id": "task_1",
        "type": "watch",
        "title": "Units and Dimensions - Physics",
        "estimated_minutes": 45,
        "resource": {
          "id": "res_1",
          "title": "Physics Galaxy - Units and Dimensions",
          "url": "youtube.com/...",
          "type": "video",
          "duration": 45
        }
      },
      {
        "id": "task_2",
        "type": "practice",
        "title": "MCQ Practice - Previous Year CEE",
        "estimated_minutes": 60,
        "resource": {
          "id": "res_2",
          "title": "CEE 2020-2024 Mechanics Questions",
          "url": "...",
          "type": "pdf",
          "mcq_count": 50
        }
      }
    ]
  },
  "estimated_completion_time": "2026-04-15"
}
```

**Goal Creation Response - Lok Sewa**
```json
{
  "goal": {
    "id": "goal_def456",
    "title": "Kharidar Lok Sewa Preparation",
    "goal_type": "lok_sewa",
    "target_exam": "Kharidar",
    "deadline": "2026-03-01",
    "daily_minutes": 180,
    "status": "active"
  },
  "roadmap": {
    "total_modules": 5,
    "total_days": 60,
    "summary": "Complete Kharidar Lok Sewa preparation covering General Knowledge, Constitution, Nepali Language, Mental Ability, and Office Management with 1500+ MCQs and essay writing practice."
  },
  "today": {
    "day_number": 1,
    "tasks": [
      {
        "id": "task_1",
        "type": "watch",
        "title": "Nepal's Geography Overview",
        "estimated_minutes": 30,
        "resource": {
          "id": "res_3",
          "title": "नेपालको भूगोल - Lok Sewa Preparation",
          "url": "youtube.com/...",
          "type": "video",
          "language": "Nepali",
          "duration": 30
        }
      },
      {
        "id": "task_2",
        "type": "practice",
        "title": "MCQ Practice - Previous Kharidar Papers",
        "estimated_minutes": 40,
        "resource": {
          "id": "res_4",
          "title": "Kharidar 2018-2024 GK Questions",
          "url": "...",
          "type": "pdf",
          "mcq_count": 60
        }
      }
    ]
  },
  "estimated_completion_time": "2026-03-01"
}
```

**Goal Creation Response - Coding**
```json
{
  "goal": {
    "id": "goal_xyz789",
    "title": "Learn Python basics",
    "goal_type": "coding",
    "deadline": "2026-02-15",
    "daily_minutes": 60,
    "status": "active"
  },
  "roadmap": {
    "total_modules": 4,
    "total_days": 28,
    "summary": "Master Python fundamentals through 4 modules including variables, data structures, OOP, and 2 mini-projects."
  },
  "today": {
    "day_number": 1,
    "tasks": [
      {
        "id": "task_1",
        "type": "watch",
        "title": "Python Setup for Beginners",
        "estimated_minutes": 15,
        "resource": {
          "id": "res_5",
          "title": "Python Setup Guide (Nepal Coding Academy)",
          "url": "youtube.com/...",
          "type": "video",
          "duration": 15
        }
      }
    ]
  },
  "estimated_completion_time": "2026-02-15"
}
```

**Quiz Response - Medical Entrance**
```json
{
  "quiz": {
    "id": "quiz_med_001",
    "topic": "Units and Dimensions",
    "total_questions": 20,
    "passing_score": 70,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "question": "The SI unit of Planck's constant is:",
        "options": ["Js", "J/s", "J/K", "Jm"],
        "correct_index": 0,
        "explanation": "Planck's constant h has dimensions of energy × time, so SI unit is Joule-second (Js)",
        "previous_year": "CEE 2021"
      }
    ]
  }
}
```

**Quiz Response - Lok Sewa**
```json
{
  "quiz": {
    "id": "quiz_ls_002",
    "topic": "Nepal's Constitution",
    "total_questions": 25,
    "passing_score": 60,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "question": "वर्तमान नेपालको संविधान कहिले जारी भयो?",
        "options": ["2063 BS", "2065 BS", "2072 BS", "2070 BS"],
        "correct_index": 2,
        "explanation": "नेपालको वर्तमान संविधान विसं २०७२ साल मंसिर ३ गते जारी भएको हो",
        "previous_year": "Kharidar 2022"
      }
    ]
  }
}
```

**Quiz Response - Coding**
```json
{
  "quiz": {
    "id": "quiz_code_003",
    "topic": "Python Variables",
    "total_questions": 5,
    "passing_score": 70,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "question": "Which is a valid variable name?",
        "options": ["2var", "my-var", "my_var", "class"],
        "correct_index": 2
      }
    ]
  }
}
```

---

### C. Technology Decisions Rationale

**Why Django?**
- Mature framework with excellent ORM
- Built-in admin panel (great for content management)
- Strong ecosystem (DRF for APIs)
- Good security features out-of-the-box

**Why Vue.js?**
- Gentle learning curve
- Excellent TypeScript support
- Component-based architecture
- Good documentation and community

**Why PostgreSQL?**
- Full-text search capabilities
- JSONB support for flexible schemas
- Better performance than SQLite for production
- ACID compliance

**Why REST API?**
- Language-agnostic
- Easy to consume by mobile apps later
- Well-understood patterns
- Good caching support

---

### D. Glossary

- **Module**: A logical phase of learning (e.g., "Foundations")
- **Topic**: A specific sub-concept within a module (e.g., "Variables")
- **Task**: A single learning activity (watch, read, practice)
- **Checkpoint**: A mini-project or assessment at end of module
- **Streak**: Consecutive days of completing at least 1 task
- **Spaced Repetition**: Reviewing content at increasing intervals
- **Roadmap**: The complete learning path with all modules
- **Day Plan**: Tasks and resources for a specific day

---

## 12. Sign-Off

**Version**: 1.0
**Last Updated**: January 16, 2026
**Status**: Ready for Development
**Next Steps**: Begin Sprint 1 implementation

---

*This PRD is a living document. As we learn from users and iterate, we will update priorities and features accordingly.*
