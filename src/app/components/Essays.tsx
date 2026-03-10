import { useState } from "react";
import { Link, useSearchParams } from "react-router";

interface Essay {
  id: string;
  title: string;
  date: string;
  content: string;
}

const essays: Essay[] = [
  {
    id: "digital-minimalism",
    title: "On Digital Minimalism",
    date: "March 2026",
    content: `In an age of constant connectivity, the question isn't whether we should use technology, but how we should use it. Digital minimalism isn't about rejection—it's about intention.

The best tools are the ones we don't think about. They solve a problem so elegantly that they become invisible, fading into the background of our lives. This is the paradox of good design: the more successful it is, the less we notice it.

When I started thinking seriously about this, I realized that most of our digital interactions fail this test. They demand attention rather than facilitate focus. They create friction rather than remove it.

The solution isn't to abandon technology, but to be more deliberate about which technologies we invite into our lives and how we use them. Every app, every notification, every digital service should earn its place through usefulness, not habit.

This requires a shift in perspective. Instead of asking "what's the latest tool?" we should ask "what problem am I actually trying to solve?" More often than not, the answer is simpler than we think, and the tool we need is already in our hands.

Digital minimalism is ultimately about reclaiming agency. It's about recognizing that our attention is finite and precious, and that we have the power to choose where it goes. This choice, made consciously and repeatedly, shapes not just our days but our lives.`,
  },
  {
    id: "architecture-and-code",
    title: "Thoughts on Architecture and Code",
    date: "February 2026",
    content: `There's a surprising amount of overlap between architecture and software development. Both disciplines are concerned with structure, both deal with constraints, and both require balancing aesthetics with function.

When I studied architecture, we learned that every building tells a story. The same is true for code. A well-structured codebase reveals the thinking of its creators, their priorities, and their understanding of the problem space.

In architecture, we talk about "honest materials"—letting wood be wood, concrete be concrete. In software, this translates to using the right tool for the job, not fighting against the natural properties of your chosen technology.

Both fields also share a relationship with time. Buildings age, requiring maintenance and adaptation. Software evolves, accumulating technical debt that must be managed. The best work in both disciplines anticipates this reality and plans for it.

What differs is the medium. Architecture works in the physical realm, with all its permanence and constraints. Software exists in a more fluid space, where changes can happen in minutes rather than months. This difference is both liberating and dangerous—it's easy to iterate quickly, but also easy to accumulate complexity.

The lesson I've taken from architecture into my work with code is the importance of intention. Every line of code, like every line in a building, should have a reason. Remove it, and something should feel missing. Add it unnecessarily, and the whole becomes cluttered.`,
  },
  {
    id: "third-place",
    title: "The Cafe as a Third Place",
    date: "January 2026",
    content: `The sociologist Ray Oldenburg coined the term "third place"—spaces that are neither home nor work, but somewhere in between. For many of us, cafes serve this role perfectly.

There's something about the combination of coffee, comfortable seating, and ambient noise that creates an ideal environment for focused work or contemplative reading. It's social without being demanding, public without being intrusive.

The best cafes understand this intuitively. They create spaces that invite you to stay, with lighting that's warm but not dim, furniture that's comfortable but not too comfortable, and a layout that balances openness with pockets of privacy.

I do some of my best thinking in cafes. There's a paradox here—I'm more productive in a busy cafe than in a quiet office. I think it's because the ambient activity provides just enough stimulation to prevent mind-wandering, while remaining abstract enough not to distract.

This has implications beyond just where we choose to work. It suggests that the environments we inhabit shape our thinking in subtle but profound ways. The sterile office, the cozy home, the bustling cafe—each one draws out different modes of thought and work.

As more work becomes remote and location-independent, the design of these third places becomes increasingly important. They're not just about coffee and wifi—they're about creating the conditions for human flourishing in an increasingly digital world.`,
  },
  {
    id: "writing-as-thinking",
    title: "Writing as Thinking",
    date: "December 2025",
    content: `I don't write to communicate ideas I already have. I write to figure out what I think. The act of writing forces clarity in a way that internal monologue never does.

When you write, you have to commit. That vague notion that seemed brilliant in your head reveals itself as half-formed once you try to put it into words. This is uncomfortable but essential. It's where real thinking begins.

The first draft of anything is always rough. It meanders, it contradicts itself, it circles back. But this messiness is part of the process. You're not transcribing pre-formed thoughts—you're discovering them.

This is why I'm skeptical of purely verbal cultures, where ideas are discussed but never written down. Conversation is valuable, but it's too easy for everyone to leave thinking they agree when they've simply failed to push the discussion to the point where disagreements become clear.

Writing also creates a record. You can return to an idea months or years later and see how your thinking has evolved. This is harder with spoken conversations, which fade from memory or get reconstructed in ways that suit our current understanding.

The tool matters too. Writing by hand feels different from typing. Pen and paper force you to slow down, to think before you write because crossing out is messy. Typing is faster but can encourage a kind of thoughtless productivity—words for their own sake rather than for clarity.

Ultimately, writing is an act of service. You're taking the time to refine your thinking not just for your own benefit, but so that others can understand it too. This is harder than it sounds, but it's what makes writing such a powerful tool for both personal and collective sense-making.`,
  },
];

export function Essays() {
  const [searchParams] = useSearchParams();
  const essayId = searchParams.get("id");
  const selectedEssay = essays.find(e => e.id === essayId);

  // If an essay is selected, show it
  if (selectedEssay) {
    return (
      <div className="max-w-2xl space-y-8">
        <div className="space-y-2">
          <Link to="/essays" className="text-sm hover:underline">
            ← Back to essays
          </Link>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl">{selectedEssay.title}</h1>
          <p className="text-sm text-muted-foreground">{selectedEssay.date}</p>
        </div>
        
        <div className="space-y-6 leading-relaxed whitespace-pre-wrap">
          {selectedEssay.content}
        </div>
      </div>
    );
  }

  // Otherwise show the list
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-3xl">Essays</h1>
      
      <div className="space-y-4">
        {essays.map((essay) => (
          <div key={essay.id}>
            <Link 
              to={`/essays?id=${essay.id}`}
              className="hover:underline"
            >
              {essay.title}
            </Link>
            <span className="text-muted-foreground text-sm ml-3">
              {essay.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}