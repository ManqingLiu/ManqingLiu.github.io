---
layout: post
title: The bitter lessons I learnt from my first PhD project
date: 2025-01-03
description: A post about the lessons learnt from working on my first PhD project.
tags: reflections
categories: blog-posts
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

I recently completed my first PhD [project](https://arxiv.org/abs/2410.10044), and I must say it was a bittersweet experience. I learned a lot, but I also made plenty of mistakes. In this post, I'll share the bitter lessons I picked up along the way.

A quick disclaimer: I'm no expert in this field, but I'm sharing my experience in the hope that it'll help others avoid the pitfalls I encountered, especially those who, like me, don't come from a traditional computer science background.

### Lesson 1: Start with an existing repository if you can find one and build on it

When I kicked off my first PhD project, I decided to build everything from scratch. I thought it would give me a deeper understanding and more control. At the time, I was new to Python and had a deep-rooted fear of using or changing other people's code.

This turned out to be a massive mistake that cost me valuable time and energy. Looking back, I should have searched for existing repositories or codebases related to my research topic.

Starting from an existing codebase would have saved me months of work setting up basic infrastructures and implementing standard algorithms. I could have learned best practices and coding standards specific to my field by examining and building upon existing code. Instead of reinventing the wheel, I could have devoted more time to developing and implementing my unique ideas.

Of course, this doesn't mean you should never build from scratch. There are times when it's necessary or beneficial. But for most PhD projects, especially in the early stages, leveraging existing work can significantly accelerate your progress and allow you to focus on your unique contributions.

### Lesson 2: Check public datasets first before simulating your own data

I was eager to create a custom dataset that perfectly matched my research needs. I spent months developing complex simulations to generate synthetic data. However, this decision came with several unforeseen challenges.

Creating and validating a synthetic dataset took far longer than anticipated, especially when trying to create a dataset as close to real-world as possible. In the context of causal inference, simulating a data-generating process that considers all possible interactions among confounders, treatment, and outcome is incredibly challenging and time-consuming.

Later, I discovered several public datasets with various numbers of covariates and ground truth causal effects that could have served my needs with minimal modifications. I had reinvented the wheel unnecessarily.

In hindsight, I should have first thoroughly investigated existing public datasets. Many fields have well-established, high-quality public datasets that are regularly used and validated by the research community. Using these allows you to start your actual research faster and enables direct comparison of your methods with existing work.

That's not to say creating your own dataset is always wrong, especially for initial small-scale hypothesis testing. But consider public datasets when scaling up your research.

### Lesson 3: Don't be over-reliant on generative AI for debugging

Pursuing a technical PhD in GenAI is like opening Pandora's box. Initially, my workflow was a frustrating cycle: a terrifying red error message would pop up, I'd frantically consult ChatGPT, receive a solution I barely comprehended, attempt to implement it, only to face another error message. This cycle would repeat until, miraculously, the solution worked - leaving me none the wiser about why.

While generative AI can be a powerful debugging tool, it's a double-edged sword, especially for beginners. It's dangerously easy to fall into the trap of mental laziness, allowing the AI to do all the thinking. This approach can lead to either getting the right solution or merely suppressing the error message while the underlying problem persists.

I confess I still fall into this trap occasionally. However, I'm striving to be more mindful of AI-provided solutions. My new approach is to always attempt solving the bug myself first, understanding the root cause, before considering the AI's suggestion.

Remember, in AI research, understanding the 'why' behind a solution is often more crucial than the solution itself. Let's use AI as a tool to augment our problem-solving skills, not replace them.

### Lesson 4: Don't be afraid to ask for help, even if you think you should know the answer

Just as I was tempted to let AI do all the thinking, I was also hesitant to seek human help.
I thought I should know the answers, or I assumed my code was correct simply because it ran without throwing errors.
This mindset, I've learned, can be incredibly dangerous in research.

For the second part of my first project, which was a continuation of a paper by my
colleague, [David R. Bellamy](https://davidbellamy.github.io/), I finally mustered the courage to reach
out for guidance. This decision proved invaluable. When David reviewed my code,
we uncovered a silent error - one that didn't trigger any warnings but significantly impacted the results.
Something as seemingly minor as the difference between `tensor.view()` and `tensor.permute()` led to substantial
discrepancies in the output.

The process of code review turned into much more than just error-hunting.
It became an impromptu masterclass in coding standards, best practices, debugging techniques,
and how to write clean, readable code. David's willingness to help and share knowledge
reminded me of a fundamental truth in academia: we're all here to learn and grow together.

This experience taught me a crucial lesson: asking for help isn't a sign of weakness or incompetence.
On the contrary, it's a sign of a researcher who's committed to producing the best possible work.

### Lesson 5: Keep a daily log of your experiments

This lesson was profoundly influenced by [John Schulman](http://joschu.net/)'s insightful [blog post](http://joschu.net/blog/opinionated-guide-ml-research.html) on conducting ML research. I wish I'd stumbled upon it earlier in my PhD journey!

From the outset, I diligently used [Weights & Biases](https://wandb.ai/site/) to log my experiments. However, I overlooked the crucial practice of maintaining a daily log. This oversight made tracking my progress a Herculean task. My workflow devolved into a haphazard cycle of tweaking parameters and re-running experiments without clear direction.

One of the most insidious traps in my PhD journey was the illusion of time well spent. Sure, I was constantly running experiments, but without a daily log detailing my plans, code changes, results, and reflections, I was essentially stumbling around in the dark.

So, let me implore you: keep a daily log of your experiments! Include your plan for the day, specific changes made to your code, results corresponding to each change, reflections and insights gained, and next steps based on these outcomes.

This practice isn't just about record-keeping; it's about cultivating a mindful approach to your research. It will help you track progress, understand patterns, make informed decisions, avoid repeating unsuccessful approaches, and reflect on your growth as a researcher.

### Lesson 6: Start with the simplest model first, not a top-down approach

My first project aimed to leverage transformer models for causal effect estimation. Excited by the potential, I dove headfirst into using PyTorch's ready-made `Transformer` model. Our idea seemed straightforward, but reality hit us like a ton of bricks.

Our grand transformer model refused to converge, the loss stubbornly refused to decrease, and its performance lagged behind "simple" models like random forests or MLPs. I spent months tweaking the model and adjusting parameters, but the results remained disappointing.

The breakthrough came when I stepped back and worked with a basic MLP model. This simpler approach revealed that our encoding process for the transformer was potentially causing the model to lose crucial information about the causal DAG.

This experience taught me to start simple, understand my data, incrementally increase complexity, question my assumptions, and be cautious about transformations that might discard important information.

Remember, in research, sometimes taking a step back allows you to leap forward. Don't be afraid to simplify – it might just be the key to unlocking your research puzzle!

### Lesson 7: Idea is cheap, the devil is in the details

Having an "original" idea is relatively easy. The real challenge lies in implementation and execution. You'll never know if your intuition is correct until you've rigorously tested it, and often the result isn't what you expected. This is what makes research both exciting and frustrating.

In my experience, the gap between a promising idea and successful implementation is filled with countless hours of debugging, parameter tuning, and sometimes rethinking the entire approach. It's in these details where true innovation often happens.

I've learned that persistence is key, but so is flexibility. Sometimes, pushing forward means being willing to pivot your approach while still pursuing the core of your original idea. It's about finding a balance between stubbornness in your vision and adaptability in your methods.

Documentation and collaboration become your best friends in this process. Keep detailed notes and don't be afraid to discuss your challenges with peers or mentors.

Remember, many groundbreaking discoveries came not from the initial idea, but from the persistent work that followed. The difference between a good idea and a great contribution often lies in your ability to tackle the nitty-gritty details with creativity and perseverance.

So, the next time you're stuck in the quagmire of implementation details, remember: this is where the real magic of research happens. Embrace the challenge, stay curious, and keep pushing forward. Your breakthrough might be just around the corner, hidden in the details you're currently wrestling with.
