---
name: skill-creator
description: >
  Creates new Claude Code custom skills from scratch. Walks the user through defining
  what the skill should do, generates a properly structured SKILL.md with YAML frontmatter,
  optional supporting files (scripts, templates, references), and installs it into
  .claude/skills/. Trigger when the user says "create a skill", "new skill", "make a skill",
  "build a skill", "skill creator", or asks to package instructions/workflows as a reusable skill.
---

# Skill Creator

You help users create new Claude Code custom skills. A skill packages instructions, metadata,
and optional resources (scripts, templates, references) that Claude uses automatically when
relevant to a user's request.

---

## The Process

### Step 1: Interview the User

Ask these questions conversationally to understand what skill they want to build:

1. **What does the skill do?** — "What task or workflow should this skill handle?"
2. **When should it trigger?** — "What phrases or situations should activate this skill?"
3. **Does it need supporting files?** — "Will it need scripts, templates, reference docs, or examples?"
4. **Where should it live?** — Project-level (`.claude/skills/`) or personal (`~/.claude/skills/`)?

If the user already has a clear idea, skip to building. Don't over-interrogate.

### Step 2: Generate the SKILL.md

Create the skill directory and SKILL.md following this structure:

#### Required: YAML Frontmatter

```yaml
---
name: skill-name-here
description: >
  What the skill does and when Claude should use it. Include trigger phrases.
  Max 1024 characters. No XML tags. No reserved words (anthropic, claude).
---
```

**Field rules:**
- `name`: Max 64 chars, lowercase letters, numbers, and hyphens only
- `description`: Non-empty, max 1024 chars, must describe BOTH what it does AND when to trigger

#### Required: Instruction Body

The body of SKILL.md should contain:

1. **A clear title** — `# Skill Name`
2. **What Claude does** — Brief summary of the skill's purpose
3. **Step-by-step process** — Numbered steps Claude follows when the skill triggers
4. **Templates/examples** — Concrete examples of expected output
5. **Best practices** — Do's and don'ts for quality results
6. **Error recovery** — Common issues and how to handle them

#### Skill Body Best Practices

- **Be specific and procedural** — Write steps Claude can follow without ambiguity
- **Use code blocks for templates** — Give Claude concrete output formats
- **Include real examples** — Show what good output looks like
- **Keep SKILL.md under 5,000 tokens** — Put detailed references in separate files
- **Use progressive disclosure** — Put core instructions in SKILL.md, detailed references in linked files

### Step 3: Create Supporting Files (if needed)

If the skill needs additional resources, create them in the skill directory:

```
.claude/skills/{skill-name}/
├── SKILL.md              (required — main instructions)
├── templates/            (optional — output templates)
│   └── template.html
├── references/           (optional — detailed guides)
│   └── detailed-guide.md
├── scripts/              (optional — executable utilities)
│   └── helper.py
├── assets/               (optional — static files)
│   └── style.css
└── examples/             (optional — example outputs)
    └── sample-output.md
```

Reference supporting files from SKILL.md using relative paths:
```markdown
For detailed implementation, see [detailed-guide.md](references/detailed-guide.md).
```

### Step 4: Install the Skill

1. Write all files to the chosen location:
   - **Project-level**: `.claude/skills/{skill-name}/`
   - **Personal (all projects)**: `~/.claude/skills/{skill-name}/`

2. Verify the installation by listing the created files.

3. Tell the user:
   - The skill is installed and ready to use
   - How to trigger it (the phrases from the description)
   - That they may need to restart their Claude Code session for it to be discovered
   - Where the files live so they can edit them later

### Step 5: Present Summary

After creating the skill, present a summary:

```
## Skill Installed: {name}

**Location**: .claude/skills/{name}/
**Trigger phrases**: {list trigger phrases}
**Files created**:
- SKILL.md (main instructions)
- {any other files}

**To use**: Just say one of the trigger phrases in any conversation.
**To edit**: Modify the files at the location above.
```

---

## Three Levels of Skill Content

Educate the user about how Claude loads skill content:

| Level | When Loaded | Token Cost | Content |
|-------|------------|------------|---------|
| **Level 1: Metadata** | Always (at startup) | ~100 tokens | `name` and `description` from YAML frontmatter |
| **Level 2: Instructions** | When skill is triggered | Under 5k tokens | SKILL.md body |
| **Level 3+: Resources** | As needed | Effectively unlimited | Bundled files read via bash |

This means:
- Keep the frontmatter description concise but specific enough to trigger correctly
- Keep SKILL.md focused — move detailed references to separate files
- Bundle as many resources as needed — they don't cost tokens until accessed

---

## Best Practices

1. **Description is the trigger** — The `description` field determines when Claude activates the skill. Include specific trigger phrases and scenarios.
2. **One skill, one job** — Each skill should do one thing well. Compose multiple skills for complex workflows.
3. **Progressive disclosure** — Core instructions in SKILL.md, detailed docs in referenced files.
4. **Include examples** — Show Claude what good output looks like.
5. **Test iteratively** — Create the skill, try it, refine the instructions based on what works.
6. **Don't over-engineer** — Start simple, add complexity only when needed.

---

## Error Recovery

| Issue | Solution |
|---|---|
| Skill doesn't trigger | Check that the `description` includes the right trigger phrases and scenarios |
| Claude ignores instructions | Make instructions more specific and procedural; add concrete examples |
| Too much context used | Move detailed content to separate files referenced from SKILL.md |
| Name validation fails | Use only lowercase letters, numbers, and hyphens; max 64 chars |
| Description validation fails | Keep under 1024 chars; remove any XML tags |
| Skill not discovered | Restart Claude Code session; verify files are in `.claude/skills/{name}/SKILL.md` |
